<template>
	<header
		class="sticky top-0 z-50 transition-all duration-300"
		:class="isSticky ? 'sticky-header backdrop-sepia-50 backdrop-blur-sm' : 'normal-header'"
	>
		<div class="container-custom py-[29px] lg:py-[32px] xl:py-[40px]">
			<div class="flex items-center">
				<!-- Logo - Left most -->
				<div class="flex items-center justify-start flex-shrink-0 logo-container">
					<NuxtLink
						to="/"
						class="w-full h-full"
					>
						<nuxt-img
							:src="isSticky ? '/images/logo-white.svg' : '/images/logo-white.svg'"
							alt="IntelliToggle"
							class="w-[80px] h-[32px] lg:w-[212px] lg:h-[60px]"
							width="205.5"
							height="50.8"
							loading="eager"
							preload
						/>
					</NuxtLink>
				</div>
				<!-- Desktop Navigation - Centered (1024px+) -->
				<nav class="hidden lg:flex items-center justify-center flex-1 space-x-12">
					<NavLink
						to="/"
						:active="currentPath === '/'"
						:class="isSticky ? 'nav-link' : 'nav-link'"
					>
						Homc
					</NavLink>
					<NavLink
						to="/about"
						:active="currentPath === '/about'"
						:class="isSticky ? 'nav-link' : 'nav-link'"
					>
						About
					</NavLink>
					<NavLink
						to="/pricing"
						:active="currentPath === '/pricing'"
						:class="isSticky ? 'nav-link' : 'nav-link'"
					>
						Pricing
					</NavLink>
					<!-- <NavLink
						to="/components"
						:active="currentPath === '/components'"
						:class="isSticky ? 'nav-link' : 'nav-link'"
					>
						Components
					</NavLink> -->
				</nav>

				<!-- Get Start Sandbox - Right most (1024px+) -->
				<div class="hidden lg:flex items-center">
					<Button
						variant="primary"
						button-class="py-[11.5px] px-auto md:py-[12px] md:px-[24px] md:min-w-[186px] md:min-h-[47px] md-rounded-[8px]
						lg:min-w-[214px] lg:min-h-[53px] lg:rounded-[8px]"
						text-class="md:text-[20px] md:font-dm-sans md:font-semibold leading-[1.5] lg:text-[24px] lg:font-sans lg:font-semibold leading-none"
					>
						Start Sandbox
					</Button>
				</div>

				<!-- Mobile Menu Button (320px - 1023px) -->
				<div class="lg:hidden ml-auto">
					<button
						class="relative w-[24px] h-[24px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-0"
						:aria-expanded="mobileMenuOpen"
						aria-label="Toggle mobile menu"
						@click="mobileMenuOpen = !mobileMenuOpen"
					>
						<!-- Custom Mobile Menu Icon -->
						<div
							class="relative w-6 h-6 transition-transform duration-300"
							:class="mobileMenuOpen ? 'rotate-180' : 'rotate-0'"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="w-6 h-6 text-white transition-all duration-300"
								:class="mobileMenuOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							>
								<path d="M4 6h16M4 12h16M4 18h7" />
							</svg>

							<!-- Close Icon (X) -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="absolute top-0 left-0 w-6 h-6 text-white transition-all duration-300"
								:class="mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							>
								<path d="M18 6L6 18M6 6l12 12" />
							</svg>
						</div>
					</button>
				</div>
			</div>

			<!-- Mobile Navigation Dropdown (320px - 1023px) -->
			<ClientOnly>
				<!-- Mobile Menu Dropdown -->
				<Transition
					enter-active-class="transition-all duration-300 ease-out"
					enter-from-class="opacity-0 -translate-y-4 scale-95"
					enter-to-class="opacity-100 translate-y-0 scale-100"
					leave-active-class="transition-all duration-200 ease-in"
					leave-from-class="opacity-100 translate-y-0 scale-100"
					leave-to-class="opacity-0 -translate-y-4 scale-95"
				>
					<div
						v-if="mobileMenuOpen"
						class="lg:hidden absolute top-full left-0 right-0 z-50 bg-white backdrop-blur-md border-t border-gray-200 shadow-xl"
					>
						<div class="container-custom py-6">
							<nav class="flex flex-col space-y-6">
								<!-- Navigation Links -->
								<div class="space-y-4">
									<NavLink
										to="/"
										:active="currentPath === '/'"
										class="nav-link custom-text"
										@click="mobileMenuOpen = false"
									>
										Home
									</NavLink>
									<NavLink
										to="/about"
										:active="currentPath === '/about'"
										class="nav-link custom-text"
										@click="mobileMenuOpen = false"
									>
										About
									</NavLink>
									<NavLink
										to="/pricing"
										:active="currentPath === '/pricing'"
										class="nav-link custom-text"
										@click="mobileMenuOpen = false"
									>
										Pricing
									</NavLink>
									<!-- <NavLink
										to="/components"
										:active="currentPath === '/components'"
										class="nav-link custom-text"
										@click="mobileMenuOpen = false"
									>
										Components
									</NavLink> -->
								</div>

								<!-- CTA Button -->
								<div class="pt-2">
									<Button
										variant="primary"
										button-class="w-full py-3 px-6 text-center"
										text-class="text-lg font-semibold"
										@click="mobileMenuOpen = false"
									>
										Start Sandbox
									</Button>
								</div>
							</nav>
						</div>
					</div>
				</Transition>

				<template #fallback>
					<div class="lg:hidden border-t border-gray-700 py-4">
						<nav class="flex flex-col space-y-4">
							<NavLink
								to="/"
								:active="currentPath === '/'"
								:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
							>
								Home
							</NavLink>
							<NavLink
								to="/about"
								:active="currentPath === '/about'"
								:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
							>
								About
							</NavLink>
							<NavLink
								to="/pricing"
								:active="currentPath === '/pricing'"
								:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
							>
								Pricing
							</NavLink>
							<NavLink
								to="/components"
								:active="currentPath === '/components'"
								:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
							>
								Components
							</NavLink>
							<Button variant="primary">
								Start Sandbox
							</Button>
						</nav>
					</div>
				</template>
			</ClientOnly>
		</div>
	</header>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from "vue";
