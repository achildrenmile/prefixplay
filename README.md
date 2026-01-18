# PrefixPlay

**Lerne Amateurfunk-Rufzeichenprefixe spielerisch!**
*Learn Amateur Radio Callsign Prefixes!*

PrefixPlay ist ein browserbasiertes Lernspiel für Amateurfunker und alle, die es werden wollen. Ziel ist es, die Zuordnung von Rufzeichenprefixen zu DXCC-Gebieten (Ländern) zu lernen und zu festigen.

## Features

### Spielmodi
- **Prefix → Land**: Ein Rufzeichenprefix wird angezeigt, das Land muss erraten werden
- **Land → Prefix**: Ein Land wird angezeigt, der primäre Prefix muss erraten werden
- Erweiterbar für zukünftige Modi (z.B. Flaggen, vollständige Rufzeichen)

### Daten
- Über 280 DXCC-Gebiete mit allen gängigen Prefixen
- Länderflaggen als Emoji
- Kontinentzuordnung für schwierigere Fragen

### Punktestand & Statistiken
- Gesamtversuche und richtige Antworten
- Aktuelle und beste Serie (Streak)
- Statistiken pro Spielmodus
- Fortschritt pro Land/Gebiet
- Alles lokal im Browser gespeichert

### Erfolge / Achievements
- Über 20 freischaltbare Erfolge
- Kategorien: Erste Schritte, Meilensteine, Serien, Entdeckung, Genauigkeit, Übung
- Motivierende Benachrichtigungen bei neuen Erfolgen

### Übungsmodus
- Falsch beantwortete Fragen werden automatisch gesammelt
- Gezieltes Üben der Schwachstellen
- Fortschritt wird verfolgt

### Datenschutz
- **Keine Server-Kommunikation** - alles läuft lokal
- **Keine Cookies** außer localStorage
- **Kein Tracking** oder Analytics
- **Keine persönlichen Daten**
- Alle Daten bleiben im Browser des Nutzers

### Sprachen
- Deutsch (Standard)
- English

## Installation

Keine Installation notwendig! Einfach die `index.html` im Browser öffnen.

### Lokaler Server (optional)

Für die beste Erfahrung mit ES-Modulen:

```bash
# Mit Python
python -m http.server 8000

# Mit Node.js
npx serve .

# Mit PHP
php -S localhost:8000
```

Dann im Browser öffnen: `http://localhost:8000`

## Technologie

- **Vanilla JavaScript** (ES6 Modules)
- **Keine Frameworks** - einfach und leichtgewichtig
- **Keine Build-Tools** notwendig
- **Responsive Design** für Desktop und Mobile
- **Offline-fähig** nach dem ersten Laden

## Projektstruktur

```
prefixplay/
├── index.html              # Hauptseite
├── favicon.svg             # App-Icon
├── css/
│   └── styles.css          # Alle Styles
└── js/
    ├── app.js              # Hauptanwendung
    ├── data/
    │   └── dxcc.js         # DXCC-Daten
    ├── models/
    │   ├── game-state.js   # Spielzustand
    │   └── question.js     # Fragengenerierung
    ├── systems/
    │   ├── scoring.js      # Punktestand
    │   ├── achievements.js # Erfolge
    │   └── retry-pool.js   # Fehlerliste
    ├── ui/
    │   ├── game-card.js    # Fragenkarte
    │   ├── menu.js         # Menü
    │   ├── stats-panel.js  # Statistiken
    │   ├── achievements-panel.js
    │   └── modals.js       # Dialoge
    └── i18n/
        └── translations.js # Übersetzungen
```

## Browser-Unterstützung

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile Browser (iOS Safari, Chrome Android)

## Lizenz

MIT License - Frei verwendbar für alle Zwecke.

## Credits

Inspiriert von [First Contact](https://github.com/achildrenmile/firstcontact) - einem interaktiven Kurzwellen-Propagations-Simulator.

---

73 de PrefixPlay! 📻
