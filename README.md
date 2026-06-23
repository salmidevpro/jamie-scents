# Jamie Scents - Premium Fragrance E-Commerce Website

A modern, high-converting sales website for a luxury fragrance brand built with HTML5, CSS3, and vanilla JavaScript.

## 📁 Project Structure

```
jamie-scents/
├── index.html              # Home page
├── shop.html              # Products/Shop page
├── about.html             # About Us page
├── contact.html           # Contact page
│
├── css/
│   └── styles.css         # Main stylesheet (responsive design)
│
├── js/
│   ├── main.js            # Main JavaScript (navigation, animations)
│   ├── shop.js            # Shop page functionality (filtering, modal)
│   └── contact.js         # Contact form validation & FAQ
│
├── images/                # Image assets directory
├── assets/                # Additional assets directory
└── README.md              # This file
```

## 🌟 Features

### Home Page
- ✨ Hero section with compelling CTA
- 📦 Best-selling products showcase (4 products)
- 💎 Brand value proposition (4 values)
- ⭐ Customer testimonials (3 reviews)
- 📧 Newsletter subscription form
- 🔗 Footer with social links

### Shop Page
- 🔍 Product filtering by category (Floral, Oriental, Fresh, Woody)
- 💰 Price range slider filter
- 🔤 Sort options (Featured, Price, Newest)
- 🎯 Product grid layout (12 products)
- 🖼️ Quick view modal with product details
- 🛒 Add to cart functionality
- 📊 Product count display

### About Us Page
- 📖 Brand story section
- 🎯 Mission & vision cards
- 💯 Why choose us (6 reasons)
- ⏱️ Company timeline (5 milestones)
- 🎨 Custom illustrations

### Contact Page
- 📝 Contact form with validation
  - Name (required, min 2 chars)
  - Email (required, valid format)
  - Phone (optional, formats accepted)
  - Subject (required, dropdown)
  - Message (required, min 10 chars)
- 📍 Business information section
- 🗺️ Embedded Google Map
- ❓ FAQ accordion (6 FAQs)
- 📱 Social media links

## 🎨 Design Features

### Color Palette
- **Primary Gold**: #d4af37 (Luxury accent)
- **Dark Secondary**: #2d2d2d (Sophisticated base)
- **Warm Accent**: #8b7355 (Premium touch)
- **Light Background**: #f5f1e8 (Elegant cream)

### Typography
- Modern, clean sans-serif (Segoe UI)
- Varied font sizes for hierarchy
- Letter spacing for luxury feel

### Responsive Design
- **Desktop**: Full multi-column layouts
- **Tablet** (768px): Optimized layouts with sidebar adjustments
- **Mobile** (480px): Single-column, touch-friendly interfaces

### Animations & Interactions
- Smooth scroll behavior
- Fade-in animations on scroll
- Hover effects on buttons and cards
- Modal animations
- Floating product bottle animation
- Smooth transitions throughout

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server (Live Server, Python, Node.js, etc.)

### Setup Instructions

1. **Download the Project**
   - Extract the files to your desired location

2. **Open with Live Server** (Recommended)
   - Install Live Server extension in VS Code
   - Right-click on `index.html` → Open with Live Server
   - Or use Python: `python -m http.server 8000`

3. **Access the Website**
   - Navigate to `http://localhost:5500` (Live Server) or `http://localhost:8000` (Python)

## 📱 Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Opera: Full support
- IE11: Limited support (ES6 features used)

## 🔧 Customization Guide

### Change Colors
Edit `css/styles.css` CSS variables:
```css
:root {
    --primary-color: #d4af37;      /* Gold */
    --secondary-color: #2d2d2d;    /* Dark */
    --accent-color: #8b7355;       /* Brown */
    --light-bg: #f5f1e8;           /* Cream */
}
```

### Add More Products
Edit `js/shop.js` - add to `products` array:
```javascript
{
    id: 13,
    name: 'Product Name',
    category: 'floral', // or oriental, fresh, woody
    price: 79.99,
    description: 'Product description',
    color: '#hexcolor',
    lightColor: '#hexcolor'
}
```

### Update Company Information
- Edit contact details in footer and contact page
- Update business hours in contact page
- Modify Google Maps embed URL in contact.html

### Change Fonts
Replace Segoe UI in `styles.css` body:
```css
font-family: 'Your Font', sans-serif;
```

### Add Social Media Links
Update all social links (Facebook, Instagram, Twitter, Pinterest URLs) throughout the site.

## 📊 SEO Features

- Semantic HTML5 structure
- Meta descriptions on all pages
- Proper heading hierarchy (h1, h2, h3)
- Alt text ready for images
- Mobile-friendly viewport settings
- Fast loading times with optimized CSS/JS

## 🔒 Security Notes

- Contact form validation on frontend (add backend for production)
- No sensitive data stored locally
- HTTPS recommended for production
- CORS properly configured for external embeds

## 🎯 Performance Optimization

- CSS Grid and Flexbox for efficient layouts
- Minimal JavaScript dependencies
- Debounced event handlers
- Lazy-loaded animations
- Optimized SVG graphics
- CSS transitions for smooth animations

## ⚙️ JavaScript Functions Reference

### Main.js
- `setActiveNavLink()` - Highlights current page in navigation
- `isValidEmail()` - Email validation
- `debounce()` - Function debouncing utility
- Newsletter form submission

### Shop.js
- `renderProducts()` - Dynamically renders product grid
- `applyFilters()` - Applies category and price filters
- `applySorting()` - Sorts products by selected option
- `openQuickView()` - Opens product detail modal
- `closeQuickView()` - Closes modal

### Contact.js
- `validateContactForm()` - Validates all form fields
- `showError()` - Displays field error messages
- `submitContactForm()` - Processes form submission
- `isValidPhone()` - Phone number validation
- FAQ accordion toggle functionality

## 🐛 Known Limitations

- Add to cart is simulated (no backend integration)
- Contact form doesn't send emails (needs backend)
- Newsletter signup simulated
- Map embed uses sample location

## 🔄 Future Enhancements

- Backend integration for form submissions
- Shopping cart functionality
- User accounts & wishlists
- Product reviews & ratings
- Search functionality
- Filtering improvements
- Payment gateway integration
- Order tracking
- Email notifications
- Analytics integration

## 📄 License

This is a demonstration project for a premium fragrance e-commerce website.

## 👨‍💻 Code Quality

- Clean, commented code
- Modular JavaScript structure
- DRY (Don't Repeat Yourself) principles
- Accessible markup (ARIA labels)
- Mobile-first responsive design
- Cross-browser compatibility

## 📞 Support

For issues or questions about the website:
1. Check existing features in the code
2. Review CSS variables for styling changes
3. Examine JavaScript files for functionality
4. Ensure all HTML files are in the root directory
5. Test in different browsers for compatibility

## 🎉 Credits

Built with:
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

---

**Last Updated**: 2024
**Version**: 1.0
