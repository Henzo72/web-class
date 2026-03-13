document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Burger Menu Toggle ---
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    
    if(burgerMenu && mobileNav) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
            
            // Prevent scrolling on body when menu is open
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // --- 3. Close mobile menu when a link is clicked ---
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- 4. Scroll Animations (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.fade-in-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

});
