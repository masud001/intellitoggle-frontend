<template>
	<div class="bg-white rounded-lg shadow-lg p-8">
		<h1 class="text-3xl font-bold text-gray-900 mb-8 font-satoshi text-center">
			Design System Overview
		</h1>

		<!-- Quick Stats -->
		<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
			<div class="text-center p-6 bg-blue-50 rounded-lg">
				<div class="text-2xl font-bold text-blue-600 font-satoshi">
					6
				</div>
				<div class="text-sm text-gray-600 font-sans">
					Typography Styles
				</div>
			</div>
			<div class="text-center p-6 bg-green-50 rounded-lg">
				<div class="text-2xl font-bold text-green-600 font-satoshi">
					24
				</div>
				<div class="text-sm text-gray-600 font-sans">
					Color Variants
				</div>
			</div>
			<div class="text-center p-6 bg-purple-50 rounded-lg">
				<div class="text-2xl font-bold text-purple-600 font-satoshi">
					12
				</div>
				<div class="text-sm text-gray-600 font-sans">
					Spacing Scales
				</div>
			</div>
			<div class="text-center p-6 bg-yellow-50 rounded-lg">
				<div class="text-2xl font-bold text-yellow-600 font-satoshi">
					6
				</div>
				<div class="text-sm text-gray-600 font-sans">
					Button Variants
				</div>
			</div>
		</div>

		<!-- Component Categories -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Typography Card -->
			<div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
						<svg
							class="w-5 h-5 text-blue-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 font-sans">
						Typography
					</h3>
				</div>
				<p class="text-gray-600 text-sm font-sans mb-4">
					Complete typography system with font families, sizes, weights, and line heights.
				</p>
				<div class="space-y-2">
					<div class="text-xs font-mono text-gray-500">
						font-satoshi
					</div>
					<div class="text-xs font-mono text-gray-500">
						font-sans
					</div>
					<div class="text-xs font-mono text-gray-500">
						6 text sizes
					</div>
				</div>
			</div>

			<!-- Colors Card -->
			<div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
						<svg
							class="w-5 h-5 text-green-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 font-sans">
						Colors
					</h3>
				</div>
				<p class="text-gray-600 text-sm font-sans mb-4">
					Comprehensive color palette with semantic naming and accessibility compliance.
				</p>
				<div class="flex space-x-2">
					<div class="w-6 h-6 bg-blue-500 rounded" />
					<div class="w-6 h-6 bg-green-500 rounded" />
					<div class="w-6 h-6 bg-red-500 rounded" />
					<div class="w-6 h-6 bg-yellow-500 rounded" />
					<div class="w-6 h-6 bg-purple-500 rounded" />
				</div>
			</div>

			<!-- Spacing Card -->
			<div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
						<svg
							class="w-5 h-5 text-purple-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 font-sans">
						Spacing
					</h3>
				</div>
				<p class="text-gray-600 text-sm font-sans mb-4">
					Consistent spacing system with responsive breakpoints and custom container widths.
				</p>
				<div class="space-y-1">
					<div class="text-xs font-mono text-gray-500">
						container-custom
					</div>
					<div class="text-xs font-mono text-gray-500">
						9 breakpoints
					</div>
					<div class="text-xs font-mono text-gray-500">
						Responsive spacing
					</div>
				</div>
			</div>

			<!-- Buttons Card -->
			<div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
						<svg
							class="w-5 h-5 text-yellow-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 font-sans">
						Buttons
					</h3>
				</div>
				<p class="text-gray-600 text-sm font-sans mb-4">
					Reusable button component with variants, sizes, states, and icon support.
				</p>
				<div class="flex space-x-2">
					<button class="px-3 py-1 bg-blue-600 text-white text-xs rounded">
						Primary
					</button>
					<button class="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded">
						Outline
					</button>
				</div>
			</div>

			<!-- Layout Card -->
			<div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
						<svg
							class="w-5 h-5 text-indigo-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 font-sans">
						Layout
					</h3>
				</div>
				<p class="text-gray-600 text-sm font-sans mb-4">
					Responsive layout system with custom containers and breakpoint management.
				</p>
				<div class="space-y-1">
					<div class="text-xs font-mono text-gray-500">
						Nuxt Layouts
					</div>
					<div class="text-xs font-mono text-gray-500">
						Header/Footer
					</div>
					<div class="text-xs font-mono text-gray-500">
						Responsive design
					</div>
				</div>
			</div>

			<!-- Icons Card -->
			<div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
						<svg
							class="w-5 h-5 text-pink-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 font-sans">
						Icons
					</h3>
				</div>
				<p class="text-gray-600 text-sm font-sans mb-4">
					SVG icon system with customizable colors and sizes for consistent UI.
				</p>
				<div class="flex space-x-2">
					<svg
						class="w-4 h-4 text-gray-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
					<svg
						class="w-4 h-4 text-gray-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
					<svg
						class="w-4 h-4 text-gray-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</div>
			</div>
		</div>

		<!-- Quick Actions -->
		<div class="mt-12 text-center">
			<h3 class="text-lg font-semibold text-gray-900 mb-4 font-sans">
				Quick Actions
			</h3>
			<div class="flex flex-wrap justify-center gap-4">
				<button
					class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-sans"
					@click="$emit('navigate', 'typography')"
				>
					View Typography
				</button>
				<button
					class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-sans"
					@click="$emit('navigate', 'colors')"
				>
					View Colors
				</button>
				<button
					class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-sans"
					@click="$emit('navigate', 'spacing')"
				>
					View Spacing
				</button>
				<button
					class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-sans"
					@click="$emit('navigate', 'buttons')"
				>
					View Buttons
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// Define emits
defineEmits<{
	navigate: [tab: string];
}>();
</script>
