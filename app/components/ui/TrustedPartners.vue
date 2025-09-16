<template>
	<section class="trusted-partners-section py-[64px] xl:py-[120px]  bg-white">
		<div class="container-custom">
			<!-- Section Title -->
			<div class="text-center mb-[16px] lg:mb-[40px]">
				<SectionTitle
					variant="gradient"
					title-class="text-red-500"
					class="mx-auto font-sans text-[14px] md:text-[16px] xl:text-[24px] md:font-normal xl:font-semibold"
				>
					Trusted by various engineering teams
				</SectionTitle>
			</div>

			<!-- Desktop & Tablet Layout -->
			<div class="hidden md:block">
				<div
					class="flex flex-nowrap justify-center items-center"
					:style="{ gap: logoStyles.spacing }"
				>
					<div
						v-for="partner in displayPartners"
						:key="partner.id"
						class="partner-logo-container"
						:class="logoClasses"
					>
						<img
							:src="partner.logo"
							:alt="partner.name"
							:title="partner.name"
							class="partner-logo"
							:style="{
								height: logoStyles.height,
								width: logoStyles.maxWidth,
							}"
							loading="lazy"
							@error="handleImageError($event, partner)"
						>
					</div>
				</div>
			</div>

			<!-- Mobile Slider -->
			<div class="md:hidden">
				<div class="relative">
					<!-- Slider Container -->
					<div
						ref="sliderContainer"
						class="overflow-hidden"
						@touchstart="handleTouchStart"
						@touchmove="handleTouchMove"
						@touchend="handleTouchEnd"
					>
						<div
							ref="sliderTrack"
							class="flex gap-[50px] will-change-transform"
							:style="{
								transform: `translate3d(${translateX}px, 0, 0)`,
								transition: isDragging ? 'none' : 'none',
							}"
						>
							<!-- Infinite loop: Create enough duplicates for seamless scrolling -->
							<div
								v-for="(partner, index) in infinitePartners"
								:key="`${partner.id}-${index}`"
								class="flex-shrink-0 w-[120px] h-[60px] flex justify-center items-center"
							>
								<img
									:src="partner.logo"
									:alt="partner.name"
									:title="partner.name"
									class="partner-logo w-full h-full object-contain"
									loading="lazy"
									@error="handleImageError($event, partner)"
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

// Define partner interface
interface Partner {
	id: string;
	name: string;
	logo: string;
	website?: string;
	fallbackLogo?: string;
}

// Define component props
interface Props {
	partners?: Partner[];
	showTitle?: boolean;
	title?: string;
	subtitle?: string;
	class?: string;
	// Image size customization
	logoHeight?: {
		mobile?: string;
		tablet?: string;
		desktop?: string;
	};
	logoMaxWidth?: {
		mobile?: string;
		tablet?: string;
		desktop?: string;
	};
	// Spacing customization
	logoSpacing?: {
		mobile?: string;
		tablet?: string;
		desktop?: string;
	};
	// Auto-slide settings
	autoSlide?: boolean;
	slideInterval?: number;
	slideDirection?: "left" | "right";
	slideSpeed?: number;
}

const props = withDefaults(defineProps<Props>(), {
	partners: () => [
		{
			id: "google-cloud",
			name: "Google Cloud",
			logo: "/images/partners/google-cloud.svg",
			website: "https://cloud.google.com",
		},
		{
			id: "aws",
			name: "Amazon Web Services",
			logo: "/images/partners/amazon_aws.svg",
			website: "https://aws.amazon.com",
		},
		{
			id: "microsoft-azure",
			name: "Microsoft Azure",
			logo: "/images/partners/microsoft_azure.svg",
			website: "https://azure.microsoft.com",
		},
		{
			id: "digital-ocean",
			name: "Digital Ocean",
			logo: "/images/partners/digitalocean.svg",
			website: "https://www.digitalocean.com",
		},
		{
			id: "ibm",
			name: "IBM",
			logo: "/images/partners/ibm.svg",
			website: "https://www.ibm.com",
		},
	],
	showTitle: true,
	title: "Trusted by various engineering teams",
	subtitle: "",
	class: "",
	// Default values will be handled in computed property
	// Auto-slide settings
	autoSlide: true,
	slideInterval: 3000,
	slideDirection: "left",
	slideSpeed: 1.2,
});

