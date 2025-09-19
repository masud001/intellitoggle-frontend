<template>
	<section class="why-teams-section py-[32px] md:py-[64px] xl:py-[120px] hidden xl:block">
		<div class="container-custom  relative z-10">
			<div class="w-full max-w-[1384px] mx-auto">
				<!-- Section Title -->
				<div class="text-center mb-[48px]">
					<SectionTitle
						variant="gradient"
						size="3xl"
						align="center"
						class="text-[40px] font-bold leading-[1.2] "
					>
						Why Teams Use IntelliToggle
					</SectionTitle>
				</div>

				<!-- Three Column Grid -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-[94px]">
					<!-- Column 1: Safer, faster rollouts -->
					<div class="text-left">
						<!-- Icon -->
						<div class="icon-container  mb-[48px] relative xl:left-[-6px] xl:top-[4px]">
							<NuxtImg
								src="/icons/safer-icon.svg"
								alt="Safer rollouts"
								class="w-[38px] h-[38px]"
							/>
						</div>

						<!-- Title -->
						<h3 class="font-sans text-[24px] font-semibold text-[##1a1c3d] mb-[8px] tracking-wide">
							Safer, faster rollouts
						</h3>

						<!-- Description -->
						<p class="font-sans text-[18px]  text-[#5f5f60] max-w-[400px] leading-[1.1] tracking-wide">
							Control feature releases in minutes, not weeks without risking production stability.
						</p>
					</div>

					<!-- Column 2: Confidence to ship -->
					<div class="text-left">
						<!-- Icon -->
						<div class="icon-container  mb-[48px] relative xl:left-[-1px] xl:top-[4px]">
							<NuxtImg
								src="/icons/confidence-icons.svg"
								alt="Confidence to ship"
								class="w-[38px] h-[38px]"
							/>
						</div>

						<!-- Title -->
						<h3 class="font-sans text-[24px]  font-semibold text-[##1a1c3d] mb-[8px]  tracking-wide">
							Confidence to ship
						</h3>

						<!-- Description -->
						<p class="font-sans text-[18px]  text-[#5f5f60] max-w-[400px] leading-[1.1] tracking-wide">
							“Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes.
						</p>
					</div>

					<!-- Column 3: Future-ready with AI delivery -->
					<div class="text-left">
						<!-- Icon -->
						<div class="icon-container  mb-[48px] relative xl:left-[1px] xl:top-[4px]">
							<NuxtImg
								src="/icons/ai-ready-icon.svg"
								alt="AI ready delivery"
								class="w-[38px] h-[38px]"
							/>
						</div>

						<!-- Title -->
						<h3 class="font-sans text-[24px]  font-semibold text-[##1a1c3d] mb-[8px]  tracking-wide">
							Future-ready with AI delivery
						</h3>

						<!-- Description -->
						<p class="font-sans text-[18px]  text-[#5f5f60] max-w-[400px] leading-[1.1] tracking-wide">
							Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.
						</p>
					</div>
				</div>

				<!-- Call-to-Action Banner -->
				<div class="bg-[#f0f2ff] rounded-[12px] px-[32px] py-[29px] flex flex-col md:flex-row items-center justify-between gap-[20px] mt-[32px] gradient-border xl:h-[87px]">
					<!-- Text Content -->
					<div class="text-center md:text-left flex-1">
						<p class="font-sans font-semibold text-[24px] text-[#5f5f60] tracking-wide">
							<span class=" text-[#0e121b]">Read a 2-min case note:</span> How a sample Flutter app shipped faster with IntelliToggle
						</p>
					</div>

					<!-- Button -->
					<Button
						variant="primary"
						text-class="font-merriweather-sans text-[18px] font-bold leading-[1.15]"

						button-class=" relative xl:left-[5px] capitalize 2xl:py-[16px] 2xl:px-[48px] rounded-[8px] md:py-[24px] md:px-[36px]"
					>
						Read now
					</Button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";
// Button click handler
const handleReadNow = () => {
	console.log("Read Now clicked");
	// Add your navigation logic here
};
</script>

<style scoped>
.icon-container {
	width: 129px;
	height: 118px;
	background: #edecf6;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

.icon-container::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 8px;
	padding: 1px;
	background: linear-gradient(to bottom, #42389e, #0f1026);
	mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	mask-composite: exclude;
	-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
}

/* Gradient border utilities are now available globally in main.css */
</style>
