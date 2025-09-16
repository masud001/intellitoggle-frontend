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
							:src="isSticky ? '/images/logo-dark.svg' : '/images/logo-white.svg'"
							alt="IntelliToggle"
							class="w-[80px] h-[32px] lg:w-[205.5px] lg:h-[50.8px]"
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
						class="text-gray-300 w-[24px] h-[24px] hover:text-white transition-colors border-0 p-0"
						@click="mobileMenuOpen = !mobileMenuOpen"
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
				<div
					v-if="mobileMenuOpen"
					class="lg:hidden border-t border-gray-700 py-4"
				>
					<nav class="flex flex-col space-y-4">
						<NavLink
							to="/"
							:active="currentPath === '/'"
							:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
							@click="mobileMenuOpen = false"
						>
							Home
						</NavLink>
						<NavLink
							to="/about"
							:active="currentPath === '/about'"
							:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
							@click="mobileMenuOpen = false"
						>
							About
						</NavLink>
						<NavLink
							to="/pricing"
							:active="currentPath === '/pricing'"
							:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
							@click="mobileMenuOpen = false"
						>
							Pricing
						</NavLink>
						<NavLink
							to="/components"
							:active="currentPath === '/components'"
							:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
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
					<div class="lg:hidden border-t border-gray-700 py-4">
						<nav class="flex flex-col space-y-4">
							<NavLink
								to="/"
								:active="currentPath === '/'"
								:class="isSticky ? 'nav-link custom-text' : 'nav-link'"
							>
								Home 1
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
							<Button variant="sandbox">
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

// Add scroll listener and initialize sticky state
onMounted(() => {
	if (import.meta.client) {
		// Initialize sticky state based on current scroll position
		isSticky.value = window.scrollY > 50;
		window.addEventListener("scroll", handleScroll);
	}
});

onUnmounted(() => {
	if (import.meta.client) {
		window.removeEventListener("scroll", handleScroll);
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

.logo-container{
  width: 205.5px;
  height: 50.8px;
}
.logo-container img{
  width: 100%;
  height: 100%;
  position: relative;
  left: -18px;
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
</style>
