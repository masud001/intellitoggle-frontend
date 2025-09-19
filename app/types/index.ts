// TypeScript Type Definitions

// Button Component Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  loadingText?: string;
  leftIcon?: string | object;
  rightIcon?: string | object;
  type?: 'button' | 'submit' | 'reset';
  tag?: 'button' | 'a' | 'nuxt-link';
  href?: string;
  to?: string;
  class?: string;
  buttonClass?: string;
  textClass?: string;
}

// Section Title Types
export interface SectionTitleProps {
  variant?: 'gradient' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  align?: 'left' | 'center' | 'right';
  class?: string;
  titleClass?: string;
  textClass?: string;
}

// Video Section Types
export interface VideoSectionProps {
  videoUrl?: string;
  title?: string;
}

// CTA Section Types
export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonClass?: string;
  secondaryButtonClass?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  to: string;
  active?: boolean;
}

// Trusted Partners Types
export interface Partner {
  name: string;
  logo: string;
  alt: string;
}

// Common Event Types
export interface ClickEvent {
  (event: MouseEvent): void;
}

// API Response Types
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
