/*
  JAVASCRIPT ARCHITECTURE & REUSABILITY
  -------------------------------------
  Your `loadCSS.js` and `toggleNav.js` are good starting points. For a more
  modern, component-based approach as per your DFD, you'd typically have:

  1. A main entry point (`main.js` or `app.js`).
  2. Component-specific scripts (`navigation.js`, `logo.js`).
  3. Utility scripts (`utils/dom.js`, `utils/api.js`).

  This `main.js` file acts as the entry point, initializing all components
  on the page.
*/

/**
 * COMPONENT: Navigation
 *
 * This function encapsulates all the logic for the main navigation component.
 * It finds the required elements and attaches event listeners.
 * This makes the code modular and easy to debug.
 */
function initializeNavigation() {
    // Select elements using specific IDs for robustness.
    const navToggle = document.getElementById('nav-toggle');
    const navigation = document.getElementById('main-navigation');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    const logoContainer = document.getElementById('logo-container');
    const logoText = logoContainer.querySelector('.logo-text');

    // Defensive check: If any element is missing, exit to prevent errors.
    if (!navToggle || !navigation || !navMenu || !logoContainer || !logoText) {
        console.warn('Navigation component not fully initialized. One or more required elements are missing.');
        return;
    }

    /**
     * Handles the click event on the navigation toggle button.
     */
    navToggle.addEventListener('click', function () {
        // Determine the new state *before* changing the class.
        const isExpanding = !navigation.classList.contains('expanded');

        // BEM MODIFIER TOGGLE: This is the core state change.
        navigation.classList.toggle('expanded');
        body.classList.toggle('nav-expanded', isExpanding);

        // Sub-component state change.
        logoContainer.classList.toggle('collapsed', !isExpanding);
        logoContainer.classList.toggle('expanded', isExpanding);

        // Dynamic content change based on state.
        logoText.textContent = isExpanding ? 'by' : 'for';

        // ACCESSIBILITY: Update ARIA attributes to reflect the new state.
        navToggle.setAttribute('aria-expanded', isExpanding);
        navMenu.setAttribute('aria-hidden', !isExpanding);

        // UX: Prevent body from scrolling when the menu is open.
        body.style.overflow = isExpanding ? 'hidden' : '';
    });
}


/**
 * APP INITIALIZATION
 * ------------------
 * This is the main entry point for the page's JavaScript.
 * The 'DOMContentLoaded' event ensures that the script only runs
 * after the entire HTML document has been loaded and parsed.
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components on the page.
    initializeNavigation();
    // In a larger app, you would initialize other components here:
    // initializeSliders();
    // initializeForms();
});
