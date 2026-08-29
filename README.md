# Museum

Il raccoglitore di tutte le app pubblicate: una griglia di sole icone, e per
ognuna una scheda con descrizione, link e un pulsante per copiarlo.

**Apri:** https://fithzhood.github.io/museum/museum.html

## Com'e' fatto

| file | cosa c'e' dentro |
|---|---|
| `museum.html` | le due schermate: la sala (griglia) e la scheda |
| `museum.css` | stile, tema scuro, schermi stretti e larghi |
| `museum.js` | ricerca, filtri, scheda, copia del link |
| `museum-data.js` | l'elenco delle app: nome, descrizione, indirizzo, tag |
| `icone/` | una tessera 320x320 per app |

## Le icone

Tre provenienze, in quest'ordine: l'icona che l'app ha gia' nel suo repo; una
fotografia dell'app pubblicata, ritagliata quadrata; una tessera disegnata, per
le app che sono soprattutto testo (formulari, elenchi) e che in un francobollo
non si distinguerebbero.

## Aggiungere un'app

Si aggiunge una voce a `museum-data.js` e una tessera `icone/<id>.png`, con `id`
uguale in tutti e due. Niente altro: la sala, la ricerca e i filtri si
aggiornano da soli.
