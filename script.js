/**
 * Client-side Single Page Application (SPA) routing.
 * Toggles the visibility of sections without reloading the window.
 * @param {string} pageId - Target page identifier (e.g., 'home', 'blog')
 */
function navigateTo(pageId) {
    // 1. Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active-page'));
    
    // 2. Display requested page
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    // 3. Keep Navigation Links Synchronized
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeNavLink = document.getElementById('nav-' + pageId);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }

    // 4. Force browser window view to the top
    window.scrollTo({ top: 0, behavior: 'instant' });
}

/**
 * Triggers a customizable slide-up notification alert at the bottom of the screen.
 * Replaces default browser alert() calls which cause frame-blocking issues in previews.
 * @param {string} text - Message to display
 */
function triggerNotification(text) {
    const toast = document.getElementById('toast');
    toast.textContent = text;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

/**
 * Handles contact form submissions cleanly.
 */
function handleFormSubmit(event) {
    event.preventDefault();
    triggerNotification("Message sent successfully! (Demo Mode)");
    document.getElementById('contact-form').reset();
}

// Router initialization: Detect URL state hash on page boot
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'blog', 'blueprints', 'about', 'contact'];
    
    if (validPages.includes(hash)) {
        navigateTo(hash);
    }
});
