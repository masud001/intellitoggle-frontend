<template>
  <header class="sticky top-0 z-50 transition-all duration-300" :class="isSticky ? 'sticky-header backdrop-sepia-50 backdrop-blur-sm' : 'normal-header'">
    <div class="container-custom">
      <div class="flex items-center">
        <!-- Logo - Left most -->
        <div class="flex items-center justify-start flex-shrink-0 logo-container">
          <NuxtLink to="/" class="w-full h-full">
            <nuxt-img 
              :src="isSticky ? '/images/logo-dark.svg' : '/images/logo-white.svg'" 
              alt="IntelliToggle" 
              class="" 
              width="205.5"
              height="50.8"
              loading="eager"
              preload
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - Centered (1024px+) -->
        <nav class="hidden xl:flex items-center justify-center flex-1 space-x-12">
          <NavLink 
            to="/" 
            :active="currentPath === '/'"
            class="nav-link"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            :active="currentPath === '/about'"
            class="nav-link"
          >
            About
          </NavLink>
          <NavLink 
            to="/pricing" 
            :active="currentPath === '/pricing'"
            class="nav-link"
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/components" 
            :active="currentPath === '/components'"
            class="nav-link"
          >
            Components
          </NavLink>
        </nav>

        <!-- Get Start Sandbox - Right most (1024px+) -->
        <div class="hidden xl:flex items-center">
          <Button variant="sandbox">
            Start Sandbox
          </Button>
        </div>

        <!-- Mobile Menu Button (320px - 1023px) -->
        <div class="xl:hidden ml-auto">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-300 hover:text-white transition-colors border-0 p-0"
            >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              class="w-6 h-6 transition-colors duration-200"
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2"
            >
              
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation (320px - 1023px) -->
      <ClientOnly>
        <div v-if="mobileMenuOpen" class="xl:hidden border-t border-gray-700 py-4">
          <nav class="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              :active="currentPath === '/'"
              @click="mobileMenuOpen = false"
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              :active="currentPath === '/about'"
              @click="mobileMenuOpen = false"
            >
              About
            </NavLink>
            <NavLink 
              to="/pricing" 
              :active="currentPath === '/pricing'"
              @click="mobileMenuOpen = false"
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/components" 
              :active="currentPath === '/components'"
              @click="mobileMenuOpen = false"
            >
              Components
            </NavLink>
            <Button variant="sandbox">
              Start Sandbox
            </Button>
          </nav>
        </div>
        <template #fallback>
          <div class="xl:hidden border-t border-gray-700 py-4">
            <nav class="flex flex-col space-y-4">
              <NavLink to="/" :active="currentPath === '/'">Home</NavLink>
              <NavLink to="/about" :active="currentPath === '/about'">About</NavLink>
              <NavLink to="/pricing" :active="currentPath === '/pricing'">Pricing</NavLink>
              <NavLink to="/components" :active="currentPath === '/components'">Components</NavLink>
              <Button variant="sandbox">Start Sandbox</Button>
            </nav>
          </div>
        </template>
      </ClientOnly>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import Button from '~/components/ui/Button.vue'
import NavLink from '~/components/ui/NavLink.vue'

const mobileMenuOpen = ref(false)
const isSticky = ref(false)
const route = useRoute()

// Computed property for current path to avoid hydration issues
const currentPath = computed(() => {
  return route?.path || '/'
})

// Handle scroll to detect sticky state
const handleScroll = () => {
  isSticky.value = window.scrollY > 50
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

// Add scroll listener
onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
/* Normal header state - transparent background */
.normal-header {
  background-color: transparent;
  backdrop-filter: none;
}

/* Sticky header state - solid background with backdrop blur */
.sticky-header {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

/* Dark mode sticky header */
@media (prefers-color-scheme: dark) {
  .sticky-header {
    background-color: rgba(15, 16, 38, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  }
}

/* Smooth transition for all header elements */
.sticky-header * {
  transition: all 0.3s ease;
}

/* Logo adjustment for sticky state */
.sticky-header .logo-container {
  transform: scale(0.95);
}
.logo-container{
  width: 205.5px;
  height: 50.8px;
}
.logo-container img{
  width: 100%;
  height: 100%;
}

/* Navigation links styling for sticky state */
.sticky-header .nav-link {
  color: #374151;
}

.sticky-header .nav-link:hover {
  color: #1f2937;
}

/* Dark mode navigation links */
@media (prefers-color-scheme: dark) {
  .sticky-header .nav-link {
    color: #f3f4f6;
  }
  
  .sticky-header .nav-link:hover {
    color: #ffffff;
  }
}
</style>
