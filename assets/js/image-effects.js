/*
 * IMAGE EFFECTS: Solo Parallasse
 * L'effetto Glitch è stato rimosso per mantenere il sito più pulito ed elegante.
 */

(function() {
    let isInitialized = false;

    function waitForGSAP(callback) {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            callback();
        } else {
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                    clearInterval(interval);
                    callback();
                } else if (attempts > 50) {
                    clearInterval(interval);
                    console.warn('[image-effects] GSAP non trovato, parallasse disabilitato');
                }
            }, 100);
        }
    }

    function initImageEffects() {
        if (isInitialized) return;
        isInitialized = true;

        const images = gsap.utils.toArray([
            '.card-img-wrapper img',
            '.card img',
            '.cert-img img',
            '.hero-images img'
        ].join(', '));

        if (images.length === 0) return;

        images.forEach(img => {
            img.style.transition = 'none';

            const wrapper = img.parentElement;
            wrapper.style.position = 'relative';
            wrapper.style.overflow = 'hidden';

            // Effetto parallasse rimosso su richiesta dell'utente.
            // Le immagini ora rimangono statiche al 100% della loro dimensione senza spostarsi durante lo scroll.
            gsap.set(img, {
                scale: 1.0,
                yPercent: 0
            });
        });
    }

    // Ascolta bootComplete
    document.addEventListener('bootComplete', () => {
        waitForGSAP(initImageEffects);
    });

    // SAFETY NET
    setTimeout(() => {
        if (!isInitialized) {
            waitForGSAP(initImageEffects);
        }
    }, 5000);
})();
