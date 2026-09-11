# Struttura Ottimizzata CRM (Google Sheets) per Studente/Freelance

Questo documento definisce la struttura definitiva del foglio di calcolo (CRM) per la gestione clienti. È stato riprogettato da zero per adattarsi al modello "Zero MRR, Manutenzione a Consumo e Consegne Flessibili", perfetto per chi sviluppa siti web in età scolastica e non può garantire SLA o abbonamenti mensili fissi.

## Foglio 1: "Clienti e Progetti" (Tutto in uno)

Essendo i lavori prevalentemente "one-shot" con modifiche a consumo, una struttura piatta è l'ideale.

| Colonna | Intestazione | Scopo e Formule | Tipo Dato / Regole |
| :--- | :--- | :--- | :--- |
| **A** | **Nome Cliente / Azienda** | Identificativo del progetto. | Testo |
| **B** | **Telefono** | Contatto rapido per emergenze (es. dominio scaduto). | Numero / Testo |
| **C** | **Email** | Contatto ufficiale per invio preventivi e credenziali. | Email |
| **D** | **Fonte Lead** | Tracciare cosa funziona per trovare clienti. | Menu a tendina (Referral, Instagram, Ricerca Google, Altro) |
| **E** | **Stato Progetto** | Sapere a colpo d'occhio a che punto è il lavoro. | Menu a tendina (Nuovo Lead, In Trattativa, Sviluppo, In Attesa di Saldo, Completato, Perso) |
| **F** | **Prossima Azione (Sblocco)** | La singola azione successiva da fare per far avanzare il progetto. | Testo breve (es. "Fargli pagare l'hosting", "Inviare preventivo") |
| **G** | **Data Follow-up** | Quando fare la Prossima Azione. | Data. *Format condizionale: rosso se < OGGI().* |
| **H** | **Budget Sito (Lancio)** | Quanto costa il sito base, senza le modifiche future. | Valuta (€) |
| **I** | **Acconto Ricevuto** | Il 40% incassato per iniziare i lavori. | Valuta (€). *Warning giallo se >0 ma Stato=Nuovo Lead.* |
| **J** | **Fatturato Extra (Manutenzione)** | Somma di tutte le fatture a consumo emesse DOPO il lancio (es. 30€ + 50€). DA AGGIORNARE MANUALMENTE. | Valuta (€) |
| **K** | **LTV (Lifetime Value)** | Valore totale storico del cliente. Quanto ti ha fruttato in assoluto. | Formula: `=H2+J2` |
| **L** | **Saldo Dovuto** | Quanti soldi devi ancora incassare ORA per questo cliente. | Formula: `=H2-I2`. *Rosso se >0 e Scadenza < 7gg.* |
| **M** | **Scadenza Consegna Stimata** | Quando dovresti consegnare il sito. Mantenersi larghi (4-6 sett). | Data |
| **N** | **Scadenza Dominio/Hosting** | Quando scade il server comprato a nome del cliente. Fondamentale per ricordarglielo. | Data. *Format condizionale: rosso se < 30gg da oggi.* |
| **O** | **Imponibile Lordo (INPS)** | Il compenso lordo di questo progetto ai fini del cumulo annuo per la soglia INPS 5.000. **Attenzione**: se i prezzi in colonna H sono NETTI, usa `=H2/0.8`; se sono GIA' LORDI, usa `=H2`. Verifica col commercialista quale formula applicare nel tuo caso specifico. | Formula (vedi nota) |

---

## Foglio 2: "Dashboard" (Visione Strategica e Controllo Liquidità)

Questa scheda ti serve ad avere un riassunto immediato della tua situazione finanziaria e operativa, senza stress. Niente metriche mensili fisse (no MRR), solo soldi veri incassati e crediti.

### 1. Finanze (Cassa e Crediti)
*   **Totale Denaro Incassato (Tutti i tempi):** 
    `=SOMMA('Clienti e Progetti'!I:I) + SOMMA('Clienti e Progetti'!J:J) + SOMMA.SE('Clienti e Progetti'!E:E; "Completato"; 'Clienti e Progetti'!L:L)` 
    *(Somma acconti + extra + saldi dei progetti completati)*
