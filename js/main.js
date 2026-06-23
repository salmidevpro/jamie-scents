// ============================================
// MOBILE NAVIGATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Set active nav link based on current page
    setActiveNavLink();
});

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// NEWSLETTER SUBSCRIPTION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletterEmail').value;
            const formMessage = document.getElementById('formMessage');
            
            // Validate email
            if (!isValidEmail(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = '#e74c3c';
                return;
            }
            
            // Simulate subscription
            formMessage.textContent = '✓ Thank you! You\'ve been subscribed.';
            formMessage.style.color = '#27ae60';
            
            // Reset form
            setTimeout(() => {
                newsletterForm.reset();
                formMessage.textContent = '';
            }, 3000);
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .value-card, .testimonial-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        z-index: 999;
        box-shadow: var(--shadow-lg);
        transition: var(--transition);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'var(--accent-color)';
    });
    
    scrollBtn.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'var(--primary-color)';
    });
});

// ============================================
// ADD TO CART SIMULATION
// ============================================

function addToCart(productName, price) {
    // Create a notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <div style="background: #27ae60; color: white; padding: 15px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin-right: auto;">
            <strong>${productName}</strong> added to cart!
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for better performance
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ============================================
// PRELOAD ANIMATIONS
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePageAnimations);
} else {
    initializePageAnimations();
}

function initializePageAnimations() {
    // Add subtle fade-in to page elements
    const elements = document.querySelectorAll('section, .container');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.05}s`;
    });
}

function setFooterYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function updateCartCountDisplay(count) {
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

function loadCartCount() {
    const storedCart = localStorage.getItem('jamieScentsCart');
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    updateCartCountDisplay(count);
}

window.addEventListener('DOMContentLoaded', function() {
    setFooterYear();
    loadCartCount();
});
