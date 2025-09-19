<template>
	<section class="dart-powered-section py-[32px] md:py-[64px] xl:py-[120px] bg-white">
		<div class="container-custom xl:!px-0">
			<!-- Section Title -->
			<div class=" mb-[32px] md:mb-[48px] xl:mb-[28px]">
				<SectionTitle
					variant="gradient"
					size="3xl"
					align="center"
					class="text-[26px] md:text-[32px] lg:text-[40px] font-bold  mb-[8px] xl:mb-[48px] md:mb-[24px] leading-[1.6]"
				>
					Dart-Powered Feature Flag
				</SectionTitle>
				<SectionTitle
					variant="solid"
					text-class=" text-left md:text-center font-sans text-[18px] font-semibold md:font-dm-sans md:text-[24px] md:font-semibold xl:font-sans xl:text-[32px] xl:font-semibold xl:text-[#1a1c3d] leading-[1.2] tracking-wide"
				>
					Not Another Generic Feature Flag Tool
				</SectionTitle>
				<p class="text-left max-w-[700px] xl:mx-auto md:text-center font-sans text-[14px] font-normal text-[#5f5f60] md:font-dm-sans md:text-[18px] md:font-normal xl:text-[18px] xl:font-normal mt-[8px] mb-[36px] xl:mt-[8px] xl:mb-[32px] md:mt-[8px] md:mb-[48px] leading-[1.3] tracking-wide">
					Most tools are built for every language, which means extra layers and slower toggles.
					IntelliToggle is built in Dart, for Dart — so it's faster, safer, and built for your stack.
				</p>
			</div>

			<!-- Desktop Layout - Comparison Table -->
			<div class="hidden xl:block">
				<div class="w-full 2xl:max-w-[1440px] mx-auto">
					<div class="bg-white rounded-t-xl shadow-xl overflow-hidden">
						<!-- Table Header -->
						<div class="bg-gradient-to-b from-[#42389e] to-[#0f1026] pt-[8px] pb-[8px] px-[10px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-solid border-[#edecf6]">
							<div class="grid grid-cols-3 gap-4">
								<div class="text-left">
									<h4 class=" font-dm-sans text-[18px] md:font-sans md:font-semibold text-[#fefeff] md:text-[24px] capitalize tracking-wide leading-[1.3]">
										Featuresr
									</h4>
								</div>
								<div class="text-center">
									<h4 class=" font-dm-sans text-[18px] md:font-sans md:font-semibold text-[#fefeff] md:text-[24px] capitalize  tracking-wide leading-[1.3] relative left-[-60px]">
										IntelliToggle
									</h4>
								</div>
								<div class="text-center">
									<h4 class=" font-dm-sans text-[18px] md:font-sans md:font-semibold text-[#fefeff] md:text-[24px] capitalize  tracking-wide leading-[1.3]">
										Other Feature Flag
									</h4>
								</div>
							</div>
						</div>

						<!-- Table Body -->
						<div class="bg-[#edecf6]">
							<div
								v-for="(feature, index) in features"
								:key="feature.id"
								class="px-[32px] p-[10px]"
							>
								<div class="grid grid-cols-3 gap-4 items-center">
									<div class="text-left">
										<span class="font-sans text-[18px] font-semibold text-[#5f5f60] leading-[1.1] ">{{ feature.name }}</span>
									</div>
									<div class="text-center">
										<NuxtImg
											src="/icons/tick-icon-dark.svg"
											alt="Check"
											class="w-[18px] h-[18px] mx-auto relative left-[-66px]"
										/>
									</div>
									<div class="text-center">
										<NuxtImg
											src="/icons/cross-icon.svg"
											alt="Cross"
											class="w-[13px] h-[13px] mx-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Tablet & Mobile Slider - Whole Table Slides -->
			<div class="block xl:hidden">
				<div class="relative">
					<!-- Slider Container -->
					<div
						ref="sliderContainer"
						class="overflow-hidden"
						@touchstart="handleTouchStart"
						@touchmove="handleTouchMove"
						@touchend="handleTouchEnd"
						@mouseenter="handleMouseEnter"
						@mouseleave="handleMouseLeave"
					>
						<div
							ref="sliderTrack"
							class="flex will-change-transform"
							:style="{
								transform: `translate3d(${translateX}px, 0, 0)`,
								transition: isDragging ? 'none' : 'transform 0.3s ease-out',
							}"
						>
							<!-- IntelliToggle Table -->
							<div class="flex-shrink-0 w-screen px-4">
								<div class="bg-white rounded-t-xl shadow-xl overflow-hidden">
									<!-- Table Header -->
									<div class="bg-gradient-to-b from-[#42389e] to-[#0f1026] p-[10px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-solid border-[#edecf6]">
										<div class="grid grid-cols-2 gap-4">
											<div class="text-left">
												<h4 class="font-dm-sans text-[16px] md:font-sans md:font-semibold text-[#fefeff] md:text-[20px] capitalize">
													Features
												</h4>
											</div>
											<div class="text-center">
												<h4 class="font-dm-sans text-[16px] md:font-sans md:font-semibold text-[#fefeff] md:text-[20px] capitalize">
													IntelliToggle
												</h4>
											</div>
										</div>
									</div>

									<!-- Table Body -->
									<div class="bg-[#edecf6]">
										<div
											v-for="(feature, index) in features"
											:key="feature.id"
											class="px-[24px] p-[10px]"
										>
											<div class="grid grid-cols-2 gap-4 items-center">
												<div class="text-left">
													<span class="font-sans text-[14px] md:text-[16px] font-semibold text-[#5f5f60]">{{ feature.name }}</span>
												</div>
												<div class="text-center">
													<NuxtImg
														src="/icons/tick-icon-dark.svg"
														alt="Check"
														class="w-[13px] h-[13px] mx-auto"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Other Feature Flag Table -->
							<div class="flex-shrink-0 w-screen px-4">
								<div class="bg-white rounded-t-xl shadow-xl overflow-hidden">
									<!-- Table Header -->
									<div class="bg-gradient-to-b from-[#42389e] to-[#0f1026] p-[10px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-solid border-[#edecf6]">
										<div class="grid grid-cols-2 gap-4">
											<div class="text-left">
												<h4 class="font-dm-sans text-[16px] md:font-sans md:font-semibold text-[#fefeff] md:text-[20px] capitalize">
													Features
												</h4>
											</div>
											<div class="text-center">
												<h4 class="font-dm-sans text-[16px] md:font-sans md:font-sans md:font-semibold text-[#fefeff] md:text-[20px] capitalize">
													Other Feature Flag
												</h4>
											</div>
										</div>
									</div>

									<!-- Table Body -->
									<div class="bg-[#edecf6]">
										<div
											v-for="(feature, index) in features"
											:key="feature.id"
											class="px-[24px] p-[10px]"
										>
											<div class="grid grid-cols-2 gap-4 items-center">
												<div class="text-left">
													<span class="font-sans text-[14px] md:text-[16px] font-semibold text-[#5f5f60]">{{ feature.name }}</span>
												</div>
												<div class="text-center">
													<NuxtImg
														src="/icons/cross-icon.svg"
														alt="Cross"
														class="w-[13px] h-[13px] mx-auto"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Pagination Bullets -->
				<div class="flex justify-center mt-[24px] space-x-[8px]">
					<button
						v-for="(slide, index) in tableSlides"
						:key="`table-bullet-${index}`"
						:class="[
							'w-[8px] h-[8px] rounded-full transition-all duration-300',
							currentSlide === index
								? 'bg-[#42389e] w-[32px] h-[8px]'
								: 'bg-[#c5c8e7] hover:bg-[#42389e]',
						]"
						@click="goToSlide(index)"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import SectionTitle from "~/components/ui/SectionTitle.vue";

