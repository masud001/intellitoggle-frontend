<template>
	<div class="min-h-screen bg-gray-50">
		<!-- Minimal header for specific pages -->
		<header class="bg-white shadow-sm border-b">
			<div class="container-custom">
				<div class="flex justify-between items-center h-16">
					<NuxtLink
						to="/"
						class="text-xl font-bold text-gray-900 font-satoshi hover:text-blue-600 transition-colors"
					>
						IntelliToggle
					</NuxtLink>
					<NuxtLink
						to="/"
						class="text-gray-600 hover:text-gray-900 font-medium font-sans transition-colors"
					>
						← Back to Home
					</NuxtLink>
				</div>
			</div>
		</header>

		<!-- Main content -->
		<main>
			<slot />
		</main>

		<!-- Minimal footer -->
		<footer class="bg-gray-100 py-8">
			<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<p class="text-gray-600 font-sans">
					© 2024 IntelliToggle. All rights reserved.
				</p>
			</div>
		</footer>
	</div>
</template>

<script setup>
// Minimal layout for specific pages that need less navigation
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
