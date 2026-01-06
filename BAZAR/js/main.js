// main.js

// Data untuk chef
const chefsData = [
    {
        name: "Chef Andrea Giovanni",
        specialty: "Modern Italian Cuisine",
        description: "Membawa sentuhan Italia kontemporer dengan bahan lokal terpilih. Spesialisasi dalam pasta dan risotto.",
        image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Chef Maya Sari",
        specialty: "Asian Fusion",
        description: "Menggabungkan rasa tradisional Asia dengan teknik modern. Kreasi signature: Black Truffle Dim Sum.",
        image: "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Chef Rafael Costa",
        specialty: "Molecular Gastronomy",
        description: "Seni dan sains dalam setiap hidangan. Pengalaman makan yang tak terlupakan dengan teknik molekuler.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    }
];

// Data untuk menu makanan - SUDAH DIUBAH KE images/menu/
const foodMenuData = [
    {
        name: "Jasuke",
        price: "Rp 5K",
        description: "Pasta tagliatelle segar dengan saus truffle hitam premium, parmesan reggiano, dan minyak truffle.",
        image: "images/menu/makanan1.jpg",
        tags: ["Italian", "Vegetarian", "Chef's Special"]
    },
    {
        name: "Mix Platter",
        price: "Rp 10K",
        description: "Wagyu A5 marbling score 9+, disajikan medium-rare dengan red wine reduction dan mashed potato truffle.",
        image: "images/menu/makanan2.jpg",
        tags: ["Japanese", "Premium", "Limited"]
    },
    {
        name: "Mochi Bites",
        price: "Rp 10K",
        description: "Salmon Atlantik dengan kulit crispy, asparagus, dan lemon butter sauce. Disajikan dengan cauliflower puree.",
        image: "images/menu/makanan3.jpg",
        tags: ["Seafood", "Healthy", "Gluten Free"]
    },
    {
        name: "RiceBowl Chiken Katsu",
        price: "Rp 13K",
        description: "Steak ribeye 250gr dari Argentina, disajikan dengan smoked potato dan chimichurri sauce.",
        image: "images/menu/makanan4.jpg",
        tags: ["Steak", "Argentinian", "Best Seller"]
    },
    {
        name: "Dimsum",
        price: "Rp 14K",
        description: "Burger dengan patty wagyu, truffle aioli, smoked gouda cheese, dan brioche bun premium.",
        image: "images/menu/makanan5.jpg",
        tags: ["Burger", "Wagyu", "Comfort Food"]
    },
    {
        name: "Nasi Ayam Mentega",
        price: "Rp 15K",
        description: "Pizza dengan truffle cream sauce, campuran jamur premium, mozzarella, dan fresh herbs.",
        image: "images/menu/makanan6.jpg",
        tags: ["Pizza", "Vegetarian", "Wood Fired"]
    }
];

// Data untuk menu minuman - SUDAH DIUBAH KE images/menu/
const drinksMenuData = [
    {
        name: "Es Teh",
        price: "Rp 5k",
        description: "Cocktail signature dengan gin, edible gold flakes, lavender syrup, dan lemon twist.",
        image: "images/menu/minuman1.jpg",
        tags: ["Cocktail", "Signature", "Instagramable"],
        tagClass: "cocktail"
    },
    {
        name: "Cappucino",
        price: "Rp 5K",
        description: "Mocktail segar dengan campuran jus mangga, nanas, jeruk, dan soda dengan gradasi warna sunset.",
        image: "images/menu/minuman2.jpg",
        tags: ["Non-Alcoholic", "Mocktail", "Refreshing"],
        tagClass: "non-alcoholic"
    },
    {
        name: "Es Kuwut",
        price: "Rp 5k",
        description: "Red wine premium dari Bordeaux, Prancis. Notes: blackberry, cassis, vanilla, dan oak.",
        image: "images/menu/minuman3.jpg",
        tags: ["Wine", "Premium", "French"],
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
        note: "Hanya Event Tahunan!!!"
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
    document.querySelectorAll('.cta-button:not(.navbar .cta-button)').forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to contact section for reservation
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navigation button
    const navButton = document.querySelector('.navbar .cta-button');
    if (navButton) {
        navButton.addEventListener('click', function() {
            alert('Reservasi sistem akan segera dibuka! Hubungi kami di +62 812-3456-7890 untuk informasi lebih lanjut.');
        });
    }
}

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