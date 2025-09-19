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
// Import organized components
import {
  TrustedPartners,
  VideoSection,
  CTASection,
  ControlPowerSection,
  OpenFeatureSection,
  WhatIsIntelliToggleSection,
  DartPoweredFeatureFlagSection,
  WhyTeamsUseIntelliToggleSection,
  PricingSection,
  FreeTrialCTASection,
  DartCodeAISection,
  DartCodeAISectionV2,
} from '~/components';

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
