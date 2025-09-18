<template>
	<section
		id="dart-ai-hero-v2"
		class="dart-code-ai-section-v2 py-[80px] md:py-[100px] xl:py-[120px] bg-[url('/ai-section-background.png')] bg-no-repeat bg-center bg-cover"
		style="--bg-url: url('/ai-section-background.png')"
	>
		<div class="container-custom relative z-10">
			<div class="w-full max-w-[1384px] mx-auto">
				<!-- Coming Soon Badge -->
				<div class="text-center mb-[16px]">
					<Button
						variant="primary"
						text-class="font-merriweather-sans text-[20px] font-bold leading-[1.15]"

						button-class="capitalize 2xl:py-[12px] 2xl:px-[24px] !rounded-full md:py-[24px] md:px-[36px]"
					>
						Coming Soon
					</Button>
				</div>

				<!-- Main Title -->
				<div class="text-center mb-[35px] xl:mb-[48px]">
					<SectionTitle
						variant="solid"
						size="3xl"
						align="center"
						title-class="text-white font-satoshi text-[26px] md:font-dm-sans md:text-[32px] xl:text-[40px]  font-bold leading-[1.2]"
						text-class="text-white"
					>
						DartCodeAI That Actually Changes Flagging
					</SectionTitle>
				</div>

				<!-- Feature Cards Grid -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-y-[64px] gap-x-[120px] mb-[80px]">
					<!-- AutoFlag AI Card -->
					<div class="glass-card rounded-[16px] p-[32px] text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white border-opacity-20">
						<div class="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center mx-auto mb-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
							<svg
								class="w-[24px] h-[24px] text-black"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M12 2L2 7L12 12L22 7L12 2Z"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M2 17L12 22L22 17"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M2 12L12 17L22 12"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<h3 class="font-sans text-[18px] font-bold text-white mb-[16px] leading-[1.4]">
							AutoFlag AI (LLM-Assisted Flag Creation)
						</h3>
						<p class="font-sans text-[14px] font-normal text-white text-opacity-80 leading-[1.6]">
							Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you.
						</p>
					</div>

					<!-- SmartRamp AI Card -->
					<div class="glass-card rounded-[16px] p-[32px] text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white border-opacity-20">
						<div class="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center mx-auto mb-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
							<svg
								class="w-[24px] h-[24px] text-black"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M7 17L17 7M17 7H7M17 7V17"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<h3 class="font-sans text-[18px] font-bold text-white mb-[16px] leading-[1.4]">
							SmartRamp AI (AI-Driven Rollout Optimization)
						</h3>
						<p class="font-sans text-[14px] font-normal text-white text-opacity-80 leading-[1.6]">
							Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.
						</p>
					</div>

					<!-- ExplainFlags AI Card -->
					<div class="glass-card rounded-[16px] p-[32px] text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white border-opacity-20">
						<div class="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center mx-auto mb-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
							<svg
								class="w-[24px] h-[24px] text-black"
								viewBox="0 0 24 24"
								fill="none"
							>
								<circle
									cx="11"
									cy="11"
									r="8"
									stroke="currentColor"
									stroke-width="2"
								/>
								<path
									d="M21 21L16.65 16.65"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11 8V14M8 11H14"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<h3 class="font-sans text-[18px] font-bold text-white mb-[16px] leading-[1.4]">
							ExplainFlags AI (LLM Root-Cause + Insights)
						</h3>
						<p class="font-sans text-[14px] font-normal text-white text-opacity-80 leading-[1.6]">
							Understand issues instantly with AI-generated, plain-language insights tied to your flags.
						</p>
					</div>

					<!-- AutoSegment AI Card -->
					<div class="glass-card rounded-[16px] p-[32px] text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white border-opacity-20">
						<div class="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center mx-auto mb-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
							<svg
								class="w-[24px] h-[24px] text-black"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M3 3V21H21V3H3Z"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M9 9H15V15H9V9Z"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M3 9H21M3 15H21"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<h3 class="font-sans text-[18px] font-bold text-white mb-[16px] leading-[1.4]">
							AutoSegment AI (Behavioral Segmentation)
						</h3>
						<p class="font-sans text-[14px] font-normal text-white text-opacity-80 leading-[1.6]">
							Target the right users automatically. AI builds segments from live behavior—no manual rules.
						</p>
					</div>
				</div>

				<!-- Enterprise Only Label -->
				<div class="text-center mb-[48px]">
					<span class="font-sans text-[16px] font-bold text-[#f9a71e] uppercase tracking-wide">
						Enterprise Only
					</span>
				</div>

				<!-- Email Subscription Form -->
				<div class="max-w-[900px] mx-auto">
					<div class="text-center mb-[32px]">
						<h3 class="font-sans text-[24px] md:text-[28px] xl:text-[32px] font-bold text-white mb-[12px] leading-[1.3]">
							Be The First To Try Out Our New AI Features
						</h3>
					</div>

					<form
						class="flex flex-col sm:flex-row gap-[20px] items-center justify-center"
						@submit.prevent="handleEmailSubmit"
					>
						<input
							v-model="email"
							type="email"
							placeholder="Enter email address"
							class="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-[8px] px-[20px] py-[16px] text-white text-[16px] font-sans min-w-[320px] backdrop-blur-[10px] transition-all duration-300 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,167,30,0.1)] focus:bg-white focus:bg-opacity-15 placeholder-white placeholder-opacity-60"
							required
						>
						<Button
							variant="primary"
							size="lg"
							button-class="px-[32px] py-[16px] rounded-[8px] font-semibold text-[18px] min-w-[220px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
							text-class="font-sans font-semibold"
							@click="handleEmailSubmit"
						>
							Join AI Early Access
						</Button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "~/components/ui/SectionTitle.vue";
import Button from "~/components/ui/Button.vue";

// Email form state
const email = ref("");

// Email submission handler
const handleEmailSubmit = () => {
	if (email.value) {
		console.log("Email submitted:", email.value);
		// Add your email submission logic here
		email.value = "";
	}
};
</script>

<style scoped>
.dart-code-ai-section-v2{
	background-position: center center;
	background-size: contain;
}

/* Ensure proper z-index layering */
.dart-code-ai-section-v2 > .container-custom {
	position: relative;
	z-index: 2;
}

/* Glass Magnifier Card Effect - Alternative Approach */
.glass-card {
	position: relative;
	overflow: hidden;
	border-radius: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.2);
}

/* The magnified background layer */
.glass-card::before {
	content: "";
	position: absolute;
	inset: 0;
	background: inherit; /* pulls the same background as section */
	background-attachment: fixed; /* important for effect */
	transform: scale(1.2); /* magnify */
	filter: blur(6px); /* optional: blur for glass effect */
	z-index: 0;
}

/* Overlay to tint + control transparency */
.glass-card::after {
	content: "";
	position: absolute;
	inset: 0;
	background: rgba(255, 255, 255, 0.1);
	z-index: 1;
}

/* Actual content */
.glass-card > * {
	position: relative;
	z-index: 2;
}
</style>
