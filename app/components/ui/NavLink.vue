<template>
	<NuxtLink
		:to="to"
		:class="linkClasses"
		@click="handleClick"
	>
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

// Debug component loading
onMounted(() => {
	console.log("NavLink component mounted successfully");
});

interface Props {
	to: string;
	active?: boolean;
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	active: false,
	class: "",
});

const emit = defineEmits<{
	click: [event: MouseEvent];
}>();

const handleClick = (event: MouseEvent) => {
	emit("click", event);
};

const linkClasses = computed(() => {
	return [
		// Base classes
		"font-dm-sans text-xl text-center text-white flex items-center justify-center transition-all duration-200 no-underline",
		// mobile classes
		"empty-now",
		// tablet classes 768 to 1024
		"md:text-[20px]",
		// Active state classes
		props.active ? "font-bold" : "font-light",
		// Hover classes
		"hover:opacity-80",
		props.active ? "hover:opacity-100" : "",
		// Custom classes
		props.class,
	].filter(Boolean).join(" ");
});
</script>
