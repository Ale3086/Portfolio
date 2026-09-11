const canvas = document.getElementById('animation-canvas');
if (canvas) {
    const context = canvas.getContext('2d');

    const frameCount = 274;
    const currentFrame = index => (
        './assets/frames/frame_' + index.toString().padStart(3, '0') + '_delay-0.05s.jpg'
    );

    const images = [];
    const state = {
        frame: 0
    };

    // Initialize images
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }

    // Set canvas size
    const resizeCanvas = () => {
        const wrapper = document.querySelector('.scroll-animation-wrapper');
        if (wrapper) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        }
    };
    window.addEventListener('resize', resizeCanvas);

    // Initial render
    images[0].onload = render;
    resizeCanvas();

    function render() {
        if (!images[state.frame] || !images[state.frame].complete) return;
        const img = images[state.frame];
        
        // Calcola aspect ratio, aggiungendo un zoom maggiore (35%) per nascondere definitivamente il logo Gemini
        const baseScale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const scale = baseScale * 1.55;
        
        // Spostiamo l'immagine leggermente a sinistra (il logo in basso a destra)
        const x = (canvas.width / 2) - (img.width / 2) * scale - (canvas.width * 0.1);
        const y = (canvas.height / 2) - (img.height / 2) * scale + (canvas.height * 0.05);
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    // scroll logic
    window.addEventListener('scroll', () => {
        const wrapper = document.querySelector('.scroll-animation-wrapper');
        if (!wrapper) return;
        
        const rect = wrapper.getBoundingClientRect();
        const scrollDistance = wrapper.offsetHeight - window.innerHeight;
        
        let progress = -rect.top / scrollDistance;
        
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(progress * frameCount)
        );
        
        if (state.frame !== frameIndex) {
            state.frame = frameIndex;
            requestAnimationFrame(render);
            
            // Gestione dei testi in overlay
            const text1 = document.getElementById('scroll-text-1');
            const text2 = document.getElementById('scroll-text-2');
            const text3 = document.getElementById('scroll-text-3');
            const endOverlay = document.getElementById('scroll-end-overlay');
            
            if (text1) {
                if (frameIndex > 30 && frameIndex < 90) text1.classList.add('active');
                else text1.classList.remove('active');
            }
            if (text2) {
                if (frameIndex > 110 && frameIndex < 170) text2.classList.add('active');
                else text2.classList.remove('active');
            }
            if (text3) {
                if (frameIndex > 190 && frameIndex < 250) text3.classList.add('active');
                else text3.classList.remove('active');
            }
            
            // Gestione Esplora finale
            if (endOverlay) {
                // Fade-in negli ultimissimi frames
                if (frameIndex >= 265) endOverlay.classList.add('active');
                else endOverlay.classList.remove('active');
            }
        }
    });
}
