// decrypted-text.js
// Vanilla JS implementation of DecryptedText effect

class DecryptedText {
    constructor(element, options = {}) {
        this.element = element;
        this.originalText = element.innerText.trim();
        this.chars = options.characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
        this.speed = options.speed || 50;
        this.maxIterations = options.maxIterations || 10;
        
        this.element.style.whiteSpace = 'pre-wrap';
        this.isAnimating = false;
        
        if (options.animateOn === 'view') {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    this.trigger();
                    observer.disconnect();
                }
            }, { threshold: 0.1 });
            observer.observe(this.element);
        } else {
            // Default to hover
            this.element.addEventListener('mouseenter', () => this.trigger());
        }
    }

    trigger() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        let iteration = 0;
        const length = this.originalText.length;
        
        clearInterval(this.interval);
        
        this.interval = setInterval(() => {
            let output = '';
            for (let i = 0; i < length; i++) {
                if (this.originalText[i] === ' ') {
                    output += ' ';
                    continue;
                }
                
                const revealThreshold = (i / length) * this.maxIterations;
                
                if (iteration > revealThreshold) {
                    output += this.originalText[i];
                } else {
                    output += this.chars[Math.floor(Math.random() * this.chars.length)];
                }
            }
            
            if (iteration % 3 === 0 && typeof SFX !== 'undefined') {
                // SFX.playType(); // rimosso per evitare audio durante la decifrazione
            }
            
            this.element.innerText = output;
            
            if (iteration >= this.maxIterations) {
                clearInterval(this.interval);
                this.element.innerText = this.originalText;
                this.isAnimating = false;
            }
            
            iteration++;
        }, this.speed);
    }
}

document.addEventListener('bootComplete', () => {
    // 1. Uso Strategico: applichiamo l'effetto solo a Titoli Principali, Logo e Link della navbar
    const targets = document.querySelectorAll('h1, h2, h3:not(.card h3):not(.cert-card h3), h4, .logo, .nav-links a');
    
    targets.forEach(container => {
        if (!container) return;
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        let node;
        while(node = walker.nextNode()) {
            if (node.nodeValue.trim().length > 0) {
                textNodes.push(node);
            }
        }
        
        textNodes.forEach(node => {
            const span = document.createElement('span');
            span.textContent = node.nodeValue;
            node.parentNode.replaceChild(span, node);
            
            // 3. VelocitÃƒÂ  differenziata in base all'elemento
            let speed = 40;
            let maxIterations = 12;
            
            if (container.tagName.startsWith('H') || container.classList.contains('logo')) {
                speed = 50;
                maxIterations = 15; // PiÃƒÂ¹ lungo per i grandi titoli
            } else {
                speed = 25;
                maxIterations = 8; // PiÃƒÂ¹ rapido e scattante per bottoni e link
            }
            
            const instance = new DecryptedText(span, { animateOn: 'view', maxIterations, speed });
            span.decryptedTextInstance = instance;
        });
    });
});


