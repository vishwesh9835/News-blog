// ============================================
// SIDEBAR TOGGLE FUNCTIONALITY
// ============================================
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Open Sidebar
function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
}

// Close Sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Event Listeners
sidebarToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// ============================================
// SUBMENU TOGGLE FUNCTIONALITY
// ============================================
const toggles = document.querySelectorAll('.toggle-submenu');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const menuItem = toggle.closest('.menu-item');
        const submenu = toggle.nextElementSibling;
        const arrow = toggle.querySelector('.arrow');

        // Toggle submenu visibility
        submenu.classList.toggle('show');

        // Rotate arrow
        if (arrow) {
            arrow.classList.toggle('open');
        }

        // Toggle active state on parent menu item
        menuItem.classList.toggle('submenu-open');
    });
});

// ============================================
// DARK MODE TOGGLE
// ============================================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const darkModePreference = localStorage.getItem('darkMode');

if (darkModePreference === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// ============================================
// CURRENT DATE DISPLAY
// ============================================
const dateElement = document.getElementById('currentDate');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const currentDate = new Date().toLocaleDateString('en-US', options);
dateElement.textContent = currentDate;

// ============================================
// SMOOTH SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, observerOptions);

// Observe all elements with data-scroll attribute
const scrollElements = document.querySelectorAll('[data-scroll]');
scrollElements.forEach(el => observer.observe(el));

// ============================================
// SEARCH FUNCTIONALITY (Basic)
// ============================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        console.log('Searching for:', searchTerm);
        // In a real application, this would trigger a search
        alert(`Search functionality for "${searchTerm}" will be implemented.`);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for actual anchors, not just '#'
        if (href !== '#' && href !== '#home') {
            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// ACTIVE MENU ITEM TRACKING
// ============================================
const menuLinks = document.querySelectorAll('.sidebar-nav .menu-link');

menuLinks.forEach(link => {
    if (link.tagName === 'A') {
        link.addEventListener('click', () => {
            // Remove active class from all menu items
            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to clicked menu item
            link.closest('.menu-item').classList.add('active');

            // Close sidebar on mobile after clicking
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    }
});

// ============================================
// RESPONSIVE HANDLING
// ============================================
let windowWidth = window.innerWidth;

window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;

    // Close sidebar if resizing from mobile to desktop with sidebar open
    if (windowWidth <= 768 && newWidth > 768 && sidebar.classList.contains('active')) {
        closeSidebar();
    }

    windowWidth = newWidth;
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';

    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// READ MORE LINKS ANIMATION
// ============================================
const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            // Add a subtle animation feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 150);
        }
    });
});
