// Application Constants

// Navigation Items
export const NAVIGATION_ITEMS = [
  { label: 'Home', to: '/', active: true },
  { label: 'About', to: '/about', active: false },
  { label: 'Pricing', to: '/pricing', active: false },
] as const;

// Breakpoints
export const BREAKPOINTS = {
  xs: '320px',
  sm: '375px',
  mobile: '393px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  tablet: '768px',
  '3xl': '1440px',
  '4xl': '1920px',
} as const;

// Color Palette
export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  accent: {
    orange: '#f9a71e',
    purple: '#42389e',
    dark: '#0f1026',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// Font Families
export const FONTS = {
  sans: 'Inter',
  satoshi: 'Satoshi',
  dmSans: 'DM Sans',
  merriweatherSans: 'Merriweather Sans',
  roboto: 'Roboto',
  plusJakartaSans: 'Plus Jakarta Sans',
  segoeUI: 'Segoe UI This',
} as const;

// Animation Durations
export const ANIMATION_DURATION = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

// Z-Index Scale
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  base: process.env.NUXT_PUBLIC_API_URL || 'https://api.intellitoggle.com',
  auth: '/auth',
  flags: '/flags',
  projects: '/projects',
  analytics: '/analytics',
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  enableAI: true,
  enableAnalytics: true,
  enableDarkMode: false,
  enableBetaFeatures: false,
} as const;

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/masud001/intellitoggle-frontend',
  twitter: '#',
  linkedin: '#',
  discord: '#',
} as const;

// Company Information
export const COMPANY_INFO = {
  name: 'IntelliToggle',
  tagline: 'The First Dart-Native Feature Flag With DartCodeAI',
  description: 'Feature flags built for Dart, Ship faster, roll back safely, and scale with AI-powered delivery',
  founded: '2024',
  website: 'https://intellitoggle.com',
} as const;
