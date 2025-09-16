<template>
	<div class="min-h-screen bg-gray-50">
		<!-- Navigation Tabs -->
		<div class="bg-white shadow-sm border-b sticky top-0 z-40">
			<div class="container-custom">
				<div class="flex space-x-8 overflow-x-auto">
					<button
						v-for="tab in tabs"
						:key="tab.id"
						:class="[
							'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
							activeTab === tab.id
								? 'border-blue-500 text-blue-600'
								: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
						]"
						@click="activeTab = tab.id"
					>
						{{ tab.name }}
					</button>
				</div>
			</div>
		</div>

		<!-- Tab Content -->
		<div class="py-8">
			<!-- Overview -->
			<div
				v-if="activeTab === 'overview'"
				class="container-custom"
			>
				<SystemDesignOverview @navigate="activeTab = $event" />
			</div>

			<!-- Typography Showcase -->
			<div
				v-if="activeTab === 'typography'"
				class="container-custom"
			>
				<TypographyShowcase />
			</div>

			<!-- Colors Showcase -->
			<div
				v-if="activeTab === 'colors'"
				class="container-custom"
			>
				<ColorsShowcase />
			</div>

			<!-- Spacing Showcase -->
			<div
				v-if="activeTab === 'spacing'"
				class="container-custom"
			>
				<SpacingShowcase />
			</div>

			<!-- Buttons Showcase -->
			<div
				v-if="activeTab === 'buttons'"
				class="container-custom"
			>
				<ButtonShowcase />
			</div>

			<!-- Navigation Showcase -->
			<div
				v-if="activeTab === 'navigation'"
				class="container-custom"
			>
				<NavLinkShowcase />
			</div>

			<!-- Section Title Showcase -->
			<div
				v-if="activeTab === 'section-title'"
				class="container-custom"
			>
				<SectionTitleShowcase />
			</div>

			<!-- Trusted Partners Showcase -->
			<div
				v-if="activeTab === 'trusted-partners'"
				class="container-custom"
			>
				<TrustedPartnersShowcase />
			</div>

			<!-- Complete Theme Showcase -->
			<div
				v-if="activeTab === 'theme'"
				class="container-custom"
			>
				<ThemeShowcase />
			</div>

			<!-- Breakpoint Test -->
			<div
				v-if="activeTab === 'breakpoint-test'"
				class="container-custom"
			>
				<BreakpointTest />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SystemDesignOverview from "~/components/ui/SystemDesignOverview.vue";
import TypographyShowcase from "~/components/system-design/TypographyShowcase.vue";
import ColorsShowcase from "~/components/system-design/ColorsShowcase.vue";
import SpacingShowcase from "~/components/system-design/SpacingShowcase.vue";
import ButtonShowcase from "~/components/ui/ButtonShowcase.vue";
import NavLinkShowcase from "~/components/ui/NavLinkShowcase.vue";
import SectionTitleShowcase from "~/components/ui/SectionTitleShowcase.vue";
import TrustedPartnersShowcase from "~/components/ui/TrustedPartnersShowcase.vue";
import ThemeShowcase from "~/components/system-design/ThemeShowcase.vue";
import BreakpointTest from "~/components/BreakpointTest.vue";

// Set page meta
definePageMeta({
	title: "Design System Components",
});

// Tab management
const activeTab = ref("overview");

const tabs = [
	{ id: "overview", name: "Overview" },
	{ id: "typography", name: "Typography" },
	{ id: "colors", name: "Colors" },
	{ id: "spacing", name: "Spacing" },
	{ id: "buttons", name: "Buttons" },
	{ id: "navigation", name: "Navigation" },
	{ id: "section-title", name: "Section Title" },
	{ id: "trusted-partners", name: "Trusted Partners" },
	{ id: "theme", name: "Complete Theme" },
	{ id: "breakpoint-test", name: "Breakpoint Test" },
];
</script>
