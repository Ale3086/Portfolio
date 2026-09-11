# 📘 GUIDA OPERATIVA COMPLETA — Dall'Ordine alla Consegna

> **Cos'è questo documento**: La tua Bibbia operativa. Tienilo SEMPRE con te. Copre OGNI singolo passaggio dal momento in cui il cliente compila il briefing fino alla consegna finale e oltre. Per ogni step ti dice: cosa fare, come farlo, cosa chiedere al cliente, cosa chiedere all'IA, e cosa devi ottenere come risultato.

---

## 📑 INDICE

0. [FASE 00 — Setup Iniziale Ecosistema (Google, Drive, IA)](#fase-00)
1. [FASE 0 — Ricezione Briefing e Preparazione](#fase-0)
2. [FASE 1 — Sviluppo del Sito Web](#fase-1)
3. [FASE 2 — Contenuti e Testi](#fase-2)
4. [FASE 3 — Immagini e Media](#fase-3)
5. [FASE 4 — Logo e Brand Identity](#fase-4)
6. [FASE 5 — Servizi Gratuiti Inclusi](#fase-5)
7. [FASE 6 — Setup Tecnico (Dominio, Hosting, GDPR)](#fase-6)
8. [FASE 7 — Testing e Controllo Qualità](#fase-7)
9. [FASE 8 — Lancio e Go-Live](#fase-8)
10. [FASE 9 — Consegna al Cliente e Formazione](#fase-9)
11. [FASE 10 — Post-Lancio e Manutenzione](#fase-10)
12. [APPENDICE A — Prompt di Supporto per l'IA](#appendice-a)
13. [APPENDICE B — Checklist Finale Pre-Consegna](#appendice-b)
14. [APPENDICE C — Template Messaggi per il Cliente](#appendice-c)
15. [APPENDICE D — Mappa Operativa Domanda per Domanda](#appendice-d)

---
---

<a id="fase-00"></a>
## FASE 00 — Setup Iniziale Ecosistema (Google Workspace, Drive e IA)
**⏱️ Tempo stimato: 1 ora (Una tantum)**

*Questa procedura va eseguita una sola volta per strutturare il tuo ambiente di lavoro professionale, in modo da gestire decine di clienti in modo organizzato e delegare il lavoro all'IA nel modo più fluido possibile.*

### 1. Setup dell'Account Google Aziendale (Workspace o Gmail)
Per operare in modo professionale, evita di usare la tua email personale (es. `mariorossi89@gmail.com`). 

**Se usi un dominio di tua proprietà (Consigliato - Google Workspace):**
1. Vai su https://workspace.google.com/ e clicca su **Inizia la prova gratuita**.
2. Inserisci i dati della tua attività (Nome agenzia/freelance).
3. Quando ti chiede "La tua azienda ha un dominio?", seleziona **Sì, ne ho uno che posso utilizzare** e inserisci il tuo dominio (es. `tuaagenzia.it`).
4. Crea il tuo account principale: `info@tuaagenzia.it` o `nome@tuaagenzia.it`.
5. Scegli il piano base (Business Starter, circa 6€/mese).
6. Segui il wizard per verificare il dominio (dovrai aggiungere un record TXT e i record MX nel pannello DNS del tuo provider di dominio, es. TopHost o Aruba).
7. Ora hai accesso a Gmail, Drive (30GB), Meet (utile se in futuro vorrai fare call) e Calendar brandizzati.

**Se usi un account gratuito (Alternativa a costo zero):**
1. Crea un nuovo account Google usando una nomenclatura professionale: `agenzia.tuonome@gmail.com` o `info.tuonome@gmail.com`.
2. **FONDAMENTALE**: Aggiungi subito l'autenticazione a due fattori (2FA) per sicurezza, dato che Drive conterrà i dati, i documenti e le password di tutti i tuoi clienti.

### 2. Strutturazione e Automazione di Google Drive
Avere un Drive caotico ti farà perdere ore preziose. Impostalo esattamente così:

1. Apri Google Drive con il tuo nuovo account aziendale.
2. Crea una cartella principale chiamata `📁 CLIENTI ATTIVI`.
3. Crea una cartella `📁 ARCHIVIO CLIENTI` (per i siti consegnati, saldati e chiusi).
4. Crea una cartella `📁 ASSETS AGENZIA` (il tuo logo, i tuoi contratti template, le tue fatture).
5. **Crea la "Cartella Template Cliente" (Il trucco per scalare):** 
   Crea una cartella chiamata `_TEMPLATE_NUOVO_CLIENTE` e all'interno inserisci queste sottocartelle vuote:
   - `01_Briefing_e_Contratti` (Qui salverai i PDF del form compilato e i preventivi firmati)
   - `02_Materiali_Cliente` (Logo originale, foto scaricate da WhatsApp, testi forniti)
   - `03_Design_e_Bozze` (Le grafiche generate dall'IA, biglietti da visita creati)
   - `04_Credenziali` (Crea dentro un file Google Docs vuoto pronto per appuntare le password di Hosting, WP, Social)
   - `05_Consegna_Finale` (Il pacchetto .zip del codice finale e dei loghi pronti all'uso)
6. **Il Workflow Operativo:** Ogni volta che ricevi un nuovo briefing, fai click destro sulla cartella `_TEMPLATE_NUOVO_CLIENTE`, clicca su "Crea una copia" (o duplicala localmente), rinominala con `[Nome Azienda Cliente]` e spostala in `📁 CLIENTI ATTIVI`.

### 3. Setup Assistente IA Aziendale (Servizio per il Cliente)

Oltre al sito web, un enorme valore aggiunto che puoi dare al cliente è fornirgli un sistema di Intelligenza Artificiale (come ChatGPT o Claude) pre-configurato per aiutarlo nel lavoro di tutti i giorni (rispondere alle email, creare post social, redigere preventivi).

**Come configurarlo per il cliente:**
1. Chiedi al cliente di aprire ChatGPT o Claude (o crea tu un account per lui).
2. Fallo andare nelle Impostazioni e aprire le **Istruzioni Personalizzate** (Custom Instructions in ChatGPT o Project Knowledge in Claude).
3. **Compila il Prompt Base:** Subito dopo aver analizzato il briefing (Fase 0), estrai i dati necessari, compila il template qui sotto e incollalo nell'account del cliente. 

**Template Prompt Base Universale (da adattare con i dati del Briefing):**
> "Agisci come il miglior assistente aziendale, copywriter e customer care per **[Inserire Nome Azienda]**, un'attività che opera nel settore **[Inserire Settore]**. 
> 
> **Chi siamo e cosa facciamo:** 
> Risolviamo il seguente problema: **[Problema concreto dal briefing]**. 
> Il motivo principale per cui i clienti scelgono noi (la nostra USP) è: **[USP dal briefing]**. 
> I nostri tre valori o aggettivi chiave sono: **[3 Aggettivi dal briefing]**.
>
> **Il nostro Target:**
> Ci rivolgiamo al mercato **[B2B/B2C]**, specificamente a **[Età/Professione cliente target]**. Quando scrivi, tieni a mente che il processo decisionale dei nostri clienti è tipicamente **[Acquisto d'impulso / Ponderato di mesi]**. Offriamo inoltre questa garanzia: **[Garanzia dal briefing]**.
>
> **Come devi comunicare:**
> Usa sempre un tono di voce **[Tono di voce dal briefing - es. Professionale/Amichevole]** e rivolgiti al lettore dandogli del **[Tu / Lei / Voi]**.
> Regole ferree: Non usare mai frasi fatte, linguaggio aziendalese o testi generici. Sii diretto, persuasivo, empatico e focalizzato sui vantaggi reali per il cliente.
> 
> **Il tuo compito:**
> Quando ti chiedo di scrivere o rispondere a un'email, redigere un post social o un testo commerciale, usa sempre queste linee guida per produrre contenuti perfettamente allineati all'identità del nostro brand."

**Perché farlo:** Alla consegna (Fase 9), dare al cliente un assistente IA "chiavi in mano" addestrato esattamente sulla sua azienda eleva la percezione del tuo servizio da semplice "creatore di siti" a "consulente tecnologico aziendale".

---
---

<a id="fase-0"></a>
## FASE 0 — Ricezione Briefing e Preparazione
**⏱️ Tempo stimato: 30 minuti**

### Cosa succede
Il cliente ha compilato il Google Form. Tu ricevi la notifica email.

### Cosa devi fare

**Step 0.1 — Scarica e organizza le risposte**
1. Apri il Google Form → Risposte → Individuali
2. Leggi TUTTA la risposta con attenzione
3. Crea una cartella di progetto sul tuo PC:
   ```
   /Progetti/[NomeCliente]/
   ├── briefing/          (risposte del form, note)
   ├── design/            (logo, palette, mockup)
   ├── codice/            (il sito vero e proprio)
   ├── assets/            (foto, video, font)
   ├── documenti/         (contratto, fattura, credenziali)
   └── consegna/          (pacchetto finale per il cliente)
   ```

**Step 0.2 — Analizza le risposte e identifica le lacune**

Controlla se mancano informazioni critiche. Usa questa checklist:

| Dato | Obbligatorio? | Dove cercarlo nel form |
|---|---|---|
| Obiettivo del sito | ✅ SÌ | Domanda 1 |
| CTA principale | ✅ SÌ | Domanda 3 |
| Nome azienda | ✅ SÌ | Domanda 11 |
| Indirizzo | ✅ SÌ | Domanda 13 |
| Email | ✅ SÌ | Domanda 14 |
| Telefono | ✅ SÌ | Domanda 15 |
| USP (perché scegliere loro) | ✅ SÌ | Domanda 30 |
| Tipologia sito | ✅ SÌ | Domanda 43 |
| Logo (ha/non ha) | ✅ SÌ | Domanda 53 |
| Colori | ⚠️ Preferibile | Domande 59-62 |
| Font | ⚠️ Preferibile | Domande 63-65 |
| Foto (come gestirle) | ✅ SÌ | Domanda 67 |

> 💡 **NOVITÀ**: Per sapere ESATTAMENTE cosa fare e come tradurre la risposta a ogni singola domanda del form in un'azione concreta sul sito, consulta l'**[APPENDICE D — Mappa Operativa Domanda per Domanda](#appendice-d)** alla fine di questo documento.

**Step 0.3 — Contatta il cliente per le informazioni mancanti**

Se manca qualcosa, invia subito un messaggio (vedi Template in Appendice C).

**Step 0.4 — Raccogli il materiale dal cliente**

Chiedi al cliente di inviarti (se applicabile):
- [ ] Logo in alta risoluzione (PNG senza sfondo o SVG)
- [ ] Foto professionali (se le fornisce lui)
- [ ] Video (se ne ha)
- [ ] Testi già pronti (se li scrive lui)
- [ ] Credenziali hosting/dominio (se già li possiede)
- [ ] Recensioni/testimonianze scritte
- [ ] Brand book o materiale esistente

> **💬 COSA DIRE AL CLIENTE:**
> "Grazie per aver compilato il briefing! Per procedere ho bisogno che mi invii i seguenti materiali: [lista]. Puoi inviarmeli via [WhatsApp/email] entro [data]. Nel frattempo inizio a lavorare alla struttura del sito."

---
---

<a id="fase-1"></a>
## FASE 1 — Sviluppo del Sito Web
**⏱️ Tempo stimato: 4-12 ore (dipende dalla complessità)**

### Cosa devi fare

**Step 1.1 — Genera il sito con il Prompt Master**

Il Prompt Master presuppone un **ambiente agentico con accesso reale a filesystem e
terminale** (Antigravity, Claude Code, Cursor o simili) — non una chat generica. Il flusso è:

1. Apri il tuo ambiente agentico direttamente nella cartella `codice/` del progetto (vedi
   struttura in Step 0.1).
2. Apri il file `prompt_sviluppo_sito.md`
3. Copia la risposta del cliente dal Google Form
4. Incollala nella sezione `[DATI DEL BRIEFING]` del prompt
5. Dai l'INTERO prompt (con i dati incollati) all'agente
6. L'agente scrive i file **direttamente sul filesystem**, nell'ordine indicato dallo STEP 1
   del prompt — non c'è un limite di lunghezza messaggio da gestire, quindi non serve
   interrompere o "continuare" nulla: il lavoro prosegue file per file fino al completamento.

**Step 1.2 — Verifica che i file siano stati scritti correttamente**

1. Controlla che la struttura di cartelle in `codice/` corrisponda a quella dichiarata nel
   prompt (🏗️ ARCHITETTURA DEI FILE).
2. Leggi il blocco "🔍 VERIFICA TECNICA" (STEP 2) che l'agente produce: deve riportare
   controlli reali (grep, apertura file, eventuale browser di anteprima), non una semplice
   dichiarazione "✅ tutto ok". Se il tuo ambiente agentico non ha uno di questi strumenti
   (es. nessun browser di anteprima), l'agente deve averlo dichiarato esplicitamente — se non
   l'ha fatto, chiediglielo prima di fidarti del resto del report.
3. **Se stai usando questo prompt in una chat senza accesso reale a filesystem/terminale**
   (scenario non raccomandato, ma possibile): in quel caso sì, i limiti di lunghezza messaggio
   si applicano davvero, e se l'IA si interrompe puoi scrivere `"Continua esattamente da dove
   ti sei fermato"`. Ma sappi che in questo scenario gran parte dello STEP 2 (verifica tecnica
   reale) non è eseguibile per davvero, e l'agente deve dichiararlo — vedi la nota in cima al
   Prompt Master.

**Step 1.3 — Prima verifica locale**

1. Apri `index.html` nel browser (doppio click sul file)
2. Verifica che:
   - [ ] La pagina si carica senza errori nella console (F12 → Console)
   - [ ] I colori sono quelli richiesti
   - [ ] I font si caricano correttamente
   - [ ] La navigazione funziona
   - [ ] Il menu hamburger funziona su mobile (usa F12 → toggle device toolbar)

**Step 1.4 — Test responsive completo**

Apri gli Strumenti Sviluppatore (F12) → Toggle Device Toolbar (Ctrl+Shift+M):

| Viewport | Cosa controllare |
|---|---|
| 320px (iPhone SE) | Tutto leggibile? Niente overflow orizzontale? Menu hamburger funziona? |
| 375px (iPhone 14) | Layout pulito? CTA ben visibile? |
| 480px (Galaxy grande) | Transizione mobile → tablet inizia? |
| 768px (iPad portrait) | Griglia a 2 colonne? Spaziature adeguate? |
| 1024px (iPad landscape) | Menu desktop appare? Layout cambia? |
| 1200px (Desktop) | Layout completo? Hero section impattante? |
| 1440px (Desktop grande) | Contenuto non si "perde" al centro? Container contenuto? |
| 1920px (Full HD) | Tutto ancora proporzionato? Font non troppo piccoli? |

**Step 1.5 — Richiedi correzioni all'IA**

Per ogni problema trovato, usa questo format:

> **💬 COSA DIRE ALL'IA:**
> "Nel file [nome-file] alla riga circa [numero], ho questo problema: [descrizione precisa del problema]. Il comportamento atteso è: [cosa dovrebbe succedere]. Correggilo mantenendo la struttura esistente del codice."

Se ci sono MOLTI problemi, elencali tutti in un unico messaggio numerato.

---
---

<a id="fase-2"></a>
## FASE 2 — Contenuti e Testi
**⏱️ Tempo stimato: 1-3 ore**

### Scenario A: Il cliente fornisce i testi
1. Ricevi i testi dal cliente
2. Inseriscili nel codice HTML al posto dei placeholder
3. Controlla lunghezza e formattazione
4. Chiedi all'IA di ottimizzarli per la SEO se necessario

> **💬 COSA DIRE ALL'IA (ottimizzazione testi):**
> "Ecco i testi forniti dal cliente per la pagina [nome pagina]. Ottimizzali per la SEO senza stravolgere il significato. Includi naturalmente le keyword [parole chiave dal briefing]. Mantieni il tono di voce [formale/informale/tecnico come da briefing]. Restituiscimi l'HTML completo della sezione con i testi ottimizzati."

### Scenario B: Devi scrivere tu i testi (o farli scrivere all'IA)

> **💬 COSA DIRE ALL'IA (generazione testi):**
> "Basandoti sui dati del briefing che ti allego, scrivi TUTTI i testi per la pagina [nome pagina] del sito di [nome azienda]. L'azienda si occupa di [settore]. La USP è: [USP dal briefing]. Il tono di voce è [tono]. Il cliente target è [target dal briefing]. Il problema che risolvono è [problema dal briefing].
>
> Scrivi testi persuasivi, ottimizzati SEO, in italiano, che:
> 1. Parlino direttamente al cliente ideale
> 2. Enfatizzino la USP e i punti di forza
> 3. Includano una CTA chiara in ogni sezione
> 4. Siano strutturati con heading H2 e H3
> 5. Abbiano la lunghezza giusta per il web (paragrafi brevi, frasi dirette)"

### Scenario C: Il cliente ha una brochure o testi cartacei da cui partire (Domanda 49)
1. Ricevi la brochure o i file dal cliente
2. I testi cartacei NON funzionano per il web: vanno snelliti e riformattati.
> **💬 COSA DIRE ALL'IA (adattamento da cartaceo a web):**
> "Ecco i testi estratti dalla brochure aziendale del cliente per la pagina [nome pagina]. Riscrivili per il sito web mantenendo lo stesso tono e le informazioni chiave, ma: 
> 1. Spezza i muri di testo in paragrafi corti.
> 2. Crea una gerarchia visiva chiara con Titoli (H2) e Sottotitoli (H3).
> 3. Usa elenchi puntati (bullet points) dove utile per facilitare la lettura rapida."

### Contenuti da generare per ogni pagina tipica

| Pagina | Contenuti necessari |
|---|---|
| **Home** | Hero headline + sottotitolo, sezione servizi (sintesi), sezione chi siamo (sintesi), social proof, CTA finale |
| **Chi Siamo** | Origin story, valori, mission, team (se applicabile), numeri aziendali |
| **Servizi** | Descrizione ogni servizio, benefici, processo di lavoro, CTA per ogni servizio |
| **Contatti** | Testo introduttivo, form, mappa, orari, info contatto, FAQ (se presenti) |
| **Portfolio** | Introduzione, descrizione progetti (se forniti) |
| **Blog** | Primo articolo di lancio (opzionale ma consigliato) |

---
---

<a id="fase-3"></a>
## FASE 3 — Immagini e Media
**⏱️ Tempo stimato: 1-2 ore**

### Se il cliente fornisce le foto:
1. Ricevi le foto dal cliente
2. **Rinomina** ogni file in modo descrittivo (es. `hero-homepage.jpg`, `servizio-ristrutturazione.jpg`)
3. **Ottimizza** ogni immagine:
   - Formato: JPEG per foto, PNG per grafiche con trasparenza, WebP dove possibile
   - Dimensione massima: 1920px di larghezza per hero, 800px per card
   - Compressione: usa un tool come https://squoosh.app/ o https://tinypng.com/
   - Peso target: sotto 200KB per immagine, sotto 100KB per thumbnail
4. Inserisci le immagini nella cartella `assets/images/`
5. Aggiorna i tag `<img>` nel codice HTML con i nomi file corretti

### Se usi immagini stock gratuite:
1. Cerca su: **Unsplash** (unsplash.com), **Pexels** (pexels.com), **Pixabay** (pixabay.com)
2. Cerca in inglese per migliori risultati (es. "italian restaurant interior" non "ristorante italiano interni")
3. Scarica la risoluzione media (non serve la massima)
4. Ottimizza come sopra

### Se usi immagini generate dall'IA:

> **💬 COSA DIRE ALL'IA (generazione immagini):**
> "Genera un'immagine per la sezione [hero/servizi/chi-siamo] del sito web di [nome azienda], un'attività di [settore] a [città]. L'immagine deve trasmettere: [aggettivi del brand dal briefing]. Stile: [autentico/patinato/minimalista come da briefing]. Formato: orizzontale 16:9 per hero, quadrato 1:1 per card. Niente testo nell'immagine."

### Se il cliente ha video:
1. Ricevi il video
2. Se è un hero video (sfondo), deve essere:
   - Formato: MP4 (H.264)
   - Durata: 10-30 secondi, in loop
   - Risoluzione: 1920x1080 massimo
   - Senza audio (o audio mutato di default)
3. Se è un video YouTube/Vimeo, basta il link per l'embed

---
---

<a id="fase-4"></a>
## FASE 4 — Logo e Brand Identity
**⏱️ Tempo stimato: 1-3 ore**

### Se il cliente ha già il logo:
1. Richiedi il file in formato:
   - SVG (vettoriale — ideale per il web)
   - PNG con sfondo trasparente (almeno 1000px di larghezza)
   - Versione chiara e versione scura (se esiste)
2. Se ti invia un JPG con sfondo bianco o un file di bassa qualità:

> **💬 COSA DIRE AL CLIENTE:**
> "Il logo che mi hai inviato è in formato [JPG/bassa risoluzione]. Per il sito web ho bisogno del file originale in formato vettoriale (SVG, AI o EPS) o almeno un PNG con sfondo trasparente. Puoi chiedere al grafico che l'ha creato? In alternativa, posso provare a ricostruirlo digitalmente."

### Se devi creare il logo:

**ATTENZIONE:** Non usare l'IA generativa di immagini per creare il logo (le IA raster non garantiscono coerenza e i formati non sono ideali per i loghi professionali). Scegli tra queste due opzioni:
1. **Soluzione Base**: Costruisci un logotipo CSS/SVG minimale o testuale usando font aziendali (es. `<h1>Nome Azienda</h1>` con uno stile distintivo) per il sito.
2. **Soluzione Premium**: Segnala al cliente che la creazione di un logo professionale richiede l'intervento di un designer o l'uso di tool dedicati alla grafica vettoriale (es. Illustrator).

### Varianti del logo da preparare:
- [ ] Logo completo (icona + nome) — orizzontale
- [ ] Logo completo — verticale (icona sopra, nome sotto)
- [ ] Solo icona/simbolo (per favicon, social, icona app)
- [ ] Versione chiara (per sfondi scuri)
- [ ] Versione scura (per sfondi chiari)
- [ ] Versione monocromatica (bianco e nero)

---
---

<a id="fase-5"></a>
## FASE 5 — Servizi Gratuiti Inclusi
**⏱️ Tempo stimato: 2-4 ore (tutti i servizi selezionati)**

Per ogni servizio selezionato dal cliente nel briefing (Sezione 14 del form), segui le istruzioni sotto.

---

### 📍 5.1 — Google Maps (Posizione Geografica)

**Cosa devi ottenere**: Pin della sede corretto, con categoria giusta, orari e descrizione.

**Cosa fare:**
1. Cerca l'attività su Google Maps
2. Se il pin è sbagliato o mancante:
   - Clicca "Suggerisci una modifica" sulla scheda
   - Oppure crea/rivendica la scheda dal Google Business Profile
3. Verifica: indirizzo corretto, pin posizionato correttamente sull'edificio giusto

**Cosa chiedere al cliente:**
> "Puoi verificare che l'indirizzo su Google Maps punti esattamente al tuo negozio/ufficio? Se è sbagliato, me lo segnali e lo correggo io."

---

### 📍 5.2 — Google Business Profile (ex Google My Business)

**Cosa devi ottenere**: Profilo completo, ottimizzato, con foto, orari e descrizione.

**Cosa fare:**
1. Vai su https://business.google.com/
2. **Se il cliente ha già il profilo**: Chiedigli accesso come "Gestore" → poi ottimizza
3. **Se non ce l'ha**: Crealo da zero → il cliente dovrà verificare via cartolina/telefono

**Checklist ottimizzazione:**
- [ ] Nome attività corretto (no keyword stuffing)
- [ ] Categoria principale + categorie secondarie pertinenti
- [ ] Indirizzo completo e corretto
- [ ] Numero di telefono
- [ ] Sito web (URL del nuovo sito)
- [ ] Orari di apertura (tutti i giorni)
- [ ] Descrizione aziendale (750 caratteri, con keyword naturali)
- [ ] Almeno 5-10 foto (esterno, interno, team, prodotti/servizi)
- [ ] Logo caricato
- [ ] Foto di copertina
- [ ] Servizi/prodotti elencati
- [ ] Attributi compilati (parcheggio, WiFi, accessibilità, ecc.)

**Cosa chiedere al cliente:**
> "Per completare il tuo profilo Google Business ho bisogno che tu mi invii: 5-10 foto della tua attività (esterno, interno, team al lavoro, prodotti). Inoltre dovrai verificare il profilo seguendo le istruzioni che Google ti invierà via [cartolina/telefono/email]."

---

### 📍 5.3 — Profilo LinkedIn Aziendale (Company Page)

**Cosa devi ottenere**: Company Page creata, compilata e pronta.

**Cosa fare:**
1. Il cliente DEVE creare la pagina dal suo profilo LinkedIn personale (requisito LinkedIn)
2. Guidalo passo passo:

**Cosa dire al cliente:**
> "Per creare la pagina LinkedIn aziendale devi farlo dal tuo profilo LinkedIn personale. Ecco i passaggi:
> 1. Accedi a LinkedIn
> 2. Clicca sull'icona 'Per le aziende' in alto a destra
> 3. Clicca 'Crea una pagina aziendale'
> 4. Scegli 'Piccola impresa'
> 5. Compila il nome azienda, URL personalizzato, e settore
> 6. Aggiungimi come amministratore (il mio profilo LinkedIn è: [tuo URL])
> 7. Da lì completo io: logo, copertina, descrizione e tutti i dettagli."

> [!WARNING]
> **Rischio Collo di Bottiglia**: Questo è l'unico servizio gratuito che dipende attivamente da un'azione tecnica del cliente. Se il cliente è poco esperto di PC, questa fase può bloccarti per giorni. 
> **Soluzione Asincrona:** Apri OBS Studio sul tuo PC, registra un video di 2 minuti del tuo schermo in cui fai vedere esattamente dove deve cliccare su LinkedIn. Carica il video come "Non in elenco" su YouTube e mandagli il link su WhatsApp. Eviterai di impazzire per sincronizzare un appuntamento.

**Checklist compilazione:**
- [ ] Logo aziendale come immagine profilo
- [ ] Banner/copertina (formato 1128x191 px)
- [ ] Tagline (max 120 caratteri)
- [ ] Descrizione aziendale completa
- [ ] Sito web linkato
- [ ] Settore e dimensione azienda
- [ ] Sede
- [ ] Primo post di presentazione pubblicato

---

### 📍 5.4 — WhatsApp Business con Auto-Risposta

**Cosa devi ottenere**: App configurata con messaggio di benvenuto, orari e catalogo base.

**Cosa fare:**
1. Il cliente deve scaricare **WhatsApp Business** (diversa da WhatsApp normale)
2. Guidalo nella configurazione:

**Cosa dire al cliente:**
> "Scarica l'app 'WhatsApp Business' (logo verde con la B) dal Play Store o App Store. Quando la apri, registrala con il tuo numero di telefono aziendale. Poi dammi accesso via WhatsApp Web oppure seguiamo insieme questi passaggi:"

**Checklist configurazione:**
- [ ] Profilo aziendale compilato (nome, indirizzo, email, sito, orari, descrizione)
- [ ] Foto profilo = logo aziendale
- [ ] **Messaggio di benvenuto** (inviato automaticamente alla prima conversazione):
  ```
  Ciao! 👋 Grazie per averci contattato.
  Siamo [Nome Azienda] e saremo felici di aiutarti.
  Ti risponderemo il prima possibile durante i nostri orari di apertura:
  [Orari].
  Nel frattempo, visita il nostro sito: [URL sito]
  ```
- [ ] **Messaggio di assenza** (fuori orario):
  ```
  Grazie per il tuo messaggio! 🕐
  Al momento siamo fuori dall'orario di apertura.
  Ti risponderemo appena possibile. I nostri orari sono:
  [Orari].
  ```
- [ ] **Risposte rapide** configurate (almeno 3-5):
  - `/grazie` → "Grazie per averci scelto! Se hai bisogno di altro, siamo qui. ⭐"
  - `/orari` → "I nostri orari sono: [orari]. Ti aspettiamo!"
  - `/dove` → "Ci trovi in [indirizzo]. Ecco la mappa: [link Google Maps]"
  - `/preventivo` → "Per un preventivo gratuito, puoi compilare il form sul nostro sito: [URL pagina contatti]"
  - `/info` → "Ecco i nostri servizi principali: [lista servizi]. Visita [URL] per i dettagli!"
- [ ] **Etichette** create: Nuovo contatto, Preventivo richiesto, Cliente attivo, Da richiamare
- [ ] **Catalogo** (opzionale): inserire prodotti/servizi con foto, descrizione e prezzo

---

### 🎨 5.5 — Design Biglietti da Visita

**Cosa devi ottenere**: File PDF/PNG ad alta risoluzione (fronte + retro) pronto per la stampa in tipografia.

> **💬 COSA DIRE ALL'IA:**
> "Crea il design di un biglietto da visita professionale (fronte e retro) per:
> - Azienda: [nome]
> - Settore: [settore]
> - Contatti: [telefono, email, indirizzo, sito web]
> - Social: [URL social dal briefing]
> - Colori aziendali: [palette dal briefing]
> - Stile: coerente con il sito web che abbiamo creato [descrivere lo stile]
> - Font: [font del sito]
>
> Formato: 85mm x 55mm (standard europeo), 300 DPI, margini di sicurezza 3mm. Include un QR code che punta al sito web."

**Cosa consegnare al cliente:**
- File PDF pronto per stampa (CMYK se possibile)
- File PNG ad alta risoluzione (per invio digitale)
- Istruzioni: "Porta questo file in una tipografia o stampalo su Pixartprinting.it / Vistaprint.it"

---

### 🎨 5.6 — Firma Email Professionale

**Cosa devi ottenere**: Firma HTML pronta da incollare in Gmail/Outlook.

> **💬 COSA DIRE ALL'IA:**
> "Crea una firma email professionale in HTML per:
> - Nome: [nome referente]
> - Ruolo: [ruolo]
> - Azienda: [nome azienda]
> - Telefono: [telefono]
> - Email: [email]
> - Sito: [URL sito]
> - Social: [icone social con link]
> - Logo: [descrivi o allega]
> - Colori: [palette dal briefing]
>
> La firma deve:
> - Essere compatibile con Gmail e Outlook
> - Usare tabelle HTML inline (no CSS esterno)
> - Avere il logo incorporato come link a immagine ospitata online (non allegato)
> - Essere larga massimo 600px
> - Includere un piccolo banner o CTA opzionale"

**Come il cliente la installa:**
> "Per installare la firma email in Gmail:
> 1. Apri Gmail → Impostazioni (ingranaggio) → 'Visualizza tutte le impostazioni'
> 2. Scorri fino a 'Firma'
> 3. Clicca 'Crea nuova'
> 4. Incolla il codice HTML che ti ho inviato
> 5. Salva le modifiche"

---

### 🎨 5.7 — Banner Social (Facebook/LinkedIn)

> **💬 COSA DIRE ALL'IA:**
> "Crea un banner/copertina per [Facebook / LinkedIn] per [nome azienda].
> - Dimensioni Facebook: 820x312 px
> - Dimensioni LinkedIn: 1128x191 px
> - Colori: [palette dal briefing]
> - Deve includere: logo, slogan/USP breve, eventualmente contatti
> - Stile: coerente con il sito web"

---

### 🎨 5.8 — Template Post Social

> **💬 COSA DIRE ALL'IA:**
> "Crea 2 template per post social (formato 1080x1080 px per Instagram/Facebook) per [nome azienda].
> - Template 1: Post informativo/promozionale (per promuovere un servizio)
> - Template 2: Post con citazione/testimonianza del cliente
> - Colori: [palette]
> - Font: [font del sito]
> - Includere: spazio per il logo, area testo personalizzabile"

---

### 🎨 5.9 — QR Code Brandizzato

**Cosa fare:**
1. Vai su https://www.qrcode-monkey.com/ (gratuito, con logo)
2. Inserisci l'URL del sito del cliente
3. Nella sezione "Set Colors": usa i colori del brand
4. Nella sezione "Add Logo": carica il logo del cliente
5. Scarica in alta risoluzione (PNG 2000x2000)
6. Consegna al cliente con istruzioni su dove usarlo (biglietti da visita, volantini, vetrina)

---

### 🎨 5.10 — Volantino / Flyer Digitale

> **💬 COSA DIRE ALL'IA:**
> "Crea il design di un volantino/flyer digitale per [nome azienda].
> - Formato: A5 (148x210mm) o A4, verticale
> - Stampa e digitale (social/WhatsApp)
> - Contenuto: presentazione azienda, servizi principali, contatti, QR code al sito
> - Colori: [palette]
> - Stile: coerente con il sito
> - 300 DPI per stampa"

---

### 📝 5.11 — Testo di Presentazione Aziendale

> **💬 COSA DIRE ALL'IA:**
> "Basandoti sui seguenti dati del briefing, scrivi due versioni del testo di presentazione aziendale per [nome azienda]:
>
> **Dati:** [incolla i dati rilevanti: settore, USP, origin story, valori, target, problema che risolvono]
>
> 1. **Bio corta** (massimo 150 parole): perfetta per profili social, Google Business, firma email
> 2. **Bio lunga** (massimo 300 parole): perfetta per la pagina 'Chi Siamo' del sito, brochure, presentazioni
>
> Tono di voce: [dal briefing]. Includi keyword per la SEO locale: [città/regione dal briefing]."

---

### 📝 5.12 — Setup Email Professionale

**Cosa devi ottenere**: Email tipo info@nomeazienda.it funzionante.

**Procedura** (dipende dal provider hosting):

| Provider | Come si fa |
|---|---|
| **Aruba** | Pannello di controllo → Email → Crea casella |
| **SiteGround** | Site Tools → Email → Accounts → Create Account |
| **Hostinger** | hPanel → Email → Email Accounts → Create |
| **Register.it** | Area clienti → Servizi → Email → Gestisci |

Crea almeno:
- `info@dominio.it` (casella principale, da mostrare sul sito)
- `[nome]@dominio.it` (casella personale del titolare, opzionale)

**Cosa dire al cliente:**
> "Ho creato la tua email professionale: info@[dominio]. Ecco le credenziali di accesso: [inviale in modo sicuro]. Puoi usarla da webmail oppure configurarla nel tuo telefono/Gmail/Outlook. Ti mando le istruzioni per configurarla."

---

### 📊 5.13 — Google Analytics 4 (GA4) (TUTORIAL PASSO-PASSO)

**Procedura:**
1. Vai su https://analytics.google.com/ (assicurati di essere loggato con l'account Google).
2. Clicca sull'icona **Amministrazione** (ingranaggio in basso a sinistra).
3. Clicca su **Crea Account**. Nome dell'account: "Nome Azienda Cliente". Scorri e clicca Avanti.
4. **Crea Proprietà**. Nome proprietà: "[Nome Azienda] - Sito Web". Fuso orario: Italia. Valuta: Euro. Clicca Avanti.
5. Rispondi alle brevi domande sul settore dell'azienda e clicca su "Crea" (accettando i termini).
6. Nella schermata "Inizia a raccogliere i dati", clicca su **Web**.
7. Inserisci l'URL definitivo del sito (es. `www.nomeazienda.it`) e il Nome dello stream (es. "Traffico Sito"). Clicca "Crea stream".
8. Apparirà una finestra con le **Istruzioni per l'installazione**. Seleziona la scheda **Installa manualmente**.
9. Ti verrà mostrato un codice che inizia con `<!-- Google tag (gtag.js) -->` e contiene il tuo **Tag ID** (G-XXXXXXXXXX). Copia l'intero blocco di codice.
10. Apri TUTTI i file `.html` del sito e incolla questo codice ESATTAMENTE all'interno dei tag `<head>...</head>`. 
    *ATTENZIONE: Se hai installato un banner dei cookie (es. Iubenda/CookieYes), lo script di Analytics va inserito DOPO lo script del banner, altrimenti il tracciamento partirà prima che l'utente abbia dato il consenso!*

**Cosa chiedere al cliente:**
> "Ho configurato le statistiche di Google Analytics sul tuo sito. Per darti l'accesso alla dashboard (dove potrai vedere in tempo reale quanti visitatori hai), forniscimi un tuo indirizzo email Gmail. Ti aggiungerò come visualizzatore."


---

### 📊 5.14 — Google Search Console

**Procedura:**
1. Vai su https://search.google.com/search-console/
2. Aggiungi proprietà → Tipo "Prefisso URL" → inserisci l'URL del sito
3. Verifica tramite tag HTML (aggiungi il meta tag nel `<head>`)
4. Invia la Sitemap: `https://[dominio]/sitemap.xml`

**Nota:** Se non hai un sitemap.xml, generalo:

> **💬 COSA DIRE ALL'IA:**
> "Genera un file sitemap.xml per un sito con le seguenti pagine: [elenco URL]. Includi lastmod con la data di oggi, changefreq e priority."

---

### 📊 5.15 — Google Tag Manager (opzionale)

**Procedura:**
1. Vai su https://tagmanager.google.com/
2. Crea account e container (tipo: Web)
3. Copia i due snippet di codice
4. Inseriscili in tutte le pagine HTML (uno nel `<head>`, uno dopo l'apertura del `<body>`)
5. Questo prepara il sito per futuri pixel (Meta, TikTok, LinkedIn, ecc.) senza toccare il codice

---

### 📊 5.16 — Pixel Meta (Facebook/Instagram)

**Prerequisito**: Il cliente DEVE avere un account Meta Business Suite / Meta Ads.

**Cosa chiedere al cliente:**
> "Per configurare il Pixel Meta (per il tracciamento di Facebook e Instagram) ho bisogno che tu mi dia accesso al tuo account Meta Business Suite come partner, oppure che mi invii il codice del Pixel. Hai già un account Meta Ads attivo?"

**Procedura:**
1. Il cliente va su https://business.facebook.com/ → Gestione eventi → Pixel
2. Copia il codice del pixel
3. Inseriscilo nel `<head>` di tutte le pagine (o tramite Google Tag Manager)

---
---

<a id="fase-6"></a>
## FASE 6 — Setup Tecnico (Dominio, Hosting, GDPR)
**⏱️ Tempo stimato: 1-2 ore**

### 6.1 — Registrazione Dominio e Hosting su TopHost (TUTORIAL PASSO-PASSO)

Se il cliente parte da zero, TopHost è la soluzione all-in-one più economica in Italia (circa 15€/anno).

1. Vai su https://www.tophost.it/.
2. Nella barra di ricerca centrale, digita il dominio desiderato (es. `nomeazienda.it`) e clicca **Verifica**.
3. Se è disponibile, clicca **Aggiungi al carrello**.
4. Scegli il piano **TopWeb** (solitamente sufficiente per siti in HTML, PHP o WordPress base).
5. Procedi al Checkout. **ATTENZIONE SCUDO LEGALE: Fai compilare i dati direttamente al cliente dal suo computer, oppure usa esclusivamente l'email, l'intestazione e i dati di fatturazione del CLIENTE.** Il dominio e il server, per legge, DEVONO essere intestati a lui. Se li intesti a te stesso, diventi legalmente responsabile di qualsiasi file illegale il cliente carichi sul sito in futuro.
6. Completa l'acquisto (fai inserire la carta di credito direttamente al cliente). **METODO ASINCRONO:** Usa OBS Studio per registrare un breve video del tuo schermo in cui mostri al cliente esattamente quali bottoni cliccare per comprare il server. Mandagli il link del video e digli: "Segui questo video di 2 minuti per inserire la tua carta in sicurezza". Non usare MAI la tua carta o quella dei tuoi genitori.
7. Effettuato il pagamento, l'attivazione del dominio richiederà da 2 a 24 ore (propagazione DNS). Nel frattempo il sito non sarà visibile.

### 6.2 — Setup Hosting Gratuito per Siti Statici su Netlify (TUTORIAL PASSO-PASSO)

Se il sito che hai sviluppato è puro HTML/CSS/JS (nessun database, niente WordPress) e il cliente possiede già un dominio (es. su Aruba o Register), puoi ospitare il codice su **Netlify gratuitamente**.

1. Vai su https://www.netlify.com/ e fai login (puoi registrarti gratis con GitHub o Email).
2. Dalla dashboard, clicca sul bottone **Add new site** e seleziona **Deploy manually**.
3. Apri la cartella del tuo computer dove tieni i file finali del sito (assicurati che il file principale si chiami esattamente `index.html`). Trascinando l'intera cartella dentro il cerchio tratteggiato su Netlify.
4. Netlify caricherà i file e ti darà subito un URL provvisorio funzionante (es. `https://nome-random-123.netlify.app`).
5. **Associare il dominio del cliente:**
   - Clicca su **Domain settings** → **Add custom domain**.
   - Digita il dominio del cliente (es. `www.nomeazienda.it`) e conferma.
   - Netlify ti fornirà dei codici DNS (tipicamente un record A che punta a un IP e un record CNAME).
   - Accedi al pannello di gestione del dominio del cliente (es. l'area clienti di Aruba), entra nella sezione "Gestione DNS", elimina i vecchi record A/CNAME e inserisci quelli forniti da Netlify. Attendi 1-2 ore per la propagazione.
6. **Attivare l'HTTPS (Lucchetto verde sicuro):** Su Netlify, sotto "Domain settings", scorri fino in fondo alla sezione "HTTPS/SSL". Clicca **Verify DNS configuration** e poi **Provision Let's Encrypt certificate**. È completamente automatico e gratuito.

### 6.3 — GDPR, Privacy Policy e Cookie (TUTORIAL PASSO-PASSO)

Per legge (GDPR), ogni sito deve avere una Privacy Policy, una Cookie Policy e un banner di consenso. Non copiare mai i testi da altri siti. Usa servizi automatizzati.

**OPZIONE A: Utilizzo di CookieYes (GRATUITO, ideale per siti vetrina con < 5.000 visite/mese)**
1. Vai su https://www.cookieyes.com/ e clicca "Get Started for Free".
2. Registrati. Nella dashboard, inserisci l'URL del sito web del cliente.
3. Nel menu a sinistra, clicca **Cookie Banner**. Scegli il layout (consigliato il template "Box" in basso a sinistra) e personalizza i colori inserendo l'HEX primario del brand aziendale.
4. Vai su **Advanced Settings** e assicurati che la lingua sia forzata su Italiano.
5. In alto a destra, clicca su **Get Installation Code**. Copia lo snippet fornito.
6. Apri il file `index.html` (e le altre pagine) e incolla questo script **ESATTAMENTE sotto il tag di apertura `<head>`, PRIMA di inserire Analytics o qualsiasi altro script**. Questo permette a CookieYes di bloccare preventivamente i tracker se l'utente rifiuta i cookie.
7. **Per le Policy:** All'interno di CookieYes, usa il tool "Privacy Policy Generator", inserisci i dati anagrafici dell'azienda del cliente, genera la policy gratuita e inserisci il link ottenuto nel `<footer>` del sito.

**OPZIONE B: Utilizzo di Iubenda (A PAGAMENTO, obbligatorio per e-commerce, prenotazioni online, form complessi, Meta Pixel)**
1. Vai su https://www.iubenda.com/ e accedi.
2. Dalla dashboard, clicca sul pulsante **Inizia la generazione** e digita l'URL del sito.
3. **Fase 1 - Generazione Policy:** 
   - Clicca "Genera Privacy Policy".
   - Clicca "Aggiungi Servizio". Aggiungi man mano tutti i servizi che il sito usa (es. "Modulo di contatto", "Google Analytics 4", "Widget Video YouTube", "Google Fonts", "Widget Calendly"). 
   - Vai alla sezione "Dati del Titolare", compila TUTTI i dati dell'azienda (Nome, Via, P.IVA, Email di contatto).
   - Salva e procedi.
4. **Fase 2 - Cookie Solution (Il Banner):**
   - Clicca su "Genera Cookie Banner".
   - Personalizza esteticamente il banner per adattarlo al sito.
   - **FONDAMENTALE:** Assicurati che l'opzione "Blocco preventivo degli script" sia attiva (è essenziale per la legge europea). Salva.
5. **Integrazione nel codice:**
   - Iubenda ti darà due script. 
   - Lo script della **Cookie Solution** (il banner) va incollato nel `<head>` del sito, *prima* di ogni altro codice.
   - Gli script con i **Pulsanti Privacy/Cookie Policy** vanno inseriti nel tag `<footer>`. Cliccandoli, si aprirà un elegante popup nativo di Iubenda con i testi legali.
6. **Attivazione Licenza:** Il piano base costa circa 60€/anno o mensile a seconda dell'offerta in corso. Fai inserire la carta di credito al cliente affinché paghi e rinnovi autonomamente i suoi documenti legali.

---
---

<a id="fase-7"></a>
## FASE 7 — Testing e Controllo Qualità
**⏱️ Tempo stimato: 1-2 ore**

### 7.1 — Test Funzionale

| Cosa testare | Come testare | ✅ |
|---|---|---|
| Tutti i link interni | Clicca ogni link, verifica che porti alla pagina giusta | [ ] |
| Link esterni (social, Maps) | Verifica che si aprano in nuova scheda (`target="_blank"`) | [ ] |
| Form di contatto | Compila e invia un test, verifica che l'email arrivi | [ ] |
| Pulsante telefono | Da mobile, clicca "Chiama Ora" — deve aprire il dialer | [ ] |
| Pulsante WhatsApp | Verifica che apra WhatsApp con messaggio pre-compilato | [ ] |
| Pulsante email | Verifica che apra il client email con destinatario precompilato | [ ] |
| Menu hamburger | Apri/chiudi il menu su mobile — nessun bug visivo | [ ] |
| Mappa Google Maps | Verifica che carichi e punti al luogo corretto | [ ] |
| Immagini | Tutte le immagini caricano? Nessuna rotta? | [ ] |

### 7.2 — Test Cross-Browser

Testa il sito su:
- [ ] Chrome (desktop + mobile)
- [ ] Firefox
- [ ] Safari (se hai accesso a Mac/iPhone)
- [ ] Edge
- [ ] Samsung Internet (browser Android più usato dopo Chrome)

### 7.3 — Test Performance

> [!NOTE]
> Se il cliente ha richiesto esplicitamente un "Design Immersivo" (es. con GSAP, Three.js o librerie di animazione pesanti), è fisiologico non raggiungere 90+ su PageSpeed. Un punteggio di 70-80 su mobile è il trade-off accettabile per avere un design spettacolare. Segnalalo preventivamente al cliente.

1. Vai su https://pagespeed.web.dev/
2. Inserisci l'URL del sito
3. **Obiettivi minimi:**
   - Performance: ≥ 90 (mobile), ≥ 95 (desktop)
   - Accessibility: ≥ 90
   - Best Practices: ≥ 90
   - SEO: ≥ 95

Se il punteggio è basso:

> **💬 COSA DIRE ALL'IA:**
> "Il mio sito ha ottenuto un punteggio di [X] su Google PageSpeed Insights. Ecco i problemi segnalati: [incolla i suggerimenti di PageSpeed]. Correggi il codice per risolvere questi problemi, mantenendo la struttura e il design attuali."

### 7.4 — Test SEO

1. Vai su https://www.seobility.net/en/seocheck/
2. Inserisci l'URL
3. Verifica: meta tags, heading structure, alt images, mobile friendly

### 7.5 — Test Accessibilità

1. Vai su https://wave.webaim.org/
2. Inserisci l'URL
3. Correggi errori di contrasto, alt mancanti, label mancanti

---
---

<a id="fase-8"></a>
## FASE 8 — Lancio e Go-Live
**⏱️ Tempo stimato: 1-2 ore**

### Checklist Pre-Lancio

- [ ] Tutti i testi sono definitivi (nessun placeholder o Lorem Ipsum)
- [ ] Tutte le immagini sono definitive e ottimizzate
- [ ] Logo inserito in header, footer e favicon
- [ ] Form di contatto testato e funzionante
- [ ] Google Analytics installato e verificato
- [ ] Search Console configurata e sitemap inviata
- [ ] Privacy Policy e Cookie Policy inserite e linkate
- [ ] Cookie banner funzionante
- [ ] Certificato SSL attivo (HTTPS, lucchetto verde)
- [ ] robots.txt presente
- [ ] Favicon visibile nella tab del browser
- [ ] Meta tags SEO compilati su tutte le pagine
- [ ] Open Graph tags presenti (condivisione social)
- [ ] Tutti i link verificati (nessun 404)
- [ ] File HTML validato (https://validator.w3.org/)
- [ ] Test responsive completato su tutti i breakpoint
- [ ] Test cross-browser completato

### Procedura di Go-Live

1. Carica tutti i file sul server hosting via FTP (FileZilla) o via pannello di controllo
2. Verifica che il dominio punti all'hosting (DNS propagato — può servire fino a 48h)
3. Testa l'URL definitivo nel browser
4. Forza il refresh della cache (Ctrl+Shift+R)
5. Ri-testa tutto dalla checklist funzionale (Fase 7.1) sull'URL live

---
---

<a id="fase-9"></a>
## FASE 9 — Consegna al Cliente e Formazione
**⏱️ Tempo stimato: 30 min - 1 ora**

### 9.1 — Preparazione pacchetto consegna

Crea una cartella `consegna/` con:
```
consegna/
├── credenziali/
│   ├── accesso-hosting.txt
│   ├── accesso-email.txt
│   ├── accesso-analytics.txt
│   └── accesso-search-console.txt
├── grafiche/
│   ├── logo/ (tutte le versioni)
│   ├── biglietti-da-visita.pdf
│   ├── firma-email.html
│   ├── banner-social/
│   ├── template-post/
│   ├── qr-code.png
│   └── flyer.pdf
├── testi/
│   ├── bio-corta.txt
│   └── bio-lunga.txt
├── codice-sorgente/
│   └── (copia completa del sito)
└── guida-cliente.pdf
```

### 9.2 — Messaggio di consegna

> **💬 COSA DIRE AL CLIENTE:**
> "🎉 Il tuo sito è online! Ecco il riepilogo di tutto quello che è stato fatto:
>
> **Sito Web**: [URL]
> **Google Business Profile**: ✅ ottimizzato
> **Google Analytics**: ✅ attivo — link: [URL dashboard]
> **WhatsApp Business**: ✅ configurato
> **Materiali grafici**: ✅ biglietti, firma email, banner social, QR code
> [lista tutti i servizi completati]
>
> Ti invio il pacchetto completo con tutte le credenziali, i file grafici e il codice sorgente.
>
> Se hai un CMS: ti organizziamo una breve sessione di formazione (15-20 min) per insegnarti a gestire i contenuti in autonomia.
>
> Per qualsiasi domanda nei prossimi 7 giorni, scrivimi pure — è inclusa l'assistenza post-lancio."

### 9.3 — Documentazione Portfolio (da fare SEMPRE)

Ogni sito consegnato va documentato immediatamente, prima che tu lo dimentichi. Crea una cartella `_PORTFOLIO/` nel tuo Drive aziendale e per ogni progetto salva:

- [ ] **2-3 screenshot** del sito finito (desktop + mobile)
- [ ] **URL definitivo** del sito online
- [ ] **Case study in 3 righe** (copia questo template e compilalo):
  ```
  Cliente: [Nome / Settore]
  Obiettivo: [cosa doveva fare il sito]
  Risultato: [cosa abbiamo consegnato, es. sito vetrina con GA4, GBP ottimizzato, biglietti da visita]
  ```
- [ ] **Consenso** del cliente a usarlo come riferimento nel tuo portfolio (chiediglielo nel messaggio di consegna, quasi tutti dicono sì)

> 💡 **Perché farlo**: il tuo portfolio è la tua principale arma di vendita. Un potenziale cliente che vede 5 siti reali già online vale più di qualunque descrizione dei tuoi servizi.

---
---

<a id="fase-10"></a>
## FASE 10 — Post-Lancio e Manutenzione

### Manutenzione a Consumo (proponi SEMPRE al momento della consegna)

Nessun piano mensile fisso: ogni intervento richiesto dal cliente dopo la consegna si paga singolarmente, secondo il Tariffario Manutenzione a Consumo del listino prezzi in vigore.

> 💡 **Come proporlo**: *"Il sito è tuo e funziona da solo. Se in futuro ti serve una modifica — un testo, un'immagine, un aggiornamento — mi scrivi e ti quoto l'intervento in base al tariffario, senza abbonamenti."*

---

### Primi 7 giorni (assistenza inclusa)
- Monitora Google Analytics per verificare che il tracciamento funzioni
- Controlla Search Console per errori di indicizzazione
- Rispondi rapidamente a segnalazioni del cliente

### Dopo 30 giorni
- Verifica posizionamento SEO (cerca le keyword principali su Google)
- Controlla PageSpeed per eventuali regressioni
- Proponi al cliente un piano di manutenzione mensile (se lo offri)

### Manutenzione periodica (se concordata)
- Aggiornamenti sicurezza (CMS, plugin)
- Backup mensile
- Report traffico mensile
- Ottimizzazione contenuti SEO
- Aggiornamento contenuti

---
---

<a id="appendice-a"></a>
## APPENDICE A — Prompt di Supporto per l'IA

### Correzione bug specifico
```
Nel file [nome-file], alla riga circa [N], ho questo problema:
[descrizione dettagliata del bug — cosa vedo vs cosa dovrei vedere].
Il sito è [URL se online] / ecco il codice attuale della sezione interessata:
[incolla il codice].
Correggilo senza cambiare il resto del file.
```

### Aggiunta nuova sezione
```
Aggiungi una nuova sezione al file [pagina.html] dopo la sezione [nome sezione esistente].
La nuova sezione deve contenere: [descrizione].
Usa lo stesso stile grafico e le stesse classi CSS del resto del sito.
Deve essere responsive come il resto del sito.
Genera sia l'HTML della sezione che l'eventuale CSS aggiuntivo.
```

### Ottimizzazione performance
```
Il mio sito ha ottenuto [X] su PageSpeed Insights.
Ecco i problemi principali: [lista].
Ecco il codice attuale di [file problematico]: [incolla codice].
Ottimizzalo per migliorare il punteggio senza cambiare il design visivo.
```

### Aggiunta nuova pagina
```
Crea una nuova pagina [nome-pagina.html] per il sito di [nome azienda].
La pagina deve avere lo stesso header, footer, navigazione e stile grafico delle altre pagine.
Contenuto della pagina: [descrizione dettagliata].
Ecco il file index.html come riferimento per lo stile: [incolla o allega].
```

### Creazione articolo blog SEO
```
Scrivi un articolo blog ottimizzato SEO per il sito di [nome azienda] ([settore]) a [città].
Keyword target: [keyword principale].
Lunghezza: 800-1200 parole.
Struttura: H1 (titolo) + almeno 3 H2 + H3 dove opportuno.
Tono di voce: [dal briefing].
Includi: meta title (max 60 caratteri), meta description (max 155 caratteri).
Genera l'HTML completo pronto per essere inserito nel template del blog.
```

---
---

<a id="appendice-b"></a>
## APPENDICE B — Checklist Finale Pre-Consegna

Spunta ogni voce prima di consegnare:

### Sito Web
- [ ] Tutte le pagine completate e testate
- [ ] Responsive su tutti i breakpoint
- [ ] Cross-browser testato
- [ ] Performance ≥ 90 su PageSpeed
- [ ] SEO ≥ 95 su PageSpeed
- [ ] Accessibility ≥ 90 su PageSpeed
- [ ] Form funzionante
- [ ] SSL attivo (HTTPS)
- [ ] robots.txt + sitemap.xml presenti
- [ ] Favicon funzionante
- [ ] Nessun Lorem ipsum residuo
- [ ] Nessuna immagine placeholder

### Setup IA e Servizi
- [ ] Fase 00: Prompt personalizzati e setup IA per il cliente consegnati (se concordato)
- [ ] Google Maps — pin corretto
- [ ] Google Business Profile — ottimizzato (se selezionato)
- [ ] LinkedIn Company Page — creata (se selezionato)
- [ ] WhatsApp Business — configurato (se selezionato)
- [ ] Biglietti da visita — file consegnato (se selezionato)
- [ ] Firma email — HTML consegnato + istruzioni (se selezionato)
- [ ] Banner social — file consegnati (se selezionato)
- [ ] Template post — file consegnati (se selezionato)
- [ ] QR code — file consegnato (se selezionato)
- [ ] Flyer/Volantino — file consegnato (se selezionato)
- [ ] Bio aziendale — testi consegnati (se selezionato)
- [ ] Email professionale — configurata (se selezionato)
- [ ] GA4 — installato e verificato (se selezionato)
- [ ] Search Console — configurata (se selezionato)
- [ ] Tag Manager — installato (se selezionato)
- [ ] Pixel Meta — installato (se selezionato)

### Documentazione
- [ ] Pacchetto consegna preparato
- [ ] Credenziali inviate in modo sicuro
- [ ] File sorgente consegnato

---
---

<a id="appendice-c"></a>
## APPENDICE C — Template Messaggi per il Cliente

### Messaggio 0: Kickoff strutturato (da inviare subito dopo aver analizzato il briefing)
```
Ciao [Nome]! 🚀

Ho analizzato il tuo briefing nel dettaglio e sono pronto a iniziare.
Ecco la timeline del progetto:

📅 Avvio sviluppo: [data]
🎨 Prima bozza: entro [data — solitamente 5-7 giorni lavorativi]
💬 Tuo feedback: ti chiedo di rispondermi entro [3-5 giorni] dalla bozza
🔧 Revisioni e rifinitura: [2-4 giorni]
🚀 Go-live stimato: [data]

Per procedere ho bisogno che mi invii:
- [Lista materiali mancanti — logo, foto, testi, ecc.]

Puoi inviarmeli via [WhatsApp/email] entro [data]?

Se hai domande o vuoi modificare qualcosa rispetto a quanto hai scritto nel briefing, è il momento giusto per dirmelo — una volta avviato lo sviluppo, le modifiche strutturali richiedono più tempo.

Al lavoro! 💪
```

### Messaggio 1: Conferma ricezione briefing
```
Ciao [Nome]! ✅

Ho ricevuto il tuo briefing e l'ho analizzato nel dettaglio — ottimo lavoro nella compilazione!

Per procedere con lo sviluppo ho bisogno che mi invii:
- [Lista materiali mancanti]

Puoi inviarmeli via [WhatsApp/email] entro [data].

Nel frattempo inizio già a lavorare alla struttura e al design del sito.
Ti aggiorno tra [X giorni] con la prima bozza!
```

### Messaggio 2: Richiesta materiale mancante
```
Ciao [Nome]! 👋

Per completare il sito mi mancano ancora questi materiali:
1. [Materiale 1]
2. [Materiale 2]
3. [Materiale 3]

Riesci a inviarmeli entro [data]? In alternativa posso procedere con [soluzione alternativa] e sostituirli quando li avrai pronti.

Grazie!
```

### Messaggio 3: Invio bozza per approvazione
```
Ciao [Nome]! 🎨

La prima versione del sito è pronta per la tua revisione!

🔗 Link: [URL di anteprima]

Guardalo sia da computer che da cellulare e dimmi:
1. Ti piace il design generale? (colori, stile, atmosfera)
2. I testi vanno bene o vuoi modificarne qualcuno?
3. C'è qualcosa da aggiungere, togliere o spostare?

Prenditi il tempo che ti serve. Una volta approvato, procedo con gli ultimi dettagli e il lancio online!
```

### Messaggio 4: Richiesta verifica Google Business
```
Ciao [Nome]! 📍

Ho configurato il tuo profilo Google Business. Per attivarlo definitivamente Google ha bisogno di una verifica.

Riceverai [una cartolina postale / un SMS / un'email] da Google con un codice di verifica. Quando lo ricevi, mandamelo e lo inserisco io.

⚠️ Non buttare la cartolina! Il codice è all'interno.
```

---

<a id="appendice-d"></a>
## APPENDICE D — Mappa Operativa Domanda per Domanda (Soluzioni e Azioni)

Questa sezione ti spiega **esattamente come tradurre ogni singola risposta del form in un'azione concreta** sul sito. Quando leggi il briefing compilato dal cliente, usa questa mappa come "traduttore" tecnico/creativo.

### SEZIONE 1: Contesto del Progetto e Obiettivi
* **Obiettivo del sito (Lead, Vetrina, Prenotazioni, Blog)**: Guida l'architettura. Se Lead: inserisci un form di contatto in bella vista già nella prima schermata. Se Prenotazioni: metti in primo piano il widget Calendly/Booksy.
* **Azione principale (Call To Action)**: Questa sarà la tua CTA principale. Falla di un colore in forte contrasto (es. giallo o arancio su blu) e ripetila nell'header (in alto a destra), nella hero section e alla fine di ogni pagina.
* **Sito attuale e Competitor**: Apri tutti i link. Fai uno screenshot del sito attuale e dei competitor. Il tuo design DEVE essere visivamente superiore e più moderno dei competitor. Nota i loro punti deboli (es. lenti da mobile) e assicurati che il tuo non li abbia.
* **Siti che piacciono / NON piacciono**: È il tuo "moodboard" iniziale. Usa queste reference per scegliere il layout dei blocchi e lo stile delle animazioni. Non usare mai gli stili detestati.
* **Entro quando (Urgenza)**: Definisce le priorità. Se urgente, riduci le animazioni complesse e vai su template/layout solidi e testati per velocizzare il rilascio.

### SEZIONE 2: Anagrafica e Contatti
* **Nome, Email, Telefono, Indirizzo**: Inseriscili subito come variabili nel tuo CSS/JS o come snippet. Li ripeterai in Header, Footer e pagina Contatti.
* **Anno fondazione**: Usalo per creare trust. Esempio di copy: "Esperienza garantita dal [Anno]" oppure crea un badge grafico.
* **Orari**: Inseriscili nel footer e usali per configurare la scheda Google Business Profile.
* **Social**: Prepara le icone nel footer e verifica che i link funzionino (falli aprire in `target="_blank"`).
* **Referente**: Usa sempre il nome di questa persona per le email e i messaggi WhatsApp di aggiornamento.

### SEZIONE 3: Mercato, Target e SEO
* **B2C o B2B**: Determina il tono di voce e il design. B2B richiede design più corporate, sobrio, font classici. B2C permette più creatività, emozioni, layout destrutturati e colori vivaci.
* **Area Geografica e Città**: Cruciale per la Local SEO. Il tag `<title>` della home DEVE essere "Tuo Servizio a [Città] | Nome Azienda". Ripeti la città nei tag H1/H2 e nel footer.
* **Età e Professione del cliente**: Adatta la UX. Per Under 18: layout dinamici, stile "gaming" o "TikTok", tempi di attenzione brevi, focus visivo immediato (video brevi, pochi testi). Per under 30: UI moderna, dark mode, molte animazioni. Per over 60: Font grandi (minimo 18px), altissimo contrasto testo/sfondo, navigazione semplificata, bottone "Chiama" gigante.
* **Problema concreto del cliente**: **Questa è la tua Headline (H1) nella home.** Non scrivere "Benvenuti", scrivi la soluzione esatta al loro problema.
* **Tempo di decisione**: Se "Acquisto d'impulso", metti in vista prezzi (se ci sono) e CTA rapide. Se "Mesi", inserisci molte FAQ, file scaricabili, blog, recensioni lunghe e casi studio per educare il cliente.
* **Dispositivo (Smartphone vs Desktop)**: Se "Smartphone", usa un approccio mobile-first: sticky bottom bar per il tasto chiama, form semplificati a un campo e riduci il peso delle immagini.
* **Campagne Ads**: Se fanno Ads, la Home o la Landing Page deve essere ultra-focalizzata sulla conversione (zero distrazioni, no link di uscita inutili).

### SEZIONE 4: Valore del Brand e Competitività
* **Perché scegliere TE (USP)**: Questa è la sub-headline (sotto l'H1 della home) e deve essere ripetuta/spiegata nella pagina "Chi Siamo".
* **Frustrazioni della concorrenza**: Usa la tecnica del "Pain-Agitate-Solve" nei testi. Inserisci una sezione "Perché noi siamo diversi" mettendo in risalto l'esatto opposto di queste frustrazioni (es. "Stanco dei ritardi? Noi garantiamo in 24h").
* **Garanzia / Bonus**: Mettilo ben visibile in un banner appena sotto l'header o vicino a ogni bottone di acquisto/contatto (es. icona di uno scudo con "Sopralluogo gratuito").
* **3 Aggettivi**: Dalli in pasto all'IA (Midjourney/DALL-E) quando generi immagini o all'IA copywriter quando scrivi i testi per mantenere la coerenza emotiva.
* **Storia e Metodo**: Sono il cuore della pagina "Chi Siamo" e "Servizi". Non lasciarle piatte, trasformale in uno storytelling accattivante.
* **Recensioni**: Se ci sono, crea uno slider/carosello nella home page (social proof). Se non ci sono, ometti la sezione (non mettere finti lorem ipsum).
* **Casi Studio / Portfolio**: Se hanno materiale, crea una galleria con filtri (Masonry) o una pagina dedicata "I nostri lavori" per creare autorevolezza visiva.

### SEZIONE 5: Tipologia e Struttura
* **Tipologia progetto (Landing, Vetrina, Completo)**: Determina l'alberatura. Se Vetrina, mantieniti strettamente su Home, Servizi, Contatti per stare nel budget.
* **Lingue**: Se multilingua, prevedi subito nel codice una struttura a directory (es. cartella `/en/`) o un sistema basato su JSON per le traduzioni. Inserisci il language switcher nell'header.
* **Gestione Autonoma (Autonomia)**: Implementa la logica decisionale del Prompt Master: se "No", applica il Ramo 0 (sito statico con `content.json` leggero per la manutenzione). Se "Sì", segui l'albero decisionale per scegliere il CMS corretto in base all'hosting del cliente (A/B1/B2/C).

### SEZIONE 6: Contenuti e Copywriting
* **Chi scrive i testi**: Se devi scriverli tu (o ottimizzarli), passa le risposte del briefing alla tua IA per farti generare i blocchi di testo definitivi (Vedi Fase 2).
* **Tono di voce**: "Tu" o "Lei"? Professionale o Amichevole? Imposta sempre questo parametro nel prompt dell'IA copywriter.
* **Blog**: Se richiesto, crea il template pagina-articolo (layout di lettura pulito, tipografia leggibile, barra laterale, bottoni social) e la pagina archivio.

### SEZIONE 7: Identità Visiva e Logo
* **Logo Esistente**: Se ce l'ha, scaricalo e usalo come fulcro per estrapolare la palette colori (se non ne ha una definita).
* **Da creare (Elementi, Stile, Esclusioni)**: Usa le risposte per generare il prompt esatto per l'IA grafica (es. Midjourney) o per guidare il tuo lavoro manuale su Illustrator (Vedi Fase 4). Se "Lascio fare a te", basati sui 3 aggettivi.

### SEZIONE 8: Colori e Palette
* **Colori aziendali esistenti**: Il prompt master usa il formato OKLCH (non HEX) per tutti i colori. Procedura: 1) Prendi il codice HEX del cliente (es. `#1A6B3C`). 2) Convertilo in OKLCH su **oklch.com** (strumento gratuito). 3) Inseriscilo in `tokens.css` come `--color-primary: oklch(L C H);`. MAI inserire valori HEX direttamente nei file CSS.
* **Stile colori scelti**: Se scegli tu la palette, usa https://coolors.co/ o https://oklch.com/ per scegliere e convertire. Per Dark Mode: usa `oklch(0.15 0 0)` come sfondo base (equivalente di ~#1a1a1a). Controlla sempre il rapporto di contrasto APCA su https://www.myndex.com/APCA/.

### SEZIONE 9: Tipografia (Font)
* **Font aziendale**: Scaricalo da Google Fonts. Assicurati di usare `@font-face` o importarlo via `<link>`.
* **Stile tipografico**: 
  * Classico (Serif): Lora, Playfair Display, Merriweather.
  * Moderno (Sans-Serif): Inter, Roboto, Poppins, Montserrat.
  * Creativo/Vintage: Space Grotesk, Courier Prime, ecc.

### SEZIONE 10: Stile e Dinamicità del Sito
* **Profilo e Categorie di effetti (Intro, Hover, Scroll, Parallasse)**:
  * **"Velocità e Sobrietà"**: zero librerie JS esterne. Solo transizioni CSS su `:hover` e CSS Scroll-Driven Animations native (`animation-timeline: scroll()`). Nessun GSAP, nessun Lenis.
  * **"Equilibrio Professionale"**: CSS Scroll-Driven Animations native per fade-in e reveal. JS solo se un caso d'uso specifico non è coperto dal CSS nativo. Nessun GSAP, nessun Lenis.
  * **"Design Immersivo"**: stack autorizzato **Lenis** (smooth scroll) + **GSAP + ScrollTrigger** (animazioni) + **Three.js** (solo se serve il 3D). ⚠️ **Framer Motion è vietato** — è una libreria React, incompatibile con l'architettura Vanilla JS del prompt master.

### SEZIONE 11: Materiale Fotografico e Video
* **Gestione foto**: Se usi AI o Stock, usa lo "stile visivo" richiesto come prompt di ricerca. Ricorda SEMPRE di comprimere le immagini prima di inserirle nel sito (WebP, sotto i 200kb).
* **Video**: Se "Video di sfondo", metti in testa alla home un `<video autoplay loop muted playsinline>` in CSS cover.
* **Galleria fotografica**: Se richiesta, integra una libreria leggera come PhotoSwipe, Lightbox o GLightbox.

### SEZIONE 12: Funzionalità e Integrazioni
* **Modulo Contatti**: Crea il codice backend (es. PHP form mailer) oppure usa un servizio serverless gratuito (Formspree, EmailJS).
* **Pulsanti WhatsApp / Chiama**: Mettili `href="https://wa.me/39Numerotelefono"` (WhatsApp) e `href="tel:+39Numerotelefono"` (Telefono).
* **Mappa**: Genera l'iframe incorporato da Google Maps e inseriscilo nel footer o pagina Contatti.
* **FAQ**: Usa i tag HTML nativi `<details>` e `<summary>` per creare accordion veloci, accessibili e SEO-friendly.
* **Prenotazioni (Calendly/Booksy)**: Chiedi al cliente il suo link e inseriscilo nel codice dell'iframe fornito dal servizio, magari aprendolo in una Modale (Popup).

### SEZIONE 13: Dominio, Hosting e Servizi Legali
* **Dominio/Hosting (Se da zero)**: Vai su TopHost (o provider equivalente) e procedi con l'acquisto guidato insieme al cliente (Fase 6). 
* **Credenziali**: Quando ti arrivano, salvale immediatamente nel tuo gestore password.
* **GDPR/Cookie**: Inserisci lo script di Iubenda (se ha budget) o CookieYes (se gratuito) nel `<head>` del sito. Crea i link "Privacy Policy" e "Cookie Policy" nel footer e assicurati che aprano le policy generate (Fase 6.3).

### SEZIONE 14: Servizi Gratuiti Inclusi
* **Presenza Online (Google, LinkedIn, WA)**: Per ogni checkbox spuntata dal cliente, esegui i task elencati nella Fase 5.1 - 5.4 di questo manuale.
* **Materiali Grafici (Biglietti, Firma, Logo ecc.)**: Genera i design seguendo le guide in Fase 5.5 - 5.10. Salva tutto nella cartella `/consegna/grafiche/`.

### SEZIONE 15: Note Finali
* **Note extra**: Verifica di non aver saltato nessuna richiesta speciale inserita in questo campo.
* **Canale di contatto preferito**: Rispetta la scelta. Se ha indicato WhatsApp, non mandargli le bozze via email (potrebbe non leggerle) e viceversa.

---

*Ultimo aggiornamento: Luglio 2026*
