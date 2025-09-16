<template>
	<li class="leading-none">
		<a
			:href="href"
			:target="target"
			:rel="rel"
			class="font-sans font-semibold text-[#1b1d22] text-[14px] lg:text-[16px] xl:text-[18px] hover:text-[#42389e] transition-colors duration-200"
		>
			<slot>{{ text }}</slot>
		</a>
	</li>
</template>

<script setup lang="ts">
interface Props {
	href?: string;
	text?: string;
	target?: string;
	rel?: string;
}

withDefaults(defineProps<Props>(), {
	href: "#",
	text: "",
	target: "_self",
	rel: "",
});
</script>