// Reactive state
const translateX = ref(0);
const sliderContainer = ref<HTMLElement | null>(null);
const sliderTrack = ref<HTMLElement | null>(null);
const touchStartX = ref(0);
const touchCurrentX = ref(0);
const isDragging = ref(false);
const animationId = ref<number | null>(null);
// Use prop for slide speed

// Safety bounds for translateX to prevent huge numbers
const MAX_TRANSLATE_X = 1000; // Maximum allowed translateX value
const MIN_TRANSLATE_X = -1000; // Minimum allowed translateX value

// Computed properties
const displayPartners = computed(() => {
	// Check if we're on mobile or tablet to use mobile-tablet specific images
	// Default to desktop for SSR
	const currentWidth = typeof window !== "undefined" ? windowWidth.value : 1024;
	const isMobileOrTablet = currentWidth < 1024; // Mobile and tablet

	// Create partners with mobile-tablet specific images if on mobile or tablet
	const partnersWithMobileImages = props.partners.map((partner) => {
		if (isMobileOrTablet) {
			// Use mobile-tablet specific images for mobile and tablet devices
			let mobileTabletImagePath = partner.logo.replace("/images/partners/", "/images/partners/mobile-tablet/");

			// Handle special case for google-cloud which doesn't have -mobile suffix
			if (partner.logo.includes("google-cloud")) {
				// google-cloud.svg stays as google-cloud.svg in mobile-tablet folder
			}
			else {
				// Other images get -mobile suffix
				mobileTabletImagePath = mobileTabletImagePath.replace(".svg", "-mobile.svg");
			}

			return {
				...partner,
				logo: mobileTabletImagePath,
				fallbackLogo: partner.logo, // Keep original as fallback
			};
		}
		return partner;
	});

	// Desktop: show all partners
	// Tablet: show at least 5 partners (or all if less than 5)
	if (currentWidth >= 1024) {
		return partnersWithMobileImages;
	}
	else if (currentWidth >= 768) {
		// Show at least 5 partners on tablet, or all if less than 5
		return partnersWithMobileImages.slice(0, Math.max(5, partnersWithMobileImages.length));
	}
	return partnersWithMobileImages;
});

const logoClasses = computed(() => {
	return " hover:opacity-100 transition-opacity duration-300 cursor-pointer";
});

// Create infinite loop partners array with mobile-tablet specific images
const infinitePartners = computed(() => {
	// Create enough duplicates to ensure seamless infinite scrolling
	// We need at least 3 sets to handle the reset point smoothly
	const duplicates = 6; // 6 sets of partners for smooth infinite loop

	// Check if we're on mobile to use mobile-tablet specific images (only for mobile slider)
	// Default to desktop for SSR
	const currentWidth = typeof window !== "undefined" ? windowWidth.value : 1024;
	const isMobile = currentWidth < 768; // Only mobile

	// Create partners with mobile-tablet specific images if on mobile
	const partnersWithMobileImages = props.partners.map((partner) => {
		if (isMobile) {
			// Use mobile-tablet specific images for mobile devices
			let mobileTabletImagePath = partner.logo.replace("/images/partners/", "/images/partners/mobile-tablet/");

			// Handle special case for google-cloud which doesn't have -mobile suffix
			if (partner.logo.includes("google-cloud")) {
				// google-cloud.svg stays as google-cloud.svg in mobile-tablet folder
			}
			else {
				// Other images get -mobile suffix
				mobileTabletImagePath = mobileTabletImagePath.replace(".svg", "-mobile.svg");
			}

			return {
				...partner,
				logo: mobileTabletImagePath,
				fallbackLogo: partner.logo, // Keep original as fallback
			};
		}
		return partner;
	});

	return Array(duplicates).fill(partnersWithMobileImages).flat();
});