// Define feature interface
interface Feature {
	id: string;
	name: string;
}

// Define slide interface
interface Slide {
	title: string;
	features: Feature[];
}

// Features data
const features: Feature[] = [
	{ id: "dart-native", name: "Dart-native SDK & server" },
	{ id: "type-safety", name: "End-to-end type safety" },
	{ id: "ai-rollouts", name: "AI-assisted roll-outs & cleanup" },
	{ id: "ab-testing", name: "A/B testing built-in" },
	{ id: "dart-sdks", name: "Dart-Powered SDKs" },
];

// Table slides (whole table slides)
const tableSlides = [
	{ id: "intellitoggle", title: "IntelliToggle" },
	{ id: "other-flag", title: "Other Feature Flag" },
];

// Slider state
const sliderContainer = ref<HTMLElement | null>(null);
const sliderTrack = ref<HTMLElement | null>(null);
const translateX = ref(0);
const currentSlide = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const startTranslateX = ref(0);
const isHovering = ref(false);
const hoverInterval = ref<number | null>(null);

// Touch handling
const handleTouchStart = (e: TouchEvent) => {
	isDragging.value = true;
	startX.value = e.touches[0]?.clientX || 0;
	startTranslateX.value = translateX.value;
	stopHoverAutoSlide();
};

const handleTouchMove = (e: TouchEvent) => {
	if (!isDragging.value) return;

	const currentX = e.touches[0]?.clientX || 0;
	const diff = currentX - startX.value;
	translateX.value = startTranslateX.value + diff;
};

const handleTouchEnd = () => {
	if (!isDragging.value) return;

	isDragging.value = false;

	// Snap to nearest slide
	const slideWidth = window.innerWidth; // Full viewport width for each table
	const slideIndex = Math.round(-translateX.value / slideWidth);

	// Clamp to valid range
	const maxSlide = tableSlides.length - 1;
	const clampedIndex = Math.max(0, Math.min(slideIndex, maxSlide));

	currentSlide.value = clampedIndex;
	translateX.value = -clampedIndex * slideWidth;

	// Resume hover auto-slide if hovering
	if (isHovering.value) {
		startHoverAutoSlide();
	}
};

// Hover handling
const handleMouseEnter = () => {
	isHovering.value = true;
	startHoverAutoSlide();
};

const handleMouseLeave = () => {
	isHovering.value = false;
	stopHoverAutoSlide();
};

// Go to specific slide function
const goToSlide = (index: number) => {
	currentSlide.value = index;
	const slideWidth = window.innerWidth; // Full viewport width for each table
	translateX.value = -index * slideWidth;
};

// Hover auto-slide functionality
const startHoverAutoSlide = () => {
	stopHoverAutoSlide(); // Clear any existing interval
	hoverInterval.value = setInterval(() => {
		const nextSlide = (currentSlide.value + 1) % tableSlides.length;
		goToSlide(nextSlide);
	}, 3000); // Change slide every 3 seconds on hover
};

const stopHoverAutoSlide = () => {
	if (hoverInterval.value) {
		clearInterval(hoverInterval.value);
		hoverInterval.value = null;
	}
};

// Handle window resize
const handleResize = () => {
	// Recalculate slide position on resize
	goToSlide(currentSlide.value);
};

onMounted(() => {
	// Initialize slider position
	goToSlide(0);

	// Add resize listener
	window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
	stopHoverAutoSlide();
	window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
/* Smooth transitions */
.overflow-hidden {
	-webkit-overflow-scrolling: touch;
}

/* Pagination bullet hover effects */
button[class*="w-3 h-3"]:hover {
	transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 640px) {
	.control-item-mobile {
		padding: 0 1rem;
	}
}
</style>
