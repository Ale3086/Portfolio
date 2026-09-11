document.addEventListener('bootComplete', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    // Magic Card (Spotlight & Border Glow Effect)
    const cards = document.querySelectorAll('.card, .cert-card');
    cards.forEach(card => {
        

        // Estrai il colore dallo shine-border se presente
        let color = 'rgba(0, 212, 255, 0.8)'; 
        let spotColor = 'rgba(0, 212, 255, 0.06)';
        const shineEl = card.querySelector('.shine-border');
        
        if (shineEl) {
            const shineColor = getComputedStyle(shineEl).getPropertyValue('--shine-color').trim();
            if (shineColor) {
                if (shineColor.startsWith('#')) {
                    const rgb = shineColor.replace(/^#/, '');
                    const r = parseInt(rgb.substring(0, 2), 16);
                    const g = parseInt(rgb.substring(2, 4), 16);
                    const b = parseInt(rgb.substring(4, 6), 16);
                    color = `rgba(${r}, ${g}, ${b}, 0.8)`;
                    spotColor = `rgba(${r}, ${g}, ${b}, 0.06)`;
                } else {
                    color = shineColor;
                    spotColor = shineColor;
                }
            }
        }
        
        card.style.setProperty('--spotlight-color', spotColor);

        // Traccia il mouse
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

