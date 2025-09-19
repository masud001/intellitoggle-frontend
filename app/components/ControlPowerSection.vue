<template>
	<section class="control-power-section py-[32px] md:py-[64px] xl:py-[120px] bg-white">
		<div class="container-custom xl:!px-0">
			<!-- Section Title -->
			<div class="text-center mb-[15px] md:mb-[57px] xl:mb-[45px]">
				<SectionTitle
					variant="gradient"
					size="3xl"
					align="center"
					class="font-bold font-satoshi text-[26px] lg:font-bold lg:font-dm-sans lg:text-[32px] xl:font-bold xl:font-satoshi xl:text-[41px] tracking-[1%] !leading-[1.65]"
				>
					Control & Power-focused
				</SectionTitle>
			</div>

			<!-- Desktop Layout (3 columns) -->
			<div class="md:hidden xl:block">
				<div class="grid grid-cols-1 gap-y-[32px] xl:grid xl:grid-cols-3 xl:gap-[45px] 2xl:gap-[95px]">
					<div
						v-for="item in controlItems"
						:key="item.id"
						class="control-item"
					>
						<!-- Mockup Image -->
						<div class="mockup-container mb-[7px]">
							<img
								:src="item.mockupImage"
								:alt="item.title"
								class="w-full h-auto rounded-lg shadow-lg"
								loading="lazy"
							>
						</div>

						<!-- Content -->
						<div class=" text-left">
							<h3 class="font-sans text-[20px] xl:text-[24px] font-semibold xl:mt-[16px] text-[#0e121b] xl:text-[#1a1c3d] mb-[8px] capitalize tracking-wide leading-[1.3]">
								{{ item.title }}
							</h3>
							<p class="xl:font-sans xl:text-[18px] xl:font-normal xl:text-[#5f5f60] mb-[16px] xl:mb-[30px] tracking-wide leading-[1.1]">
								{{ item.description }}
							</p>
							<Button
								variant="outline"
								button-class="w-full max-w-[234px] py-[11px] px-[24px]"
								text-class="font-sans text-[14px] font-semibold xl:text-[18px] xl:font-normal tracking-wider"
							>
								View Documentation
							</Button>
						</div>
					</div>
				</div>
			</div>

			<!-- Tablet Slider -->
			<div class="hidden md:block xl:hidden">
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
							class="flex gap-x-[47px] will-change-transform"
							:style="{
								transform: `translate3d(${translateX}px, 0, 0)`,
								transition: isDragging ? 'none' : 'transform 0.3s ease-out',
							}"
						>
							<div
								v-for="item in controlItems"
								:key="item.id"
								class="flex-shrink-0 w-[300px]"
							>
								<!-- Mockup Image -->
								<div class="mockup-container mb-[25px]">
									<img
										:src="item.mockupImage"
										:alt="item.title"
										class="w-full h-auto rounded-lg shadow-lg"
										loading="lazy"
									>
								</div>

								<!-- Content -->
								<div class="text-left">
									<h3 class="font-sans text-[24px] font-semibold text-[#1a1c3d] mb-[8px] capitalize">
										{{ item.title }}
									</h3>
									<p class="font-sans text-[18px] font-normal text-[#5f5f60] mb-[25px]">
										{{ item.description }}
									</p>
									<Button
										variant="outline"
										button-class="w-full max-w-[234px] py-[12px] px-[24px]"
										text-class="font-sans text-[14px] font-semibold xl:text-[18px] xl:font-normal "
									>
										View Documentation
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Pagination Bullets -->
				<div class="flex justify-center mt-[24px] space-x-[8px]">
					<button
						v-for="(item, index) in controlItems"
						:key="`bullet-${item.id}`"
						:class="[
							'w-[8px] h-[8px] rounded-full transition-all duration-300',
							currentSlide === index
								? 'bg-[#f9a71e] w-[43px] h-[8px] bg-gradient-to-b from-[#42389e] to-[#0f1026]  scale-110'
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

// Define control item interface
interface ControlItem {
	id: string;
	title: string;
	description: string;
	mockupImage: string;
}

// Control items data
const controlItems: ControlItem[] = [
	{
		id: "connect",
		title: "Connect",
		description: "Install SDK in your Dart project in 2 mins.",
		mockupImage: "/images/connect-mockup.png",
	},
	{
		id: "create-flags",
		title: "Create Flags",
		description: "Define features in IntelliToggle dashboard.",
		mockupImage: "/images/create-flags-mockup.png",
	},
	{
		id: "ship-control",
		title: "Ship & Control",
		description: "Flip switches anytime, see instant results.",
		mockupImage: "/images/ship-control-mockup.png",
	},
];

// Slider state
const sliderContainer = ref<HTMLElement | null>(null);
const sliderTrack = ref<HTMLElement | null>(null);
const translateX = ref(0);
const currentSlide = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const startTranslateX = ref(0);

// Touch handling
const handleTouchStart = (e: TouchEvent) => {
	isDragging.value = true;
	startX.value = e.touches[0]?.clientX || 0;
	startTranslateX.value = translateX.value;
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
	const slideWidth = 300 + 32; // 300px width + 32px gap
	const slideIndex = Math.round(-translateX.value / slideWidth);

	// Clamp to valid range
	const maxSlide = controlItems.length - 1;
	const clampedIndex = Math.max(0, Math.min(slideIndex, maxSlide));

	currentSlide.value = clampedIndex;
	translateX.value = -clampedIndex * slideWidth;
};

// Go to specific slide
const goToSlide = (index: number) => {
	currentSlide.value = index;
	const slideWidth = 300 + 32; // 300px width + 32px gap
	translateX.value = -index * slideWidth;
};

// Auto-play functionality (optional)
let autoPlayInterval: number | null = null;

const startAutoPlay = () => {
	autoPlayInterval = setInterval(() => {
		const nextSlide = (currentSlide.value + 1) % controlItems.length;
		goToSlide(nextSlide);
	}, 5000); // Change slide every 5 seconds
};

const stopAutoPlay = () => {
	if (autoPlayInterval) {
		clearInterval(autoPlayInterval);
		autoPlayInterval = null;
	}
};

onMounted(() => {
	// Start auto-play on tablet
	if (window.innerWidth >= 768 && window.innerWidth < 1024) {
		startAutoPlay();
	}
});

onUnmounted(() => {
	stopAutoPlay();
});
</script>

<style scoped>
/* Smooth transitions */
.control-item {
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.control-item:hover {
	transform: translateY(-4px);
	/* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); */
}

.control-item-mobile {
	transition: transform 0.3s ease;
}

.control-item-mobile:hover {
	transform: translateY(-2px);
}

/* Slider container styling */
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
