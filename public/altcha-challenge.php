<?php
/** Liefert eine neue ALTCHA-Aufgabe für das Kontaktformular. */
declare(strict_types=1);
require __DIR__ . '/_altcha.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('X-Robots-Tag: noindex');
echo json_encode(altcha_create_challenge());
