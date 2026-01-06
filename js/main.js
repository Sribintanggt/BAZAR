// main.js

// Data untuk chef - GANTI DENGAN IMAGE LOKAL DI FOLDER images/best/
const chefsData = [
    {
        name: "RiceBowl Chiken Katsu",
        specialty: "Asian Food",
        description: "Dibuat dari fillet ayam pilihan, dibalut tepung roti renyah keemasan. Gurih di luar, lembut dan juicy di dalam!",
        image: "images/menu/makanan4.jpg"  
    },
    {
        name: "Dimsum",
        specialty: "Asian Food",
        description: "Kulit lembut berisi daging ayam pilihan yang juicy, dipadu bumbu gurih yang pas. Harumnya bikin lapar sejak suapan pertama!",
        image: "images/menu/makanan5.jpg" 
    },
    {
        name: "Nasi Ayam Mentega",
        specialty: "Asian Food",
        description: "Ayam goreng renyah dimasak dengan saus mentega gurih, berpadu manis dan aroma bawang yang menggoda. Setiap gigitan lembut, juicy, dan bikin nagih!",
        image: "images/menu/makanan6.jpg"  
    }
];

// Data untuk menu makanan - SUDAH DIUBAH KE images/menu/
const foodMenuData = [
    {
        name: "Jasuke",
        price: "Rp 5K",
        description: "Jagung manis pipil hangat dipadu susu creamy dan keju parut melimpah. Manis, gurih, dan bikin ketagihan!",
        image: "images/menu/makanan1.jpg",
        tags: ["Fress", "Sweet", "fragrant"]
    },
    {
        name: "Mix Platter",
        price: "Rp 10K",
        description: "Perpaduan nugget gurih, sosis juicy, dan kentang goreng renyah. Satu porsi lengkap untuk camilan rame-rame!",
        image: "images/menu/makanan2.jpg",
        tags: ["Snack", "party", "Best Seller"]
    },
    {
        name: "Mochi Bites",
        price: "Rp 10K",
        description: "Mochi lembut kenyal dengan isian manis, disajikan lengkap dengan cocolan fla creamy dan Oreo crumble yang bikin nagih!",
        image: "images/menu/makanan3.jpg",
        tags: ["tasty", "bites", "soft"]
    },
    {
        name: "RiceBowl Chiken Katsu",
        price: "Rp 13K",
        description: "Dibuat dari fillet ayam pilihan, dibalut tepung roti renyah keemasan. Gurih di luar, lembut dan juicy di dalam!",
        image: "images/menu/makanan4.jpg",
        tags: ["crisp", "fried", "Best Seller"]
    },
    {
        name: "Dimsum",
        price: "Rp 14K",
        description: "Kulit lembut berisi daging ayam pilihan yang juicy, dipadu bumbu gurih yang pas. Harumnya bikin lapar sejak suapan pertama!",
        image: "images/menu/makanan5.jpg",
        tags: ["tasty", "delicious", "Best Seller"]
    },
    {
        name: "Nasi Ayam Mentega",
        price: "Rp 15K",
        description: "Ayam goreng renyah dimasak dengan saus mentega gurih, berpadu manis dan aroma bawang yang menggoda. Setiap gigitan lembut, juicy, dan bikin nagih!",
        image: "images/menu/makanan6.jpg",
        tags: ["Pdelicious", "Creamy", "Best Seller"]
    }
];

// Data untuk menu minuman - SUDAH DIUBAH KE images/menu/
const drinksMenuData = [
    {
        name: "Ice Tea",
        price: "Rp 5k",
        description: "Seduhan teh pilihan dengan es batu dingin. Ringan, menyegarkan, dan pas pelepas dahaga!",
        image: "images/menu/minuman1.jpg",
        tags: ["Cold", "Sweet", "fragrant"],
        tagClass: "cocktail"
    },
    {
        name: "Cappucino",
        price: "Rp 5K",
        description: "Cappuccino dingin berpadu cincau kenyal, sensasi segar yang bikin nagih.",
        image: "images/menu/minuman2.jpg",
        tags: ["Coffe", "Sweet", "Cold"],
        tagClass: "non-alcoholic"
    },
    {
        name: "Es Kuwut",
        price: "Rp 5k",
        description: "Disajikan dingin dengan timun dan sirup melon segar, selasih, dan jeruk nipis yang menyegarkan di setiap tegukan.",
        image: "images/menu/minuman3.jpg",
        tags: ["Green", "Sweety", "Fresh"],
        tagClass: "drink-tag"
    },
    
];

// Data untuk event details
const eventDetailsData = [
    {
        icon: "far fa-calendar-alt",
        title: "Tanggal & Waktu",
        content: "15 Januari 2026",
        highlight: "09.00 - 14.00 WIB",
        note: "Selamat Datang"
    },
    {
        icon: "fas fa-map-marker-alt",
        title: "Lokasi",
        content: "Smk Bintang Harapan",
        highlight: "Lapangan Smk Bintang Harapan",
        note: "Cibarusah Jaya"
    },
    {
        icon: "fas fa-ticket-alt",
        title: "Tanggal Pre Order (Po)",
        content: "Mulai dari Tanggal 7 Januari 2026",
        highlight: "Tidak Ada Minimum spending",
        note: "24 Jam Live Po"
    }
];

