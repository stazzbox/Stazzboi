/**
 * STAZZBOI.COM — Version 1.0
 * Main Application Controller — Navigation & App States
 * Foundation & Development Plan
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

/**
 * Initializes ecosystem event listeners and lifecycle handling
 */
function initApp() {
    initHeroPortal();
    initPortalGrid();
    applyRouteAnimations();
}

/**
 * Configures the interactive Hero Banner behavior
 * Triggers navigation to the /kelvin entity path
 */
function initHeroPortal() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    heroSection.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('/kelvin');
    });
}

/**
 * Configures the primary app-style portal navigation matrix
 */
function initPortalGrid() {
    const portalTiles = document.querySelectorAll('.portal-tile');
    
    portalTiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = tile.getAttribute('href') || tile.dataset.route;
            if (destination) {
                navigateTo(destination);
            }
        });
    });
}

/**
 * Smooth routing engine simulation
 * Preserves the single-page application (SPA) desktop/mobile feel
 * @param {string} path - Target canonical URL endpoint
 */
function navigateTo(path) {
    console.log(`[Stazzation Routing] Transitioning to: ${path}`);
    
    // Core animation trigger before location switch/history updates
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(-4px)';
        mainContent.style.transition = 'all 0.2s ease-in-out';
    }

    // Redirect or update window location after premium transition delay
    setTimeout(() => {
        window.location.href = path;
    }, 200);
}

/**
 * Ensures visual consistency and entrance animations on page paint
 */
function applyRouteAnimations() {
    const elementsToAnimate = document.querySelectorAll('.hero-section, .portal-tile, .stazz-card');
    
    elementsToAnimate.forEach((element, index) => {
        element.classList.add('animate-fade-in');
        // Sequential cascading delay for tile distribution
        element.style.animationDelay = `${index * 0.04}s`;
    });
}
