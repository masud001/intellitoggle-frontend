<template>
	<!-- Hero Section -->
	<div class="header-section-background absolute top-0 left-0 w-full h-[710px] md:h-[720px] lg:h-[951px] xl:h-[1290px] 2xl:h-[1375px]" />
	<section class="hero-section">
		<div class="container-custom mx-auto z-10 flex items-center pt-[14px] pb-[42px] lg:pt-[64px] lg:pb-[69px] xl:pt-[154.2px] xl:pb-[141px]">
			<div class="hero-content mx-auto w-full mobile:w-[351px] lg:w-[1035px] max-w-[1040px] text-center">
				<h1 class="capitalize font-satoshi text-white font-bold xs:text-[27px] sm:text-[33px] mobile:text-[34px] lg:text-[44px] leading-[1.3] md:leading-[1.6] lg:leading-[1.82] xl:leading-[1.3]   xl:text-[64px]  mb-[17px] lg:mb-[6px] xl:mb-[17px]">
					The First <span class="bg-[#f9a71e] px-[10px] rounded-[8px]">
						<span class="dart-native-text ">Dart-Native</span>
					</span> Feature Flag With DartCodeAI
				</h1>

				<p class="hidden lg:block md:capitalize lg:normal-case font-sans text-[#fefeff] font-semibold text-[14px] lg:text-[22px] xl:text-[32px] leading-[1.25] lg:px-[150px] xl:px-[150px] tracking-wide">
					Feature flags built for Dart, Ship faster, roll back safely, and scale with AI-powered delivery
				</p>
				<p class="lg:hidden font-sans  normal-case text-white text-[14px]">
					Ship faster, control rollouts, and get ready for AI-powered delivery, starting at just $1/month for a limited time.
				</p>

				<p class="font-sans hidden lg:block  lg:text-[22px] md:font-bold xl:text-[32px] lg:font-semibold leading-[1.3] text-[#f9a71e]">
					Starting at just $1/month
				</p>

				<div class=" mt-[37px] lg:mt-[24px] xl:mt-[32px] w-full lg:w-[561px] mx-auto">
					<!-- Call-to-Action Buttons -->
					<div class="flex flex-col lg:flex-row gap-2 lg:gap-[24px] xl:gap-[32px] justify-center lg:items-end">
						<div class="flex-1 md:min-w-[243px] lg:min-w-[260px]">
							<!-- Small Text -->
							<p class=" hidden lg:inline-block font-sans font-medium text-[#dedede] md:text-[14px] lg:text-[16px] md:mb-[8px] lg:mb-[6px]">
								Valid till 15th September,2026
							</p>
							<Button
								variant="primary"
								button-class="w-full  !py-[7px] rounded-[8px] shadow-[0 0 10px 10px rgba(0, 0, 0, 0.05)]"
								text-class="font-sans font-semibold text-[14px] lg:text-[22px] xl:text-[24px]"
							>
								Get started
							</Button>
						</div>

						<div class="flex-1 md:min-w-[243px] lg:min-w-[260px]">
							<Button
								variant="outline"
								button-class="group w-full  py-[7px] px-[13px] rounded-[8px] shadow-[0 0 10px 10px rgba(0, 0, 0, 0.05)]"
								text-class="font-sans group-hover:gradient-text font-semibold text-[14px] lg:text-[22px] xl:text-[24px]"
							>
								Join AI Early Access
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- hero section end -->
</template>

<script setup>
import Button from "~/components/ui/Button.vue";
</script>

<style scoped>
/* Hero Section Background */
.header-section-background {
  background-image:url('/hero-background-image.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
}

/* Dart-Native span styling similar to sandbox-text but with different font properties */
.dart-native-text {
  background-image: linear-gradient(to bottom, #42389e, #0f1026);
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

@media (min-width: 357px) and (max-width: 768px) {
	.hero-content h1{
		letter-spacing: -0.34px;
	}
}
</style>
