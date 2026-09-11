document.addEventListener('DOMContentLoaded', () => {
    // Only run if the boot screen exists
    const bootScreen = document.getElementById('boot-screen');
    const desktopEnv = document.getElementById('desktop-environment');
    if (!bootScreen) {
        // If no boot screen, just dispatch the event immediately so the site works
        document.dispatchEvent(new Event('bootComplete'));
        return;
    }

    // Check if we already booted this session
    if (sessionStorage.getItem('hasBooted')) {
        if(desktopEnv) desktopEnv.style.display = 'none'; else if(desktopEnv) desktopEnv.style.display = 'none'; else bootScreen.style.display = 'none';
        document.body.classList.remove('no-scroll');
        
        // If we are NOT transitioning via fake-SPA, fire bootComplete immediately
        if (!sessionStorage.getItem('isTransitioning')) {
            document.dispatchEvent(new Event('bootComplete'));
        }
        return;
    }

    // Lock scroll
    document.body.classList.add('no-scroll');

    // Inizializza l'orologio della taskbar
    function updateTaskbarClock() {
        const timeElement = document.getElementById('taskbar-time');
        if (timeElement) {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            timeElement.textContent = hours + ':' + minutes;
        }
    }
    updateTaskbarClock();
    setInterval(updateTaskbarClock, 60000);

    const bootLines = [
    "CasetiOS (v1.0.4) Kernel initialized",
    "Loading core components...",
    "[ OK ] Mounted /dev/sda1",
    "[ OK ] Mounted /dev/nvme0n1p2",
    "Checking file system integrity... [ DONE ]",
    "[ OK ] Started Logging Service",
    "Initializing network interfaces... eth0 [ UP ]",
    "Setting up IP routing tables...",
    "DHCP request sent... ACK received.",
    "Binding socket to 0.0.0.0:8080...",
    "Loading cryptographic modules... AES-256-GCM loaded.",
    "Initializing random number generator... [ OK ]",
    "Fetching public keys from key server...",
    "[ OK ] Started Cyber Security Framework",
    "Intrusion detection system online.",
    "Scanning for active vulnerabilities... 0 found.",
    "Establishing secure connection to mainframe...",
    "Handshake complete. Cipher: TLS 1.3.",
    "[ OK ] Connection established. Latency: 4ms.",
    "[ OK ] Started Web Interface Modules",
    "Compiling assets and rendering DOM...",
    "Loading JavaScript dependencies...",
    "Executing startup scripts (1/3)...",
    "Executing startup scripts (2/3)...",
    "Executing startup scripts (3/3)...",
    "Synchronizing clock via NTP...",
    "Time sync successful. Offset: -0.002ms.",
    "Allocating memory pages...",
    "Loading neural net heuristics...",
    "Parsing protocol definitions...",
    "[ OK ] Loaded Hardware Specifications",
    "CPU: Intel Core i9 detected. RAM: 64GB OK.",
    "GPU: RTX 4090 initialized. VRAM: 24GB.",
    "Connecting to external database...",
    "Database connection established.",
    "Bypassing firewall protocols... Success.",
    "Injecting payloads into sub-processes...",
    "Decrypting local storage... 10% complete.",
    "Decrypting local storage... 35% complete.",
    "Decrypting local storage... 78% complete.",
    "Decrypting local storage... 100% complete.",
    "Verifying hash signatures... [ VERIFIED ]",
    "Deploying secure containers...",
    "Starting Docker daemon...",
    "Loading image \u0027casetios/core:latest\u0027...",
    "Container successfully created and running.",
    "Connecting to proxy servers...",
    "Routing traffic through nodes... 1... 2... 3... 4... done.",
    "Masking IP address...",
    "Establishing VPN tunnel...",
    "Tunnel established. AES-256 encryption active.",
    "Starting packet sniffer...",
    "Analyzing local subnet for anomalies...",
    "No malicious actors found.",
    "Optimizing kernel parameters...",
    "Applying thermal management policies...",
    "Cooling fans set to 45%.",
    "Mounting secondary drives...",
    "[ OK ] Mounted /mnt/storage",
    "Checking quotas...",
    "Initializing UI subsystem...",
    "Loading CSS frameworks...",
    "Mounting virtual DOM...",
    "Running pre-flight checks...",
    "Check 1... OK",
    "Check 2... OK",
    "Check 3... OK",
    "Finalizing system state...",
    "Loading user profile: \u0027Caseti\u0027...",
    "Checking permissions...",
    "Resolving user access level: ROOT.",
    "Authenticating...",
    "Access Granted.",
    "Initiating visual systems...",
    "Welcome to the system."
];

    let lineIndex = 0;
    
    // Create cursor for the animation phase
    const cursor = document.createElement('span');
    cursor.className = 'boot-cursor';

    const asciiArtLines = [
        "  ____    _    ____  _____ _____ ___ ",
        " / ___|  / \\  / ___|| ____|_   _|_ _|",
        "| |     / _ \\ \\___ \\|  _|   | |  | | ",
        "| |___ / ___ \\ ___) | |___  | |  | | ",
        " \\____/_/   \\_\\____/|_____| |_| |___|",
        " ",
        "[ MODULE: PORTFOLIO ]",
        " "
    ];
    let asciiLineIndex = 0;
    
    function printAsciiLine() {
        if (asciiLineIndex < asciiArtLines.length) {
            const line = document.createElement('pre');
            line.className = 'boot-line ascii-line';
            line.textContent = asciiArtLines[asciiLineIndex];
            bootScreen.appendChild(line);
            
            if (typeof SFX !== 'undefined') SFX.playType();
            bootScreen.scrollTop = bootScreen.scrollHeight;
            
            asciiLineIndex++;
            setTimeout(printAsciiLine, 60);
        } else {
            const initialPrompt = document.createElement('div');
            initialPrompt.className = 'boot-initial-prompt';
            initialPrompt.innerHTML = 'root@caseti-os:~$ [ Premi ENTER o TOCCA per accedere ]<span class="boot-cursor"></span>';
            bootScreen.appendChild(initialPrompt);
            bootScreen.scrollTop = bootScreen.scrollHeight;
            
            document.addEventListener('keydown', startBootAnimation);
            bootScreen.addEventListener('click', startBootAnimation);
            bootScreen.addEventListener('touchstart', startBootAnimation);
        }
    }

    // Avvia la stampa della ASCII Art
    setTimeout(printAsciiLine, 200);

    function printLine() {
        if (lineIndex < bootLines.length) {
            const line = document.createElement('div');
            line.className = 'boot-line';
            const textToPrint = bootLines[lineIndex];
            
            // Insert before cursor
            bootScreen.insertBefore(line, cursor);
            
            line.textContent = textToPrint;
            if (typeof SFX !== 'undefined') SFX.playType();
            bootScreen.scrollTop = bootScreen.scrollHeight;
            
            lineIndex++;
            setTimeout(printLine, 33);
            
                } else {
            // Done printing lines. Show ACCESS GRANTED full screen.
            bootScreen.innerHTML = '<div class="access-granted-text">ACCESS GRANTED</div>';
            
            setTimeout(() => {
                if(desktopEnv) desktopEnv.classList.add('fade-out'); else bootScreen.classList.add('fade-out');
                
                // Once faded out, unlock scroll, hide element, and dispatch event
                setTimeout(() => {
                    if(desktopEnv) desktopEnv.style.display = 'none'; else if(desktopEnv) desktopEnv.style.display = 'none'; else bootScreen.style.display = 'none';
                    document.body.classList.remove('no-scroll');
                    sessionStorage.setItem('hasBooted', 'true');
                    document.dispatchEvent(new Event('bootComplete'));
                }, 500); // Wait for CSS transition (0.5s)
            }, 400); // Show ACCESS GRANTED for 0.4s
        }
    }

    function startBootAnimation(e) {
        if (e && e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        
        // Rimuovi event listeners
        document.removeEventListener('keydown', startBootAnimation);
        bootScreen.removeEventListener('click', startBootAnimation);
        bootScreen.removeEventListener('touchstart', startBootAnimation);
        
        // Ripulisci il terminale iniziale
        bootScreen.innerHTML = '';
        bootScreen.appendChild(cursor);
        
        // Fai partire la vera animazione dopo una breve pausa
        setTimeout(printLine, 200);
    }
});

// Funzione globale per forzare il replay dell'animazione di boot (per debug)
window.debugBoot = function() {
    sessionStorage.removeItem('hasBooted');
    window.location.reload();
};


















