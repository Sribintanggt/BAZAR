// typing.js - Cascade Typing Effect
function initTypingAnimation() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroTitle = document.querySelector('.hero-title');
    const heroDesc = document.querySelector('.hero-description');
    
    // Reset untuk animasi
    if (heroSubtitle) heroSubtitle.style.opacity = '0';
    if (heroTitle) heroTitle.style.opacity = '0';
    if (heroDesc) heroDesc.style.opacity = '0';
    
    // Typing function
    function typeWriter(element, text, speed = 50, delay = 0) {
        if (!element) return;
        
        setTimeout(() => {
            let i = 0;
            element.textContent = '';
            element.style.opacity = '1';
            
            // Tambah cursor
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            cursor.textContent = '|';
            element.appendChild(cursor);
            
            function typeChar() {
                if (i < text.length) {
                    // Insert karakter sebelum cursor
                    const textBeforeCursor = text.substring(0, i + 1);
                    const textAfterCursor = text.substring(i + 1);
                    element.innerHTML = textBeforeCursor + 
                                      '<span class="typing-cursor">|</span>' + 
                                      textAfterCursor;
                    i++;
                    setTimeout(typeChar, speed);
                } else {
                    // Animasi selesai, hapus cursor dengan fade out
                    element.innerHTML = text;
                    const cursorSpan = document.createElement('span');
                    cursorSpan.className = 'typing-cursor fade-out';
                    cursorSpan.textContent = '|';
                    element.appendChild(cursorSpan);
                    
                    // Hapus cursor setelah fade out
                    setTimeout(() => {
                        if (cursorSpan.parentNode) {
                            cursorSpan.remove();
                        }
                    }, 500);
                }
            }
            typeChar();
        }, delay);
    }
    
    // Jalankan animasi berurutan
    typeWriter(heroSubtitle, 'Exclusive Culinary Experience', 80, 300);
    typeWriter(heroTitle, 'Exclusive Bazar TKJ', 100, 1200);
    typeWriter(heroDesc, 
        'Sebuah pengalaman kuliner yang sangat unik dimana makanan makanan ini di sajikan secara hangat dan dapat di nikmati oleh pembeli secara langsung', 
        20, 2000);
}

// Tunggu DOM siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypingAnimation);
} else {
    initTypingAnimation();
}


