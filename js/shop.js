// ============================================
// PRODUCT DATA
// ============================================

const products = [
    {
        id: 1,
        name: 'Midnight Elegance',
        category: 'oriental',
        price: 89.99,
        description: 'A mysterious blend of oud and jasmine',
        color: '#d4af37',
        lightColor: '#e8d5b5'
    },
    {
        id: 2,
        name: 'Rose Blush',
        category: 'floral',
        price: 79.99,
        description: 'Delicate floral notes of rose and peony',
        color: '#ff69b4',
        lightColor: '#ffe4e1'
    },
    {
        id: 3,
        name: 'Ocean Breeze',
        category: 'fresh',
        price: 74.99,
        description: 'Fresh aquatic notes with citrus undertones',
        color: '#4da6ff',
        lightColor: '#e6f2ff'
    },
    {
        id: 4,
        name: 'Golden Hour',
        category: 'woody',
        price: 84.99,
        description: 'Warm amber and vanilla essence',
        color: '#ffd700',
        lightColor: '#fff8e6'
    },
    {
        id: 5,
        name: 'Forest Whisper',
        category: 'woody',
        price: 82.99,
        description: 'Earthy cedarwood and pine notes',
        color: '#8b6f47',
        lightColor: '#f5f1e8'
    },
    {
        id: 6,
        name: 'Cherry Blossom',
        category: 'floral',
        price: 77.99,
        description: 'Sweet cherry and almond blossom fragrance',
        color: '#ff99cc',
        lightColor: '#ffe4f0'
    },
    {
        id: 7,
        name: 'Citrus Sunrise',
        category: 'fresh',
        price: 69.99,
        description: 'Bright bergamot and grapefruit blend',
        color: '#ffb366',
        lightColor: '#fff9e6'
    },
    {
        id: 8,
        name: 'Velvet Nights',
        category: 'oriental',
        price: 94.99,
        description: 'Rich musk and sandalwood composition',
        color: '#663366',
        lightColor: '#f5e6f5'
    },
    {
        id: 9,
        name: 'Lavender Dream',
        category: 'floral',
        price: 72.99,
        description: 'Soothing lavender with vanilla base',
        color: '#b19cd9',
        lightColor: '#f0e6ff'
    },
    {
        id: 10,
        name: 'Spice Bazaar',
        category: 'oriental',
        price: 86.99,
        description: 'Exotic spice and amber fusion',
        color: '#d2691e',
        lightColor: '#ffe6cc'
    },
    {
        id: 11,
        name: 'Aqua Marine',
        category: 'fresh',
        price: 75.99,
        description: 'Cool mint and sea salt impression',
        color: '#00bfff',
        lightColor: '#e0f6ff'
    },
    {
        id: 12,
        name: 'Iris Elegance',
        category: 'floral',
        price: 81.99,
        description: 'Delicate iris and white musk blend',
        color: '#e6ccff',
        lightColor: '#f7f0ff'
    }
];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    setupFilters();
    setupSorting();
    setupQuickViewModal();
});

// ============================================
// RENDER PRODUCTS
// ============================================

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    const productCount = document.getElementById('productCount');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No products found matching your criteria.</div>';
        productCount.textContent = '0';
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="50" width="90" height="100" fill="${product.lightColor}" stroke="${product.color}" stroke-width="2" rx="5"/>
                    <ellipse cx="75" cy="50" rx="45" ry="15" fill="${adjustBrightness(product.lightColor, 1.1)}"/>
                    <path d="M 60 70 L 65 85 L 85 85 L 90 70" fill="${product.color}"/>
                </svg>
            </div>
            <h3>${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button class="btn btn-secondary btn-sm quick-view-btn" data-product-id="${product.id}">View Details</button>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    productCount.textContent = productsToRender.length;
    
    // Add event listeners to quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            openQuickView(productId);
        });
    });
}

// ============================================
// FILTER SETUP
// ============================================

function setupFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const resetBtn = document.getElementById('resetFilters');
    
    if (!categoryFilters.length) return;
    
    // Category filter
    categoryFilters.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Price range filter
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = this.value;
            applyFilters();
        });
    }
    
    // Reset filters
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            categoryFilters.forEach(checkbox => {
                checkbox.checked = checkbox.value === 'all';
            });
            if (priceRange) {
                priceRange.value = 200;
                priceValue.textContent = '200';
            }
            applyFilters();
        });
    }
}

function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value);
    const maxPrice = parseFloat(document.getElementById('priceRange').value);
    
    let filtered = products;
    
    // Filter by category
    if (!selectedCategories.includes('all')) {
        filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }
    
    // Filter by price
    filtered = filtered.filter(p => p.price <= maxPrice);
    
    renderProducts(filtered);
}

// ============================================
// SORTING
// ============================================

function setupSorting() {
    const sortSelect = document.getElementById('sortSelect');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            applySorting(this.value);
        });
    }
}

function applySorting(sortBy) {
    let sorted = [...products];
    
    // Apply current filters first
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value);
    const maxPrice = parseFloat(document.getElementById('priceRange').value);
    
    if (!selectedCategories.includes('all')) {
        sorted = sorted.filter(p => selectedCategories.includes(p.category));
    }
    sorted = sorted.filter(p => p.price <= maxPrice);
    
    // Apply sorting
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted.reverse();
            break;
        case 'featured':
        default:
            // Keep original order
            break;
    }
    
    renderProducts(sorted);
}

// ============================================
// QUICK VIEW MODAL
// ============================================

function setupQuickViewModal() {
    const modal = document.getElementById('quickViewModal');
    const closeBtn = document.getElementById('closeModal');
    const qtyMinus = document.getElementById('qtyMinus');
    const qtyPlus = document.getElementById('qtyPlus');
    const qtyInput = document.getElementById('qtyInput');
    
    if (!modal) return;
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeQuickView);
    }
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeQuickView();
        }
    });
    
    // Quantity controls
    if (qtyMinus) {
        qtyMinus.addEventListener('click', function() {
            const currentQty = parseInt(qtyInput.value);
            if (currentQty > 1) {
                qtyInput.value = currentQty - 1;
            }
        });
    }
    
    if (qtyPlus) {
        qtyPlus.addEventListener('click', function() {
            const currentQty = parseInt(qtyInput.value);
            if (currentQty < 10) {
                qtyInput.value = currentQty + 1;
            }
        });
    }
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Update modal content
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDesc').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalProductCategory').textContent = capitalizeCategory(product.category);
    
    // Update bottle color
    updateModalBottleColor(product.color, product.lightColor);
    
    // Reset quantity
    document.getElementById('qtyInput').value = 1;
    
    // Show modal
    const modal = document.getElementById('quickViewModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Add to cart button handler
    const addToCartBtn = modal.querySelector('.btn-primary');
    if (addToCartBtn) {
        addToCartBtn.onclick = function() {
            const qty = parseInt(document.getElementById('qtyInput').value);
            addToCart(`${product.name} (x${qty})`, product.price * qty);
            closeQuickView();
        };
    }
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function updateModalBottleColor(color, lightColor) {
    const svg = document.getElementById('modalBottleImage');
    const rect = svg.querySelector('rect');
    const ellipse = svg.querySelector('ellipse');
    const path = svg.querySelector('path');
    
    if (rect) rect.setAttribute('fill', lightColor);
    if (ellipse) ellipse.setAttribute('fill', adjustBrightness(lightColor, 1.1));
    if (path) path.setAttribute('fill', color);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function capitalizeCategory(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

function adjustBrightness(hexColor, factor) {
    // Parse hex color
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Adjust brightness
    const adjustedR = Math.min(255, Math.round(r * factor));
    const adjustedG = Math.min(255, Math.round(g * factor));
    const adjustedB = Math.min(255, Math.round(b * factor));
    
    // Convert back to hex
    return '#' + [adjustedR, adjustedG, adjustedB]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();
}

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('quickViewModal');
        if (modal && modal.classList.contains('show')) {
            closeQuickView();
        }
    }
});
