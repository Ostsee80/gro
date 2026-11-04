<?php
/**
 * ALTCHA – datenschutzfreundlicher Spamschutz (Proof-of-Work), selbst gehostet.
 * Keine Cookies, keine Drittanbieter. Protokoll: ALTCHA v2 (SHA-256).
 *
 * Der HMAC-Schlüssel wird beim ersten Aufruf zufällig erzeugt und in
 * .altcha-key.php neben diesem Skript gespeichert (liefert per Browser nichts aus).
 */
declare(strict_types=1);

const ALTCHA_MAXNUMBER = 60000;      // Rechenaufwand im Browser (~0,1–1 s)
const ALTCHA_LIFETIME  = 1800;       // Gültigkeit einer Aufgabe in Sekunden

function altcha_key(): string {
    // Als PHP-Datei gespeichert: Ein direkter Aufruf per Browser liefert nur eine leere Seite,
    // unabhängig davon, ob der Webserver .htaccess-Regeln beachtet.
    $file = __DIR__ . '/.altcha-key.php';
    if (is_readable($file)) {
        $key = include $file;
        if (is_string($key) && strlen($key) >= 32) return $key;
    }
    $key = bin2hex(random_bytes(32));
    @file_put_contents($file, "<?php return '" . $key . "';\n", LOCK_EX);
    @chmod($file, 0600);
    return $key;
}

function altcha_data_dir(): string {
    $dir = rtrim(sys_get_temp_dir(), '/') . '/gro-altcha-' . substr(hash('sha256', __DIR__), 0, 12);
    if (!is_dir($dir)) @mkdir($dir, 0700, true);
    return $dir;
}

function altcha_create_challenge(): array {
    $salt = bin2hex(random_bytes(12)) . '?expires=' . (time() + ALTCHA_LIFETIME);
    $number = random_int(1000, ALTCHA_MAXNUMBER);
    $challenge = hash('sha256', $salt . $number);
    return [
        'algorithm' => 'SHA-256',
        'challenge' => $challenge,
        'maxnumber' => ALTCHA_MAXNUMBER,
        'salt'      => $salt,
        'signature' => hash_hmac('sha256', $challenge, altcha_key()),
    ];
}

/** @return 'ok'|'missing'|'invalid'|'expired'|'replay' */
function altcha_verify(?string $payload): string {
    if ($payload === null || $payload === '') return 'missing';
    $data = json_decode((string)base64_decode($payload, true), true);
    if (!is_array($data) || !isset($data['algorithm'], $data['challenge'], $data['number'], $data['salt'], $data['signature'])) {
        return 'invalid';
    }
    if ($data['algorithm'] !== 'SHA-256') return 'invalid';
    $salt = (string)$data['salt'];
    if (preg_match('/[?&]expires=(\d+)/', $salt, $m) && (int)$m[1] < time()) return 'expired';
    $expected = hash('sha256', $salt . (string)(int)$data['number']);
    if (!hash_equals($expected, (string)$data['challenge'])) return 'invalid';
    if (!hash_equals(hash_hmac('sha256', $expected, altcha_key()), (string)$data['signature'])) return 'invalid';

    // Jede gelöste Aufgabe nur einmal verwenden
    $marker = altcha_data_dir() . '/used-' . substr($expected, 0, 32);
    if (file_exists($marker)) return 'replay';
    @touch($marker);
    foreach (glob(altcha_data_dir() . '/used-*') ?: [] as $f) {
        if (@filemtime($f) < time() - ALTCHA_LIFETIME - 60) @unlink($f);
    }
    return 'ok';
}

/** Einfache Begrenzung: max. $max Anfragen je IP in $window Sekunden (IP nur gehasht gespeichert). */
function altcha_rate_limited(int $max = 5, int $window = 900): bool {
    $ip = (string)($_SERVER['REMOTE_ADDR'] ?? '');
    if ($ip === '') return false;
    $file = altcha_data_dir() . '/rl-' . substr(hash_hmac('sha256', $ip, altcha_key()), 0, 24);
    $now = time();
    $hits = array_filter(array_map('intval', explode(',', (string)@file_get_contents($file))), fn($t) => $t > $now - $window);
    $hits[] = $now;
    @file_put_contents($file, implode(',', $hits), LOCK_EX);
    return count($hits) > $max;
}
