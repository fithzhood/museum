/******************************************************************
 * Museum — il raccoglitore delle app pubblicate
 *
 * La sala mostra SOLO le icone: chi cerca un'app la riconosce, chi
 * non la riconosce ha la ricerca e i filtri. La scheda si apre sopra
 * la sala e si chiude col tasto indietro del telefono, perche' ogni
 * apertura lascia un segno nella cronologia (#app=<id>).
 ******************************************************************/
'use strict';

const el = {};
[
  'griglia', 'sala', 'vuoto', 'conta', 'cerca', 'pulisci', 'filtri', 'versione',
  'scheda', 'indietro', 's-icona', 's-nome', 's-sotto', 's-etichette', 's-testo',
  's-url', 's-apri', 's-copia', 's-tag', 's-repo', 's-nota', 'avviso'
].forEach(id => { el[id.replace(/-/g, '_')] = document.getElementById(id); });

const TIPI = [
  { id: 'tutte',     nome: 'Tutte' },
  { id: 'gioco',     nome: 'Giochi' },
  { id: 'strumento', nome: 'Strumenti' },
  { id: 'scuola',    nome: 'Scuola' },
  { id: 'svago',     nome: 'Svago' }
];

const stato = { tipo: 'tutte', testo: '', tag: null };

/******************************************************************
 * SEZIONE 1: FILTRI E RICERCA
 ******************************************************************/
/** Cerca in tutto quello che di un'app e' scritto: nome, riga di
 *  presentazione, descrizione e parole chiave. */
function combacia(app) {
  if (stato.tipo !== 'tutte' && app.tipo !== stato.tipo) return false;
  if (stato.tag && !app.tag.includes(stato.tag)) return false;
  if (!stato.testo) return true;
  const dentro = [app.nome, app.sotto, app.testo, app.tag.join(' ')]
    .join(' ')
    .toLowerCase();
  // tutte le parole scritte devono esserci, in qualunque ordine
  return stato.testo.split(/\s+/).every(p => dentro.includes(p));
}

function costruisciFiltri() {
  TIPI.forEach(t => {
    const b = document.createElement('button');
    b.className = 'filtro';
    b.type = 'button';
    b.textContent = t.nome;
    b.dataset.tipo = t.id;
    b.setAttribute('aria-pressed', String(t.id === stato.tipo));
    b.addEventListener('click', () => {
      stato.tipo = t.id;
      stato.tag = null;
      disegnaFiltri();
      disegnaSala();
    });
    el.filtri.appendChild(b);
  });
}

function disegnaFiltri() {
  el.filtri.querySelectorAll('.filtro').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.tipo === stato.tipo && !stato.tag));
  });
}

/******************************************************************
 * SEZIONE 2: LA SALA
 ******************************************************************/
function disegnaSala() {
  const viste = APP.filter(combacia);
  el.griglia.innerHTML = '';

  viste.forEach(app => {
    const b = document.createElement('button');
    b.className = 'tessera' + (app.clear ? ' pulita' : '');
    b.type = 'button';
    b.title = app.nome;
    b.setAttribute('aria-label', app.nome);
    const img = document.createElement('img');
    img.src = 'icone/' + app.id + '.png';
    img.alt = '';
    img.loading = 'lazy';
    b.appendChild(img);
    b.addEventListener('click', () => apriScheda(app.id, true));
    el.griglia.appendChild(b);
  });

  el.vuoto.hidden = viste.length > 0;
  const parte = stato.tag ? ' · ' + stato.tag : '';
  el.conta.textContent = viste.length === APP.length
    ? APP.length + ' app'
    : viste.length + ' su ' + APP.length + parte;
}

/******************************************************************
 * SEZIONE 3: LA SCHEDA
 ******************************************************************/
function apriScheda(id, spingi) {
  const app = APP.find(a => a.id === id);
  if (!app) return;

  el.s_icona.src = 'icone/' + app.id + '.png';
  el.s_icona.alt = app.nome;
  el.s_nome.textContent = app.nome;
  el.s_sotto.textContent = app.sotto;
  el.s_testo.textContent = app.testo;
  el.s_url.textContent = app.url;
  el.s_apri.href = app.url;
  el.s_repo.href = app.repo;

  el.s_nota.hidden = !app.clear;
  el.s_etichette.innerHTML = '';
  const tipo = TIPI.find(t => t.id === app.tipo);
  el.s_etichette.appendChild(etichetta(tipo ? tipo.nome : app.tipo));
  if (app.clear) {
    el.s_etichette.appendChild(etichetta('versione clear', true));
  }

  el.s_tag.innerHTML = '';
  app.tag.forEach(t => {
    const b = document.createElement('button');
    b.className = 'tag';
    b.type = 'button';
    b.textContent = t;
    b.addEventListener('click', () => {
      stato.tag = t;
      stato.tipo = 'tutte';
      stato.testo = '';
      el.cerca.value = '';
      el.pulisci.hidden = true;
      disegnaFiltri();
      disegnaSala();
      chiudiScheda();
    });
    el.s_tag.appendChild(b);
  });

  el.scheda.hidden = false;
  el.scheda.scrollTop = 0;
  if (spingi) history.pushState({ app: id }, '', '#app=' + id);
}

