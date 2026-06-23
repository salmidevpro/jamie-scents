// ============================================
// CONTACT FORM VALIDATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous messages
            clearErrorMessages();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            let isValid = true;
            
            if (!name) {
                showError('name', 'Please enter your full name');
                isValid = false;
            } else if (name.length < 2) {
                showError('name', 'Name must be at least 2 characters');
                isValid = false;
            }
            
            if (!email) {
                showError('email', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (phone && !isValidPhone(phone)) {
                showError('phone', 'Please enter a valid phone number');
                isValid = false;
            }
            
            if (!subject) {
                showError('subject', 'Please select a subject');
                isValid = false;
            }
            
            if (!message) {
                showError('message', 'Please enter your message');
                isValid = false;
            } else if (message.length < 10) {
                showError('message', 'Message must be at least 10 characters');
                isValid = false;
            }
            
            // Submit form if valid
            if (isValid) {
                submitContactForm(name, email, phone, subject, message);
            }
        });
    }
});

function showError(fieldId, errorMessage) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.add('show');
        
        const input = document.getElementById(fieldId);
        if (input) {
            input.style.borderColor = '#e74c3c';
        }
    }
}

function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
    
    // Reset input borders
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Basic phone validation - accepts various formats
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function submitContactForm(name, email, phone, subject, message) {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('contactFormMessage');
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Simulate API call
    setTimeout(() => {
        // Success message
        formMessage.textContent = '✓ Thank you for contacting us! We\'ll get back to you within 24 hours.';
        formMessage.style.color = '#27ae60';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.style.display = 'none';
        }, 5000);
    }, 1500);
}

// ============================================
// FAQ ACCORDION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const answer = item.querySelector('.faq-answer');
                
                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherAnswer) {
                            otherAnswer.style.display = 'none';
                            otherAnswer.classList.remove('show');
                        }
                        if (otherToggle) {
                            otherToggle.style.transform = 'rotate(0)';
                        }
                    }
                });
                
                // Toggle current FAQ
                if (answer) {
                    const isOpen = answer.style.display === 'block';
                    answer.style.display = isOpen ? 'none' : 'block';
                    answer.classList.toggle('show');
                    
                    const toggle = this.querySelector('.faq-toggle');
                    if (toggle) {
                        toggle.style.transform = isOpen ? 'rotate(0)' : 'rotate(180deg)';
                    }
                }
            });
        }
    });
});

// ============================================
// FORM FIELD INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input => {
        // Remove error styling when user starts typing
        input.addEventListener('input', function() {
            this.style.borderColor = '';
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '';
        });
    });
});

// ============================================
// FORM PLACEHOLDERS ENHANCEMENT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Add floating label effect if needed
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        
        if (input) {
            // Add visual feedback on focus
            input.addEventListener('focus', function() {
                group.style.opacity = '1';
            });
        }
    });
});

// ============================================
// SUBSCRIBE CHECKBOX
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const subscribeCheckbox = document.getElementById('subscribe');
    
    if (subscribeCheckbox) {
        subscribeCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // Could trigger additional action here
                console.log('User subscribed to newsletter');
            }
        });
    }
});

// ============================================
// FORM AUTOSAVE (Optional Enhancement)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Save form data to localStorage on input
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData);
                localStorage.setItem('contactFormData', JSON.stringify(data));
            });
        });
        
        // Restore form data on page load
        const savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const input = document.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = data[key];
                }
            });
        }
        
        // Clear saved data on successful submission
        const originalSubmit = contactForm.onsubmit;
        contactForm.addEventListener('submit', function() {
            setTimeout(() => {
                localStorage.removeItem('contactFormData');
            }, 2000);
        });
    }
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', function(e) {
    // Tab through FAQ items
    if (e.key === 'Tab') {
        const faqItems = document.querySelectorAll('.faq-item');
        if (faqItems.length > 0) {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.closest('.faq-question')) {
                // Accessible focus management
                activeElement.setAttribute('tabindex', '0');
            }
        }
    }
});

// ============================================
// ARIA LABELS FOR ACCESSIBILITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question h3');
        const answer = item.querySelector('.faq-answer');
        const toggleBtn = item.querySelector('.faq-question');
        
        if (question && answer && toggleBtn) {
            const questionText = question.textContent;
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.setAttribute('aria-controls', `faq-answer-${index}`);
            answer.setAttribute('id', `faq-answer-${index}`);
        }
    });
    
    // Update aria-expanded on toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });
});
