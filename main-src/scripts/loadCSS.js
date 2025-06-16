// Monitor and apply non-critical CSS
document.addEventListener('DOMContentLoaded', function () {
    const cssLoadingIndicator = document.getElementById('css-loading');
    if (cssLoadingIndicator) cssLoadingIndicator.style.display = 'block';

    let cssLoaded = 0;
    const totalCSS = 6; // Number of CSS files

    function cssLoadedHandler() {
        cssLoaded++;
        if (cssLoaded === totalCSS && cssLoadingIndicator) {
            cssLoadingIndicator.style.display = 'none';
        }
    }

    // Load CSS files
    const cssFiles = [
        'main-src/style/base.css',
        'main-src/styles/footer.css',
        'main-src/styles/responsive.css',
        'main-src/styles/variables.css',
        'main-src/styles/content.css',
        'main-src/components/nav/navigation.css',
        'main-src/components/logo/logo.css',
    ];

    cssFiles.forEach(file => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        link.onload = cssLoadedHandler;
        document.head.appendChild(link);
    });

    // Fallback timeout
    setTimeout(() => {
        if (cssLoadingIndicator) cssLoadingIndicator.style.display = 'none';
    }, 3000);
});