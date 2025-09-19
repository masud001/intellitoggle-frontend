<template>
	<footer class="bg-[#e1e2f0] py-[64px] lg:pt-[100px] xl:py-[100px]">
		<div class="container-custom xl:!px-0">
			<div class="lg:flex lg:gap-x-[73px] xl:gap-x-[80px] 2xl:gap-x-[265px]">
				<!-- Company Info & Social -->
				<div class=" w-full max-w-[340px] flex flex-col gap-[5px]">
					<div class="flex items-center relative xl:top-[-10px] xl:left-[10px] ">
						<nuxt-img
							src="/images/logo-dark.svg"
							alt="IntelliToggle"
							class="w-[170px] h-[70.8px] scale-x-[106%] scale-y-[114%]"
							width="170px"
							height="50.8px"
							loading="eager"
							preload
						/>
					</div>
					<p class=" relative xl:left-[5px] font-sans font-normal text-[14px] xl:text-[18px] text-[#5f5f60] lg:text-[#263238] xl:text-[#4a4b4d] my-[30px] lg:mt-[9px] lg:mb-[25px] xl:py-[0px] xl:mt-[0px] xl:mb-[10px] xl:leading-[1.2] tracking-wide">
						IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
					</p>
					<a
						href="#"
						class="w-[30px] h-[30px] bg-[#4b4b4b] rounded-full flex items-center justify-center"
					>
						<nuxt-img
							src="/icons/logo-github-icon.svg"
							alt="Github"
							class="hover:scale-110 transition-transform duration-200"
							width="14"
							height="14"
						/>
					</a>
				</div>

				<div class="py-[33px] gap-x-[57px] flex md:flex-wrap md:gap-y-[24px] mobile:gap-x-[57px] lg:gap-x-[130px] xl:gap-x-[150px] 2xl:gap-x-[113px] xl:py-0 w-full xl:w-full">
					<div class="order-2 lg:order-2 xl:order-1">
						<!-- Resources Links -->
						<FooterSection
							title="Resources"
							class="xs:shrink-0  relative"
						>
							<FooterLink
								href="#"
								text="Why IntelliToggle is different"
							/>
							<FooterLink
								href="#"
								text="Customer Support"
							/>
							<FooterLink
								href="#"
								text="Terms & conditions"
							/>
							<FooterLink
								href="#"
								text="Privacy Policy"
							/>
						</FooterSection>
					</div>
					<div class=" order-1 lg:order-1 xl:order-2">
						<!-- Company Links -->
						<FooterSection
							title="Company"
							class="xs:shrink-0"
						>
							<FooterLink
								href="#"
								text="Pricing"
							/>
							<FooterLink
								href="#"
								text="Documentation"
							/>
							<FooterLink
								href="#"
								text="About Us"
							/>
						</FooterSection>
					</div>
					<!-- Newsletter Subscription -->
					<div class="hidden md:inline-block 3xl:hidden w-[321px] order-3 lg:order-3 xl:order-3">
						<h4 class="font-sans font-semibold text-[#1b1d22] xl:text-[#323338] text-[14px] lg:text-[16px] xl:text-[18px] mb-[25px] lg:mb-[23px] xl:mb-[27px]">
							Subscribe to Newsletter 1
						</h4>
						<div class="flex">
							<input
								type="email"
								placeholder="Enter email address"
								class="flex-1 px-[16.7px] py-[13.4px] text-[#8a8a8a] text-[11.7px] outline-none focus:outline-none bg-white rounded-l-[6.7px] font-normal font-sans leading-[1.57px]"
							>
							<button class="text-[13px] font-semibold font-sans capitalize px-[24px] py-[10.7px] bg-[#f9a71e] rounded-r-[6.7px]">
								<span class="text-white custom-text capitalize">join</span>
							</button>
						</div>
					</div>
				</div>

				<!-- Newsletter Subscription -->
				<div class=" md:hidden w-full mobile:w-[321px] xs:justify-self-center xl:w-[321px]">
					<h4 class="font-sans font-semibold text-[#1b1d22] xl:text-[#323338] text-[14px] lg:text-[16px] xl:text-[18px] mb-[25px] lg:mb-[23px] xl:mb-[27px]">
						Subscribe to Newsletter
					</h4>
					<div class="flex">
						<input
							type="email"
							placeholder="Enter email address"
							class="flex-1 px-[16.7px] py-[13.4px] text-[#8a8a8a] text-[11.7px] outline-none focus:outline-none bg-white rounded-l-[6.7px] font-normal font-sans leading-[1.57px]"
						>
						<button class="text-[13px] font-semibold font-sans capitalize px-[24px] py-[10.7px] bg-gradient-to-b from-[#42389e] to-[#0f1026] rounded-r-[6.7px]">
							<span class="text-white capitalize">join</span>
						</button>
					</div>
				</div>
				<!-- Newsletter Subscription -->
				<div class="hidden 3xl:inline-block shrink-0 w-[321px] self-center">
					<h4 class="font-sans font-semibold text-[#1b1d22] xl:text-[#323338] text-[14px] lg:text-[16px] xl:text-[18px] mb-[25px] lg:mb-[23px] xl:mb-[27px] tracking-wide">
						Subscribe to Newsletter
					</h4>
					<div class="flex">
						<input
							type="email"
							placeholder="Enter email address"
							class="flex-1 px-[16.7px] py-[13.4px] text-[#8a8a8a] text-[11.7px] outline-none focus:outline-none bg-white rounded-l-[6.7px] font-normal font-sans leading-[1.57px]"
						>
						<button class="text-[13px] font-semibold font-sans capitalize px-[28px] py-[10.7px] bg-[#f9a71e] rounded-r-[6.7px]">
							<span class="text-white custom-text capitalize">eubscribe</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { FooterLink, FooterSection } from "./ui";
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