*   **Liquidità da Incassare (Crediti in sospeso):** 
    `=SOMMA.SE('Clienti e Progetti'!L:L; ">0")`
    *(I soldi che i clienti ti devono ancora versare per siti in sviluppo)*

### 1b. ⚠️ Soglia INPS — Monitoraggio Obbligatorio

> **REGOLA FERREA: non accettare nuovi lavori che farebbero superare €5.000 lordi nell'anno solare in corso senza prima aver parlato con il tuo commercialista e messo in regola la posizione INPS.**

*   **Totale Lordo Anno Corrente:**
    `=SOMMA('Clienti e Progetti'!O:O)`
    *(Aggiorna la colonna O ogni volta che aggiungi un progetto. Questa è la cifra che conta per INPS — non il netto incassato.)*

*   **Semaforo Soglia INPS** (formula da mettere in una cella grande, ben visibile, con sfondo colorato condizionale):
    `=SE(SOMMA('Clienti e Progetti'!O:O)>=5000;"🔴 SOGLIA SUPERATA";SE(SOMMA('Clienti e Progetti'!O:O)>=4500;"🟡 ATTENZIONE: vicino al limite";"🟢 OK"))`

---

#### 🟡 Cosa fare quando il semaforo diventa GIALLO (≥ €4.500):
1. **Smetti di accettare nuovi preventivi** finché non hai parlato col commercialista.
2. **Chiama/scrivi il commercialista** e digli: *"Sono a €[X] lordi quest'anno, mi sto avvicinando ai 5.000€. Cosa faccio?"*
3. Lui valuterà se iscriverti subito alla Gestione Separata INPS o aspettare — dipende da quanto sei lontano e da quanti lavori hai in corso.
4. Una volta che hai chiarezza, puoi decidere consapevolmente se accettare altri lavori o fermarti per quell'anno.

#### 🔴 Cosa fare quando il semaforo diventa ROSSO (≥ €5.000):
1. **Contatta il commercialista immediatamente** — non aspettare la dichiarazione dei redditi.
2. La procedura che gestirà lui è:
   - Iscrizione alla **Gestione Separata INPS** (si fa online sul sito INPS, è gratuita)
   - Calcolo dei contributi dovuti **solo sulla parte eccedente i €5.000** (non su tutto)
   - Pagamento tramite F24 nei termini previsti
3. Continui a emettere ricevute normalmente — cambia solo che la ricevuta dovrà includere anche la quota INPS (il commercialista ti dice come impostarla).
4. **Non bloccarti nel panico**: superare la soglia non è un reato, è una procedura. L'importante è non ignorarla.

### 2. Clienti e LTV (Lifetime Value)
*   **Fatturato Medio per Cliente (ARPU):** 
    `=MEDIA('Clienti e Progetti'!K:K)`
    *(Ti dice mediamente quanti soldi ti lascia un cliente. Se è 500€, sai che ogni nuovo lead che chiudi vale matematicamente 500€).*
*   **Classifica Clienti TOP:** 
    Usa una Tabella Pivot o una formula `=QUERY('Clienti e Progetti'!A:K; "SELECT A, K ORDER BY K DESC LIMIT 3")` per vedere subito i 3 clienti che ti hanno fatto guadagnare di più (quelli da coccolare o a cui chiedere referenze).

### 3. Operatività e Allarmi
*   **Progetti Attivi (In Sviluppo):** 
    `=CONTA.PIÙ.SE('Clienti e Progetti'!E:E; "Sviluppo")`
    *(Se questo numero supera il 3 mentre sei in periodo di verifiche a scuola, FERMATI e non prendere altri clienti).*
*   **Allarmi Scadenze Domini (Prossimi 30 giorni):** 
    `=CONTA.PIÙ.SE('Clienti e Progetti'!N:N; "<"&OGGI()+30; 'Clienti e Progetti'!N:N; ">"&OGGI())`
    *(Se > 0, vai nel foglio 1, cerca la cella rossa e scrivi al cliente su WhatsApp).*
