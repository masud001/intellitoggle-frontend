<template>
	<h2
		:class="titleClasses"
		:data-variant="variant"
		:data-size="size"
	>
		<span
			class="section-title-text"
			:class="textClasses"
		>
			<slot />
		</span>
	</h2>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Define component props
interface Props {
	// Title variants
	variant?: "gradient" | "solid" | "outline";

	// Title sizes
	size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

	// Text alignment
	align?: "left" | "center" | "right";

	// Custom classes
	class?: string;
	titleClass?: string;
	textClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
	variant: "gradient",
	size: "2xl",
	align: "center",
	class: "",
	titleClass: "",
	textClass: "",
});

// Base title classes
const baseClasses = "font-satoshi font-bold transition-all duration-200";

// Variant classes
const variantClasses = {
	gradient: "gradient-text",
	solid: "text-gray-900",
	outline: "text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600",
};

// Size classes
const sizeClasses = {
	"sm": "text-lg leading-tight",
	"md": "text-xl leading-tight",
	"lg": "text-2xl leading-tight",
	"xl": "text-3xl leading-tight",
	"2xl": "text-4xl leading-tight",
	"3xl": "text-5xl leading-tight",
	"4xl": "text-6xl leading-tight",
};

// Alignment classes
const alignClasses = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
};

// Computed title classes
const titleClasses = computed(() => {
	const classes = [
		baseClasses,
		variantClasses[props.variant],
		sizeClasses[props.size],
		alignClasses[props.align],
	];

	if (props.class) {
		classes.push(props.class);
	}

	// titleClass has highest precedence
	if (props.titleClass) {
		classes.push(props.titleClass);
	}

	return classes.filter(Boolean).join(" ");
});

// Computed text classes
const textClasses = computed(() => {
	const classes = ["block"];

	// textClass has highest precedence
	if (props.textClass) {
		classes.push(props.textClass);
	}

	return classes.filter(Boolean).join(" ");
});
</script>

<style scoped>
/* Gradient text for section titles */
.gradient-text {
	background-image: linear-gradient(to bottom, #42389e, #0f1026);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent; /* Fallback for browsers that don't support background-clip */
}

/* Override gradient for specific variants that need different text colors */
h2[data-variant="solid"] .section-title-text {
	background-image: none;
	-webkit-background-clip: initial;
	background-clip: initial;
	-webkit-text-fill-color: inherit;
	color: inherit;
}

/* Smooth transitions for all interactive elements */
h2 {
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects for better UX */
h2:hover {
	transform: translateY(-1px);
}

/* Focus ring improvements */
h2:focus-visible {
	outline: 2px solid transparent;
	outline-offset: 2px;
	box-shadow: 0 0 0 2px currentColor;
}
</style>
