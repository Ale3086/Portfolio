import os

html_content = '''<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi Sono - Caseti</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/variables.css">
    <link rel="stylesheet" href="./assets/css/base.css">
    <link rel="stylesheet" href="./assets/css/components.css">
    
    <!-- JS -->
    <script src="./assets/js/nav.js" defer></script>
    <script src="./assets/js/animations.js" defer></script>
    <script src="./assets/js/pixel-blast.js" defer></script>
    
    <style>
        /* Typography specifics from V1 */
        .page-hero-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(28px, 8vw, 64px);
            line-height: 1.1;
            margin-bottom: 1rem;
        }
        .t-outline-serif {
            -webkit-text-stroke: 1px var(--color-accent);
            color: transparent;
            font-style: italic;
        }
        .eyebrow {
            font-family: var(--font-mono);
            color: var(--color-accent);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.85rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .eyebrow-line {
            width: 40px;
            height: 1px;
            background: var(--color-accent);
        }
        
        /* Sections */
        .page-hero {
            padding: 8rem 0 4rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .intro-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 0;
        }
        
        .intro-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: start;
        }
        
        @media (min-width: 768px) {
            .intro-grid {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .intro-photo-col {
            position: relative;
        }
        
        .intro-photo-frame {
            border: 1px solid var(--color-border);
            padding: 1rem;
            background: rgba(255,255,255,0.02);
            position: relative;
        }
        
        .photo-slot {
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            min-height: 400px;
        }
        
        .intro-photo-sm {
            position: absolute;
            bottom: -30px;
            right: -30px;
            width: 200px;
            min-height: 200px;
            border: 5px solid var(--color-bg);
        }
        
        .intro-text-col {
            padding-top: 2rem;
        }
        
        .intro-paragraphs p {
            color: var(--color-text-muted);
            line-height: 1.7;
            margin-bottom: 1.5rem;
            font-size: 1.05rem;
        }
        
        .info-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .itag {
            font-family: var(--font-mono);
            font-size: 0.85rem;
            padding: 0.5rem 1rem;
            border: 1px solid var(--color-border);
            border-radius: 4px;
            background: rgba(255,255,255,0.03);
        }
        
        /* Forest / Scout Section */
        .forest-section {
            position: relative;
            margin-top: 6rem;
            padding: 6rem 0;
            border-top: 1px dashed var(--color-border);
        }
        
        .scout-animation-placeholder {
            position: absolute;
            inset: 0;
            z-index: -1;
            background: rgba(0,0,0,0.2);
            border: 1px dashed rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-family: var(--font-mono);
            font-size: 1.5rem;
        }
        
        .forest-content {
            position: relative;
            z-index: 1;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .glass-card {
            background: rgba(18, 15, 23, 0.65);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: var(--border-radius-lg);
            padding: 2.5rem;
        }
        
        .scout-block {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin: 4rem 0;
            align-items: center;
        }
        
        @media (min-width: 768px) {
            .scout-block {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .scout-block img {
            width: 100%;
            border-radius: var(--border-radius);
            object-fit: cover;
            min-height: 300px;
        }
        
        .scout-values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
            margin-top: 4rem;
        }
        
        .sv-card h4 {
            color: var(--color-accent);
            margin-bottom: 1rem;
        }
        
        .sv-card p {
            color: var(--color-text-muted);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        #pixel-blast-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -2;
            pointer-events: none;
        }
    </style>
</head>
<body>
    <!-- Sfondo PixelBlast per tutta la pagina (come richiesto) -->
    <canvas id="pixel-blast-bg"></canvas>

    <header class="site-header">
        <div class="nav-container">
            <div class="logo">Caseti</div>
            <button class="menu-toggle" id="menu-toggle" aria-label="Apri menu">?</button>
            <nav class="nav-links" id="nav-links">
                <a href="./index.html">Home</a>
                <a href="./chi-sono.html" class="active">Chi Sono</a>
                <a href="./progetti.html">Progetti</a>
                <a href="./riconoscimenti-studi.html">Studi & Riconoscimenti</a>
                <a href="./servizi-contatti.html">Contatti</a>
            </nav>
        </div>
    </header>

    <main style="padding: 0 2rem;">
        
        <!-- PAGE HERO -->
        <section class="page-hero">
            <p class="eyebrow reveal-up"><span class="eyebrow-line"></span>01 / Chi Sono</p>
            <div class="overflow-clip">
                <h1 class="page-hero-title reveal-up" style="--d:.10s">
                Uno studente<br/><em class="t-outline-serif">curioso.</em>
                </h1>
            </div>
            <p class="page-hero-sub reveal-up" style="--d:.22s; font-size: 1.2rem; color: var(--color-text-muted);">
                Tre anni all'ITIS: ogni errore è diventato una competenza.
            </p>
        </section>

        <!-- INTRO -->
        <section class="intro-section">
            <div class="intro-grid">
                <div class="intro-photo-col reveal-up">
                    <div class="intro-photo-frame">
                        <div class="photo-slot intro-photo">
                            <span class="ps-text">[ Tua Foto ]</span>
                        </div>
                    </div>
                </div>
                <div class="intro-text-col">
                    <span class="label-tag reveal-left" style="color: var(--color-accent); font-family: var(--font-mono); font-size: 0.9rem;">? Presentazione</span>
                    <h2 class="section-title reveal-left" style="--d:.08s; font-size: 2.5rem; margin-top: 1rem; margin-bottom: 2rem;">
                        Ciao, mi chiamo<br/><span style="color: var(--color-text-muted);">Alessandro Caseti.</span>
                    </h2>
                    <div class="intro-paragraphs">
                        <p class="reveal-up" style="--d:.12s">
                            Ho 17 anni e frequento il terzo anno dell'ITIS A. Volta di Ponte San Giovanni, indirizzo Informatica.
                            Nel tempo libero studio cybersecurity in modo autonomo. Ho le basi dell'elettrotecnica e so lavorare con le PCB.
                        </p>
                        <p class="reveal-up" style="--d:.20s">
                            Conosco bene Python e C++, e sto costruendo esperienza giorno dopo giorno.
                            Sto studiando JavaScript, SQL, C e Assembly per approfondire il mio percorso in cybersecurity.
                        </p>
                        <p class="reveal-up" style="--d:.28s">
                            Sono una persona determinata: quando mi fisso un obiettivo, trovo sempre il modo per raggiungerlo.
                            Preferisco trovare le soluzioni autonomamente, ma mi piace condividere il processo con gli altri.
                        </p>
                    </div>
                    <div class="info-tags reveal-up" style="--d:.36s">
                        <span class="itag"><span style="color:var(--color-accent)">?</span> Ponte San Giovanni (PG)</span>
                        <span class="itag"><span style="color:var(--color-accent)">?</span> ITIS A. Volta</span>
                        <span class="itag"><span style="color:var(--color-accent)">?</span> Cybersecurity</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOREST SECTION -->
        <section class="forest-section" id="forest-section">
            <!-- Placeholder per nuova animazione scout -->
            <div class="scout-animation-placeholder">
                [ Placeholder Nuova Animazione Scout ]
            </div>

            <div class="forest-content">
                <div class="forest-intro-card glass-card reveal-up" style="margin-bottom: 4rem;">
                    <span style="color: #a855f7; font-family: var(--font-mono); font-size: 0.9rem;">? Oltre lo schermo</span>
                    <h2 style="font-size: 2.5rem; margin: 1rem 0;">
                        Scout una volta,<br/>
                        <em style="color: var(--color-text-muted); font-style: normal;">Scout per sempre.</em>
                    </h2>
                    <p style="color: var(--color-text-muted); line-height: 1.6; font-size: 1.1rem;">
                        Nella vita, oltre alla passione per l'informatica e la cybersecurity, sono molto legato alla natura.
                        Per vivere questo rapporto in modo profondo ho intrapreso un percorso di vita che mi ha cambiato: fare lo scout.
                    </p>
                </div>

                <div class="scout-narrative">
                    <div class="scout-block reveal-up">
                        <div class="glass-card">
                            <h3 style="margin-bottom: 1rem; color: #a855f7;">Come ho iniziato</h3>
                            <p style="color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1rem;">
                                Il mio percorso scout non iniziò subito: arrivai a 11 anni, invece dei classici 8,
                                perché la proposta arrivò tardi, alle medie. Ricordo che furono i miei genitori a spingermi.
                            </p>
                            <p style="color: var(--color-text-muted); line-height: 1.6;">
                                Con gli anni ho capito che lo scoutismo non è fare campeggi, nodi e fuochi: è uno stile di vita
                                orientato alla solidarietà e al servizio, capace di affrontare l'incertezza e i dubbi di ogni
                                domani.
                            </p>
                        </div>
                        <img src="./assets/img/Scout/IlReparto.jpg" alt="Scout Reparto">
                    </div>

                    <div class="scout-block reveal-up" style="--d:.10s">
                        <img src="./assets/img/Scout/SqIntera.jpg" alt="Squadriglia">
                        <div class="glass-card">
                            <h3 style="margin-bottom: 1rem; color: #a855f7;">Cosa mi ha insegnato davvero</h3>
                            <p style="color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1rem;">
                                La cosa più difficile nello scouting non è imparare ad accendere un fuoco senza accendino o
                                costruire strutture in legno. È lavorare in team sotto pressione.
                            </p>
                            <p style="color: var(--color-text-muted); line-height: 1.6;">
                                Grazie a queste esperienze ho imparato a suddividere un problema in passi gestibili, a
                                comunicare in modo chiaro e diretto, a non perdere la calma quando le cose non vanno come
                                previsto.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="scout-values-grid reveal-up" style="--d:.15s">
                    <div class="sv-card glass-card">
                        <span style="color: #a855f7; margin-bottom: 1rem; display: block;">?</span>
                        <h4>Leadership</h4>
                        <p>Ho guidato gruppi di 5-6 ragazzi, imparando a prendere decisioni responsabilmente.</p>
                    </div>
                    <div class="sv-card glass-card">
                        <span style="color: #a855f7; margin-bottom: 1rem; display: block;">?</span>
                        <h4>Resilienza</h4>
                        <p>Affrontare stress mentale e fisico mi motiva a superare ogni ostacolo.</p>
                    </div>
                    <div class="sv-card glass-card">
                        <span style="color: #a855f7; margin-bottom: 1rem; display: block;">?</span>
                        <h4>Servizio</h4>
                        <p>Difendere chi non può difendersi, operando per il bene comune e la giustizia.</p>
                    </div>
                    <div class="sv-card glass-card">
                        <span style="color: #a855f7; margin-bottom: 1rem; display: block;">?</span>
                        <h4>Metodo</h4>
                        <p>Dividi il problema. Agisci su ciò che controlli. Adatta il piano e non farti mai scoraggiare.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="site-footer">
        <p>&copy; 2026 Caseti. Tutti i diritti riservati.</p>
        <p><a href="./assets/cv/cv-caseti.pdf" target="_blank" rel="noopener noreferrer">Scarica CV (PDF)</a></p>
    </footer>

</body>
</html>
'''

with open('chi-sono.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
