// next.config.js or astro.config.mjs
export default {
    // Enables automatic font optimization
    fontOptimization: true,

    // Automatic image optimization
    imageOptimization: {
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageFormats: ['image/webp']
    }
};