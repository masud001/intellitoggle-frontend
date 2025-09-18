<template>
	<section class="py-[32px] md:py-[64px] xl:py-[120px] bg-[#e6e7f4] md:hidden">
		<div class="container-custom !px-[25px]">
			<!-- Section Title -->
			<div class="text-center mb-[58px]">
				<h2 class="text-[#1a1c3d] font-dm-sans text-[24px] font-medium">
					Control & Power-focused
				</h2>
			</div>

			<!-- Pricing Card Container -->
			<div class="flex justify-center">
				<div class="bg-[linear-gradient(to_bottom,#42389e,#0f1026),linear-gradient(to_bottom,#42389e,#0f1026)] rounded-xl p-6 w-full min-w-[343px] relative shadow-2xl">
					<!-- Card Header -->
					<div class="relative mb-6">
						<!-- Popular Badge -->
						<div class="flex items-center gap-4">
							<div class="inline-block">
								<img
									src="/images/pricng-cycle.svg"
									alt="cycle icons"
								>
							</div>
							<div class=" inline-block top-0 left-0 bg-[#f9a71e] text-[#0e121b] px-[16px] py-[8px] rounded-full text-[14px] font-roboto font-semibold capitalize">
								Popular
							</div>
						</div>

						<!-- Billed Annually Badge -->
						<div class=" absolute inline-block top-[38px] right-0 bg-[#E1E2F0] text-[#5f5f60] px-[16px] py-[8px]  text-[14px] font-roboto font-semibold transform  -rotate-25 rounded-3xl">
							<span class="custom-text">Billed annually</span>
						</div>

						<!-- Plan Name -->
						<div class="text-white text-[16px] font-bold font-merriweather-sans mt-[19px] mb-[37px]">
							Enhance Plan
						</div>

						<!-- Price -->
						<div class="mb-[25px]">
							<span class="text-white text-[48px] font-bold font-merriweather-sans">$149</span>
							<span class="text-white text-[24px] font-normal font-segoe-ui-this">/month</span>
						</div>

						<!-- Divider Line -->
						<div class="w-full h-px bg-[rgba(255,255,255,0.2)] " />
					</div>

					<!-- Features List -->
					<div class="mb-6">
						<ul class="space-y-[16px]">
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								Multi-environment support (Dev / Staging / Prod)
							</li>
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								Unlimited feature flags and projects
							</li>
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								Advanced targeting rules with custom attributes
							</li>
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								Environment-specific flags
							</li>
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								Real-time streaming updates (WebSocket / gRPC)
							</li>
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								Analytics hooks (flag usage tracking)
							</li>
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								Built-in A/B testing / experimentation dashboard
							</li>
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								Audit logs (90-day retention + export in CSV/JSON)
							</li>
							<li class="flex items-center gap-2 font-plus-jakarta-sans text-white text-[14px] font-normal leading-[1.71]">
								<span class="py-[7px] px-[5px]"><img
									class="w-[20px] h-[20px]"
									src="/icons/tick-icon.svg"
									alt=""
								></span>
								API access with multiple keys & custom roles
							</li>
						</ul>
					</div>

					<!-- Subscribe Button -->
					<div class="text-center mt-[38px]">
						<button
							class=" w-full py-[16px] px-[24px] border border-[#ffffff] text-[16px] capitalize font-bold font-segoe-ui-this text-white rounded-[8px] "
							@click="handleSubscribe"
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Define emits
const emit = defineEmits<{
	subscribe: [];
}>();

// Handle subscribe button click
const handleSubscribe = () => {
	emit("subscribe");
	console.log("Subscribe clicked");
	// Add your subscription logic here
};
</script>
