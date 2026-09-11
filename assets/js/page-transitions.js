document.addEventListener('DOMContentLoaded', () => {
    // Creiamo l'overlay di transizione
    const transitionOverlay = document.createElement('div');
    transitionOverlay.id = 'page-transition-overlay';
    
    // Stili dinamici di base (il resto in boot-sequence.css)
    transitionOverlay.style.opacity = '0';
    transitionOverlay.style.pointerEvents = 'none';
    transitionOverlay.style.transition = 'opacity 0.3s ease';
    
    const textContainer = document.createElement('div');
    transitionOverlay.appendChild(textContainer);
    document.body.appendChild(transitionOverlay);

    // Gestione transizione in ENTRATA (fade in dalla pagina precedente)
    if (sessionStorage.getItem('isTransitioning')) {
        // Se stiamo entrando da un'altra pagina tramite transizione
        transitionOverlay.style.transition = 'none';
        transitionOverlay.style.opacity = '1';
        
        // Rimuoviamo il flag
        sessionStorage.removeItem('isTransitioning');
        
        // Fade out veloce
        setTimeout(() => {
            transitionOverlay.style.transition = 'opacity 0.5s ease';
            transitionOverlay.style.opacity = '0';
            
            // Fai partire le animazioni del sito subito dopo che il nero inizia a svanire
            setTimeout(() => {
                document.dispatchEvent(new Event('bootComplete'));
            }, 100);
        }, 50);
    }

    // Intercettiamo i click sui link interni
    const links = document.querySelectorAll('a[href^="./"], a[href^="/"], a[href^="index.html"], a[href^="chi-sono.html"], a[href^="progetti.html"], a[href^="riconoscimenti-studi.html"], a[href^="servizi-contatti.html"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Ignora se apriamo in nuova tab o se il link e un id (#)
            if (e.ctrlKey || e.metaKey || link.target === '_blank' || link.getAttribute('href').startsWith('#') || link.href.endsWith('.pdf')) {
                return;
            }
            
            e.preventDefault();
            const targetUrl = link.href;
            
            // Estrai il nome pagina per il comando cd
            let pageName = targetUrl.split('/').pop().replace('.html', '');
            if (pageName === 'index' || pageName === '') pageName = 'home';
            
            const command = `> cd /${pageName}`;
            
            // Mostra overlay
            transitionOverlay.style.transition = 'opacity 0.3s ease';
            transitionOverlay.style.opacity = '1';
            transitionOverlay.style.pointerEvents = 'all';
            
            textContainer.innerHTML = '';
            
            // Typewriter effect
            let i = 0;
            const typingSpeed = 15; // ms per carattere (equilibrato)
            
            // Aspetta che il fade dell'overlay sia quasi finito prima di scrivere
            setTimeout(() => {
                const typeInterval = setInterval(() => {
                    textContainer.textContent = command.substring(0, i) + '_';
                    i++;
                    
                    if (typeof SFX !== 'undefined') SFX.playType(); // Suono digitazione
                    
                    if (i > command.length) {
                        clearInterval(typeInterval);
                        textContainer.textContent = command; // Rimuove cursore
                        
                        // Flag per la pagina successiva
                        sessionStorage.setItem('isTransitioning', 'true');
                        
                        // Vai alla nuova pagina (pausa per lasciar leggere il comando)
                        setTimeout(() => {
                            window.location.href = targetUrl;
                        }, 400); // Prima era 50ms, ora ÃƒÂ¨ abbastanza da essere letto ma veloce
                    }
                }, typingSpeed);
            }, 150);
        });
    });
});


