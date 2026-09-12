/******************************************************************
 * Museum — l'elenco delle app
 *
 * Un oggetto per app.
 *
 * campi:
 *   id        nome del file dell'icona in icone/  (e chiave stabile)
 *   nome      come si chiama
 *   sotto     una riga sola: cos'e'
 *   testo     la descrizione della scheda
 *   url       dove si gioca / si usa
 *   repo      il codice
 *   tipo      gioco | strumento | scuola | svago
 *   tag       parole per la ricerca e i filtri
 ******************************************************************/
const APP = [
  {
    id: 'animetracker', nome: 'Anime Tracker', sotto: 'A che puntata sono, serie per serie',
    testo: 'Ogni serie ha la sua copertina, l\'ultimo episodio visto e il prossimo da vedere, che si muovono con gli stessi tasti. Una stella segna quelle in pari, un pallino quelle finite.',
    url: 'https://fithzhood.github.io/animetracker/animetracker.html',
    repo: 'https://github.com/fithzhood/animetracker',
    tipo: 'strumento', tag: ['anime', 'serie', 'episodi', 'elenco']
  },
  {
    id: 'aqua', nome: 'Aqua Siege', sotto: 'Sopravvivenza a ondate, con l\'acqua come arma',
    testo: 'Si difende un pozzo da creature lente e numerose. L\'acqua si pompa, si mescola e diventa munizione: ogni ricetta ha un effetto diverso, e il ricettario si riempie giocando.',
    url: 'https://fithzhood.github.io/aqua-clear/aqua-clear.html',
    repo: 'https://github.com/fithzhood/aqua-clear',
    tipo: 'gioco', tag: ['sopravvivenza', 'ondate', 'azione', 'ricette']
  },
  {
    id: 'auguri', nome: 'Auguri', sotto: 'Due pulsantoni e un augurio',
    testo: 'Una pagina sola, fatta per essere aperta al volo su un telefono: due pulsanti grandi, niente altro intorno.',
    url: 'https://fithzhood.github.io/auguri/auguri.html',
    repo: 'https://github.com/fithzhood/auguri',
    tipo: 'svago', tag: ['auguri', 'pagina singola']
  },
  {
    id: 'brainflip', nome: 'BrainFlip', sotto: 'Quiz a flashcard, una domanda alla volta',
    testo: 'Si legge la domanda, si sceglie fra quattro risposte in colonna e si scopre subito se era quella. Le domande sono immagini: formule e figure di ottica come stanno sul foglio, non testo riscritto.',
    url: 'https://fithzhood.github.io/brainflip/brainflip.html',
    repo: 'https://github.com/fithzhood/brainflip',
    tipo: 'scuola', tag: ['flashcard', 'quiz', 'fisica', 'ottica', 'ripasso']
  },
  {
    id: 'brick-builder', nome: 'Brick Builder', sotto: 'Costruire set LEGO pezzo per pezzo',
    testo: 'Prende i set veri dall\'archivio pubblico e li fa montare a schermo, un mattoncino alla volta, seguendo le istruzioni come si farebbe sul tavolo.',
    url: 'https://fithzhood.github.io/brick-builder/brick-builder.html',
    repo: 'https://github.com/fithzhood/brick-builder',
    tipo: 'strumento', tag: ['lego', 'costruzioni', '3d']
  },
  {
    id: 'compasso', nome: 'Compasso', sotto: 'La matematica del liceo, un argomento alla volta',
    testo: 'Trentadue argomenti, dagli insiemi numerici agli integrali: spiegazioni con grafici interattivi e animazioni, esempi svolti, flashcard da scegliere e ripassare, esercizi con il controllo della risposta, quiz di teoria. Zenone, la tartaruga, dà suggerimenti e racconta i matematici.',
    url: 'https://fithzhood.github.io/compasso/compasso.html',
    repo: 'https://github.com/fithzhood/compasso',
    tipo: 'scuola', tag: ['matematica', 'liceo', 'flashcard', 'quiz', 'esercizi', 'grafici', 'animazioni', 'ripasso']
  },
  {
    id: 'cronoitalia', nome: 'CronoItalia', sotto: 'La carta d\'Italia che cambia con l\'anno',
    testo: 'Si sposta l\'anno e i confini degli stati italiani si ridisegnano. Accanto alla carta ci sono diorami a voxel delle scene di quel periodo.',
    url: 'https://fithzhood.github.io/cronoitalia/cronoitalia.html',
    repo: 'https://github.com/fithzhood/cronoitalia',
    tipo: 'scuola', tag: ['storia', 'geografia', 'italia', 'mappa', 'voxel']
  },
  {
    id: 'dice-roller', nome: 'Lancia Dadi', sotto: 'Dadi di ogni faccia, sul telefono',
    testo: 'Si sceglie quanti dadi e di che tipo, si tira, si legge il totale. Serve a chi gioca di ruolo o da tavolo e non ha i dadi sottomano.',
    url: 'https://fithzhood.github.io/dice-roller/dice.html',
    repo: 'https://github.com/fithzhood/dice-roller',
    tipo: 'strumento', tag: ['dadi', 'gioco da tavolo', 'ruolo']
  },
  {
    id: 'element', nome: 'Element Battle', sotto: 'Duelli a elementi, con i colpi contati',
    testo: 'Cinque elementi in mano, contati: ogni colpo tirato e\' un colpo in meno. Fuoco batte natura, natura batte acqua, acqua batte fuoco; luce e buio cambiano quanti attacchi restano.',
    url: 'https://fithzhood.github.io/element-clear/element-clear.html',
    repo: 'https://github.com/fithzhood/element-clear',
    tipo: 'gioco', tag: ['carte', 'elementi', 'roguelite', 'boss']
  },
  {
    id: 'faida', nome: 'Faida', sotto: 'Un automa cellulare a matrice di relazioni',
    testo: 'Sasso-carta-forbice portato all\'estremo: ogni coppia di colori puo\' vincere, perdere o ignorarsi, e da quelle regole nascono da sole fronti, sacche e tregue.',
    url: 'https://fithzhood.github.io/faida/faida.html',
    repo: 'https://github.com/fithzhood/faida',
    tipo: 'svago', tag: ['automa cellulare', 'simulazione', 'colori']
  },
  {
    id: 'flipflop', nome: 'FlipFlop', sotto: 'Lights-out su una griglia di carte',
    testo: 'Ogni tocco gira una carta e le quattro adiacenti. Si vince quando tutte mostrano la stessa faccia: la griglia va da 3x3 a 10x10.',
    url: 'https://fithzhood.github.io/flipflop-clear/flipflop-clear.html',
    repo: 'https://github.com/fithzhood/flipflop-clear',
    tipo: 'gioco', tag: ['puzzle', 'lights out', 'griglia']
  },
  {
    id: 'forgetful-fish', nome: 'Forgetful Fish', sotto: 'Il formato Dandan di Magic, contro il computer',
    testo: 'Un mazzo solo, condiviso fra i due giocatori, e creature che possono attaccare solo se sopra c\'e\' un\'isola. Partita completa contro un avversario automatico.',
    url: 'https://fithzhood.github.io/forgetful-fish/forgetful-fish.html',
    repo: 'https://github.com/fithzhood/forgetful-fish',
    tipo: 'gioco', tag: ['carte', 'magic', 'dandan', 'contro il computer']
  },
  {
    id: 'formazione-ia', nome: 'Come funziona un modello linguistico', sotto: 'Modulo di formazione, primo incontro',
    testo: 'Le slide di una lezione sull\'intelligenza artificiale: cosa fa davvero un modello quando scrive, e cosa non fa.',
    url: 'https://fithzhood.github.io/formazione-ia/modulo-1-presentazione.html',
    repo: 'https://github.com/fithzhood/formazione-ia',
    tipo: 'scuola', tag: ['intelligenza artificiale', 'lezione', 'slide']
  },
  {
    id: 'gesture-runner', nome: 'Gesture Runner', sotto: 'Un runner che si gioca con due pollici',
    testo: 'Si corre da soli: i pollici servono a disegnare i gesti che saltano, colpiscono e raccolgono. Il gioco insegna una mossa alla volta.',
    url: 'https://fithzhood.github.io/gesture-runner/gesture-runner.html',
    repo: 'https://github.com/fithzhood/gesture-runner',
    tipo: 'gioco', tag: ['runner', 'gesti', 'azione', 'orizzontale']
  },
  {
    id: 'gif-editor', nome: 'GIF Editor', sotto: 'Tagliare, montare e riscrivere GIF',
    testo: 'Apre GIF e WebP animate, ne cambia velocita\' e ordine dei fotogrammi, ritaglia, scrive sopra e risalva. Tutto nel browser, senza caricare niente da nessuna parte.',
    url: 'https://fithzhood.github.io/gif-editor/gif-editor.html',
    repo: 'https://github.com/fithzhood/gif-editor',
    tipo: 'strumento', tag: ['gif', 'immagini', 'montaggio', 'webp']
  },
  {
    id: 'goniometria', nome: 'Formulario di Goniometria', sotto: 'Le formule, con la legenda dei simboli',
    testo: 'Tutte le formule della goniometria in una pagina cercabile, ognuna con la legenda dei simboli e un esempio svolto. Nato dagli appunti a mano di un quaderno.',
    url: 'https://fithzhood.github.io/goniometria/formulario-goniometria.html',
    repo: 'https://github.com/fithzhood/goniometria',
    tipo: 'scuola', tag: ['matematica', 'goniometria', 'formule', 'ripasso']
  },
  {
    id: 'kuot', nome: 'Kuot', sotto: 'Citazioni, con la faccia di chi le ha dette',
    testo: 'Una raccolta di frasi da leggere una alla volta, ognuna con il ritratto dell\'autore. Si aggiungono, si cercano e si tengono in tasca.',
    url: 'https://fithzhood.github.io/kuot/kuot.html',
    repo: 'https://github.com/fithzhood/kuot',
    tipo: 'svago', tag: ['citazioni', 'frasi', 'raccolta', 'autori']
  },
  {
    id: 'palestra-goniometria', nome: 'Palestra di Goniometria', sotto: 'Esercizi, quiz e schede da ripasso',
    testo: 'La parte che si fa: teoria breve, esempi, flashcard e quiz sugli angoli e sulla circonferenza goniometrica.',
    url: 'https://fithzhood.github.io/goniometria/palestra-goniometria.html',
    repo: 'https://github.com/fithzhood/goniometria',
    tipo: 'scuola', tag: ['matematica', 'goniometria', 'esercizi', 'quiz']
  },
  {
    id: 'holdemz', nome: 'Holdemz', sotto: 'Texas hold\'em a un tavolo ellittico',
    testo: 'Quattro avversari, ognuno con un carattere suo, attorno a un tavolo dove il giro dei posti e\' l\'ordine di gioco. Si gioca fino a che ne resta uno.',
    url: 'https://fithzhood.github.io/holdemz-clear/holdemz-clear.html',
    repo: 'https://github.com/fithzhood/holdemz-clear',
    tipo: 'gioco', tag: ['carte', 'poker', 'contro il computer']
  },
  {
    id: 'horned-garden', nome: 'Horned Garden', sotto: 'Un rompicapo di logica a numeri',
    testo: 'Ogni casella dice quanti dei suoi vicini sono vivi. Da li\' si deduce il resto del giardino: un livello alla volta, senza fortuna.',
    url: 'https://fithzhood.github.io/horned-garden/horned-garden.html',
    repo: 'https://github.com/fithzhood/horned-garden',
    tipo: 'gioco', tag: ['puzzle', 'logica', 'deduzione']
  },
  {
    id: 'leggio', nome: 'Leggio', sotto: 'Si fa leggere i testi ad alta voce',
    testo: 'Accetta testo incollato, epub e pdf e li legge con la voce del telefono, tenendo il segno. Comodo per ascoltare un capitolo mentre si fa altro.',
    url: 'https://fithzhood.github.io/leggio/leggio.html',
    repo: 'https://github.com/fithzhood/leggio',
    tipo: 'strumento', tag: ['lettura', 'voce', 'epub', 'pdf', 'accessibilita']
  },
  {
    id: 'looptrail', nome: 'Looptrail', sotto: 'Un piccolo roguelike da tavolo',
    testo: 'Si pesca una carta, si sceglie da che parte muoversi sull\'anello, e si vede dove si finisce. Artefatti, mercanti, missioni e ladri, un tabellone dopo l\'altro.',
    url: 'https://fithzhood.github.io/looptrail-clear/looptrail-clear.html',
    repo: 'https://github.com/fithzhood/looptrail-clear',
    tipo: 'gioco', tag: ['roguelike', 'tabellone', 'carte']
  },
  {
    id: 'lost-temples', nome: 'Lost Temples', sotto: 'Incastri di pentomini in un tempio',
    testo: 'Pezzi di forme diverse da far entrare tutti nella stanza, senza sovrapporli. Piu\' si scende, meno spazio si ha.',
    url: 'https://fithzhood.github.io/lost-temples/lost-temples.html',
    repo: 'https://github.com/fithzhood/lost-temples',
    tipo: 'gioco', tag: ['puzzle', 'pentomini', 'incastri']
  },
  {
    id: 'mandala', nome: 'Mandala Effect', sotto: 'Mandala disegnati da pendoli',
    testo: 'Pendoli che oscillano e lasciano una traccia simmetrica: si cambiano simmetria, velocita\', spessore e palette, e si guarda il disegno nascere. C\'e\' una modalita\' che va da sola, buona come salvaschermo.',
    url: 'https://fithzhood.github.io/mandala/mandala-effect.html',
    repo: 'https://github.com/fithzhood/mandala',
    tipo: 'svago', tag: ['disegno', 'generativo', 'pendoli', 'salvaschermo']
  },
  {
    id: 'marea', nome: 'Marea', sotto: 'Disequazioni di secondo grado, viste come un mare',
    testo: 'Si scrive una disequazione e si vede la parabola piegarsi e il livello del mare salire: la soluzione e\' la parte di barra che resta emersa (o sommersa).',
    url: 'https://fithzhood.github.io/marea/marea.html',
    repo: 'https://github.com/fithzhood/marea',
    tipo: 'scuola', tag: ['matematica', 'disequazioni', 'parabola', 'esercizi']
  },
  {
    id: 'mergemarket', nome: 'Merge Market', sotto: 'Si uniscono merci e si serve il mercato',
    testo: 'Due merci uguali fanno quella dopo. Il banco chiede certe merci a certi prezzi, e la cassa serve ad allargare il banco: un turno alla volta.',
    url: 'https://fithzhood.github.io/mergemarket-clear/mergemarket-clear.html',
    repo: 'https://github.com/fithzhood/mergemarket-clear',
    tipo: 'gioco', tag: ['merge', 'gestionale', 'griglia']
  },
  {
    id: 'mossglen', nome: 'Mossglen', sotto: 'Un villaggio tranquillo, rifatto versione dopo versione',
    testo: 'Un gioco di vita di paese ricostruito a tappe: ogni versione viene giudicata da un arbitro che non sa chi l\'ha scritta. La pagina raccoglie tutte le versioni, dalla prima all\'ultima.',
    url: 'https://fithzhood.github.io/mossglen/index.html',
    repo: 'https://github.com/fithzhood/mossglen',
    tipo: 'gioco', tag: ['cozy', 'villaggio', 'esperimento', 'versioni']
  },
  {
    id: 'murdoku', nome: 'Murdoku', sotto: 'Il compagno di indagine del libro',
    testo: 'Genera casi da risolvere, disegna le mappe delle stanze e tiene il conto degli indizi: si gioca con carta e matita accanto, oppure da solo qui dentro.',
    url: 'https://fithzhood.github.io/murdoku/murdoku.html',
    repo: 'https://github.com/fithzhood/murdoku',
    tipo: 'gioco', tag: ['deduzione', 'giallo', 'mappe', 'generatore']
  },
  {
    id: 'number-master', nome: 'Number Master', sotto: 'Gacha di carte e conti da far quadrare',
    testo: 'Si estraggono carte a punti e poi si combinano con le quattro operazioni per arrivare esattamente al numero chiesto.',
    url: 'https://fithzhood.github.io/number-master-clear/number-master-clear.html',
    repo: 'https://github.com/fithzhood/number-master-clear',
    tipo: 'gioco', tag: ['gacha', 'numeri', 'calcolo', 'puzzle']
  },
  {
    id: 'opera', nome: 'Opera', sotto: 'Una figura da portare dentro il contorno',
    testo: 'Una griglia di pulsanti: ognuno sposta, gira o ribalta la figura. Cento livelli, e ognuno si chiude in poche mosse se si trova quella giusta.',
    url: 'https://fithzhood.github.io/opera/opera.html',
    repo: 'https://github.com/fithzhood/opera',
    tipo: 'gioco', tag: ['puzzle', 'logica', 'livelli', 'rotazioni']
  },
  {
    id: 'pokerogue', nome: 'PokeRogue Mobile', sotto: 'Il roguelite dei mostri tascabili, rifatto per il telefono',
    testo: 'Squadra da comporre, duecento ondate, biomi, uova e gacha: una riscrittura da zero pensata per lo schermo verticale e per il tocco.',
    url: 'https://fithzhood.github.io/pokerogue-clear/pokerogue-clear.html',
    repo: 'https://github.com/fithzhood/pokerogue-clear',
    tipo: 'gioco', tag: ['roguelite', 'mostri', 'squadra', 'lungo']
  },
  {
    id: 'pokerz', nome: 'Pokerz', sotto: 'Poker a cinque carte, due giri di scarto',
    testo: 'Quattro avversari, monete contate, e due occasioni per cambiare le carte in mano. Vince chi resta con qualcosa quando gli altri sono a zero.',
    url: 'https://fithzhood.github.io/pokerz-clear/pokerz-clear.html',
    repo: 'https://github.com/fithzhood/pokerz-clear',
    tipo: 'gioco', tag: ['carte', 'poker', 'contro il computer']
  },
  {
    id: 'randomcommander', nome: 'Random Commander', sotto: 'Quale mazzo tocca stasera',
    testo: 'I mazzi girano in tondo fra «da giocare», «in corso» e «giocati», e si spostano toccandoli; il sorteggio ne pesca uno. Ogni mazzo porta le sue bande di colore, nell\'ordine in cui sono state scelte.',
    url: 'https://fithzhood.github.io/randomcommander/randomcommander.html',
    repo: 'https://github.com/fithzhood/randomcommander',
    tipo: 'svago', tag: ['magic', 'commander', 'mazzi', 'sorteggio', 'carte']
  },
  {
    id: 'scalaquaranta', nome: 'Scala Quaranta', sotto: 'Il solitario che si gioca con un pollice',
    testo: 'La versione a un giocatore del gioco di carte: scale e tris da calare, con la mano che sta tutta sullo schermo del telefono senza rimpicciolirsi.',
    url: 'https://fithzhood.github.io/scalaquaranta/scalaquaranta.html',
    repo: 'https://github.com/fithzhood/scalaquaranta',
    tipo: 'gioco', tag: ['carte', 'solitario', 'scale', 'telefono']
  },
  {
    id: 'spola', nome: 'Spola', sotto: 'Passa link e immagini fra telefono e PC',
    testo: "Quello che si incolla su un dispositivo compare sull'altro, gia' pronto da copiare con un tasto solo. Testo, link e immagini viaggiano cifrati, e si cancellano da soli dopo qualche ora: e' roba di passaggio, non un archivio. Sul telefono si trova anche nel menu Condividi di Android.",
    url: 'https://fithzhood.github.io/spola/spola.html',
    repo: 'https://github.com/fithzhood/spola',
    tipo: 'strumento', tag: ['appunti', 'condivisione', 'telefono', 'cifrato', 'link', 'immagini']
  },
  {
    id: 'slot', nome: 'Slot Regno', sotto: 'Una slot machine diventata roguelite',
    testo: 'Ventiquattro round, otto boss: ogni round chiede una cassa minima, e fra un round e l\'altro si comprano cimeli che cambiano le regole dei rulli.',
    url: 'https://fithzhood.github.io/slot-clear/slot-clear.html',
    repo: 'https://github.com/fithzhood/slot-clear',
    tipo: 'gioco', tag: ['roguelite', 'slot', 'negozio', 'boss']
  },
  {
    id: 'speziale', nome: 'Speziale', sotto: 'Deduzione con icone che non hanno un nome',
    testo: 'Le regole della bottega cambiano a ogni partita e non sono scritte da nessuna parte: si capiscono provando. Il congedo, alla fine, e\' quello che rende la partita giusta.',
    url: 'https://fithzhood.github.io/speziale/speziale.html',
    repo: 'https://github.com/fithzhood/speziale',
    tipo: 'gioco', tag: ['deduzione', 'regole nascoste', 'icone']
  },
  {
    id: 'squarex', nome: 'SquareX', sotto: 'Griglia 4x4, buff da comprare e un Glitch',
    testo: 'Si tirano i simboli sulla griglia e si contano le linee. Fra un round e l\'altro c\'e\' un negozio di buff, e il Glitch che ogni tanto nasconde una casella.',
    url: 'https://fithzhood.github.io/squarex-clear/squarex-clear.html',
    repo: 'https://github.com/fithzhood/squarex-clear',
    tipo: 'gioco', tag: ['griglia', 'punteggio', 'buff', 'roguelite']
  },
  {
    id: 'storia-romana', nome: 'Atlante di Storia Romana', sotto: 'Le carte, la cronologia, i collegamenti',
    testo: 'Materiale di ripasso sull\'antica Roma: carte con i confini che cambiano, cronologia, flashcard e quiz.',
    url: 'https://fithzhood.github.io/storia-romana/atlante-storia-romana.html',
    repo: 'https://github.com/fithzhood/storia-romana',
    tipo: 'scuola', tag: ['storia', 'roma', 'mappe', 'ripasso', 'quiz']
  },
  {
    id: 'tarocchi', nome: 'Tarocchi', sotto: 'Gli arcani maggiori, una carta al giorno',
    testo: 'Il mazzo degli arcani maggiori con il significato al dritto e al rovescio, e stese pronte per una domanda sola.',
    url: 'https://fithzhood.github.io/tarocchi/tarocchi.html',
    repo: 'https://github.com/fithzhood/tarocchi',
    tipo: 'svago', tag: ['tarocchi', 'carte', 'arcani']
  },
  {
    id: 'tritris', nome: 'TriTris', sotto: 'Tris a perdere, su tre plance insieme',
    testo: 'Si gioca in una casella libera di una qualsiasi delle tre griglie, e chi allinea tre segni PERDE. La CPU ha tre livelli, e si puo\' anche giocare in due.',
    url: 'https://fithzhood.github.io/tritris-clear/tritris-clear.html',
    repo: 'https://github.com/fithzhood/tritris-clear',
    tipo: 'gioco', tag: ['tris', 'a perdere', 'contro il computer', 'in due']
  },
  {
    id: 'twisty-codex', nome: 'Twisty Codex', sotto: 'Gli algoritmi di 45 rompicapi a rotazione',
    testo: 'Cubi e affini, dal 2x2 in su: per ognuno i metodi e gli algoritmi, con i diagrammi generati da un motore di cubo vero invece che disegnati a mano.',
    url: 'https://fithzhood.github.io/twisty-codex/twisty-codex.html',
    repo: 'https://github.com/fithzhood/twisty-codex',
    tipo: 'strumento', tag: ['cubo di rubik', 'algoritmi', 'guida', 'speedcubing']
  },
  {
    id: 'urdl', nome: 'URDL', sotto: 'Forza quattro su una plancia che gira',
    testo: 'La plancia ha quattro lati con un nome cardinale e si gioca solo da quello in alto; dopo ogni mossa ruota. I quattro pulsanti leggono sempre S W N E, ed e\' quella la trovata.',
    url: 'https://fithzhood.github.io/urdl-clear/urdl-clear.html',
    repo: 'https://github.com/fithzhood/urdl-clear',
    tipo: 'gioco', tag: ['forza quattro', 'rotazione', 'contro il computer', 'in due']
  },
  {
    id: 'weekscramble', nome: 'WeekScramble', sotto: 'Un\'attivita\' per ogni giorno, tirata a sorte',
    testo: 'Ogni attivita\' ha un peso: piu\' e\' alto, piu\' spesso esce. Lo scramble riempie i sette giorni pescando da un mazzo in cui ognuna compare tante volte quanto pesa, e le preferite pesano di piu\'.',
    url: 'https://fithzhood.github.io/weekscramble/weekscramble.html',
    repo: 'https://github.com/fithzhood/weekscramble',
    tipo: 'svago', tag: ['settimana', 'sorteggio', 'abitudini', 'pesi']
  }
];
