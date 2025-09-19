<template>
	<ErrorBoundary>
		<!-- Full page loader -->
		<Loader />

		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</ErrorBoundary>
</template>

<script setup>
// Import layout components
import { ErrorBoundary, Loader } from '~/components/layout';
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
