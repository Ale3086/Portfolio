// Logica per la navigazione (menu mobile e link attivo)
document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        // Funzione per chiudere il menu
        const closeMenu = () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '&#9776;';
            }
        };

        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            // Aggiorna l'icona
            menuToggle.innerHTML = isActive ? '&#10006;' : '&#9776;';
            
            // Attiva l'effetto decoding sui link ad ogni apertura, con mezzo secondo di ritardo
            if (isActive) {
                setTimeout(() => {
                    const spans = navLinks.querySelectorAll('span');
                    spans.forEach(span => {
                        if (span.decryptedTextInstance) {
                            span.decryptedTextInstance.trigger();
                        }
                    });
                }, 400); // 400ms = aspetta che l'animazione css (0.4s) finisca
            }
        });

        // Chiudi il menu se si clicca un link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });

        // Chiudi il menu se si fa scroll
        window.addEventListener('scroll', () => {
            closeMenu();
        }, { passive: true });
    }

    // Evidenziazione link attivo in base all'URL corrente
    const currentPath = window.location.pathname;
    // Prendi solo il nome del file finale o "/"
    let pageName = currentPath.split('/').pop();
    if (pageName === '') pageName = 'index.html'; // Default alla root
    
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === pageName || linkHref === './' + pageName || (pageName === 'index.html' && linkHref === './')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


