<template>
	<div class="p-8 bg-gray-50 min-h-screen">
		<div class="container-custom">
			<h1 class="text-3xl font-bold text-gray-900 mb-8 font-satoshi">
				Section Title Component Showcase
			</h1>

			<!-- Basic Variants -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Basic Variants
				</h2>
				<p class="text-gray-600 mb-6">
					Different title styles for various use cases across the application
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Gradient (Default)
						</h4>
						<SectionTitle>
							Default Gradient Title
						</SectionTitle>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Solid Color
						</h4>
						<SectionTitle variant="solid">
							Solid Color Title
						</SectionTitle>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Outline Style
						</h4>
						<SectionTitle variant="outline">
							Outline Style Title
						</SectionTitle>
					</div>
				</div>
			</section>

			<!-- Title Sizes -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Title Sizes
				</h2>
				<p class="text-gray-600 mb-6">
					Different sizes for various use cases across the application
				</p>
				<div class="space-y-4">
					<div class="flex flex-wrap items-center gap-4">
						<SectionTitle size="sm">
							Small Title
						</SectionTitle>
						<SectionTitle size="md">
							Medium Title
						</SectionTitle>
						<SectionTitle size="lg">
							Large Title
						</SectionTitle>
						<SectionTitle size="xl">
							Extra Large Title
						</SectionTitle>
						<SectionTitle size="2xl">
							Double Extra Large
						</SectionTitle>
					</div>
					<div class="flex flex-wrap items-center gap-4">
						<SectionTitle size="3xl">
							Triple Extra Large
						</SectionTitle>
						<SectionTitle size="4xl">
							Quadruple Extra Large
						</SectionTitle>
					</div>
				</div>
			</section>

			<!-- Alignment Options -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Alignment Options
				</h2>
				<p class="text-gray-600 mb-6">
					Different text alignment options for various layouts
				</p>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Left Aligned
						</h4>
						<SectionTitle align="left">
							Left Aligned Title
						</SectionTitle>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Center Aligned (Default)
						</h4>
						<SectionTitle align="center">
							Center Aligned Title
						</SectionTitle>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Right Aligned
						</h4>
						<SectionTitle align="right">
							Right Aligned Title
						</SectionTitle>
					</div>
				</div>
			</section>

			<!-- Custom Styling -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Custom Styling
				</h2>
				<p class="text-gray-600 mb-6">
					Titles with custom classes for specific use cases
				</p>
				<div class="space-y-4">
					<div class="p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600 mb-3">
							Custom Margin
						</h4>
						<SectionTitle class="mb-8">
							Title with Custom Margin
						</SectionTitle>
					</div>
					<div class="p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600 mb-3">
							Custom Color
						</h4>
						<SectionTitle title-class="text-red-500">
							Title with Custom Color
						</SectionTitle>
					</div>
					<div class="p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600 mb-3">
							Custom Text Transform
						</h4>
						<SectionTitle text-class="uppercase tracking-wider">
							Title with Custom Text Transform
						</SectionTitle>
					</div>
					<div class="p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600 mb-3">
							Fully Customized
						</h4>
						<SectionTitle
							class="mb-4"
							title-class="drop-shadow-lg"
							text-class="italic"
						>
							Fully Customized Title
						</SectionTitle>
					</div>
				</div>
			</section>

			<!-- Real-world Examples -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Real-world Examples
				</h2>
				<p class="text-gray-600 mb-6">
					Examples based on the actual IntelliToggle application
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Hero Section
						</h4>
						<SectionTitle
							size="4xl"
							align="center"
							class="mb-6"
						>
							The Future of Development
						</SectionTitle>
					</div>
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Section Heading
						</h4>
						<SectionTitle
							size="2xl"
							align="left"
							class="mb-4"
						>
							Why Choose IntelliToggle?
						</SectionTitle>
					</div>
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Card Title
						</h4>
						<SectionTitle
							size="lg"
							align="left"
							class="mb-2"
						>
							Feature Highlights
						</SectionTitle>
						<p class="text-gray-600">
							This is a card with a gradient title.
						</p>
					</div>
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Page Title
						</h4>
						<SectionTitle
							size="3xl"
							align="center"
							class="mb-4"
						>
							Get Started Today
						</SectionTitle>
					</div>
				</div>
			</section>

			<!-- Code Examples -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Usage Examples
				</h2>
				<div class="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
					<pre><code>&lt;!-- Basic Usage --&gt;
&lt;SectionTitle&gt;Your Title Here&lt;/SectionTitle&gt;

&lt;!-- With Variants --&gt;
&lt;SectionTitle variant="gradient"&gt;Gradient Title&lt;/SectionTitle&gt;
&lt;SectionTitle variant="solid"&gt;Solid Title&lt;/SectionTitle&gt;
&lt;SectionTitle variant="outline"&gt;Outline Title&lt;/SectionTitle&gt;

&lt;!-- With Sizes --&gt;
&lt;SectionTitle size="sm"&gt;Small Title&lt;/SectionTitle&gt;
&lt;SectionTitle size="lg"&gt;Large Title&lt;/SectionTitle&gt;
&lt;SectionTitle size="4xl"&gt;Huge Title&lt;/SectionTitle&gt;

&lt;!-- With Alignment --&gt;
&lt;SectionTitle align="left"&gt;Left Aligned&lt;/SectionTitle&gt;
&lt;SectionTitle align="center"&gt;Center Aligned&lt;/SectionTitle&gt;
&lt;SectionTitle align="right"&gt;Right Aligned&lt;/SectionTitle&gt;

&lt;!-- With Custom Classes --&gt;
&lt;SectionTitle
  class="mb-8"
  title-class="text-red-500"
  text-class="uppercase"
&gt;
  Custom Styled Title
&lt;/SectionTitle&gt;</code></pre>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
import SectionTitle from "./SectionTitle.vue";
</script>
