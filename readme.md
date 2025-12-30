"# Editorial Times - Professional Blog Website

A beautiful, professional news/blog website built with vanilla HTML, CSS, and JavaScript featuring a toggleable sidebar, dark mode, and smooth animations.

## 🌟 Features

### 1. **Sidebar Navigation**
- **Toggle Button**: Fixed button in the top-left corner (hamburger icon) to open/close the sidebar
- **Overlay Effect**: Semi-transparent overlay when sidebar is open
- **Slide Animation**: Smooth slide-in/out transition
- **Collapsible Submenus**: Expandable menu items with arrow indicators
- **Search Functionality**: Integrated search bar within sidebar
- **Icons**: Beautiful Font Awesome icons for each menu item
- **Active State**: Visual indicator for the current page

### 2. **Dark Mode Toggle**
- **Toggle Button**: Fixed button in the top-right corner (moon/sun icon)
- **Persistent**: Saves preference in localStorage
- **Smooth Transition**: Seamless color transitions between modes
- **Complete Coverage**: All elements adapt to dark mode

### 3. **Smooth Scroll Animations**
- Elements fade in and slide up as you scroll
- Intersection Observer API for performance
- Staggered animations for visual appeal

### 4. **Design System**
- **Color Palette**: Forest green theme for calm, editorial aesthetic
  - Primary: Deep Forest Green (#1d6b4f)
  - Accent: Golden Amber (#f0ad4e)
- **Typography**: 
  - Display: Playfair Display (headlines)
  - Body: Merriweather (articles)
  - Sans: Open Sans (UI elements)
- **Professional Layout**: Classic newspaper-inspired grid

### 5. **Responsive Design**
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly interface

## 📁 Files

- **blog.html** - Main HTML structure
- **blog-style.css** - Complete styles with design tokens
- **blog-script.js** - All JavaScript functionality

## 🎨 Design Tokens

### Colors (HSL Format)
```css
--primary: 147 72% 30%;         /* Deep Forest Green */
--primary-light: 147 60% 45%;   /* Medium Forest Green */
--accent: 43 95% 50%;           /* Golden Amber */
--foreground: 0 0% 15%;         /* Dark Text */
--background: 0 0% 100%;        /* White */
```

### Typography
```css
--font-display: 'Playfair Display';  /* Headlines */
--font-body: 'Merriweather';         /* Article text */
--font-sans: 'Open Sans';            /* UI elements */
```

## 🚀 Usage

### Opening the Website
Navigate to: `http://localhost:3000/blog.html`

### Keyboard Shortcuts
- **Escape**: Close sidebar (when open)
- **Enter**: Submit search (when in search field)

### Customization

#### Change Primary Color
In `blog-style.css`, update the `--primary` variable:
```css
:root {
    --primary: 147 72% 30%;  /* Change these HSL values */
}
```

#### Add New Menu Items
In `blog.html`, add to the `.sidebar-nav .menu`:
```html
<li class=\\"menu-item\\">
    <a href=\\"#your-link\\" class=\\"menu-link\\">
        <i class=\\"fas fa-your-icon\\"></i>
        <span>Your Menu Item</span>
    </a>
</li>
```

#### Add Submenu
```html
<li class=\\"menu-item has-submenu\\">
    <div class=\\"menu-link toggle-submenu\\">
        <div>
            <i class=\\"fas fa-your-icon\\"></i>
            <span>Parent Item</span>
        </div>
        <i class=\\"fas fa-chevron-down arrow\\"></i>
    </div>
    <ul class=\\"submenu\\">
        <li><a href=\\"#\\">Submenu Item 1</a></li>
        <li><a href=\\"#\\">Submenu Item 2</a></li>
    </ul>
</li>
```

## 🎯 Key Features Implemented

✅ Sidebar toggle button in top-left corner  
✅ Sidebar slides over content (overlay)  
✅ Dark mode toggle with localStorage  
✅ Smooth scroll animations  
✅ Forest green color scheme  
✅ Professional editorial design  
✅ Fully responsive  
✅ Accessibility-friendly  
✅ Search functionality  
✅ Collapsible submenus  

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📱 Mobile Optimizations

- Sidebar auto-closes after navigation
- Touch-friendly button sizes (48px)
- Responsive typography scaling
- Horizontal scroll prevention

## 🎨 Design Philosophy

This website follows a **classic professional editorial** aesthetic:
- **Calm Color Palette**: Forest green evokes trust and stability
- **Editorial Typography**: Serif fonts for readability and authority
- **Generous Spacing**: Comfortable reading experience
- **Subtle Animations**: Enhance without distracting
- **Traditional Layout**: Familiar newspaper-inspired grid

## 🔧 Technical Details

### CSS Features
- CSS Custom Properties (Design Tokens)
- CSS Grid & Flexbox layouts
- CSS Transitions & Animations
- Media Queries for responsiveness
- Custom scrollbar styling

### JavaScript Features
- ES6+ syntax
- Intersection Observer API
- LocalStorage API
- Event delegation
- Smooth scroll behavior

### Performance
- Minimal dependencies (only Font Awesome CDN)
- Optimized animations (transform/opacity)
- Lazy loading with Intersection Observer
- Efficient event handling

## 🎉 Credits

- **Fonts**: Google Fonts (Playfair Display, Merriweather, Open Sans)
- **Icons**: Font Awesome 6.4.0
- **Images**: Unsplash (placeholder images)

---

**Enjoy  beautiful blog website!** 🎊

"
