# Code Organization Guide

## 📁 Project Structure

This document outlines the organized structure of the IntelliToggle frontend project for better maintainability and developer experience.

## 🏗️ Directory Structure

```
app/
├── components/                 # All Vue components
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.vue         # Custom button component
│   │   ├── NavLink.vue        # Navigation link component
│   │   ├── SectionTitle.vue   # Section title with gradient text
│   │   ├── TrustedPartners.vue # Trusted partners carousel
│   │   ├── FooterLink.vue     # Footer link component
│   │   ├── FooterSection.vue  # Footer section component
│   │   └── index.ts           # UI components export
│   ├── sections/              # Page section components
│   │   ├── Hero.vue           # Hero section
│   │   ├── VideoSection.vue   # Video section
│   │   ├── WhatIsIntelliToggleSection.vue
│   │   ├── OpenFeatureSection.vue
│   │   ├── ControlPowerSection.vue
│   │   ├── DartPoweredFeatureFlagSection.vue
│   │   ├── DartCodeAISection.vue
│   │   ├── DartCodeAISectionV2.vue
│   │   ├── PricingSection.vue
│   │   ├── FreeTrialCTASection.vue
│   │   ├── WhyTeamsUseIntelliToggleSection.vue
│   │   ├── CTASection.vue
│   │   └── index.ts           # Sections export
│   ├── layout/                # Layout components
│   │   ├── Header.vue         # Site header
│   │   ├── Footer.vue         # Site footer
│   │   ├── ErrorBoundary.vue  # Error boundary component
│   │   ├── Loader.vue         # Loading component
│   │   └── index.ts           # Layout components export
│   ├── common/                # Common/shared components
│   │   ├── BreakpointTest.vue # Breakpoint testing component
│   │   └── index.ts           # Common components export
│   ├── system-design/         # Design system showcase
│   │   ├── ButtonShowcase.vue
│   │   ├── ColorsShowcase.vue
│   │   ├── TypographyShowcase.vue
│   │   ├── SpacingShowcase.vue
│   │   ├── NavLinkShowcase.vue
│   │   ├── SectionTitleShowcase.vue
│   │   ├── TrustedPartnersShowcase.vue
│   │   ├── SystemDesignOverview.vue
│   │   ├── ThemeShowcase.vue
│   │   └── index.ts           # System design export
│   └── index.ts               # Main components export
├── composables/               # Vue composables
│   ├── useBreakpoint.ts       # Breakpoint detection composable
│   ├── useScroll.ts           # Scroll detection composable
│   └── index.ts               # Composables export
├── types/                     # TypeScript type definitions
│   └── index.ts               # All type definitions
├── constants/                 # Application constants
│   └── index.ts               # All constants
├── utils/                     # Utility functions
│   └── index.ts               # All utility functions
├── layouts/                   # Nuxt layouts
│   ├── default.vue            # Default layout
│   └── minimal.vue            # Minimal layout
├── pages/                     # Nuxt pages
│   ├── index.vue              # Homepage
│   ├── about.vue              # About page
│   ├── pricing.vue            # Pricing page
│   └── components.vue         # Design system showcase page
├── assets/                    # Build-time assets
│   ├── css/
│   │   └── main.css           # Global styles
│   ├── design-assets/         # Design reference images
│   ├── icons/                 # SVG icons
│   └── images/                # Images (moved to public)
└── app.vue                    # Root component
```

## 🎯 Organization Principles

### 1. **Component Categorization**
- **UI Components**: Reusable, generic components (Button, NavLink, etc.)
- **Sections**: Page-specific section components (Hero, Pricing, etc.)
- **Layout**: Layout-related components (Header, Footer, etc.)
- **Common**: Shared components used across the app
- **System Design**: Design system showcase components

### 2. **Import Strategy**
- Use barrel exports (`index.ts`) for clean imports
- Import from organized categories: `~/components/ui`, `~/components/sections`
- Use TypeScript for better type safety

### 3. **File Naming Conventions**
- **Components**: PascalCase (e.g., `Button.vue`, `HeroSection.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useBreakpoint.ts`)
- **Types**: PascalCase (e.g., `ButtonProps`, `ApiResponse`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `NAVIGATION_ITEMS`)

## 📦 Import Examples

### Component Imports
```typescript
// Import from specific category
import { Button, NavLink } from '~/components/ui';
import { Hero, PricingSection } from '~/components/sections';
import { Header, Footer } from '~/components/layout';

// Import all components
import { Button, Hero, Header } from '~/components';
```

### Utility Imports
```typescript
// Import utilities
import { formatCurrency, debounce, isMobile } from '~/utils';

// Import constants
import { COLORS, BREAKPOINTS, NAVIGATION_ITEMS } from '~/constants';

// Import types
import type { ButtonProps, ApiResponse } from '~/types';
```

### Composable Imports
```typescript
// Import composables
import { useBreakpoint, useScroll } from '~/composables';
```

## 🔧 Benefits of This Organization

### 1. **Maintainability**
- Clear separation of concerns
- Easy to find and modify components
- Consistent import patterns

### 2. **Scalability**
- Easy to add new components in appropriate categories
- TypeScript support for better development experience
- Reusable utilities and composables

### 3. **Developer Experience**
- IntelliSense support with TypeScript
- Clean import statements
- Self-documenting code structure

### 4. **Performance**
- Tree-shaking friendly imports
- Lazy loading support
- Optimized bundle size

## 🚀 Usage Guidelines

### Adding New Components
1. **UI Component**: Add to `~/components/ui/`
2. **Section Component**: Add to `~/components/sections/`
3. **Layout Component**: Add to `~/components/layout/`
4. **Common Component**: Add to `~/components/common/`

### Adding New Utilities
1. Add function to `~/utils/index.ts`
2. Export from main utils file
3. Import where needed

### Adding New Types
1. Add interface/type to `~/types/index.ts`
2. Export from main types file
3. Import where needed

### Adding New Composables
1. Create file in `~/composables/`
2. Export from `~/composables/index.ts`
3. Import where needed

## 📝 Best Practices

### 1. **Component Structure**
```vue
<template>
  <!-- Component template -->
</template>

<script setup lang="ts">
// Imports
import type { ComponentProps } from '~/types';

// Props definition
interface Props {
  // Props interface
}

const props = withDefaults(defineProps<Props>(), {
  // Default values
});

// Emits definition
const emit = defineEmits<{
  // Event definitions
}>();

// Component logic
</script>

<style scoped>
/* Component styles */
</style>
```

### 2. **Composable Structure**
```typescript
// composables/useExample.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useExample() {
  const state = ref();
  
  // Composable logic
  
  return {
    state,
    // Other exports
  };
}
```

### 3. **Type Definitions**
```typescript
// types/index.ts
export interface ComponentProps {
  // Type definition
}

export type ComponentVariant = 'primary' | 'secondary';
```

This organization provides a solid foundation for maintaining and scaling the IntelliToggle frontend project.
