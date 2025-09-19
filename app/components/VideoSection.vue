<template>
	<!-- Video Section -->
	<div class="video-section relative left-0 z-10 w-[294px] h-[209px] lg:w-[805px] lg:h-[534px] xl:w-[992px] xl:h-[768px] 2xl:w-[1440px] 2xl:h-[1020px] lg:mb-[70px] xl:mb-0 mx-auto rounded-[8px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-[#99A0AE] bg-white">
		<div class="video-play-button absolute inset-0 flex items-center justify-center">
			<nuxt-img
				src="/icons/video-play-button-icon.svg"
				alt="Play Video"
				class="w-[42px] h-[34px] lg:w-[112.4px] lg:h-[90px] xl:w-[155.7px] xl:h-[134.7px] cursor-pointer hover:scale-105 transition-transform duration-200"
				width="155.7"
				height="134.7"
				loading="eager"
				preload
				@click="handleVideoPlay"
			/>
		</div>
	</div>
	<!-- Video section end -->
</template>

<script setup lang="ts">
// Define component props if needed
interface Props {
	videoUrl?: string;
	title?: string;
}

const props = withDefaults(defineProps<Props>(), {
	videoUrl: "",
	title: "Play Video"
});

// Define emits for parent component communication
const emit = defineEmits<{
	play: [event: MouseEvent];
}>();

// Handle video play button click
const handleVideoPlay = (event: MouseEvent) => {
	emit("play", event);
	// You can add additional logic here like opening a modal, redirecting to video page, etc.
	console.log("Video play button clicked");
};
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
.video-section {
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-section:hover {
	transform: translateY(-2px);
	box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.08);
}
</style>