// Dynamic logo styles based on props
const logoStyles = computed(() => {
	// Default to desktop values for SSR
	const currentWidth = typeof window !== "undefined" ? windowWidth.value : 1024;
	const isMobile = currentWidth < 768;
	const isTablet = currentWidth >= 768 && currentWidth < 1024;

	let height, maxWidth, spacing;

	if (isMobile) {
		height = props.logoHeight?.mobile || "60px";
		maxWidth = props.logoMaxWidth?.mobile || "120px";
		spacing = props.logoSpacing?.mobile || "53px";
	}
	else if (isTablet) {
		height = props.logoHeight?.tablet || "60px";
		maxWidth = props.logoMaxWidth?.tablet || "120px";
		spacing = props.logoSpacing?.tablet || "50px";
	}
	else {
		height = props.logoHeight?.desktop || "60px";
		maxWidth = props.logoMaxWidth?.desktop || "120px";
		spacing = props.logoSpacing?.desktop || "100px";
	}

	return {
		height,
		maxWidth,
		spacing,
	};
});

// Touch handling for mobile slider
const handleTouchStart = (e: TouchEvent) => {
	// Only work on mobile devices (< 768px)
	if (windowWidth.value >= 768) return;
	touchStartX.value = e.touches[0]?.clientX || 0;
	isDragging.value = true;
	stopSmoothSliding();
};

const handleTouchMove = (e: TouchEvent) => {
	// Only work on mobile devices (< 768px)
	if (windowWidth.value >= 768) return;
	if (!isDragging.value) return;

	touchCurrentX.value = e.touches[0]?.clientX || 0;
	const diff = touchStartX.value - touchCurrentX.value;
	translateX.value += diff;
	touchStartX.value = touchCurrentX.value;

	// Keep translateX within bounds during touch
	if (translateX.value > MAX_TRANSLATE_X) {
		translateX.value = MAX_TRANSLATE_X;
	}
	if (translateX.value < MIN_TRANSLATE_X) {
		translateX.value = MIN_TRANSLATE_X;
	}
};

const handleTouchEnd = () => {
	// Only work on mobile devices (< 768px)
	if (windowWidth.value >= 768) return;
	if (!isDragging.value) return;

	isDragging.value = false;
	startSmoothSliding();
};

// Smooth sliding functions
const getSlideWidth = () => {
	return sliderContainer.value?.offsetWidth || 0;
};

// Cache slide width to avoid repeated calculations
let cachedSlideWidth = 0;
let cachedTotalWidth = 0;

const updateCachedWidths = () => {
	cachedSlideWidth = getSlideWidth();
	cachedTotalWidth = cachedSlideWidth * props.partners.length;
};

const smoothSlide = () => {
	// Only run on mobile devices (< 768px)
	if (windowWidth.value >= 768) return;
	if (isDragging.value) return;

	// Use cached values for better performance
	if (cachedTotalWidth === 0) {
		updateCachedWidths();
	}

	// Move the slider
	translateX.value += props.slideDirection === "right" ? props.slideSpeed : -props.slideSpeed;

	// Create seamless infinite loop with bounded values
	const singleSetWidth = cachedSlideWidth * props.partners.length;

	// Keep translateX within bounds to prevent huge numbers
	if (props.slideDirection === "right") {
		// Moving right: reset when we've moved one complete set
		if (translateX.value <= -singleSetWidth) {
			translateX.value = 0; // Reset to start
		}
	}
	else {
		// Moving left: reset when we've moved one complete set
		if (translateX.value >= singleSetWidth) {
			translateX.value = 0; // Reset to start
		}
	}

	// Safety check to prevent huge numbers
	if (translateX.value > MAX_TRANSLATE_X) {
		translateX.value = 0;
	}
	if (translateX.value < MIN_TRANSLATE_X) {
		translateX.value = 0;
	}

	// Continue animation
	animationId.value = requestAnimationFrame(smoothSlide);
};

