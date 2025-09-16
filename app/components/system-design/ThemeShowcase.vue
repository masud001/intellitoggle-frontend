<template>
	<div class="min-h-screen bg-gray-50">
		<!-- Navigation -->
		<nav class="bg-white shadow-sm border-b">
			<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between h-16">
					<div class="flex items-center">
						<h1 class="text-xl font-bold text-gray-900 font-satoshi">
							Design System
						</h1>
					</div>
					<div class="flex items-center space-x-8">
						<button
							v-for="tab in tabs"
							:key="tab.id"
							:class="[
								'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
								activeTab === tab.id
									? 'bg-blue-100 text-blue-700 font-satoshi'
									: 'text-gray-500 hover:text-gray-700 font-sans',
							]"
							@click="activeTab = tab.id"
						>
							{{ tab.name }}
						</button>
					</div>
				</div>
			</div>
		</nav>

		<!-- Main Content -->
		<main class="max-w-6xl mx-auto">
			<!-- Typography Tab -->
			<div
				v-if="activeTab === 'typography'"
				class="py-8"
			>
				<TypographyShowcase />
			</div>

			<!-- Colors Tab -->
			<div
				v-if="activeTab === 'colors'"
				class="py-8"
			>
				<ColorsShowcase />
			</div>

			<!-- Spacing Tab -->
			<div
				v-if="activeTab === 'spacing'"
				class="py-8"
			>
				<SpacingShowcase />
			</div>

			<!-- Overview Tab -->
			<div
				v-if="activeTab === 'overview'"
				class="py-8"
			>
				<div class="px-4 sm:px-6 lg:px-8">
					<div class="max-w-4xl mx-auto">
						<h1 class="text-4xl font-bold text-gray-900 mb-8 font-satoshi">
							Design System Overview
						</h1>

						<!-- Introduction -->
						<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
							<h2 class="text-2xl font-semibold mb-4 text-gray-800 font-satoshi">
								Welcome to Our Design System
							</h2>
							<p class="text-lg text-gray-600 mb-4 font-sans leading-relaxed">
								This design system provides a comprehensive set of typography, colors, and spacing utilities
								to ensure consistency and efficiency across all our applications. Built with Tailwind CSS
								and custom font configurations, it offers both flexibility and maintainability.
							</p>
							<p class="text-base text-gray-600 font-sans leading-relaxed">
								Use the navigation above to explore each section of our design system, or browse the
								components below for quick reference.
							</p>
						</section>

						<!-- Quick Reference -->
						<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
							<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
								Quick Reference
							</h2>
							<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								<!-- Typography Card -->
								<div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
									<div class="flex items-center mb-3">
										<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
											<span class="text-blue-600 font-bold text-sm">T</span>
										</div>
										<h3 class="text-lg font-semibold text-gray-800 font-satoshi">
											Typography
										</h3>
									</div>
									<p class="text-sm text-gray-600 mb-4 font-sans">
										Font families, weights, sizes, and text styles for consistent typography across the application.
									</p>
									<div class="space-y-1">
										<div class="text-xs text-gray-500 font-mono">
											• 5 Font Families
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• 6 Font Weights
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• 10 Text Sizes
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• 6 Line Heights
										</div>
									</div>
								</div>

								<!-- Colors Card -->
								<div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
									<div class="flex items-center mb-3">
										<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
											<span class="text-green-600 font-bold text-sm">C</span>
										</div>
										<h3 class="text-lg font-semibold text-gray-800 font-satoshi">
											Colors
										</h3>
									</div>
									<p class="text-sm text-gray-600 mb-4 font-sans">
										Comprehensive color palette with primary, secondary, status, and utility colors.
									</p>
									<div class="space-y-1">
										<div class="text-xs text-gray-500 font-mono">
											• 10 Primary Colors
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• 10 Gray Scale
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• 4 Status Colors
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• 6 Additional Palettes
										</div>
									</div>
								</div>

								<!-- Spacing Card -->
								<div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
									<div class="flex items-center mb-3">
										<div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
											<span class="text-purple-600 font-bold text-sm">S</span>
										</div>
										<h3 class="text-lg font-semibold text-gray-800 font-satoshi">
											Spacing
										</h3>
									</div>
									<p class="text-sm text-gray-600 mb-4 font-sans">
										Consistent spacing scale for margins, padding, gaps, and layout spacing.
									</p>
									<div class="space-y-1">
										<div class="text-xs text-gray-500 font-mono">
											• 16 Spacing Units
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• Padding Utilities
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• Margin Utilities
										</div>
										<div class="text-xs text-gray-500 font-mono">
											• Gap Utilities
										</div>
									</div>
								</div>
							</div>
						</section>

						<!-- Font Families Overview -->
						<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
							<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
								Font Families
							</h2>
							<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								<div class="space-y-2">
									<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
										Inter (Primary)
									</h3>
									<p class="text-2xl font-sans">
										The quick brown fox
									</p>
									<code class="text-sm font-mono text-gray-500">font-sans</code>
								</div>
								<div class="space-y-2">
									<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
										Satoshi (Premium)
									</h3>
									<p class="text-2xl font-satoshi">
										The quick brown fox
									</p>
									<code class="text-sm font-mono text-gray-500">font-satoshi</code>
								</div>
								<div class="space-y-2">
									<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
										DM Sans (Modern)
									</h3>
									<p class="text-2xl font-dm-sans">
										The quick brown fox
									</p>
									<code class="text-sm font-mono text-gray-500">font-dm-sans</code>
								</div>
								<div class="space-y-2">
									<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
										Merriweather Sans
									</h3>
									<p class="text-2xl font-merriweather-sans">
										The quick brown fox
									</p>
									<code class="text-sm font-mono text-gray-500">font-merriweather-sans</code>
								</div>
								<div class="space-y-2">
									<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
										Segoe UI This
									</h3>
									<p class="text-2xl font-segoe-ui-this">
										The quick brown fox
									</p>
									<code class="text-sm font-mono text-gray-500">font-segoe-ui-this</code>
								</div>
							</div>
						</section>

						<!-- Color Palette Overview -->
						<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
							<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
								Color Palette
							</h2>
							<div class="space-y-6">
								<div>
									<h3 class="text-lg font-medium text-gray-700 mb-3 font-dm-sans">
										Primary Colors
									</h3>
									<div class="flex space-x-2">
										<div class="w-12 h-12 bg-blue-500 rounded" />
										<div class="w-12 h-12 bg-blue-600 rounded" />
										<div class="w-12 h-12 bg-blue-700 rounded" />
										<div class="w-12 h-12 bg-blue-800 rounded" />
										<div class="w-12 h-12 bg-blue-900 rounded" />
									</div>
								</div>
								<div>
									<h3 class="text-lg font-medium text-gray-700 mb-3 font-dm-sans">
										Status Colors
									</h3>
									<div class="flex space-x-2">
										<div class="w-12 h-12 bg-green-500 rounded" />
										<div class="w-12 h-12 bg-yellow-500 rounded" />
										<div class="w-12 h-12 bg-red-500 rounded" />
										<div class="w-12 h-12 bg-blue-500 rounded" />
									</div>
								</div>
								<div>
									<h3 class="text-lg font-medium text-gray-700 mb-3 font-dm-sans">
										Gray Scale
									</h3>
									<div class="flex space-x-2">
										<div class="w-12 h-12 bg-gray-200 rounded" />
										<div class="w-12 h-12 bg-gray-400 rounded" />
										<div class="w-12 h-12 bg-gray-600 rounded" />
										<div class="w-12 h-12 bg-gray-800 rounded" />
									</div>
								</div>
							</div>
						</section>

						<!-- Usage Guidelines -->
						<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
							<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
								Usage Guidelines
							</h2>
							<div class="space-y-6">
								<div>
									<h3 class="text-lg font-medium text-gray-700 mb-3 font-dm-sans">
										Typography Guidelines
									</h3>
									<ul class="space-y-2 text-sm text-gray-600 font-sans">
										<li>• Use Satoshi for headings and premium content</li>
										<li>• Use Inter for body text and general content</li>
										<li>• Use DM Sans for modern, clean interfaces</li>
										<li>• Maintain consistent line heights for readability</li>
									</ul>
								</div>
								<div>
									<h3 class="text-lg font-medium text-gray-700 mb-3 font-dm-sans">
										Color Guidelines
									</h3>
									<ul class="space-y-2 text-sm text-gray-600 font-sans">
										<li>• Use primary blue for main actions and branding</li>
										<li>• Use gray scale for text hierarchy and backgrounds</li>
										<li>• Use status colors consistently for feedback</li>
										<li>• Ensure sufficient contrast for accessibility</li>
									</ul>
								</div>
								<div>
									<h3 class="text-lg font-medium text-gray-700 mb-3 font-dm-sans">
										Spacing Guidelines
									</h3>
									<ul class="space-y-2 text-sm text-gray-600 font-sans">
										<li>• Use consistent spacing scale for visual rhythm</li>
										<li>• Apply responsive spacing for different screen sizes</li>
										<li>• Use padding for internal spacing, margins for external</li>
										<li>• Maintain consistent gaps in grid layouts</li>
									</ul>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import { ref } from "vue";
import TypographyShowcase from "./TypographyShowcase.vue";
import ColorsShowcase from "./ColorsShowcase.vue";
import SpacingShowcase from "./SpacingShowcase.vue";

const activeTab = ref("overview");

const tabs = [
	{ id: "overview", name: "Overview" },
	{ id: "typography", name: "Typography" },
	{ id: "colors", name: "Colors" },
	{ id: "spacing", name: "Spacing" },
];
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
