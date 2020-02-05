let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.disableSuccessNotifications();
mix.setPublicPath('assets/');

mix
    .js('_assets/scripts/theme.js', 'assets/scripts/theme.js').sourceMaps()
    .sass('_assets/styles/theme.scss', 'assets/styles/theme.css').sourceMaps()
    .options({
        processCssUrls: false,
        postCss: [tailwindcss()],
    })
    .version();
