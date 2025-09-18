<template>
	<section class="simple-section px-[15px] relative w-full mx-auto py-[32px] md:py-[64px] xl:py-[120px]   rounded-[8px] overflow-hidden">
		<!-- Background Pattern -->
		<div class="bg-gradient-to-b from-[#42389e] to-[#0f1026] md:bg-[url('/images/background-pattern.svg')] bg-center bg-no-repeat object-fill lg:bg-center xl:bg-[103%] flex items-center justify-center w-full md:w-[90%] lg:w-[892px] 2xl:w-[1384px] min-h-[280px] md:min-h-[300px] lg:min-h-[333px] xl:min-h-[375px] mx-auto rounded-[40px] md:rounded-[8px]">
			<!-- Content Container -->
			<div class="relative z-10 w-full px-4 md:px-6">
				<div class="w-full md:w-[90%] lg:w-[625px] mx-auto text-center py-[80px] md:py-8 lg:py-[50px]">
					<!-- Title -->
					<SectionTitle
						variant="solid"
						size="3xl"
						align="center"
						class="mb-[14] text-white font-sans text-[20px] font-semibold lg:font-medium leading-[1.3]  md:text-[32px] lg:text-[32px] xl:text-[32px] "
					>
						{{ title }}
					</SectionTitle>

					<!-- Subtitle -->
					<p class="text-[#fafafa] font-dm-sans lg:font-dm-sans xl:font-sans font-normal text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] leading-[1.32] lg:leading-[1.32] mt-[13px] px-[25px]">
						{{ subtitle }}
					</p>

					<!-- Buttons -->
					<div class="flex flex-col gap-4 md:gap-6 lg:gap-x-[32px] xl:gap-x-[32px] md:flex-row justify-center items-center pt-6 md:pt-8 lg:pt-[48px]">
						<Button
							variant="primary"
							:class="primaryButtonClass"
							button-class="w-full xl:w-[300px] xl:py-[12px] xl:px-[24px] rounded-[8px] shadow-[0 0 10px 10px rgba(0, 0, 0, 0.05)]"
							text-class="font-merriweather-sans md:font-dm-sans xl:font-dm-sans font-semibold text-[14px] lg:text-[22px] xl:text-[24px]"
							@click="handlePrimaryClick"
						>
							{{ primaryButtonText }}
						</Button>

						<Button
							variant="outline"
							button-class="group w-full xl:w-[300px] xl:py-[12px] xl:px-[24px] rounded-[8px] shadow-[0 0 10px 10px rgba(0, 0, 0, 0.05)]"
							text-class="font-merriweather-sans md:font-dm-sans xl:font-dm-sans group-hover:gradient-text font-semibold text-[14px] lg:text-[20px] xl:text-[24px]"
							:class="secondaryButtonClass"
							@click="handleSecondaryClick"
						>
							{{ secondaryButtonText }}
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Define component props
interface Props {
	title?: string;
	subtitle?: string;
	primaryButtonText?: string;
	secondaryButtonText?: string;
	primaryButtonClass?: string;
	secondaryButtonClass?: string;
}

withDefaults(defineProps<Props>(), {
	title: "Welcome to IntelliToggle",
	subtitle: "The intelligent solution for modern web applications. Experience seamless functionality with our cutting-edge technology.",
	primaryButtonText: "Get Started",
	secondaryButtonText: "Learn More",
	primaryButtonClass: "",
	secondaryButtonClass: "",
});

// Define emits
const emit = defineEmits<{
	primaryClick: [];
	secondaryClick: [];
}>();

// Handle button clicks
const handlePrimaryClick = () => {
	emit("primaryClick");
};

const handleSecondaryClick = () => {
	emit("secondaryClick");
};
</script>

<style scoped>

</style>
