const canvasChiSiamo = document.getElementById('animation-canvas-chisiamo');
if (canvasChiSiamo) {
    const contextChiSiamo = canvasChiSiamo.getContext('2d');

    const frameCount = 240;
    const currentFrame = index => (
        './assets/Frames-chiSono/frame_' + index.toString().padStart(3, '0') + '_delay-0.041s.jpg'
    );

    const images = [];
    const state = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }

    const resizeCanvasChiSiamo = () => {
        const wrapper = document.querySelector('.scroll-animation-wrapper');
        if (wrapper) {
            canvasChiSiamo.width = window.innerWidth;
            canvasChiSiamo.height = window.innerHeight;
            renderChiSiamo();
        }
    };
    window.addEventListener('resize', resizeCanvasChiSiamo);

    function renderChiSiamo() {
        if (!images[state.frame] || !images[state.frame].complete) return;
        const img = images[state.frame];
        
        const baseScale = Math.max(canvasChiSiamo.width / img.width, canvasChiSiamo.height / img.height);
        const scale = baseScale * 1.55;
        
        const x = (canvasChiSiamo.width / 2) - (img.width / 2) * scale - (canvasChiSiamo.width * 0.1);
        const y = (canvasChiSiamo.height / 2) - (img.height / 2) * scale + (canvasChiSiamo.height * 0.05);
        
        contextChiSiamo.clearRect(0, 0, canvasChiSiamo.width, canvasChiSiamo.height);
        contextChiSiamo.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    images[0].onload = renderChiSiamo;
    if (images[0].complete) resizeCanvasChiSiamo();
    else resizeCanvasChiSiamo();

    window.addEventListener('scroll', () => {
        const wrapper = document.querySelector('.scroll-animation-wrapper');
        if (!wrapper) return;
        
        const rect = wrapper.getBoundingClientRect();
        const scrollDistance = wrapper.offsetHeight - window.innerHeight;
        if (scrollDistance <= 0) return;
        
        let progress = -rect.top / scrollDistance;
        
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(progress * frameCount)
        );
        
        if (state.frame !== frameIndex) {
            state.frame = frameIndex;
            requestAnimationFrame(renderChiSiamo);
            
            const t1 = document.getElementById('st-1');
            const t2 = document.getElementById('st-2');
            const t3 = document.getElementById('st-3');
            const t4 = document.getElementById('st-4');
            const t5 = document.getElementById('st-5');
            const t6 = document.getElementById('st-6');
            const t7 = document.getElementById('st-7');
            const t8 = document.getElementById('st-8');
            
            if (t1) t1.classList.toggle('active', frameIndex >= 0 && frameIndex <= 14);
            if (t2) t2.classList.toggle('active', frameIndex >= 16 && frameIndex <= 30);
            if (t3) t3.classList.toggle('active', frameIndex >= 32 && frameIndex <= 48);
            if (t4) t4.classList.toggle('active', frameIndex >= 50 && frameIndex <= 68);
            if (t5) t5.classList.toggle('active', frameIndex >= 70 && frameIndex <= 88);
            if (t6) t6.classList.toggle('active', frameIndex >= 90 && frameIndex <= 115);
            if (t7) t7.classList.toggle('active', frameIndex >= 120 && frameIndex <= 170);
            if (t8) t8.classList.toggle('active', frameIndex >= 180);
        }
    });
}