const startSmoothSliding = () => {
	// Only run on mobile devices (< 768px)
	if (windowWidth.value >= 768) return;
	if (!props.autoSlide || isDragging.value) return;
	stopSmoothSliding();
	animationId.value = requestAnimationFrame(smoothSlide);
};

const stopSmoothSliding = () => {
	if (animationId.value) {
		cancelAnimationFrame(animationId.value);
		animationId.value = null;
	}
};

// Auto-play functionality (optional)
const startAutoPlay = () => {
	// Only run on mobile devices (< 768px)
	if (windowWidth.value >= 768) return;
	if (!props.autoSlide) return;
	startSmoothSliding();
};

const stopAutoPlay = () => {
	stopSmoothSliding();
};

// Resize observer for performance
let resizeObserver: ResizeObserver | null = null;

// Force reactivity for window resize
const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1024);

// Watch for window width changes to start/stop slider
watch(windowWidth, (newWidth, oldWidth) => {
	// Only handle changes, not initial load
	if (oldWidth === undefined) return;

	if (newWidth >= 768) {
		// Switched to desktop/tablet - stop slider
		translateX.value = 0;
		stopSmoothSliding();
	}
	else {
		// Switched to mobile - start slider
		startAutoPlay();
	}
});

// Debounce resize handler
let resizeTimeout: number | null = null;

// Update window width on resize
const handleResize = () => {
	if (resizeTimeout) {
		clearTimeout(resizeTimeout);
	}

	resizeTimeout = setTimeout(() => {
		if (typeof window !== "undefined") {
			windowWidth.value = window.innerWidth;
			updateCachedWidths();
		}
	}, 100); // 100ms debounce
};

// Handle image loading errors with fallback
const handleImageError = (event: Event, partner: Partner) => {
	const img = event.target as HTMLImageElement;

	// If we have a fallback logo, use it
	if (partner.fallbackLogo) {
		img.src = partner.fallbackLogo;
		return;
	}

	// If no fallback, use a placeholder
	const placeholderSvg = `data:image/svg+xml;base64,${btoa(`
		<svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="120" height="60" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1" rx="8"/>
			<text x="60" y="35" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">
				${partner.name || "Logo"}
			</text>
		</svg>
	`)}`;

	img.src = placeholderSvg;
	img.alt = `${partner.name} (placeholder)`;
};

// Lifecycle
onMounted(() => {
	// Initialize position
	translateX.value = 0;
	updateCachedWidths();

	// Set up resize observer for better performance
	if (sliderContainer.value) {
		resizeObserver = new ResizeObserver(() => {
			updateCachedWidths();
		});
		resizeObserver.observe(sliderContainer.value);
	}

	// Add window resize listener (only on client side)
	if (typeof window !== "undefined") {
		window.addEventListener("resize", handleResize);
	}

	startAutoPlay();
});

onUnmounted(() => {
	stopAutoPlay();
	if (resizeObserver) {
		resizeObserver.disconnect();
	}
	// Remove window resize listener (only on client side)
	if (typeof window !== "undefined") {
		window.removeEventListener("resize", handleResize);
	}
	// Clear resize timeout
	if (resizeTimeout) {
		clearTimeout(resizeTimeout);
	}
});
</script>

<style scoped>
.trusted-partners-section {
	background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

.partner-logo-container {
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform 0.2s ease;
	will-change: transform;
}

.partner-logo {
	object-fit: contain;
	object-position: center;
	transition: filter 0.2s ease, transform 0.2s ease;
	will-change: filter, transform;
}

.partner-logo:hover {

	transform: scale(1.05);
}

/* Smooth transitions */
.partner-logo-container:hover {
	transform: translateY(-2px);
}

/* Focus states for accessibility */
button:focus {
	outline: 2px solid #3b82f6;
	outline-offset: 2px;
}

/* Custom scrollbar for touch devices */
.overflow-hidden::-webkit-scrollbar {
	display: none;
}

.overflow-hidden {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
</style>
