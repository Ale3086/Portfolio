document.addEventListener('DOMContentLoaded', () => {
    // Selezioniamo tutte le griglie che contengono card, ma in particolare quelle della pagina studi/riconoscimenti (certs-grid)
    const grids = document.querySelectorAll('.certs-grid, .project-grid');
    
    grids.forEach(grid => {
        const cards = grid.querySelectorAll('.cert-card, .project-card, .card');
        const CARDS_PER_PAGE = 4;
        
        if (cards.length > CARDS_PER_PAGE) {
            let visibleCount = CARDS_PER_PAGE;
            
            // Nascondiamo le card successive alla quarta
            for (let i = CARDS_PER_PAGE; i < cards.length; i++) {
                cards[i].style.display = 'none';
                // Rimuoviamo classi di animazione in modo che possano animarsi quando appaiono
                cards[i].classList.remove('animate');
            }
            
            // Creiamo il contenitore per il pulsante
            const btnContainer = document.createElement('div');
            btnContainer.style.textAlign = 'center';
            btnContainer.style.marginTop = '2rem';
            btnContainer.style.width = '100%';
            btnContainer.style.gridColumn = '1 / -1'; // Nel caso venga inserito dentro una griglia
            
            // Creiamo il pulsante
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = 'Mostra altro';
            
            btn.addEventListener('click', () => {
                const nextCount = Math.min(visibleCount + CARDS_PER_PAGE, cards.length);
                
                for (let i = visibleCount; i < nextCount; i++) {
                    cards[i].style.display = ''; // Ripristina il display di default
                    
                    // Piccolo ritardo per permettere al browser di renderizzare il display prima dell'animazione
                    setTimeout(() => {
                        cards[i].classList.add('animate');
                    }, 50 * (i - visibleCount));
                }
                
                visibleCount = nextCount;
                
                // Nascondi il pulsante se abbiamo mostrato tutto
                if (visibleCount >= cards.length) {
                    btnContainer.style.display = 'none';
                }
                
                // Aggiorna ScrollTrigger per far ricalcolare le dimensioni della pagina
                if (typeof ScrollTrigger !== 'undefined') {
                    setTimeout(() => ScrollTrigger.refresh(), 300);
                }
            });
            
            btnContainer.appendChild(btn);
            
            // Inseriamo il bottone subito dopo la griglia
            grid.parentNode.insertBefore(btnContainer, grid.nextSibling);
        }
    });
});
