<?php
/**
 * Kontaktformular-Versand – GRO-Erodiertechnik
 * Läuft auf jedem PHP-Webhosting (z. B. netcup) mit aktivierter mail()-Funktion.
 */
declare(strict_types=1);

// ---- Konfiguration -------------------------------------------------------
const MAIL_TO    = 'info@gro-erodiertechnik.de';
const MAIL_FROM  = 'website@gro-erodiertechnik.com';   // Absender auf der gehosteten Domain (SPF)
const MAX_BYTES  = 10 * 1024 * 1024;                     // 10 MB
const ALLOWED    = ['pdf', 'step', 'stp', 'dxf', 'dwg', 'igs', 'iges', 'jpg', 'jpeg', 'png', 'zip'];
const MIN_SECONDS = 3;                                   // Bots füllen schneller aus

$base   = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/'); // „“ live, „/entwurf-hell“ im Entwurf
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
    return trim(preg_replace('/[\r\n]+/', ' ', $v));
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

// ---- Validierung -------------------------------------------------------
$name    = oneLine(clean('name', 120));
$company = oneLine(clean('company', 160));
$email   = oneLine(clean('email', 160));
$phone   = oneLine(clean('phone', 60));
$message = clean('message', 8000);
$consent = ($_POST['consent'] ?? '') === '1';

if ($name === '' || $message === '' || !$consent || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    done($errUrl);
}

// ---- Anhang ------------------------------------------------------------
$attachment = null;
if (!empty($_FILES['attachment']) && ($_FILES['attachment']['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
    $f = $_FILES['attachment'];
    if ($f['error'] !== UPLOAD_ERR_OK || $f['size'] > MAX_BYTES || !is_uploaded_file($f['tmp_name'])) {
        done($errUrl);
    }
    $fname = preg_replace('/[^A-Za-z0-9._-]/', '_', basename((string)$f['name']));
    $ext = strtolower(pathinfo($fname, PATHINFO_EXTENSION));
    if (!in_array($ext, ALLOWED, true)) {
        done($errUrl);
    }
    $attachment = ['name' => $fname, 'data' => file_get_contents($f['tmp_name'])];
}

// ---- Mail zusammenbauen ------------------------------------------------
$subject = 'Website-Anfrage: ' . $name . ($company !== '' ? ' (' . $company . ')' : '');
$body  = "Neue Anfrage über die Website (" . strtoupper($lang) . ")\n";
$body .= str_repeat('-', 48) . "\n";
$body .= "Name:    $name\n";
$body .= "Firma:   " . ($company ?: '–') . "\n";
$body .= "E-Mail:  $email\n";
$body .= "Telefon: " . ($phone ?: '–') . "\n";
$body .= "Anhang:  " . ($attachment ? $attachment['name'] : '–') . "\n";
$body .= str_repeat('-', 48) . "\n\n";
$body .= $message . "\n\n";
$body .= str_repeat('-', 48) . "\n";
$body .= "Datenschutz-Einwilligung erteilt am " . date('d.m.Y H:i') . "\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = [
    'From: GRO Website <' . MAIL_FROM . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'X-Mailer: GRO-Website',
];

if ($attachment) {
    $boundary = 'gro_' . bin2hex(random_bytes(12));
    $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';
    $mime  = "--$boundary\r\n";
    $mime .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mime .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $mime .= chunk_split(base64_encode($body)) . "\r\n";
    $mime .= "--$boundary\r\n";
    $mime .= "Content-Type: application/octet-stream; name=\"{$attachment['name']}\"\r\n";
    $mime .= "Content-Transfer-Encoding: base64\r\n";
    $mime .= "Content-Disposition: attachment; filename=\"{$attachment['name']}\"\r\n\r\n";
    $mime .= chunk_split(base64_encode($attachment['data'])) . "\r\n";
    $mime .= "--$boundary--";
    $payload = $mime;
} else {
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: base64';
    $payload = chunk_split(base64_encode($body));
}

$sent = mail(MAIL_TO, $encodedSubject, $payload, implode("\r\n", $headers), '-f' . MAIL_FROM);
done($sent ? $okUrl : $errUrl);
