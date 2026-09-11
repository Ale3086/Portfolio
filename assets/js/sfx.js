/**
 * SFX Engine (HTML Audio) - Compatibile con file://
 * Riproduce il file audio lungo solo durante la digitazione
 */

const SFX = (function() {
    let typeAudio = null;
    let isInitialized = false;
    let typeTimeout = null;

    function init() {
        if (isInitialized) return;
        
        typeAudio = new Audio('./assets/audio/keyboard-boosted.mp3');
        typeAudio.loop = true; 
        typeAudio.volume = 1.0; 
        
        isInitialized = true;
    }

    function ensureAudio() {
        if (!isInitialized) init();
        if (typeAudio && typeAudio.paused && typeAudio.currentTime === 0) {
            typeAudio.load();
        }
    }

    ['click', 'keydown', 'mousedown', 'pointerdown', 'touchstart'].forEach(evt => {
        window.addEventListener(evt, ensureAudio, { passive: true });
    });

    function playType() {
        if (!isInitialized) init();
        
        if (typeAudio) {
            if (typeAudio.paused) {
                const playPromise = typeAudio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // Errore autoplay ignorato silenziosamente
                    });
                }
            }

            if (typeTimeout) clearTimeout(typeTimeout);
            
            typeTimeout = setTimeout(() => {
                // Ferma l'audio e taglialo azzerando il tempo, evita che "sbordi"
                typeAudio.pause();
                typeAudio.currentTime = 0; 
            }, 200); // 100ms è un tempo brevissimo, taglierà subito alla fine del testo
        }
    }

    return {
        playType,
        init,
        ensureAudio
    };
})();





