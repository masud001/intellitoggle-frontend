<template>
	<section class="what-is-intellitoggle-section py-[32px] md:py-[64px] xl:py-[120px] bg-white">
		<div class="container-custom xl:!px-0">
			<!-- Section Title -->
			<div class="text-center mb-[16px] md:mb-[48px] hidden md:block">
				<SectionTitle
					variant="gradient"
					size="3xl"
					align="center"
					class="text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2] tracking-wide"
				>
					What Is Intelli Toggle
				</SectionTitle>
			</div>

			<!-- Desktop Layout (Text left, Image right) -->
			<div class="w-full">
				<div class="flex flex-col md:flex-row gap-[42px] items-center justify-between">
					<!-- Text Content -->
					<div class="2xl:w-[623px] flex flex-col gap-y-[8px] mt-[28px]">
						<h2 class="hidden md:block font-sans font-semibold xl:text-[32px] md:text-[24px] text-[#1b1d22] leading-[1.2] tracking-wide">
							Your AI Dart App's Control Panel For Feature Releaees
						</h2>
						<SectionTitle
							align="left"
							variant="gradient"
							class="font-satoshi font-bold text-[26px] md:hidden"
						>
							Your AI Dart App's Control Panel For Feature Releases
						</SectionTitle>
						<p class=" font-sans text-[14px] xl:text-[18px] font-normal text-[#5f5f60] md:font-medium xl:font-normal tracking-wider leading-[1.3]">
							IntelliToggle is a 'Dart-Powered' feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
						</p>

						<!-- Benefits Section -->
						<div class="">
							<h3 class=" font-sans text-[18px] font-semibold text-[#1b1d22] md:text-[#323338] md:text-[22px] xl:text-[24px] xl:text-[#0e121b] tracking-wider">
								Benefits
							</h3>
							<ul class="list-disc relative pl-8">
								<li class=" font-sans text-[14px] font-normal text-[#5f5f60] md:font-medium xl:font-normal xl:text-[18px] tracking-wider">
									Toggle new features without app updates
								</li>
								<li class=" font-sans text-[14px] font-normal text-[#5f5f60] md:font-medium xl:font-normal xl:text-[18px]  tracking-wider">
									Roll out to specific users or regions
								</li>
								<li class=" font-sans text-[14px] font-normal text-[#5f5f60] md:font-medium xl:font-normal xl:text-[18px]  tracking-wider">
									Instantly rollback when needed
								</li>
							</ul>
						</div>
					</div>

					<!-- Dashboard Image -->
					<div class="2xl:w-[830px] 2xl:h-[618px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] bg-linear-to-t from-[#0F1026] to-[#42389E] rounded-[12px] py-[46px] px-[51px]">
						<img
							src="/images/what-is-intellitoggle.png"
							alt="IntelliToggle Dashboard"
							class="w-full h-fulś "
							loading="lazy"
						>
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
/* Main Content Styles */
.text-content {
	max-width: 600px;
}

.main-title {
	font-size: 32px;
	font-weight: bold;
	color: #1a1c3d;
	line-height: 1.2;
}

.description {
	font-size: 18px;
	color: #5f5f60;
	line-height: 1.6;
}

/* Benefits Section */
.benefits-section {
	margin-top: 2rem;
}

.benefits-title {
	font-size: 24px;
	font-weight: bold;
	color: #1a1c3d;
	margin-bottom: 1rem;
}

.benefits-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.benefit-item {
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	font-size: 16px;
	color: #5f5f60;
	line-height: 1.5;
}

.benefit-icon {
	background: linear-gradient(135deg, #42389e, #0f1026);
	color: white;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	font-weight: bold;
	margin-right: 12px;
	flex-shrink: 0;
}

/* Dashboard Image */
.dashboard-image-container {
	position: relative;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.dashboard-image {
	width: 100%;
	height: auto;
	display: block;
}

/* Mobile Styles */
.mobile-layout {
	padding: 0 16px;
}

.mobile-main-title {
	font-size: 24px;
	font-weight: bold;
	color: #1a1c3d;
	line-height: 1.2;
}

.mobile-description {
	font-size: 16px;
	color: #5f5f60;
	line-height: 1.6;
}

.mobile-benefits-title {
	font-size: 20px;
	font-weight: bold;
	color: #1a1c3d;
}

.mobile-benefits-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.mobile-benefits-list .benefit-item {
	font-size: 14px;
	margin-bottom: 10px;
}

/* Tablet Styles */
@media (min-width: 768px) and (max-width: 1023px) {
	.text-content {
		max-width: 100%;
	}

	.main-title {
		font-size: 28px;
	}

	.description {
		font-size: 16px;
	}
}

/* Desktop Styles */
@media (min-width: 1024px) {
	.dashboard-image-container {
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
	}
}

/* Hover Effects */
.dashboard-image-container:hover {
	transform: translateY(-4px);
	transition: transform 0.3s ease;
}

/* Responsive Image Sizing */
@media (max-width: 640px) {
	.dashboard-image-container {
		margin: 0 -16px;
		border-radius: 0;
	}
}

/* Benefits List Responsive */
@media (max-width: 640px) {
	.benefit-item {
		font-size: 14px;
	}

	.benefit-icon {
		width: 18px;
		height: 18px;
		font-size: 10px;
		margin-right: 10px;
	}
}
</style>
