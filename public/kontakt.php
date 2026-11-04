<?php
/**
 * Kontaktformular-Versand – GRO-Erodiertechnik
 * Läuft auf jedem PHP-Webhosting (z. B. netcup) mit aktivierter mail()-Funktion.
 *
 * Grundsatz: Anfragen nicht unnötig blockieren. Pflicht sind nur Name und E-Mail;
 * alle Bauteil-Angaben und Anhänge sind freiwillig. Dateien werden über eine
 * Sperrliste (ausführbare Dateien) statt über eine enge Erlaubt-Liste geprüft.
 */
declare(strict_types=1);
require __DIR__ . '/_altcha.php';

// ---- Konfiguration -------------------------------------------------------
const MAIL_TO     = 'info@gro-erodiertechnik.de';
const MAIL_FROM   = 'website@gro-erodiertechnik.com';   // Absender auf der gehosteten Domain (SPF)
const MAX_TOTAL   = 25 * 1024 * 1024;                     // 25 MB für alle Anhänge zusammen
const MAX_FILES   = 15;
const BLOCKED_EXT = ['exe', 'bat', 'cmd', 'com', 'msi', 'scr', 'pif', 'vbs', 'js', 'jse', 'wsf', 'ps1', 'sh', 'php', 'phtml', 'jar', 'app', 'dll', 'hta', 'lnk'];
const MIN_SECONDS = 3;                                    // Bots füllen schneller aus

$base   = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/'); // „“ live, „/barth“ im Entwurf
$lang   = (($_POST['lang'] ?? 'de') === 'en') ? 'en' : 'de';
$okUrl  = $base . ($lang === 'en' ? '/en/contact/thank-you/' : '/kontakt/danke/');
$errUrl = $base . ($lang === 'en' ? '/en/contact/error/' : '/kontakt/fehler/');

function done(string $url): void {
    header('Location: ' . $url, true, 303);
    exit;
}
function clean(string $key, int $max): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
}
function oneLine(string $v): string {
    return trim((string)preg_replace('/[\r\n]+/', ' ', $v));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    done($base . '/kontakt/');
}

// ---- Spam-Schutz -------------------------------------------------------
if (!empty($_POST['website'])) {
    done($okUrl); // Honeypot gefüllt → still verwerfen
}
$ts = (int)($_POST['ts'] ?? 0);
if ($ts > 0 && (time() - $ts) < MIN_SECONDS) {
    done($okUrl);
}
if (altcha_rate_limited()) {
    done($okUrl); // mehr als 5 Anfragen in 15 Minuten von derselben IP
}
// ALTCHA: gefälschte oder wiederverwendete Lösungen verwerfen;
// fehlende/abgelaufene (z. B. JavaScript aus) trotzdem zustellen, aber markieren.
$captcha = altcha_verify(isset($_POST['altcha']) ? (string)$_POST['altcha'] : null);
if ($captcha === 'invalid' || $captcha === 'replay') {
    done($okUrl);
}
$suspicious = $captcha !== 'ok';

// ---- Felder ------------------------------------------------------------
$name    = oneLine(clean('name', 120));
$company = oneLine(clean('company', 160));
$email   = oneLine(clean('email', 160));
$phone   = oneLine(clean('phone', 60));
$message = clean('message', 8000);
$details = [
    'Material'      => oneLine(clean('material', 200)),
    'Stückzahl'     => oneLine(clean('quantity', 200)),
    'Toleranzen'    => oneLine(clean('tolerances', 200)),
    'Oberfläche'    => oneLine(clean('surface', 200)),
    'Wunschtermin'  => oneLine(clean('deadline', 200)),
];

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    done($errUrl);
}

