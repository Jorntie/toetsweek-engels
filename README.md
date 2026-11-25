# Toetsweek · Engels

Interactieve leer-app voor de toetsweek (havo 5). Stof: Schrijftoets: essay.

Statische app zonder build-stap: open `index.html`, of start een lokale server:

```bash
python3 -m http.server 8774
```

`core.js` en `core.css` zijn de gedeelde kern uit `../toetsweek/core/` (daar aanpassen, dan `../toetsweek/sync-core.sh`).
Controle van de stof: `node ../toetsweek/core/check.js`.
