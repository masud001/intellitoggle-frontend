<template>
	<Transition
		name="loader"
		appear
	>
		<div
			v-if="isLoading"
			class="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
		>
			<div class="loader-container">
				<!-- Spinner -->
				<div class="spinner">
					<div class="spinner-ring" />
					<div class="spinner-ring" />
					<div class="spinner-ring" />
				</div>

				<!-- Loading text -->
				<div class="mt-8 text-center">
					<div class="mb-4">
						<nuxt-img
							:src="isDarkMode ? '/images/logo-white.svg' : '/images/logo-dark.svg'"
							alt="IntelliToggle"
							class="mx-auto"
							width="205.5"
							height="50.8"
							loading="eager"
							preload
						/>
					</div>
					<p class="text-gray-600 font-sans">
						Loading your experience...
					</p>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup>
const isLoading = ref(true);
const pendingRoute = ref(false);
const isDarkMode = ref(false);

// Use Nuxt's built-in loading state
const { pending } = useNuxtData();

// Hide loader when page is fully loaded and detect dark mode
onMounted(() => {
	if (import.meta.client) {
		// Detect dark mode
		const checkDarkMode = () => {
			isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
		};

		checkDarkMode();

		// Listen for dark mode changes
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkDarkMode);

		// Wait for all images and resources to load
		const checkPageLoaded = () => {
			// Check if all images are loaded
			const images = document.querySelectorAll("img");
			const imagePromises = Array.from(images).map((img) => {
				return new Promise((resolve) => {
					if (img.complete) {
						resolve();
					}
					else {
						img.onload = resolve;
						img.onerror = resolve;
					}
				});
			});

			Promise.all(imagePromises).then(() => {
				// Add a small delay for smooth transition
				setTimeout(() => {
					isLoading.value = false;
				}, 500);
			});
		};

		// Check immediately if page is already loaded
		if (document.readyState === "complete") {
			checkPageLoaded();
		}
		else {
			window.addEventListener("load", checkPageLoaded);
		}

		// Fallback: hide loader after 3 seconds max
		setTimeout(() => {
			isLoading.value = false;
		}, 3000);
	}
});

// Watch for route changes to show loader
const route = useRoute();
watch(() => route.path, () => {
	isLoading.value = true;
	pendingRoute.value = true;

	// Hide loader after new page loads
	nextTick(() => {
		// Wait for the page to be fully rendered
		setTimeout(() => {
			isLoading.value = false;
			pendingRoute.value = false;
		}, 300);
	});
});

// Watch Nuxt's pending state
watch(pending, (newPending) => {
	if (newPending) {
		isLoading.value = true;
	}
	else {
		// Small delay to ensure smooth transition
		setTimeout(() => {
			isLoading.value = false;
		}, 200);
	}
});
</script>

<style scoped>
/* Loader animations */
.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.5s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Spinner styles */
.spinner {
  position: relative;
  width: 80px;
  height: 80px;
}

.spinner-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.spinner-ring:nth-child(1) {
  animation-delay: -0.45s;
  border-top-color: #3b82f6;
}

.spinner-ring:nth-child(2) {
  animation-delay: -0.3s;
  border-top-color: #8b5cf6;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
}

.spinner-ring:nth-child(3) {
  animation-delay: -0.15s;
  border-top-color: #06b6d4;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .fixed.inset-0 {
    background-color: #0f1026;
  }

  p {
    color: #cbd5e1;
  }
}
</style>
