<template>
	<footer class="bg-[#e1e2f0] py-[64px] xl:py-[100px]">
		<div class="container-custom">
			<div class="lg:flex lg:gap-x-[73px] xl:gap-x-[220px]">
				<!-- Company Info & Social -->
				<div class=" w-full max-w-[359px]">
					<div class="flex items-center">
						<nuxt-img
							src="/images/logo-dark.svg"
							alt="IntelliToggle"
							class="w-[170px] h-[50.8px]"
							width="170px"
							height="50.8px"
							loading="eager"
							preload
						/>
					</div>
					<p class="font-sans font-normal text-[14px] xl:text-[18px] text-[#5f5f60] lg:text-[#263238] xl:text-[#4a4b4d] my-[30px] lg:mt-[9px] lg:mb-[25px] xl:my-[20px]">
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

				<div class="py-[33px] flex md:flex-wrap md:gap-y-[24px] xl:gap-x-[100px] xl:py-0 justify-between xl:w-full">
					<!-- Company Links -->
					<FooterSection title="Company">
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

					<!-- Resources Links -->
					<FooterSection title="Resources">
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
					<!-- Newsletter Subscription -->
					<div class="hidden lg:inline-block xl:hidden w-[321px]">
						<h4 class="font-sans font-semibold text-[#1b1d22] xl:text-[#323338] text-[14px] lg:text-[16px] xl:text-[18px] mb-[25px] lg:mb-[23px] xl:mb-[27px]">
							Subscribe to Newsletter
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
				<div class=" lg:hidden w-full xl:w-[321px]">
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
				<div class="hidden xl:inline-block shrink-0 w-[321px]">
					<h4 class="font-sans font-semibold text-[#1b1d22] xl:text-[#323338] text-[14px] lg:text-[16px] xl:text-[18px] mb-[25px] lg:mb-[23px] xl:mb-[27px]">
						Subscribe to Newsletter
					</h4>
					<div class="flex">
						<input
							type="email"
							placeholder="Enter email address"
							class="flex-1 px-[16.7px] py-[13.4px] text-[#8a8a8a] text-[11.7px] outline-none focus:outline-none bg-white rounded-l-[6.7px] font-normal font-sans leading-[1.57px]"
						>
						<button class="text-[13px] font-semibold font-sans capitalize px-[24px] py-[10.7px] bg-[#f9a71e] rounded-r-[6.7px]">
							<span class="text-white custom-text capitalize">subscribe</span>
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
