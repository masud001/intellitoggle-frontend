<template>
	<section class="what-is-intellitoggle-section py-16 lg:py-24 xl:py-32 bg-white">
		<div class="container-custom">
			<!-- Section Title -->
			<div class="text-center mb-[16px] md:mb-[48px]">
				<SectionTitle
					variant="gradient"
					size="3xl"
					align="center"
					class="text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.2]"
				>
					What Is IntelliToggle
				</SectionTitle>
			</div>

			<!-- Desktop Layout (Text left, Image right) -->
			<div class="hidden lg:block">
				<div class="grid grid-cols-2 gap-12 xl:gap-16 items-center">
					<!-- Text Content -->
					<div class="text-content">
						<h2 class="main-title mb-6">
							Your AI Dart App's Control Panel For Feature Releases
						</h2>
						<p class="description mb-8">
							IntelliToggle is a 'Dart-Powered' feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
						</p>

						<!-- Benefits Section -->
						<div class="benefits-section">
							<h3 class="benefits-title mb-4">
								Benefits
							</h3>
							<ul class="benefits-list">
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Toggle new features without app updates
								</li>
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Roll out to specific users or regions
								</li>
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Instantly rollback when needed
								</li>
							</ul>
						</div>
					</div>

					<!-- Dashboard Image -->
					<div class="dashboard-image-container">
						<img
							src="/images/what-is-intellitoggle.png"
							alt="IntelliToggle Dashboard"
							class="dashboard-image"
							loading="lazy"
						>
					</div>
				</div>
			</div>

			<!-- Tablet Layout (Centered) -->
			<div class="hidden md:block lg:hidden">
				<div class="max-w-4xl mx-auto">
					<!-- Text Content -->
					<div class="text-content text-center mb-8">
						<h2 class="main-title mb-6">
							Your AI Dart App's Control Panel For Feature Releases
						</h2>
						<p class="description mb-8">
							IntelliToggle is a 'Dart-Powered' feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
						</p>

						<!-- Benefits Section -->
						<div class="benefits-section">
							<h3 class="benefits-title mb-4">
								Benefits
							</h3>
							<ul class="benefits-list">
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Toggle new features without app updates
								</li>
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Roll out to specific users or regions
								</li>
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Instantly rollback when needed
								</li>
							</ul>
						</div>
					</div>

					<!-- Dashboard Image -->
					<div class="dashboard-image-container">
						<img
							src="/images/what-is-intellitoggle.png"
							alt="IntelliToggle Dashboard"
							class="dashboard-image"
							loading="lazy"
						>
					</div>
				</div>
			</div>

			<!-- Mobile Layout (Stacked) -->
			<div class="md:hidden">
				<div class="mobile-layout">
					<!-- Text Content -->
					<div class="text-content mb-8">
						<h2 class="mobile-main-title mb-4">
							Your AI Dart App's Control Panel For Feature Releases
						</h2>
						<p class="mobile-description mb-6">
							IntelliToggle is a 'Dart-Powered' feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
						</p>

						<!-- Benefits Section -->
						<div class="benefits-section">
							<h3 class="mobile-benefits-title mb-3">
								Benefits
							</h3>
							<ul class="mobile-benefits-list">
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Toggle new features without app updates
								</li>
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Roll out to specific users or regions
								</li>
								<li class="benefit-item">
									<span class="benefit-icon">✓</span>
									Instantly rollback when needed
								</li>
							</ul>
						</div>
					</div>

					<!-- Dashboard Image -->
					<div class="dashboard-image-container">
						<img
							src="/images/what-is-intellitoggle.png"
							alt="IntelliToggle Dashboard"
							class="dashboard-image"
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
