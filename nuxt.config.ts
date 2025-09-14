// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  nitro: {
    experimental: {
      wasm: true
    }
  },
  vite:{
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/google-fonts'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  image: {
    // Enable image optimization
    quality: 80,
    format: ['webp', 'avif', 'png'],
    // Enable lazy loading by default (except for critical images)
    loading: 'lazy',
    // Enable preloading for critical images
    preload: false,
    // Responsive image sizes
    screens: {
      xs: 320,
      sm: 375,
      md: 393,
      lg: 1024,
      xl: 1920,
    }
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'DM Sans': [300, 400, 500, 600, 700],
      'Merriweather Sans': [300, 400, 500, 600, 700, 800]
    },
    display: 'swap',
    preload: true,
    download: true,
    inject: true
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'DM Sans', provider: 'google' },
      { name: 'Merriweather Sans', provider: 'google' }
    ]
  },
  eslint:{
    config:{
      stylistic:{
        semi:true,
        indent:"tab",
        quotes:"double"
      }
    }
  }
})