function etichetta(testo, oro) {
  const s = document.createElement('span');
  s.className = 'etichetta' + (oro ? ' oro' : '');
  s.textContent = testo;
  return s;
}

function chiudiScheda() {
  el.scheda.hidden = true;
}

/******************************************************************
 * SEZIONE 4: COPIARE IL LINK
 ******************************************************************/
let timerAvviso = null;
function avvisa(messaggio) {
  el.avviso.textContent = messaggio;
  el.avviso.hidden = false;
  clearTimeout(timerAvviso);
  timerAvviso = setTimeout(() => { el.avviso.hidden = true; }, 1800);
}

/** Negli APK e sulle pagine aperte da file:// la scrivania degli
 *  appunti moderna non c'e': si ricade sul vecchio execCommand, che
 *  ha bisogno di un campo vero da cui copiare. */
async function copia(testo) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(testo);
      return true;
    }
  } catch (err) { /* si prova l'altra strada */ }
  const campo = document.createElement('textarea');
  campo.value = testo;
  campo.setAttribute('readonly', '');
  campo.style.position = 'fixed';
  campo.style.opacity = '0';
  document.body.appendChild(campo);
  campo.select();
  let fatto = false;
  try { fatto = document.execCommand('copy'); } catch (err) { fatto = false; }
  campo.remove();
  return fatto;
}

/******************************************************************
 * SEZIONE 5: EVENTI
 ******************************************************************/
el.cerca.addEventListener('input', () => {
  stato.testo = el.cerca.value.trim().toLowerCase();
  el.pulisci.hidden = !el.cerca.value;
  if (stato.testo) stato.tag = null;
  disegnaFiltri();
  disegnaSala();
});

el.pulisci.addEventListener('click', () => {
  el.cerca.value = '';
  stato.testo = '';
  el.pulisci.hidden = true;
  disegnaSala();
  el.cerca.focus();
});

el.indietro.addEventListener('click', () => history.back());

el.s_copia.addEventListener('click', async () => {
  const fatto = await copia(el.s_url.textContent);
  if (fatto) { avvisa('Link copiato'); return; }
  // se proprio non si puo' copiare, almeno si lascia l'indirizzo gia' selezionato
  const scelta = window.getSelection();
  const tratto = document.createRange();
  tratto.selectNodeContents(el.s_url);
  scelta.removeAllRanges();
  scelta.addRange(tratto);
  avvisa('Selezionato: copialo tenendo premuto');
});

// il tasto indietro del telefono (e quello del browser) chiude la scheda
window.addEventListener('popstate', event => {
  const id = event.state && event.state.app;
  if (id) apriScheda(id, false);
  else chiudiScheda();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !el.scheda.hidden) history.back();
});

/******************************************************************
 * SEZIONE 6: AVVIO
 ******************************************************************/
if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
  document.body.classList.add('capacitor');
}

/* La versione e' quella scritta accanto al file: cosi' la pagina dice
   sempre quale build sta girando, senza doverla ricordare a mano. */
(function mostraVersione() {
  const src = document.currentScript ? document.currentScript.src
                                     : (document.scripts[document.scripts.length - 1] || {}).src;
  const m = /[?&]v=([^&]+)/.exec(src || '');
  el.versione.textContent = 'museum v' + (m ? m[1] : '?');
})();

costruisciFiltri();
disegnaSala();

/* Aperti con un link diretto a una scheda (#app=<id>): sotto ci si mette
   comunque la sala, se no il tasto indietro porterebbe fuori dal museo. */
(function daIndirizzo() {
  const m = /#app=(.+)$/.exec(location.hash);
  if (!m) return;
  history.replaceState(null, '', location.pathname + location.search);
  apriScheda(decodeURIComponent(m[1]), true);
})();

// gancio per le prove
window.__museum = { APP, stato, disegnaSala, apriScheda, chiudiScheda };
