# 🚀 Jamie Scents - Quick Start Guide

## ⚡ 30-Second Setup

### Option 1: Using VS Code Live Server (Recommended)
1. Open the project folder in VS Code
2. Install "Live Server" extension (if not already installed)
3. Right-click on `index.html` → "Open with Live Server"
4. Website opens in your browser automatically!

### Option 2: Using Python
```bash
# Navigate to project folder in terminal/command prompt
cd "C:\Users\SALMI DEV PRO\Desktop\Web Projects\Jamie Scents"

# Start a local server
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 3: Using Node.js
```bash
# Using http-server package
npx http-server

# Or using serve package
npx serve
```

---

## 📋 What's Included

### ✅ 4 Complete Pages
- **index.html** - Home page with hero, products, testimonials, newsletter
- **shop.html** - Product catalog with filtering, sorting, and quick view
- **about.html** - Brand story, mission, timeline, why choose us
- **contact.html** - Contact form, FAQ, business info, Google Map

### ✅ Features
- 🎨 Premium luxury design with gold/dark color scheme
- 📱 Fully responsive (desktop, tablet, mobile)
- 🔍 Product filtering by category and price
- 🛒 Quick-view product modal
- 📧 Newsletter subscription
- 📝 Contact form with validation
- ❓ FAQ accordion
- ⚡ Smooth animations throughout

### ✅ Code Organization
```
css/styles.css      - 1000+ lines of responsive design
js/main.js          - Navigation & general interactions
js/shop.js          - Product filtering & modal
js/contact.js       - Form validation & FAQ
```

---

## 🎯 Key Features to Try

### 1. **Product Filtering** (Shop page)
- Click "Categories" to filter by Floral, Oriental, Fresh, Woody
- Use price slider to filter by budget
- Click "Reset Filters" to start over
- Use sort dropdown for different product orders

### 2. **Quick View Modal** (Shop page)
- Click "View Details" on any product
- Adjust quantity with +/- buttons
- See detailed product information
- Press ESC or click background to close

### 3. **Contact Form** (Contact page)
- Fill in the form (validation included)
- Try submitting with invalid emails to see errors
- All fields have specific requirements

### 4. **FAQ Accordion** (Contact page)
- Click any FAQ question to expand/collapse
- Only one FAQ opens at a time
- Smooth animations

### 5. **Responsive Design**
- Resize your browser window to see mobile layout
- Try on actual mobile device
- Navigation becomes hamburger menu on mobile

---

## 🎨 Customization Examples

### Change Brand Name
Find and replace "Jamie Scents" with your brand name:
- In HTML files (logo, title, footer)
- In README.md
- In comments

### Change Colors
Edit `css/styles.css` (lines 7-10):
```css
:root {
    --primary-color: #d4af37;     /* Change this */
    --secondary-color: #2d2d2d;   /* Change this */
    --accent-color: #8b7355;      /* Change this */
    --light-bg: #f5f1e8;          /* Change this */
}
```

### Add Your Company Info
Edit contact details in:
- `contact.html` (multiple locations)
- `index.html` (footer)
- All other pages (footer)

### Add More Products
Edit `js/shop.js` - Find the `products` array and add:
```javascript
{
    id: 13,
    name: 'Your Product',
    category: 'floral',  // or oriental, fresh, woody
    price: 79.99,
    description: 'Your description',
    color: '#ff0000',        // Bottle cap color
    lightColor: '#ff9999'    // Bottle body color
}
```

### Add Real Products Images
Replace SVG bottles in:
- `js/shop.js` - in renderProducts() function
- `index.html` - in best sellers section

---

## 🔧 Useful Keyboard Shortcuts

- **ESC** - Close product modal
- **Ctrl+F** - Search within page
- **F12** - Open Developer Tools
- **Ctrl+Shift+I** - Inspect page elements

---

## 📊 Browser Testing

### Test Responsiveness
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select different devices to test

### Test on Mobile
1. Host the site online (GitHub Pages, Netlify, etc.)
2. Scan QR code or share link
3. Test on actual phones/tablets

---

## 🐛 Troubleshooting

### Website not loading?
- ✓ Check you're opening from a local server (not file://)
- ✓ Clear browser cache (Ctrl+Shift+Delete)
- ✓ Check console for errors (F12)

### Styles not applying?
- ✓ Hard refresh page (Ctrl+F5)
- ✓ Verify css/styles.css exists
- ✓ Check file paths in HTML

### JavaScript not working?
- ✓ Check console errors (F12)
- ✓ Verify js/ folder has all 3 files
- ✓ Check HTML script tags have correct paths

### Form not validating?
- ✓ Open browser console (F12)
- ✓ Check contact.js is loaded
- ✓ Try different email formats

---

## 📦 Deploying to Production

### Option 1: GitHub Pages (Free)
1. Create GitHub account
2. Create new repository
3. Upload all files
4. Enable Pages in settings
5. Site live at: username.github.io/repo-name

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop project folder
3. Site goes live instantly!

### Option 3: Traditional Hosting
1. Upload files via FTP
2. Set index.html as default page
3. Your domain points to project

---

## 📞 Common Questions

**Q: Can I use this as a real shop?**
A: Yes! Backend needed for:
- Real shopping cart
- Payment processing
- Email notifications
- Order tracking

**Q: How do I add real images?**
A: Replace SVG code with `<img>` tags or use image upload plugin

**Q: Can I add more pages?**
A: Yes! Copy an existing page, update content, add to navigation

**Q: Is it mobile-friendly?**
A: Yes! Fully responsive from 480px to 4K screens

**Q: How do I change fonts?**
A: Edit `css/styles.css` line ~43: `font-family: ...`

---

## 📚 File Size Reference
- HTML files: ~10-15 KB each
- CSS file: ~45 KB
- JavaScript files: ~15-20 KB each
- Total: ~120 KB (very lightweight!)

---

## 🎓 Learning Resources

- **HTML**: www.w3schools.com/html
- **CSS**: www.w3schools.com/css
- **JavaScript**: www.w3schools.com/js
- **Responsive Design**: www.web.dev/responsive-web-design

---

## 🎉 You're All Set!

Your premium fragrance website is ready to go. Start by:
1. Opening the site in your browser
2. Exploring all 4 pages
3. Testing mobile responsiveness
4. Customizing content and colors
5. Sharing with others!

**Enjoy building! 🚀**