// Fungsi untuk membuat kartu chef
function createChefCard(chef) {
    return `
        <div class="chef-card glass">
            <div class="chef-image">
                <img src="${chef.image}" alt="${chef.name}" loading="lazy">
            </div>
            <h3 class="chef-name">${chef.name}</h3>
            <div class="chef-specialty">${chef.specialty}</div>
            <p class="chef-description">${chef.description}</p>
        </div>
    `;
}

// Fungsi untuk membuat item menu
function createMenuItem(item, isDrink = false) {
    const tagClass = isDrink ? (item.tagClass || 'drink-tag') : '';
    
    const tags = item.tags.map(tag => 
        `<span class="tag ${tagClass}">${tag}</span>`
    ).join('');
    
    return `
        <div class="menu-item glass">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <div class="menu-item-price">${item.price}</div>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-tags">
                    ${tags}
                </div>
            </div>
        </div>
    `;
}

// Fungsi untuk membuat kartu detail event
function createDetailCard(detail) {
    return `
        <div class="detail-card glass">
            <div class="detail-icon">
                <i class="${detail.icon}"></i>
            </div>
            <h3 class="detail-title">${detail.title}</h3>
            <p class="detail-content">${detail.content}</p>
            <p class="detail-content highlight">${detail.highlight}</p>
            <p class="detail-content">${detail.note}</p>
        </div>
    `;
}

// Fungsi untuk menginisialisasi data
function initializeData() {
    // Load chefs
    const chefsGrid = document.querySelector('.chefs-grid');
    if (chefsGrid) {
        chefsGrid.innerHTML = chefsData.map(createChefCard).join('');
    }
    
    // Load food menu
    const foodMenuGrid = document.querySelector('#food-menu .menu-grid');
    if (foodMenuGrid) {
        foodMenuGrid.innerHTML = foodMenuData.map(item => createMenuItem(item, false)).join('');
    }
    
    // Load drinks menu
    const drinksMenuGrid = document.querySelector('#drinks-menu .menu-grid');
    if (drinksMenuGrid) {
        drinksMenuGrid.innerHTML = drinksMenuData.map(item => createMenuItem(item, true)).join('');
    }
    
    // Load event details
    const eventDetailsGrid = document.querySelector('.event-details-grid');
    if (eventDetailsGrid) {
        eventDetailsGrid.innerHTML = eventDetailsData.map(createDetailCard).join('');
    }
}

// Smooth scrolling untuk anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbar = document.querySelector('.navbar');
                navbar.classList.remove('active');
            }
        });
    });
}

// Add scroll effect to header
function initHeaderScrollEffect() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.85)';
            header.style.boxShadow = 'none';
        }
    });
}

// Di fungsi initializeData() atau DOMContentLoaded, tambah:
setTimeout(() => {
    // Animate stats counter
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
            }
        }, 50);
    });
}, 3500); // Mulai setelah typing selesai

// Menu Tabs Functionality
function initMenuTabs() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and categories
            menuTabs.forEach(t => t.classList.remove('active'));
            menuCategories.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding category
            const categoryId = tab.getAttribute('data-category') + '-menu';
            const activeCategory = document.getElementById(categoryId);
            if (activeCategory) {
                activeCategory.classList.add('active');
            }
        });
    });
}

// Button interactions
function initButtonInteractions() {
    // 1. BUTTON "LIHAT MENU LENGKAP" di Hero → scroll ke #menu
    const lihatMenuButton = document.querySelector('.hero .cta-button');
    if (lihatMenuButton) {
        lihatMenuButton.addEventListener('click', function() {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                window.scrollTo({
                    top: menuSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // 2. BUTTON RESERVASI di Navbar → alert saja
    const navReservasiButton = document.querySelector('.navbar .cta-button');
    if (navReservasiButton) {
        navReservasiButton.addEventListener('click', function() {
            alert('Reservasi sistem akan segera dibuka! Hubungi kami via WhatsApp untuk informasi lebih lanjut.');
        });
    }
    
    // 3. BUTTON SUBSCRIBE di Footer → tetap newsletter function
    // (sudah ada fungsi initNewsletter() terpisah)
}

// PASTIKAN fungsi ini dipanggil di DOMContentLoaded:
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initMenuTabs();
    initButtonInteractions();  // ← INI YANG DIPERBAIKI
    initMobileMenu();
    initNewsletter();
});


// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navbar.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNavbar = navbar.contains(event.target);
            const isClickOnMobileBtn = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideNavbar && !isClickOnMobileBtn && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Newsletter subscription
function initNewsletter() {
    const subscribeBtn = document.getElementById('subscribe-btn');
    const newsletterEmail = document.getElementById('newsletter-email');
    
    if (subscribeBtn && newsletterEmail) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = newsletterEmail.value;
            // Validasi sederhana
            if (email && email.includes('@') && email.includes('.')) {
                alert(`Terima kasih! Email ${email} telah berlangganan newsletter kami.`);
                newsletterEmail.value = '';
            } else {
                alert('Mohon masukkan email yang valid.');
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initMenuTabs();
    initButtonInteractions();
    initMobileMenu();
    initNewsletter();  // Tetap dipanggil
    
    console.log('Bazar Éclat website loaded successfully!');
});