// ---- Anhänge (mehrere) ---------------------------------------------------
$attachments = [];
$skipped = [];
if (!empty($_FILES['attachment']) && is_array($_FILES['attachment']['name'])) {
    $total = 0;
    $count = count($_FILES['attachment']['name']);
    for ($i = 0; $i < $count && count($attachments) < MAX_FILES; $i++) {
        $err = $_FILES['attachment']['error'][$i];
        if ($err === UPLOAD_ERR_NO_FILE) continue;
        $orig  = (string)$_FILES['attachment']['name'][$i];
        $fname = preg_replace('/[^A-Za-z0-9._-]/', '_', basename($orig)) ?: 'datei';
        $ext   = strtolower(pathinfo($fname, PATHINFO_EXTENSION));
        $tmp   = $_FILES['attachment']['tmp_name'][$i];
        $size  = (int)$_FILES['attachment']['size'][$i];
        // Problematische Dateien werden übersprungen und in der Mail vermerkt –
        // die Anfrage selbst geht trotzdem raus.
        if ($err !== UPLOAD_ERR_OK || !is_uploaded_file($tmp) || in_array($ext, BLOCKED_EXT, true) || $total + $size > MAX_TOTAL) {
            $skipped[] = $orig;
            continue;
        }
        $total += $size;
        $attachments[] = ['name' => $fname, 'data' => (string)file_get_contents($tmp)];
    }
}

// ---- Mail zusammenbauen ------------------------------------------------
$subject = ($suspicious ? '[Bitte prüfen] ' : '') . 'Website-Anfrage: ' . $name . ($company !== '' ? ' (' . $company . ')' : '');
$line = str_repeat('-', 48) . "\n";
$body  = "Neue Anfrage über die Website (" . strtoupper($lang) . ")\n" . $line;
$body .= "Name:    $name\n";
$body .= "Firma:   " . ($company ?: '–') . "\n";
$body .= "E-Mail:  $email\n";
$body .= "Telefon: " . ($phone ?: '–') . "\n" . $line;
foreach ($details as $label => $value) {
    $body .= $label . ':' . str_repeat(' ', max(1, 14 - mb_strlen($label . ':'))) . ($value ?: '–') . "\n";
}
$body .= $line;
$body .= "Anhänge: " . ($attachments ? implode(', ', array_column($attachments, 'name')) : '–') . "\n";
if ($skipped) {
    $body .= "NICHT angehängt (zu groß/gesperrter Typ/Fehler): " . implode(', ', $skipped) . "\n";
    $body .= "→ Bitte beim Kunden nachfragen.\n";
}
$body .= $line . "\n" . ($message !== '' ? $message : '(keine Nachricht)') . "\n\n" . $line;
$body .= "Gesendet am " . date('d.m.Y H:i') . "\n";
if ($suspicious) {
    $body .= "Hinweis: Spamschutz nicht bestätigt (" . $captcha . ") – z. B. JavaScript deaktiviert. Bitte Anfrage kurz prüfen.\n";
}

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = [
    'From: GRO Website <' . MAIL_FROM . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'X-Mailer: GRO-Website',
];

if ($attachments) {
    $boundary = 'gro_' . bin2hex(random_bytes(12));
    $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';
    $mime  = "--$boundary\r\n";
    $mime .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mime .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $mime .= chunk_split(base64_encode($body)) . "\r\n";
    foreach ($attachments as $a) {
        $mime .= "--$boundary\r\n";
        $mime .= "Content-Type: application/octet-stream; name=\"{$a['name']}\"\r\n";
        $mime .= "Content-Transfer-Encoding: base64\r\n";
        $mime .= "Content-Disposition: attachment; filename=\"{$a['name']}\"\r\n\r\n";
        $mime .= chunk_split(base64_encode($a['data'])) . "\r\n";
    }
    $mime .= "--$boundary--";
    $payload = $mime;
} else {
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: base64';
    $payload = chunk_split(base64_encode($body));
}

$sent = mail(MAIL_TO, $encodedSubject, $payload, implode("\r\n", $headers), '-f' . MAIL_FROM);
done($sent ? $okUrl : $errUrl);
