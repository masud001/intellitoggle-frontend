<template>
	<div class="p-4">
		<h2 class="text-lg font-bold mb-4">
			Breakpoint Test
		</h2>
		<div class="space-y-2">
			<div class="bg-red-500 text-white p-2 hidden xs:block">
				XS: 320px+
			</div>
			<div class="bg-orange-500 text-white p-2 hidden sm:block">
				SM: 375px+
			</div>
			<div class="bg-yellow-500 text-white p-2 hidden mobile:block">
				Mobile: 393px+
			</div>
			<div class="bg-green-500 text-white p-2 hidden md:block">
				MD: 768px+
			</div>
			<div class="bg-blue-500 text-white p-2 hidden lg:block">
				LG: 1024px+
			</div>
			<div class="bg-purple-500 text-white p-2 hidden xl:block">
				XL: 1280px+
			</div>
			<div class="bg-pink-500 text-white p-2 hidden 2xl:block">
				2XL: 1536px+
			</div>
			<div class="bg-indigo-500 text-white p-2 hidden tablet:block">
				Tablet: 768px+
			</div>
			<div class="bg-teal-500 text-white p-2 hidden 3xl:block">
				3XL: 1440px+
			</div>
			<div class="bg-gray-500 text-white p-2 hidden 4xl:block">
				4XL: 1920px+
			</div>
		</div>
	</div>
</template>

<script setup>
// Test component to verify custom breakpoints work
</script>
