# Lafferde Loop Challenge – kompakte Netlify-Seite

Sehr schlanke Version ohne Build-System und ohne node_modules.

## Dateien
- index.html – Startseite
- impressum.html / datenschutz.html
- assets/style.css – komplettes Design
- assets/route.svg – Strecken-Silhouette
- admin/ – Decap CMS
- content/ – editierbare Inhalte

## Deployment
1. ZIP entpacken.
2. Inhalt in ein GitHub-Repository hochladen.
3. Netlify mit dem Repository verbinden.
4. Build command leer lassen.
5. Publish directory: `.`
6. In Netlify Identity und Git Gateway aktivieren, damit `/admin/` funktioniert.

## Platzhalter
In `index.html` aktuell ersetzen:
- RaceResult-Link bei `href="#"` im Abschnitt Anmeldung
- Ausschreibung unter `content/pages/ausschreibung.pdf`
- Ergebnis-/Bilder-/DUV-Links im Archiv
- Impressum vervollständigen
- Datenschutz vor Veröffentlichung prüfen
