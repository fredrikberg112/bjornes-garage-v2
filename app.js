// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const navItems = document.querySelectorAll('.nav-item.has-dropdown');
    
    // Toggle mobile menu
    menuToggle?.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on overlay click
    mobileOverlay?.addEventListener('click', function() {
        mainNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Mobile dropdown toggles
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown');
        
        link?.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn?.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            alert('Sök efter: ' + query + '\n\n(I en riktig butik skulle detta leda till sökresultatsidan)');
        }
    });
    
    searchInput?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
    
    // Add to cart functionality
    const cartButtons = document.querySelectorAll('.btn-cart');
    const cartBadge = document.querySelector('.cart .badge');
    let cartCount = 0;
    
    cartButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            cartCount++;
            cartBadge.textContent = cartCount;
            
            // Animation
            this.textContent = '✓ Tillagd!';
            this.style.background = 'var(--success)';
            this.style.borderColor = 'var(--success)';
            this.style.color = 'var(--bg-primary)';
            
            setTimeout(() => {
                this.textContent = 'Lägg i kundvagn';
                this.style.background = '';
                this.style.borderColor = '';
                this.style.color = '';
            }, 1500);
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        if (email) {
            alert('Tack för din prenumeration!\nE-post: ' + email);
            this.querySelector('input').value = '';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});
