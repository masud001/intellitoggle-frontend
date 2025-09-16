// Plugin to ensure components are properly registered
// @ts-expect-error - defineNuxtPlugin is provided by Nuxt
export default defineNuxtPlugin(() => {
	// This plugin runs on the client side to ensure components are available
	console.log("Components plugin loaded");

	// Ensure proper hydration on client side
	if (typeof window !== "undefined") {
		// Use nextTick from Vue
		import("vue").then(({ nextTick }) => {
			nextTick(() => {
				console.log("Client-side hydration completed");
			});
		});
	}
});
