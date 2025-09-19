<template>
	<div class="relative">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup>
// Import layout components
import { Header, Footer } from '~/components/layout';
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
