<template>
	<section class="free-trial-cta-section py-[80px] md:py-[100px] xl:py-[120px] bg-[#f8f8fa]">
		<div class="container-custom">
			<div class="w-full max-w-[1384px] mx-auto">
				<!-- CTA Card -->
				<div class="gradient-border-card bg-white border-[0.5px] border-gray-200 py-[63px] px-[32px] rounded-[12px] shadow-md">
					<div class="flex flex-col md:flex-row items-center justify-between gap-[24px] lg:gap-[40px]">
						<!-- Text Content -->
						<div class="text-center md:text-left flex-1">
							<h2 class="font-sans text-[18px] md:text-[24px] xl:text-[32px] font-semibold text-[#1a1c3d] mb-[16px] leading-[1.2]">
								Start Your 7-Day Free Sandbox Plan
							</h2>
							<p class="font-sans text-[16px] md:text-[18px] text-[#5f5f60] leading-[1.5]">
								Join over 1,000+ startups already growing with IntelliToggle.
							</p>
						</div>

						<!-- Action Buttons -->
						<div class="flex flex-col xl:flex-row mt-[64px] md:mt-0  gap-[16px] lg:gap-[20px]">
							<!-- Get Started Button -->
							<Button
								variant="primary"
								text-class="font-merriweather-sans text-[20px] font-bold leading-[1.15]"

								button-class=" capitalize 2xl:py-[12px] 2xl:px-[24px] rounded-[8px] md:py-[24px] md:px-[36px]  shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
							>
								Get Started
							</Button>

							<!-- Learn More Button -->
							<Button
								variant="outline"
								size="lg"
								button-class=" capitalize 2xl:py-[12px] 2xl:px-[24px] rounded-[8px] md:py-[24px] md:px-[36px]  shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
								text-class="font-merriweather-sans text-[20px] font-bold leading-[1.15]"
								@click="handleLearnMore"
							>
								Learn More
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Button click handlers
const handleGetStarted = () => {
	console.log("Get Started clicked");
	// Add your navigation logic here
};

const handleLearnMore = () => {
	console.log("Learn More clicked");
	// Add your navigation logic here
};
</script>

<style scoped>
/* Hover effects for buttons */
button:hover {
	transform: translateY(-1px);
}

button:active {
	transform: translateY(0);
}
</style>