import Button from "~/components/ui/Button.vue";
import NavLink from "~/components/ui/NavLink.vue";

const mobileMenuOpen = ref(false);
const isSticky = ref(false);
const route = useRoute();

// Computed property for current path to avoid hydration issues
const currentPath = computed(() => {
	return route?.path || "/";
});

// Handle scroll to detect sticky state
const handleScroll = () => {
	isSticky.value = window.scrollY > 50;
};

// Close mobile menu when route changes
watch(() => route.path, () => {
	mobileMenuOpen.value = false;
});

// Handle escape key to close mobile menu
const handleKeydown = (event) => {
	if (event.key === "Escape" && mobileMenuOpen.value) {
		mobileMenuOpen.value = false;
	}
};

// Add scroll listener and initialize sticky state
onMounted(() => {
	if (import.meta.client) {
		// Initialize sticky state based on current scroll position
		isSticky.value = window.scrollY > 50;
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("keydown", handleKeydown);
	}
});

onUnmounted(() => {
	if (import.meta.client) {
		window.removeEventListener("scroll", handleScroll);
		window.removeEventListener("keydown", handleKeydown);
	}
});
</script>

<style scoped>
/* Normal header state - transparent background */
.normal-header {
  background-color: transparent;
  backdrop-filter: none;
}

/* Sticky header state - solid background with backdrop blur */
.sticky-header {
  background-color: rgba(72, 61, 139,0.96);
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

.logo-container{
  width: 205.5px;
  height: 50.8px;
}
.logo-container img{
  width: 100%;
  height: 100%;
  position: relative;
}

/* Navigation links styling - custom-text will override when sticky */
.nav-link {
  transition: all 0.3s ease;
}

/* Ensure custom-text works properly with nav-link */
.nav-link.custom-text {
  background-image: linear-gradient(to bottom, #42389e, #0f1026);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Mobile menu animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

/* Backdrop animations */
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Mobile menu link hover effects */
@media (max-width: 1023px) {
  .nav-link {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    background-color: rgba(243, 244, 246, 0.8);
    transform: scale(1.05);
  }

  .nav-link.custom-text:hover {
    background: linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1));
  }
}

/* Mobile menu icon animations */
.mobile-menu-icon {
  transform-origin: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Focus states for accessibility */
button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.3);
  outline-offset: 2px;
}
</style>
