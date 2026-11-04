# GRO-Erodiertechnik – Website

Neue Website der **GRO-Erodiertechnik GmbH** (Bad Schwartau bei Lübeck).
Statische Seite mit [Astro](https://astro.build), zweisprachig (Deutsch / Englisch), ohne Cookies und ohne Tracking.

## Lokal starten

```bash
npm install
npm run dev      # Entwicklungsserver auf http://localhost:4321
npm run build    # fertige Seite nach ./dist
```

## Inhalte bearbeiten

| Was                         | Datei                         |
| --------------------------- | ----------------------------- |
| Firmendaten (Adresse, Tel.) | `src/data/site.ts`            |
| Leistungen (Texte, FAQ, SEO)| `src/data/services.ts`        |
| Branchen                    | `src/data/industries.ts`      |
| Menü & Übersetzungen        | `src/i18n/ui.ts`              |
| Seiten-Layouts              | `src/views/*.astro`           |
| Bilder                      | `src/assets/img/`             |
| Kontaktformular-Versand     | `public/kontakt.php`          |
| Weiterleitungen, Caching    | `public/.htaccess`            |

Eine neue Leistung = ein neuer Eintrag in `src/data/services.ts`. Seite, Menü, Footer, Sitemap und strukturierte Daten werden automatisch erzeugt.

## Deployment

Jeder Push auf `main` baut die Seite per GitHub Actions und lädt sie per FTPS zu netcup hoch (`.github/workflows/deploy.yml`).

Einmalig nötig: unter **GitHub → Settings → Secrets and variables → Actions** ein Secret `FTP_PASSWORD` mit dem FTP-Passwort anlegen.

Der Upload geht auf die Hauptdomain `gro-erodiertechnik.com` (live, indexierbar). Mit `STAGING: '1'` in `deploy.yml` lässt sich die komplette Seite wieder für Suchmaschinen sperren.

## Farbvarianten

Das Design nutzt Farb-Tokens (`src/styles/global.css`). Mit `PUBLIC_THEME=light` entsteht die helle Variante,
mit `BASE_PATH=/ordner` lässt sich eine Variante in einem Unterordner bauen:

```bash
BASE_PATH=/1 PUBLIC_THEME=light npx astro build --outDir dist/1
```

Live: dunkle Variante auf `gro-erodiertechnik.com`. Entwürfe (für Google gesperrt): hell unter `/1/`, Corporate-Stil „Barth“ unter `/2/` (`PUBLIC_THEME=barth`).

## SEO auf einen Blick

- Eigene Unterseite je Leistung mit optimiertem Title, Description, FAQ
- Schema.org: LocalBusiness, Service, FAQPage, BreadcrumbList, Person, ItemList
- hreflang DE/EN, Canonical, Open Graph, XML-Sitemap, robots.txt, llms.txt
- 301-Weiterleitungen von den alten URLs (`/services`, `/company`, …)
- Bilder automatisch als WebP in passenden Größen, Schriften lokal gehostet
