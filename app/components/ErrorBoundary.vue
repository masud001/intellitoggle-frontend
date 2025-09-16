<template>
	<div
		v-if="hasError"
		class="min-h-screen flex items-center justify-center bg-gray-50"
	>
		<div class="text-center">
			<h1 class="text-2xl font-bold text-gray-900 mb-4">
				Something went wrong
			</h1>
			<p class="text-gray-600 mb-4">
				The page structure encountered an error. Please refresh the page.
			</p>
			<button
				class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				@click="refreshPage"
			>
				Refresh Page
			</button>
		</div>
	</div>
	<div v-else>
		<slot />
	</div>
</template>

<script setup>
import { ref, onErrorCaptured } from "vue";

const hasError = ref(false);

onErrorCaptured((error) => {
	console.error("Error caught by boundary:", error);
	hasError.value = true;
	return false;
});

const refreshPage = () => {
	window.location.reload();
};
</script>
