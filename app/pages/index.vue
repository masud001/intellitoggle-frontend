<template>
	<div class="bg-white">
		<!-- Hero Section -->
		<Hero />

		<!-- Video Section -->
		<VideoSection @play="handleVideoPlay" />

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
		<CTASection
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
import VideoSection from "~/components/VideoSection.vue";
import CTASection from "~/components/CTASection.vue";
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

const handleVideoPlay = () => {
	console.log("Video play clicked");
	// Add your video play logic here (e.g., open modal, redirect to video page)
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
