<template>
	<div class="">
		<h4 class="capitalize font-sans text-[#5f5f60] text-[14px] font-normal lg:text-[16px] lg:font-normal xl:text-[18px] xl:font-normal mb-[19px] lg:mb-[17px] xl:mb-[24px]">
			{{ title }}
		</h4>
		<ul class="space-y-[16px] lg:space-y-[17px] xl:space-y-[19px]">
			<slot />
		</ul>
	</div>
</template>

<script setup lang="ts">
interface Props {
	title: string;
}

defineProps<Props>();
</script>
