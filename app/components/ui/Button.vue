<template>
	<component
		:is="tag"
		:type="tag === 'button' ? type : undefined"
		:href="tag === 'a' ? href : undefined"
		:to="tag === 'nuxt-link' ? to : undefined"
		:disabled="disabled || loading"
		:class="buttonClasses"
		:data-variant="variant"
		v-bind="$attrs"
		@click="handleClick"
	>
		<!-- Loading Spinner -->
		<div
			v-if="loading"
			:class="loadingClasses"
		>
			<svg
				class="animate-spin"
				:class="iconClasses"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				/>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		</div>

		<!-- Left Icon -->
		<div
			v-if="leftIcon && !loading"
			:class="leftIconClasses"
		>
			<component
				:is="'span'"
				v-if="typeof leftIcon === 'string'"
				:class="iconClasses"
			>
				{{ leftIcon }}
			</component>
			<component
				:is="leftIcon"
				v-else
				:class="iconClasses"
			/>
		</div>

		<!-- Button Content -->
		<span
			v-if="!loading"
		>
			<span
				class="button-text"
				:class="textClasses"
			>
				<slot />
			</span>
		</span>
		<span
			v-else
		>
			<span
				class="button-text"
				:class="textClasses"
			>
				{{ loadingText || 'Loading...' }}
			</span>
		</span>

		<!-- Right Icon -->
		<div
			v-if="rightIcon && !loading"
			:class="rightIconClasses"
		>
			<component
				:is="'span'"
				v-if="typeof rightIcon === 'string'"
				:class="iconClasses"
			>
				{{ rightIcon }}
			</component>
			<component
				:is="rightIcon"
				v-else
				:class="iconClasses"
			/>
		</div>
	</component>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Define component props
interface Props {
	// Button variants based on the homepage design
	variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";

	// Button sizes
	size?: "xs" | "sm" | "md" | "lg" | "xl";

	// Button states
	loading?: boolean;
	disabled?: boolean;

	// Button content
	loadingText?: string;

	// Icons (can be string for emojis or component)
	leftIcon?: string | any;
	rightIcon?: string | any;

	// HTML attributes
	type?: "button" | "submit" | "reset";
	tag?: "button" | "a" | "nuxt-link";
	href?: string;
	to?: string;

	// Custom classes
	class?: string;
	buttonClass?: string;
	textClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
	variant: "primary",
	size: "md",
	loading: false,
	disabled: false,
	loadingText: "",
	leftIcon: null,
	rightIcon: null,
	type: "button",
	tag: "button",
	href: "",
	to: "",
	class: "",
	buttonClass: "",
	textClass: "",
});

// Define emits
const emit = defineEmits<{
	click: [event: MouseEvent];
}>();

// Handle click events
const handleClick = (event: MouseEvent) => {
	if (props.disabled || props.loading) {
		event.preventDefault();
		return;
	}
	emit("click", event);
};

// Base button classes
const baseClasses = `
inline-flex items-center justify-center font-dm-sans transition-all duration-200 focus:outline-none focus:ring focus:ring-offset focus:ring-[#f9a71e] focus:ring-offset-[#f9a71e] disabled:opacity-50 disabled:cursor-not-allowed`;

// Variant classes based on homepage design
const variantClasses = {
	primary: "bg-[#f9a71e] cursor-pointer",
	secondary: "bg-white text-purple-900 border border-purple-900 hover:bg-purple-50 focus:ring-[#f9a71e]",
	outline: "bg-transparent cursor-pointer text-[#f9a71e] border border-[#f9a71e] hover:bg-[#f9a71e] hover:text-white focus:ring-[#f9a71e]",
	ghost: "bg-transparent text-purple-900 hover:bg-purple-50 focus:ring-[#f9a71e]",
	danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md",
	success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-md",
};

// Size classes
const sizeClasses = {
	xs: "px-3 py-1.5 text-xs rounded-md",
	sm: "px-4 py-2 text-sm rounded-lg",
	md: "px-6 py-3 text-base rounded-lg",
	lg: "px-8 py-4 text-lg rounded-xl",
	xl: "px-10 py-5 text-xl rounded-xl",
};

// Computed classes
const buttonClasses = computed(() => {
	const classes = [
		baseClasses,
		variantClasses[props.variant],
		sizeClasses[props.size],
	];

	if (props.class) {
		classes.push(props.class);
	}

	// buttonClass has highest precedence
	if (props.buttonClass) {
		classes.push(props.buttonClass);
	}

	return classes.filter(Boolean).join(" ");
});

// Computed text classes
const textClasses = computed(() => {
	const classes = [
		"flex items-center justify-center",
	];

	// Add gradient-text for primary variant by default
	if (props.variant === "primary") {
		classes.push("gradient-text");
	}

	// textClass has highest precedence
	if (props.textClass) {
		classes.push(props.textClass);
	}

	return classes.filter(Boolean).join(" ");
});

// Computed icon classes
const iconClasses = computed(() => {
	const sizeMap = {
		xs: "h-3 w-3",
		sm: "h-4 w-4",
		md: "h-5 w-5",
		lg: "h-6 w-6",
		xl: "h-7 w-7",
	};
	return sizeMap[props.size];
});

// Computed loading classes
const loadingClasses = computed(() => {
	return "mr-2";
});

// Computed left icon classes
const leftIconClasses = computed(() => {
	return "mr-2";
});

// Computed right icon classes
const rightIconClasses = computed(() => {
	return "ml-2";
});
</script>

<style scoped>
/* Gradient text for all button text */
.gradient-text {
  background-image: linear-gradient(to bottom, #42389e, #0f1026);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* Fallback for browsers that don't support background-clip */
}

/* Override gradient for specific variants that need different text colors */
button[data-variant="danger"] .gradient-text,
button[data-variant="success"] .gradient-text {
  background-image: none;
  -webkit-background-clip: initial;
  background-clip: initial;
  -webkit-text-fill-color: white;
  color: white;
}

/* For outline buttons on hover when background changes */
button[data-variant="outline"]:hover .gradient-text {
  background-image: none;
  -webkit-background-clip: initial;
  background-clip: initial;
  -webkit-text-fill-color: white;
  color: white;
}

/* Smooth transitions for all interactive elements */
button, a {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Focus ring improvements */
button:focus-visible, a:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px currentColor;
}

/* Hover effects for better UX */
button:hover:not(:disabled), a:hover:not(:disabled) {
  transform: translateY(-1px);
}

button:active:not(:disabled), a:active:not(:disabled) {
  transform: translateY(0);
}
</style>
