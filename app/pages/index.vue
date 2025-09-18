<template>
	<div class="bg-white">
		<!-- Hero Section -->
		<Hero />

		<!-- video section -->
		<div class="video-section relative left-0 z-10  w-[294px] h-[209px] lg:w-[805px] lg:h-[534px] xl:w-[992px] xl:h-[768px]  2xl:w-[1440px] 2xl:h-[1020px]  mx-auto rounded-[8px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-[#99A0AE] bg-white">
			<div class="video-play-button absolute inset-0 flex items-center justify-center">
				<nuxt-img
					src="/icons/video-play-button-icon.svg"
					alt="Play Video"
					class="w-[42px] h-[34px] lg:w-[112.4px] lg:h-[90px] xl:w-[155.7px] xl:h-[134.7px] cursor-pointer hover:scale-105 transition-transform duration-200"
					width="155.7"
					height="134.7"
					loading="eager"
					preload
				/>
			</div>
		</div>
		<!-- video section end -->

		<!-- Trusted Partners Section -->
		<TrustedPartners />

		<!-- What Is IntelliToggle Section -->
		<WhatIsIntelliToggleSection />

		<!-- OpenFeature Section -->
		<OpenFeatureSection />

		<!-- Control & Power Section -->
		<ControlPowerSection />

		<!-- Dart Powered Feature Flag Section -->
		<DartPoweredFeatureFlagSection />

		<!-- DartCodeAI Section V2 (Alternative Approach) -->
		<DartCodeAISectionV2 />

		<!-- Pricing Section -->
		<PricingSection @subscribe="handleSubscribe" />

		<!-- Free Trial CTA Section -->
		<FreeTrialCTASection />

		<!-- Why Teams Use IntelliToggle Section -->
		<WhyTeamsUseIntelliToggleSection />

		<!-- Simple Section with Background Pattern -->
		<SimpleSection
			title="Launch Features Confidently With AI Driven Feature Flags"
			subtitle="Start for free, scale as your team grows."
			primary-button-text="Start for $1/mo"
			secondary-button-text="Join AI Early Access"
			@primary-click="handleGetStarted"
			@secondary-click="handleLearnMore"
		/>
	</div>
</template>

<script setup>
import TrustedPartners from "~/components/ui/TrustedPartners.vue";
import SimpleSection from "~/components/SimpleSection.vue";
import ControlPowerSection from "~/components/ControlPowerSection.vue";
import OpenFeatureSection from "~/components/OpenFeatureSection.vue";
import WhatIsIntelliToggleSection from "~/components/WhatIsIntelliToggleSection.vue";
import DartPoweredFeatureFlagSection from "~/components/DartPoweredFeatureFlagSection.vue";
import WhyTeamsUseIntelliToggleSection from "~/components/WhyTeamsUseIntelliToggleSection.vue";
import PricingSection from "~/components/PricingSection.vue";
import FreeTrialCTASection from "~/components/FreeTrialCTASection.vue";
import DartCodeAISection from "~/components/DartCodeAISection.vue";
import DartCodeAISectionV2 from "~/components/DartCodeAISectionV2.vue";

// Button click handlers
const handleGetStarted = () => {
	console.log("Get Started clicked");
	// Add your navigation logic here
};

const handleLearnMore = () => {
	console.log("Learn More clicked");
	// Add your navigation logic here
};

const handleSubscribe = () => {
	console.log("Subscribe clicked");
	// Add your subscription logic here
};

// Home page component
useHead({
	title: "Home - IntelliToggle",
	meta: [
		{ name: "description", content: "Welcome to IntelliToggle - The intelligent solution for modern web applications." },
	],
});
</script>

<style scoped>
/* Additional page-specific styles can be added here */
</style>
