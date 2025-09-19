<template>
	<section class="open-feature-section py-[32px] md:py-[64px] xl:py-[120px] bg-[#edecf6]">
		<div class="container-custom xl:!px-0">
			<div class="w-full">
				<div class="flex flex-col md:flex-row gap-[42px] items-center justify-between">
					<!-- Image Content (Left Side) -->
					<div class="2xl:w-[830px] 2xl:h-[618px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] bg-linear-to-t from-[#0F1026] to-[#42389E] rounded-[12px]">
						<!-- image for Desktop -->
						<img
							src="/images/feature-management-image-desktop.png"
							class="w-full h-full hidden xl:block"
							alt="feature"
						>
						<!-- image for table  -->
						<img
							src="/images/feature-management-image-tablet.png"
							class="w-full h-full hidden md:block xl:hidden"
							alt="feature"
						>
						<!-- image for mobile  -->
						<img
							src="/images/feature-management-image-mobile.png"
							class="w-full h-full md:hidden"
							alt="feature"
						>
					</div>

					<!-- Text Content (Right Side) -->
					<div class="2xl:w-[575px] flex flex-col gap-y-[20px] mt-4">
						<h2 class="hidden md:block font-sans font-semibold xl:text-[32px] md:text-[24px] text-[#1b1d22] leading-[1.2] tracking-wide">
							Seamless Feature Management with OpenFeature
						</h2>
						<SectionTitle
							align="left"
							variant="gradient"
							class="font-satoshi font-bold text-[26px] md:hidden"
						>
							Seamless Feature Management with OpenFeature
						</SectionTitle>
						<p class="font-sans text-[14px] xl:text-[19px] font-normal text-[#5F5F60] md:font-medium xl:font-normal  leading-[110%] tracking-wide">
							Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly.
						</p>

						<div class="mt-5">
							<Button
								variant="primary"
								text-class="font-merriweather-sans text-[20px] font-bold leading-[1.15]"
								button-class=" capitalize 2xl:py-[12px] 2xl:px-[24px] rounded-[8px] md:py-[24px] md:px-[36px]  shadow-[0_4px_4px_rgba(0,0,0,0.25)] tracking-wide"
							>
								learn more
								<img
									src="/icons/arrow-right-icon.svg"
									alt="arrow"
									class="ml-2 !h-[24px] !w-[24px]"
								>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// No props needed for this static section
</script>

<style scoped>
/* OpenFeature Logo Styles */
.open-feature-logo {
	display: flex;
	align-items: center;
	gap: 12px;
}

.logo-icon {
	position: relative;
	width: 40px;
	height: 24px;
}

.oval-shape {
	width: 40px;
	height: 24px;
	background-color: #000;
	border-radius: 12px;
	position: relative;
}

.white-circle {
	position: absolute;
	right: 2px;
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
	height: 20px;
	background-color: white;
	border-radius: 50%;
}

.logo-text {
	display: flex;
	flex-direction: column;
}

.text-open {
	font-size: 16px;
	font-weight: bold;
	color: #000;
	line-height: 1;
}

.text-feature {
	font-size: 18px;
	font-weight: bold;
	color: #000;
	line-height: 1;
}

/* Desktop Layout */
.title {
	font-size: 32px;
	font-weight: bold;
	color: #1a1c3d;
	line-height: 1.2;
}

.description {
	font-size: 16px;
	color: #5f5f60;
	line-height: 1.5;
}

.separator {
	width: 275px;
	height: 2px;
	background: linear-gradient(to right, #42389e, #0f1026);
}

.learn-more-btn {
	background: linear-gradient(135deg, #f9a71e, #ff8c00);
	border: none;
	color: white;
	padding: 12px 24px;
	border-radius: 8px;
	font-weight: 600;
}

/* Tablet Layout */
.tablet-card {
	background: white;
	border-radius: 12px;
	padding: 64px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	max-width: 600px;
	width: 100%;
}

.tablet-card .title {
	font-size: 28px;
}

.tablet-card .description {
	font-size: 16px;
}

/* Mobile Layout */
.mobile-layout {
	padding: 0 16px;
}

.logo-card {
	background: white;
	border-radius: 12px;
	padding: 24px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-title {
	font-size: 24px;
	font-weight: bold;
	color: #1a1c3d;
	line-height: 1.2;
}

.mobile-description {
	font-size: 14px;
	color: #5f5f60;
	line-height: 1.5;
}

.mobile-btn {
	background: linear-gradient(135deg, #42389e, #0f1026);
	border: none;
	color: white;
	padding: 12px 24px;
	border-radius: 8px;
	font-weight: 600;
	width: 100%;
}

/* Responsive adjustments */
@media (max-width: 640px) {
	.logo-icon {
		width: 32px;
		height: 20px;
	}

	.oval-shape {
		width: 32px;
		height: 20px;
		border-radius: 10px;
	}

	.white-circle {
		width: 16px;
		height: 16px;
		right: 1px;
	}

	.text-open {
		font-size: 14px;
	}

	.text-feature {
		font-size: 16px;
	}
}

/* Hover effects */
.learn-more-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(249, 167, 30, 0.3);
}

.mobile-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(66, 56, 158, 0.3);
}
</style>
