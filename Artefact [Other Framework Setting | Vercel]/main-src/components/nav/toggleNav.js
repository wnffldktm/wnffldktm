document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navigation = document.getElementById('main-navigation');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    const logoContainer = document.getElementById('logo-container');
    const logoText = document.querySelector('.logo-text');

    if (!navToggle || !navigation || !navMenu || !logoContainer || !logoText) return;

    navToggle.addEventListener('click', function () {
        const isExpanding = !navigation.classList.contains('expanded');

        navigation.classList.toggle('expanded');
        body.classList.toggle('nav-expanded', isExpanding);
        logoContainer.classList.toggle('collapsed', !isExpanding);
        logoContainer.classList.toggle('expanded', isExpanding);
        logoText.textContent = isExpanding ? 'by' : 'for';
        navToggle.setAttribute('aria-expanded', isExpanding);
        navMenu.setAttribute('aria-hidden', !isExpanding);

        if (isExpanding) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (navigation.classList.contains('expanded') &&
            !e.target.closest('#main-navigation') &&
            !e.target.closest('#nav-toggle')) {
            navigation.classList.remove('expanded');
            body.classList.remove('nav-expanded');
            logoContainer.classList.add('collapsed');
            logoContainer.classList.remove('expanded');
            logoText.textContent = 'for';
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
            body.style.overflow = '';
        }
    });
});