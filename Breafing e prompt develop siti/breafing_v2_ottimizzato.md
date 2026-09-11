# 🔧 ISTRUZIONI PER GEMINI — Creazione Google Form

> **SCOPO DI QUESTO DOCUMENTO**: Questo file è la specifica completa e definitiva di un Modulo Google (Google Form) per la raccolta dati di briefing per la progettazione di siti web. Ogni sezione, domanda, tipo di risposta e logica condizionale è descritta con precisione assoluta.
>
> **ISTRUZIONI**: Leggi questo intero documento. Poi crea un Google Form (tramite Google Apps Script o manualmente) che sia **identico** a quanto descritto qui. Rispetta OGNI dettaglio: titolo, descrizioni, tipi di domanda, opzioni, logiche condizionali, campi obbligatori.

---

## Impostazioni Generali del Form

| Parametro | Valore |
|---|---|
| **Titolo del Form** | Modulo di Briefing — Progettazione Sito Web |
| **Descrizione del Form** | Questo questionario serve a raccogliere ogni singolo dettaglio necessario per sviluppare un sito web perfetto, performante e in linea con le tue esigenze. Rispondi con la massima precisione: ogni risposta guida direttamente il risultato finale. Il tempo stimato di compilazione è 15-20 minuti. |
| **Tema / Colore** | Colore primario scuro e professionale (es. #1A1A2E o #0F0F23) |
| **Font del Form** | Default Google Forms |
| **Raccolta email** | Sì — raccogli automaticamente l'indirizzo email del compilatore |
| **Limita a 1 risposta** | No (il cliente potrebbe dover ricompilare) |
| **Mostra barra di avanzamento** | Sì |
| **Messaggio di conferma** | ✅ Grazie! Il tuo briefing è stato ricevuto con successo. Ti contatteremo entro 48 ore lavorative per avviare il progetto. |

---
---

# SEZIONE 1: Contesto del Progetto e Obiettivi

> **Descrizione della sezione nel Form**: Prima di tutto, devo capire COSA vuoi ottenere con questo sito. Le risposte a queste domande guidano ogni singola scelta successiva.

---

### Domanda 1
- **Testo**: Qual è l'obiettivo principale del sito web?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Raccogliere richieste di contatto / preventivi (Lead Generation)
  - Mostrare chi sono e cosa faccio per farmi conoscere (Vetrina / Brand Awareness)
  - Ricevere prenotazioni o appuntamenti online
  - Fornire informazioni e risorse (Blog, portale informativo)
  - Altro (specificare nella domanda successiva)
- **Logica condizionale**: Nessuna

---

### Domanda 2
- **Testo**: Se hai scelto "Altro" alla domanda precedente, descrivilo qui:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No
- **Nota per il compilatore**: Scrivi liberamente qual è l'obiettivo che vuoi raggiungere.

---

### Domanda 3
- **Testo**: Qual è l'azione principale che l'utente deve compiere appena arriva sul tuo sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Chiamarti al telefono
  - Compilare un modulo di contatto / richiesta preventivo
  - Scriverti su WhatsApp
  - Acquistare un prodotto/servizio
  - Prenotare un appuntamento
  - Esplorare i tuoi lavori / portfolio
  - Altro (specificare nella domanda successiva)
- **Nota per il compilatore**: Questa è la "Call To Action" principale — il pulsante più importante del tuo sito.

---

### Domanda 4
- **Testo**: Se hai scelto "Altro" alla domanda precedente, descrivila qui:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 5
- **Testo**: Hai già un sito web attivo attualmente?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, è online e funzionante (inserisci l'URL nella domanda successiva)
  - Sì, ma è obsoleto o non funziona bene
  - No, è un progetto completamente nuovo
- **Nota per il compilatore**: Se esiste un sito attuale, lo analizzerò per capire cosa funziona e cosa no.

---

### Domanda 6
- **Testo**: Se hai già un sito, inserisci qui l'URL completo (es. www.tuonome.it):
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 7
- **Testo**: Inserisci gli URL di 2-3 siti web dei tuoi competitor diretti (quelli che il cliente vede come alternativa a te):
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Anche se non conosci gli URL esatti, scrivi il nome dell'attività concorrente. Li cercherò io. Questi mi servono per differenziarti visivamente e strategicamente.

---

### Domanda 8
- **Testo**: Inserisci gli URL di 2-3 siti web che ti piacciono esteticamente (anche di altri settori) e spiega brevemente PERCHÉ ti piacciono:
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Esempio: "www.esempio.com — mi piace perché è pulito, moderno e ha le animazioni fluide". Questo è uno degli input più preziosi per il design.

---

### Domanda 9
- **Testo**: Ci sono siti web il cui stile NON ti piace per niente? Inserisci URL o descrivi cosa detesti:
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Sapere cosa NON vuoi è importante quanto sapere cosa vuoi.

---

### Domanda 10
- **Testo**: Entro quando vorresti il sito web pronto e online?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Il prima possibile (urgente)
  - Entro 2-3 settimane
  - Entro 1 mese
  - Entro 2 mesi

---
---

# SEZIONE 2: Anagrafica e Contatti Aziendali

> **Descrizione della sezione nel Form**: Dati essenziali sulla tua attività. Queste informazioni appariranno direttamente nel sito (pagina contatti, footer, Google Maps, ecc.).

---

### Domanda 11
- **Testo**: Qual è il nome ufficiale della tua azienda o il tuo nome da professionista?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: Sì

---

### Domanda 12
- **Testo**: In che anno è stata fondata l'attività?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No
- **Nota per il compilatore**: Serve per costruire la narrativa del brand (es. "Dal 2005 al tuo servizio"). Se sei un freelance, indica l'anno in cui hai iniziato.

---

### Domanda 13
- **Testo**: Qual è l'indirizzo fisico della sede principale? (Verrà usato per Google Maps e la pagina Contatti)
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: Sì

---

### Domanda 14
- **Testo**: Qual è l'indirizzo Email ufficiale da mostrare ai clienti sul sito?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: Sì

---

### Domanda 15
- **Testo**: Qual è il numero di telefono principale per i contatti?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: Sì

---

### Domanda 16
- **Testo**: Quali sono gli orari di apertura / disponibilità da mostrare sul sito?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No
- **Nota per il compilatore**: Esempio: "Lun-Ven 9:00-18:00, Sab 9:00-13:00". Verranno usati nel sito, su Google Maps e su Google Business Profile.

---

### Domanda 17
- **Testo**: Inserisci gli URL dei tuoi profili social attivi (tutti quelli che usi):
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Inserisci uno per riga. Esempio: Facebook: https://facebook.com/tuapagina — Instagram: https://instagram.com/tuoprofilo — LinkedIn, TikTok, YouTube, ecc.

---

### Domanda 18
- **Testo**: Chi è il referente del progetto? (Nome, ruolo e contatto diretto per le comunicazioni tecniche)
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: Sì
- **Nota per il compilatore**: Esempio: "Mario Rossi — Titolare — 333 1234567". Questa è la persona con cui comunicherò direttamente durante lo sviluppo.

---
---

# SEZIONE 3: Mercato, Target e Posizionamento SEO

> **Descrizione della sezione nel Form**: Chi sono i tuoi clienti? Dove ti cercano? Queste risposte guidano la SEO, il tono di voce e la struttura del sito.

---

### Domanda 19
- **Testo**: La tua attività si rivolge a:
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Privati e consumatori finali (B2C)
  - Altre aziende e professionisti (B2B)
  - Entrambi (B2B + B2C)

---

### Domanda 20
- **Testo**: A quale area geografica puntiamo per la visibilità del sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Globale / Internazionale
  - Nazionale (Tutta Italia)
  - Regionale (specificare nella domanda successiva)
  - Città specifica / Local SEO (specificare nella domanda successiva)

---

### Domanda 21
- **Testo**: Se hai scelto "Regionale" o "Città specifica", scrivi qui il nome della regione o città:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 22
- **Testo**: Qual è la fascia d'età principale del tuo cliente ideale?
- **Tipo**: Scelta multipla (checkbox — può selezionare più opzioni)
- **Obbligatoria**: Sì
- **Nota per il compilatore**: Puoi inserire più di una o anche tutte se il cliente ideale è indifferente che età abbia.
- **Opzioni**:
  - Under 18
  - 18 – 25 anni
  - 26 – 40 anni
  - 41 – 60 anni
  - Over 60

---

### Domanda 23
- **Testo**: Qual è la professione o la categoria del tuo cliente ideale?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: Sì
- **Nota per il compilatore**: Esempi: liberi professionisti, mamme, studenti, aziende agricole, ristoratori, neo-sposi, ecc.

---

### Domanda 24
- **Testo**: Qual è il problema concreto che il tuo cliente risolve rivolgendosi a te?
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: Sì
- **Nota per il compilatore**: Esempio: "Ha il tetto che perde e non sa a chi affidarsi per una riparazione rapida e garantita". Più sei specifico, meglio comunicheremo il tuo valore nel sito.

---

### Domanda 25
- **Testo**: Quanto tempo impiega mediamente il tuo cliente per decidere di acquistare da te?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Acquisto d'impulso (decide in pochi minuti)
  - Qualche giorno di riflessione
  - Settimane (confronta più preventivi)
  - Mesi (decisione lunga e ponderata, spesso aziendale)

---

### Domanda 26
- **Testo**: I tuoi clienti ti cercano prevalentemente da:
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Smartphone (il sito deve essere perfetto su mobile)
  - Computer da scrivania / ufficio
  - Entrambi in egual misura
  - Non lo so

---

### Domanda 27
- **Testo**: Hai già un profilo Google Business (ex Google My Business) attivo su Google Maps?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, è attivo e aggiornato
  - Sì, ma è incompleto o non aggiornato
  - No, non ce l'ho
  - Non so cosa sia

---

### Domanda 28
- **Testo**: Hai campagne pubblicitarie a pagamento attive? (Google Ads, Meta Ads, ecc.)
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì (specificare la piattaforma nella domanda successiva)
  - No
  - Le ho avute in passato ma ora sono ferme

---

### Domanda 29
- **Testo**: Se hai campagne attive, su quale piattaforma?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No
- **Nota per il compilatore**: Es. Google Ads, Facebook/Instagram Ads, TikTok Ads, ecc.

---
---

# SEZIONE 4: Valore del Brand e Competitività

> **Descrizione della sezione nel Form**: Queste domande servono a capire cosa ti rende unico rispetto alla concorrenza. Sono fondamentali per scrivere testi efficaci e progettare un sito che convinca davvero il visitatore a scegliere te.

---

### Domanda 30
- **Testo**: In una frase sola, perché un cliente dovrebbe scegliere TE al posto della concorrenza?
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: Sì
- **Nota per il compilatore**: Non rispondere "qualità e professionalità" — lo dicono tutti. Pensa a qualcosa che SOLO tu puoi dire. Esempio: "Sono l'unico nella mia zona con certificazione XYZ e garantisco l'intervento entro 24 ore dalla chiamata."

---

### Domanda 31
- **Testo**: Qual è la frustrazione più grande che i tuoi clienti subiscono quando vanno dalla concorrenza?
- **Tipo**: Scelta multipla (checkbox)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Tempi d'attesa troppo lunghi o ritardi nelle consegne
  - Preventivi poco chiari o brutte sorprese sul prezzo finale
  - Lavori eseguiti male, prodotti difettosi o scarsa durata
  - Sentirsi abbandonati dopo l'acquisto (nessuna assistenza post-vendita)
  - Difficoltà a trovare soluzioni davvero personalizzate
  - Scarsa comunicazione e difficoltà a parlare con qualcuno
  - Altro (specificare nella domanda successiva)

---

### Domanda 32
- **Testo**: Se hai selezionato "Altro" alla domanda precedente, specificalo qui:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 33
- **Testo**: Offri una garanzia o un "Bonus" ai tuoi clienti per rassicurarli?
- **Tipo**: Scelta multipla (checkbox)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Prima consulenza, preventivo o sopralluogo gratuiti
  - Garanzia "Soddisfatti o Rimborsati" o reso facile
  - Reperibilità e supporto tecnico in tempi record
  - Un omaggio, uno sconto o un servizio extra nel primo acquisto
  - Nessuna garanzia particolare
  - Altro (specificare nella domanda successiva)

---

### Domanda 34
- **Testo**: Se hai selezionato "Altro" alla domanda precedente, specificalo qui:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 35
- **Testo**: Quali sono i 3 aggettivi con cui il cliente dovrebbe descrivere la tua attività guardando il sito?
- **Tipo**: Scelta multipla (checkbox — seleziona esattamente 3)
- **Obbligatoria**: Sì
- **Nota per il compilatore**: Seleziona ESATTAMENTE 3 opzioni.
- **Validazione**: Esattamente 3 risposte
- **Opzioni**:
  - Affidabile e Solida
  - Dinamica e Veloce
  - Elegante ed Esclusiva
  - Amichevole e Accogliente
  - Tecnologica e Innovativa
  - Creativa e Originale
  - Competente e Autorevole
  - Sostenibile e Attenta all'Ambiente
  - Altro (specificare nella domanda successiva)

---

### Domanda 36
- **Testo**: Racconta brevemente la storia della tua attività: come è nata, perché hai iniziato, cosa ti ha spinto.
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Anche 3-4 frasi bastano. La storia del fondatore è uno degli strumenti di marketing più potenti: crea fiducia e connessione emotiva con il visitatore del sito.

---

### Domanda 37
- **Testo**: Racconta in 2-3 frasi un dettaglio del tuo metodo di lavoro (o prodotto) di cui vai fiero, anche se i clienti non lo notano subito:
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Esempio: "Uso solo vernici ecologiche certificate, anche se costano il triplo. Il cliente non lo vede, ma la qualità dura il doppio."

---

### Domanda 38
- **Testo**: Hai recensioni o testimonianze dei tuoi clienti?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, su Google (specificare media stelle nella prossima domanda)
  - Sì, su Facebook
  - Sì, su TripAdvisor / Trustpilot / altra piattaforma
  - Sì, ma solo verbali o via messaggio (non su piattaforme pubbliche)
  - No, non ne ho ancora

---

### Domanda 39
- **Testo**: Se hai recensioni, qual è la media stelle e quante ne hai circa?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No
- **Nota per il compilatore**: Esempio: "4.8 stelle su Google, circa 45 recensioni"

---

### Domanda 40
- **Testo**: Hai già una Mission o una Vision aziendale scritta?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Sì (inseriscila nella domanda successiva)
  - No, non ce l'ho
  - Non so cosa siano

---

### Domanda 41
- **Testo**: Se hai una Mission/Vision, scrivila qui:
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No

---

### Domanda 42
- **Testo**: Hai casi studio, portfolio o esempi di lavori precedenti da mostrare nel sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, ho foto e materiale pronto da inviarti (te li invio)
  - Sì, ma devo ancora raccoglierlo e organizzarlo
  - No, non ne ho

---
---

# SEZIONE 5: Tipologia e Struttura del Sito Web

> **Descrizione della sezione nel Form**: Ora definiamo cosa deve contenere il sito: quante pagine, che tipo di progetto, quali contenuti.

---

### Domanda 43
- **Testo**: Che tipologia di progetto web dobbiamo realizzare?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Landing Page (Singola pagina per vendere un prodotto o raccogliere contatti)
  - Sito Vetrina Base (Struttura essenziale a 3 Pagine: Home, Servizi, Contatti)
  - Sito Web Completo (Sito multipagina complesso)

---

### Domanda 43b
- **Testo**: Qual è il budget indicativo che hai a disposizione per questo progetto?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Meno di €300
  - €300 – €600
  - €600 – €1.000
  - €1.000 – €2.000
  - Oltre €2.000
  - Non ho ancora un budget definito
- **Nota per il compilatore**: Non preoccuparti se non sei ancora sicuro: questa informazione ci serve solo per proporti la soluzione più adatta alle tue esigenze. Il preventivo definitivo te lo inviamo noi dopo aver analizzato il tuo briefing.

---

### Domanda 44
- **Testo**: Se hai scelto "Sito Vetrina Base", scrivi qui i ciò che offri che vorresti venga esposto:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 45
- **Testo**: Se hai scelto "Sito Web Completo", elenca tutte le pagine che desideri:
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Esempi: Home, Chi Siamo, Servizi (con sottopagine per ogni servizio), Portfolio/Galleria, Blog, FAQ, Contatti, Area Riservata, ecc.

---

### Domanda 46
- **Testo**: In quante lingue dovrà essere sviluppato il sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Solo Italiano
  - Italiano e Inglese
  - Altro (specificare nella domanda successiva)

---

### Domanda 47
- **Testo**: Se hai selezionato "Altro" per le lingue, scrivi quali ti servono:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 48
- **Testo**: Dopo la consegna, chi aggiornerà i contenuti del sito (testi, foto, articoli)?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Voglio essere autonomo e gestirlo io (mi serve un pannello di gestione semplice) **[Salto di sezione: vai a Domanda 48b]**
  - Se ne occuperà l'agenzia/professionista che me lo costruisce **[Salto di sezione: vai a Sezione 6]**
  - Non ho ancora deciso **[Salto di sezione: vai a Sezione 6]**

---

### Domanda 48b
- **Testo**: SE VUOI ESSERE AUTONOMO che tipo di autonomia ti serve nella pratica?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Solo aggiornare occasionalmente qualche testo o foto (es. orari, numeri di telefono)
  - Voglio gestire attivamente più pagine o scrivere articoli del blog regolarmente
  - Non so ancora valutare
  - Altro (specificare nella domanda successiva)
- **Nota per il compilatore**: Questa risposta determina se ti serve un vero pannello di amministrazione (più complesso da configurare e mantenere) o una soluzione più semplice e leggera per le piccole modifiche. Non c'è una risposta "migliore" in assoluto: dipende da quanto spesso prevedi di intervenire sul sito.

---
---

# SEZIONE 6: Contenuti e Copywriting

> **Descrizione della sezione nel Form**: Il testo è il cuore del sito web: è ciò che convince il visitatore a diventare cliente. Queste domande servono a capire come gestire la parte testuale.

---

### Domanda 49
- **Testo**: Chi scriverà i testi delle pagine del sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Li scrivo io e te li invio pronti
  - Li deve scrivere/ottimizzare chi mi fa il sito (basandosi sulle mie risposte a questo briefing)
  - Ho già una brochure, un depliant o dei testi esistenti da cui partire (te li invio)

---

### Domanda 50
- **Testo**: Qual è il tono di voce con cui vuoi parlare ai tuoi clienti nel sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Professionale e autorevole (linguaggio formale, "Lei")
  - Diretto e amichevole (linguaggio informale, "Tu")
  - Tecnico e specialistico (terminologia di settore)
  - Empatico e rassicurante (toni caldi e accoglienti)
  - Non saprei, decidi tu in base al mio settore

---

### Domanda 51
- **Testo**: Il sito dovrà avere un Blog o una sezione News?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, voglio pubblicare articoli regolarmente
  - Sì, ma solo per avere qualche contenuto SEO (pochi articoli, senza impegno fisso)
  - No, non mi interessa il blog

---

### Domanda 52
- **Testo**: Hai già testimonianze scritte (recensioni, messaggi di clienti soddisfatti) da inserire nel sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, te le invio
  - Sì, ma sono screenshot da piattaforme (Google, WhatsApp, ecc.)
  - No, non ne ho

---
---

# SEZIONE 7: Identità Visiva e Logo

> **Descrizione della sezione nel Form**: Il logo e l'identità visiva sono il "volto" della tua attività. Vediamo da dove partiamo.

---

### Domanda 53
- **Testo**: Possiedi già un logo aziendale ufficiale?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, ce l'ho in alta risoluzione e te lo invio (PNG senza sfondo o formato vettoriale SVG/AI) **[Salto di sezione: vai a Domanda 54]**
  - Sì, ma è vecchio e va ridisegnato/modernizzato **[Salto di sezione: vai a Domanda 55]**
  - No, devi progettarlo tu da zero **[Salto di sezione: vai a Domanda 55]**

---

### Domanda 54
- **Testo**: Esiste una guida di stile aziendale (brand book) o altri materiali coordinati (biglietti da visita, brochure, packaging)?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Sì, ho un brand book completo
  - Sì, ho alcuni materiali (biglietti da visita, brochure, ecc.)
  - No, non ho nulla di questo tipo
- **Nota per il compilatore**: Se esiste, inviamelo: il sito dovrà essere coerente con il materiale esistente.

---

### Domanda 55
- **Testo**: SE DEVO CREARE O RIDISEGNARE IL LOGO: Quale elemento principale deve rappresentare?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Le iniziali del nome dell'attività
  - Un'icona astratta o geometrica
  - Un oggetto specifico legato al mio mestiere (specificare nella domanda successiva)
  - Solo la scritta del nome (Logotipo)
  - Lascio fare alla tua creatività
- **Nota per il compilatore**: Lascia vuoto se hai già il logo definitivo.

---

### Domanda 56
- **Testo**: Se hai scelto "Un oggetto specifico legato al mio mestiere", scrivi quale oggetto:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 57
- **Testo**: SE DEVO CREARE O RIDISEGNARE IL LOGO: Quale stile grafico preferisci?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Minimale, pulito e stilizzato
  - Classico, serio ed elegante
  - Giocoso, morbido e colorato
  - Stile stemma, scudo o badge vintage
  - Futuristico e tecnologico
  - Lusso / Premium
  - Lascio fare alla tua creatività

---

### Domanda 58
- **Testo**: SE DEVO CREARE O RIDISEGNARE IL LOGO: Ci sono forme, icone o concetti che NON vuoi assolutamente vedere nel logo?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---
---

# SEZIONE 8: Colori e Palette

> **Descrizione della sezione nel Form**: I colori trasmettono emozioni istantanee: il blu comunica fiducia (banche, assicurazioni), il verde salute e natura, il rosso passione e urgenza, il nero lusso ed eleganza. Scegli con attenzione.

---

### Domanda 59
- **Testo**: Hai già una palette di colori aziendale ufficiale?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, ho una palette precisa (inserisci i codici nella domanda successiva) **[Salto di sezione: vai a Domanda 60]**
  - No, dobbiamo definirla **[Salto di sezione: vai a Domanda 61]**

---

### Domanda 60
- **Testo**: SE HAI GIÀ LA PALETTE: Scrivi qui i codici colore HEX (es. #FF0000) o i nomi esatti dei tuoi colori aziendali:
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 61
- **Testo**: SE NON HAI LA PALETTE: Quale stile di colori preferiresti per il sito web?
- **Tipo**: Scelta multipla (checkbox — può selezionare più opzioni)
- **Obbligatoria**: No
- **Opzioni**:
  - Colori caldi, accesi ed energici (es. Rosso, Arancione, Giallo)
  - Colori freddi, rassicuranti e professionali (es. Blu, Azzurro, Verde)
  - Colori neutri, minimalisti e puliti (es. Bianco, Scala di grigi, Beige)
  - Tinte pastello, tenui e delicate (es. Rosa antico, Verde menta)
  - Forte contrasto (es. Bianco e Nero con un solo colore acceso/fluo)
  - Tema Scuro (Dark Mode) predominante per tutto il sito
  - Affido completamente a te la scelta dei colori in base al mio settore
- **Nota per il compilatore**: Puoi selezionare più opzioni per combinare gli stili.

---

### Domanda 62
- **Testo**: Ci sono uno o più colori specifici che vuoi inserire per forza nel sito, a prescindere da tutto il resto?
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---
---

# SEZIONE 9: Tipografia (Font)

> **Descrizione della sezione nel Form**: Il carattere tipografico influenza la percezione del tuo brand: moderno o classico, giocoso o serio. Qui scegliamo lo stile.

---

### Domanda 63
- **Testo**: Hai già un font (carattere tipografico) ufficiale aziendale?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì (scrivilo nella domanda successiva)
  - No

---

### Domanda 64
- **Testo**: SE HAI GIÀ IL FONT: Scrivi qui il nome esatto (es. Montserrat, Roboto, Helvetica):
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 65
- **Testo**: SE NON HAI IL FONT: Che stile tipografico si adatta meglio alla tua attività?
- **Tipo**: Scelta multipla (checkbox — può selezionare più opzioni per creare una combinazione)
- **Obbligatoria**: No
- **Opzioni**:
  - Moderno, pulito e minimale (caratteri senza "grazie", facili da leggere su schermo — es. Inter, Roboto)
  - Classico, autorevole e istituzionale (caratteri con le "grazie", stile giornali o lusso — es. Playfair Display, Lora)
  - Giocoso, informale e amichevole (caratteri tondeggianti e morbidi — es. Nunito, Quicksand)
  - Creativo, artistico ed estroso (caratteri particolari che catturano l'attenzione)
  - Tecnologico, futuristico e squadrato (stile informatico, gaming, cyber — es. Space Grotesk, Orbitron)
  - Elegante e raffinato (stile corsivo o simulazione scrittura a mano — es. Dancing Script)
  - Forte, massiccio e impattante (caratteri spessi, pesanti, ideali per titoli grandi — es. Anton, Bebas Neue)
  - Vintage o Retrò (stile anni passati, macchine da scrivere — es. Courier Prime)
- **Nota per il compilatore**: Selezionare più opzioni è utile: ad esempio "Classico per i titoli" + "Moderno per il testo corpo" è un'ottima combinazione.

---
---

# SEZIONE 10: Stile e Dinamicità del Sito

> **Descrizione della sezione nel Form**: Un sito web può essere completamente statico e velocissimo, oppure ricco di animazioni e movimenti. Non c'è una risposta giusta o sbagliata — dipende dal tuo pubblico e dal messaggio che vuoi trasmettere.

---

### Domanda 66
- **Testo**: Scegli il profilo di dinamicità che preferisci per il tuo sito:
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Velocità e Sobrietà: nessun effetto, sito pulito, caricamento ultra-rapido. Priorità assoluta alla performance e alla SEO.
  - Equilibrio Professionale: animazioni leggere e raffinate (testi che appaiono gradualmente, hover sui pulsanti, transizioni morbide). Standard moderno, consigliato nella maggior parte dei casi.
  - Design Immersivo: molti effetti visivi, sfondi dinamici, parallasse, micro-animazioni. Priorità all'impatto visivo e all'esperienza "wow".
  - Decidi tu: mi fido della tua esperienza, scegli il livello giusto per il mio settore.

---

### Domanda 66b
- **Testo**: Quali categorie di effetti visivi vorresti includere assolutamente? (Seleziona tutte quelle che ti piacciono, se non sai cosa mettere e ti vuoi affidare totalmente a me inserisci solo l'opzione in basso)
- **Tipo**: Scelta multipla (checkbox)
- **Obbligatoria**: No (Salta questa domanda se alla 66 hai scelto "Velocità e Sobrietà")
- **Opzioni**:
  - Animazioni di Intro / Apertura: Una sequenza visiva che si attiva una sola volta quando l'utente entra nel sito (es. un logo che prende vita, uno sfondo che si apre).
  - Animazioni di Comparsa: Testi, titoli o foto che entrano in scena in modo fluido e creativo mentre l'utente scorre, invece di essere già statici.
  - Interazioni al passaggio del mouse (Hover): Bottoni, immagini o elementi che reagiscono in modo visibile (es. si ingrandiscono, cambiano forma o colore) quando il cursore ci passa sopra.
  - Sfondi dinamici e interattivi: Sfondi in movimento, particelle fluide, video o grafiche che reagiscono al movimento del mouse dell'utente.
  - Effetti di profondità (Parallasse): Elementi e sfondi che si muovono a velocità diverse durante lo scroll, creando un forte senso di tridimensionalità.
  - Animazioni guidate dallo scroll (Scrollytelling): Effetti complessi in cui lo scorrimento della pagina controlla un'animazione passo-passo (es. un prodotto che si scompone o ruota man mano che scendi).
  - Transizioni di pagina fluide: Passaggi creativi e continui (senza scatti o schermate bianche) quando l'utente naviga da una pagina all'altra.
  - Effetti tipografici creativi: Testi che si compongono in modo artistico (es. comparsa lettera per lettera, scritte che si trasformano o seguono un tracciato).
  - Gallerie e presentazioni dinamiche: Vetrine di foto o progetti che scorrono da sole, si allargano a tutto schermo o offrono una navigazione visivamente spettacolare.
  - Elementi 3D e rendering interattivi: Oggetti tridimensionali inseriti nel sito che l'utente può esplorare, ruotare o ingrandire liberamente.
  - Micro-interazioni sui clic: Piccoli dettagli visivi gratificanti che avvengono nel momento esatto in cui l'utente compie un'azione o clicca qualcosa.
  - Lascio decidere totalmente a te
  - Altro (specificare nella domanda successiva)

---

### Domanda 66c
- **Testo**: Se hai richiesto effetti o animazioni particolari, hai in mente dei soggetti specifici? (es. "Vorrei un modello 3D della mia bottiglia di vino", oppure "Vorrei uno sfondo con onde blu che si muovono"). Aggiungi qui qualsiasi dettaglio, idea o file che hai.
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Se lasci questo campo vuoto, mi concedi totale libertà creativa per inventare e scegliere le animazioni perfette in base allo stile del tuo brand!

---
---

# SEZIONE 11: Materiale Fotografico e Video

> **Descrizione della sezione nel Form**: Le immagini e i video sono ciò che il visitatore nota per primo. La qualità visiva fa la differenza tra un sito amatoriale e uno professionale.

---

### Domanda 67
- **Testo**: Come gestiremo le fotografie da inserire nel sito web?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Fornirò io tutte le foto professionali necessarie
  - Utilizzeremo immagini stock gratuite (di repertorio) pertinenti al mio settore
  - Utilizzeremo immagini generate dall'Intelligenza Artificiale su misura
  - Un mix: alcune mie foto + immagini stock/AI dove necessario
  - Nessuna delle precedenti: voglio che venga tu in sede a scattare le foto necessarie (costo aggiuntivo da preventivare — vedi listino per il costo attuale)

---

### Domanda 68
- **Testo**: Hai video da inserire nel sito? (Video di presentazione, demo, testimonial, ecc.)
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, ho video pronti da inviarti
  - Sì, ma vanno ancora realizzati
  - Non ho video, ma mi piacerebbe inserirne o farne realizzare qualcuno
  - No, non ho video e non ne voglio

---

### Domanda 68b
- **Testo**: Se hai video o vorresti inserirne, dove e come ti piacerebbe usarli nel sito?
- **Tipo**: Scelta multipla (checkbox)
- **Obbligatoria**: No
- **Opzioni**:
  - Come video di sfondo continuo (hero video) in cima alla pagina, senza audio
  - Come video di presentazione aziendale (con audio) in una sezione apposita
  - Come video-recensioni o testimonianze dei clienti
  - Come piccoli video dimostrativi per spiegare servizi o prodotti specifici

---

### Domanda 69
- **Testo**: Per le foto stock o AI: quale stile visivo preferisci?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Stile autentico e documentaristico (persone reali, ambienti naturali, luce calda)
  - Stile patinato e pubblicitario (perfetto, studio fotografico, molto curato)
  - Stile moderno e minimalista (sfondi puliti, geometrie, flat design)
  - Altro (specificare nella domanda successiva)

---

### Domanda 70
- **Testo**: Hai foto professionali del team / staff da inserire nel sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Sì, te le invio
  - No, ma vorrei farle
  - No, e non voglio mostrare persone
  - Sono un professionista singolo, ho una mia foto professionale

---

### Domanda 71
- **Testo**: Il sito dovrà avere una galleria fotografica navigabile (portfolio, lavori eseguiti, prodotti)?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, è fondamentale per la mia attività
  - Sì, ma piccola (poche immagini selezionate)
  - No, non ne ho bisogno

---
---

# SEZIONE 12: Funzionalità e Integrazioni

> **Descrizione della sezione nel Form**: Oltre al design, il sito può includere strumenti e funzionalità che automatizzano il tuo lavoro e migliorano l'esperienza del cliente.

---

### Domanda 72
- **Testo**: Di quali funzionalità aggiuntive hai bisogno nel sito?
- **Tipo**: Scelta multipla (checkbox)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Modulo di contatto con invio email automatico
  - Pulsante/link diretto WhatsApp ("Scrivici su WhatsApp")
  - Pulsante "Chiama Ora" cliccabile da smartphone
  - Sistema di prenotazione / appuntamenti online (Calendly, Booksy o simili)
  - Chat live o chatbot automatico
  - Mappa Google Maps interattiva con la posizione della sede
  - Sezione FAQ (Domande Frequenti)
  - Nessuna di queste, solo il sito base
  - Lascio decidere a te in base al mio settore
  - Altro (specificare nella domanda successiva)

---
---

# SEZIONE 13: Dominio, Hosting e Servizi Legali

> **Descrizione della sezione nel Form**: Verifichiamo la situazione tecnica: dominio, spazio web e conformità legale (GDPR).

---

### Domanda 74
- **Testo**: Possiedi già un nome a dominio registrato (es. www.tuonome.it)? (È l'indirizzo testuale che i clienti digitano)
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì
  - No, va registrato da zero

---

### Domanda 75
- **Testo**: Possiedi già uno spazio di Hosting web acquistato?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì
  - No, va valutato il piano insieme (lo valutiamo insieme in base alle tue esigenze)

---

### Domanda 76
- **Testo**: Se possiedi già Hosting e/o Dominio, con quale provider? (es. Aruba, SiteGround, Hostinger, Register.it, ecc.)
- **Tipo**: Testo breve (short answer)
- **Obbligatoria**: No

---

### Domanda 77
- **Testo**: Se possiedi già Hosting e Dominio, come preferisci fornirmi le credenziali di accesso?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Te le invio privatamente via messaggio/email sicura
  - Creerò un accesso collaboratore/tecnico dedicato per te
- **Nota per il compilatore**: Per sicurezza, NON scrivere mai le password in questo modulo. Le gestiremo tramite un canale privato e sicuro.

---

### Domanda 78
- **Testo**: Hai già un indirizzo email professionale attivo sul tuo dominio (es. info@tuonome.it)?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: No
- **Opzioni**:
  - Sì, è già attivo
  - No, va creato da zero

---

### Domanda 79
- **Testo**: Hai già un legale o un servizio (come Iubenda) per la gestione della Privacy Policy, Cookie Policy e adeguamento GDPR del sito?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Sì, ho già chi se ne occupa o un abbonamento attivo
  - No, mi serve che te ne occupi tu attivando le licenze necessarie da zero (Da valutare insieme in base alle visite mensili aspettate)

---

# SEZIONE 14: Servizi Gratuiti Inclusi nel Pacchetto

> **Descrizione della sezione nel Form**: Oltre alla creazione del sito web, il pacchetto include una serie di servizi GRATUITI per completare la tua presenza online. Seleziona tutti quelli di cui hai bisogno — sono inclusi nel prezzo, senza costi aggiuntivi.

---

### Domanda 80
- **Testo**: 📍 PRESENZA ONLINE E REPUTAZIONE — Quali di questi servizi gratuiti desideri attivare?
- **Tipo**: Scelta multipla (checkbox)
- **Obbligatoria**: Sì
- **Opzioni**:
  - Creazione o sistemazione account google dedicato solo all'azienda con rispettivi tool e spazi di archiviazione sistemati del drive
  - Controllo e sistemazione o creazione della Posizione Geografica su Google Maps (verifica pin, categoria, orari, descrizione)
  - Controllo e ottimizzazione Account Google Business Profile (ex Google My Business: foto, post, risposte recensioni, attributi)
  - Creazione Account Google Business Profile da zero (se non ce l'hai ancora)
  - Creazione Profilo LinkedIn Aziendale (Company Page) da zero
  - Setup WhatsApp Business con messaggio di benvenuto automatico, orari e catalogo
  - Setup Google Analytics 4 (GA4) e Google Search Console
  - Setup Google Tag Manager e Meta Pixel
  - Configurazione Email Professionale
  - Scrittura Bio Aziendale per i social
  - Nessuno di questi

---

### Domanda 81
- **Testo**: 🎨 MATERIALI GRAFICI DI BRAND — Quali di questi servizi gratuiti desideri attivare?
- **Tipo**: Scelta multipla (checkbox)
- **Obbligatoria**: Sì
- **Nota per il compilatore**: (Attenzione: salta l'opzione "Design Logo" se hai già indicato nella Sezione 7 di possederne uno definitivo).
- **Opzioni**:
  - Design Biglietti da Visita (fronte e retro, file pronto per stampa tipografica)
  - Design Logo
  - Design Template Post Social riutilizzabile (1-2 layout, formato immagine pronto per l'uso)
  - Design QR Code brandizzato (con logo e colori aziendali, link al sito o WhatsApp)
  - Design Volantino / Flyer digitale stampabile (formato A5 o A4, pronto per stampa o condivisione online)
  - Design Firma Email Professionale (formato HTML pronto per la tua casella di posta)
  - Nessuno di questi

---

 
---
---

# SEZIONE 15: Note Finali

> **Descrizione della sezione nel Form**: Ultima sezione! Qui puoi aggiungere qualsiasi cosa che non ti ho chiesto ma che ritieni importante.

---

### Domanda 84
- **Testo**: C'è qualcos'altro che vuoi dirmi? Richieste particolari, idee, preoccupazioni, dettagli che non ho coperto in questo questionario?
- **Tipo**: Testo lungo (paragraph)
- **Obbligatoria**: No
- **Nota per il compilatore**: Scrivi tutto quello che ti viene in mente. Meglio un'informazione in più che una in meno!

---

### Domanda 85
- **Testo**: Come preferisci essere contattato per le comunicazioni durante il progetto?
- **Tipo**: Scelta singola (radio button)
- **Obbligatoria**: Sì
- **Opzioni**:
  - WhatsApp
  - Email
  - Telefono
  - Indifferente, va bene qualsiasi canale

---
---

# ✅ RIEPILOGO STRUTTURA DEL FORM

| Sezione | Domande | Argomento |
|---|---|---|
| 1 | 1 → 10 | Contesto del Progetto e Obiettivi |
| 2 | 11 → 18 | Anagrafica e Contatti Aziendali |
| 3 | 19 → 29 | Mercato, Target e Posizionamento SEO |
| 4 | 30 → 42 | Valore del Brand e Competitività |
| 5 | 43 → 48 (+48b condizionale) | Tipologia e Struttura del Sito Web |
| 6 | 49 → 52 | Contenuti e Copywriting |
| 7 | 53 → 58 | Identità Visiva e Logo |
| 8 | 59 → 62 | Colori e Palette |
| 9 | 63 → 65 | Tipografia (Font) |
| 10 | 66 | Stile e Dinamicità del Sito |
| 11 | 67 → 71 | Materiale Fotografico e Video |
| 12 | 72 | Funzionalità e Integrazioni |
| 13 | 74 → 79 | Dominio, Hosting e Servizi Legali |
| 14 | 80 → 81 | Servizi Gratuiti Inclusi |
| 15 | 84 → 85 | Note Finali |
| **TOTALE** | **82 domande** | **15 sezioni** |

> **NOTA**: Molte domande sono condizionali (si compilano solo se pertinenti), quindi il compilatore medio risponderà a circa 50-60 domande effettive.

> **CHANGELOG (Numerazione)**: I numeri 73, 82 e 83 sono stati intenzionalmente rimossi/omessi per unificare sezioni precedenti senza dover rinumerare tutto il documento in questa fase. Si tratta di un gap intenzionale, non di un errore.
