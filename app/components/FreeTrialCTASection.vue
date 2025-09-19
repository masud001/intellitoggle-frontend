<template>
	<section class="free-trial-cta-section py-[32px] md:py-[64px] lg:pt-[35px] xl:py-[120px] bg-[#edecf6]">
		<div class="container-custom">
			<div class="w-full max-w-[1384px] mx-auto">
				<!-- Pricing Section -->
				<div class="text-center">
					<div class=" mb-[48px] mt-[25px] hidden md:block">
						<SectionTitle
							variant="gradient"
							size="3xl"
							align="center"
							class="text-[32px] xl:text-[40px] font-bold leading-[1.6] "
						>
							Plans Built For Every Stage Of Growth
						</SectionTitle>
					</div>

					<!-- Pricing Card -->
					<div class=" mb-[32px] max-w-[372px] w-full mx-auto hidden md:block">
						<div class="bg-[linear-gradient(to_bottom,#42389e,#0f1026),linear-gradient(to_bottom,#42389e,#0f1026)] rounded-[12px] p-[28px] shadow-[0_8px_32px_rgba(66,56,158,0.3)] mb-[16px] !w-full xl:!max-w-[372px]  hidden xl:block">
							<div class="text-center relative xl:left-[-10px]">
								<h2 class=" font-merriweather-sans text-[#fefeff] text-[20px] font-bold mb-[21px]">
									Prices starts at
								</h2>
								<div class="flex items-baseline justify-center gap-[5px]">
									<span class=" relative xl:left-[-5px] font-merriweather-sans text-[#fefeff] text-[48px] font-bold leading-[1] tracking-wide">
										$ 10
									</span>
									<span class=" relative xl:top-[-5px] xl:left-[-5px] font-segoe-ui-this text-[#fefeff] text-[24px] font-normal">
										/month
									</span>
								</div>
							</div>
						</div>

						<!-- CTA Button -->

						<Button
							variant="primary"
							button-class=" py-[11px] xl:py-[15px] px-[24px] rounded-[8px] !w-full xl:!max-w-[372px]"
							text-class="font-sans font-semibold tracking-wide leading-[1.6] text-[18px]"
							@click="handleViewDetails"
						>
							View Subscription Details 1
						</Button>
					</div>
				</div>
				<!-- CTA Card -->
				<div class="gradient-border-card bg-white border-[0.5px] border-gray-200 lg:py-[32px] xl:py-[63px] px-[32px] rounded-[12px] shadow-md">
					<div class="flex flex-col md:flex-row items-center justify-between gap-[24px] lg:gap-[40px]">
						<!-- Text Content -->
						<div class="text-center md:text-left flex-1">
							<h2 class="font-sans text-[18px] md:text-[24px] xl:text-[32px] font-semibold text-[#1a1c3d] mb-[16px] leading-[1.4] tracking-wide">
								Start Your 7-Day Free Sandbox Plan
							</h2>
							<p class="font-sans text-[16px] md:text-[18px] text-[#5f5f60] leading-[1.1]">
								Join over 1,000+ startups already growing with IntelliToggle.
							</p>
						</div>

						<!-- Action Buttons -->
						<div class="flex flex-col xl:flex-row mt-[64px] md:mt-0  gap-[16px] lg:gap-[10px] xl:gap-x-[32px]">
							<!-- Get Started Button -->
							<Button
								variant="primary"
								text-class="font-merriweather-sans text-[20px] font-bold leading-[1.15]"

								button-class=" relative xl:left-[5px] capitalize lg:py-[12px]  xl:py-[12px] 2xl:py-[12px] 2xl:px-[36px] rounded-[8px] md:py-[24px] md:px-[36px]  shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:shadow-none"
							>
								Get Started
							</Button>

							<!-- Learn More Button -->
							<Button
								variant="outline"
								size="lg"
								button-class=" relative xl:left-[5px] capitalize lg:py-[13px] xl:py-[14px] 2xl:py-[14px] 2xl:px-[36px] rounded-[2px] md:py-[24px] md:px-[36px]  shadow-[0_4px_4px_rgba(0,0,0,0.25)]  lg:shadow-none"
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

const handleViewDetails = () => {
	console.log("View Subscription Details clicked");
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
