<template>
	<div class="p-8 bg-gray-50 min-h-screen">
		<div class="container-custom">
			<h1 class="text-3xl font-bold text-gray-900 mb-8 font-satoshi">
				Button Component Showcase
			</h1>

			<!-- Primary Call-to-Action Buttons (Orange) -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Primary Call-to-Action Buttons
				</h2>
				<p class="text-gray-600 mb-6">
					Orange buttons for main actions like "Start Sandbox", "Get Access", "Learn More"
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Default Primary
						</h4>
						<Button variant="primary">
							Start Sandbox
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							With Icon
						</h4>
						<Button
							variant="primary"
							left-icon="🚀"
						>
							Get Access
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Loading State
						</h4>
						<Button
							variant="primary"
							loading
						>
							Processing...
						</Button>
					</div>
				</div>
			</section>

			<!-- Secondary/Outline Buttons (White with Purple Border) -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Secondary Buttons
				</h2>
				<p class="text-gray-600 mb-6">
					White buttons with purple borders for secondary actions like "Join AI Early Access"
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Secondary
						</h4>
						<Button variant="secondary">
							Join AI Early Access
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Outline
						</h4>
						<Button variant="outline">
							Learn More
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Ghost
						</h4>
						<Button variant="ghost">
							View Details
						</Button>
					</div>
				</div>
			</section>

			<!-- All Variants Section -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					All Variants
				</h2>
				<div class="flex flex-wrap gap-4">
					<Button variant="primary">
						Primary
					</Button>
					<Button variant="secondary">
						Secondary
					</Button>
					<Button variant="outline">
						Outline
					</Button>
					<Button variant="ghost">
						Ghost
					</Button>
					<Button variant="danger">
						Danger
					</Button>
					<Button variant="success">
						Success
					</Button>
				</div>
			</section>

			<!-- Button Sizes -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Button Sizes
				</h2>
				<p class="text-gray-600 mb-6">
					Different sizes for various use cases across the application
				</p>
				<div class="space-y-4">
					<div class="flex flex-wrap items-center gap-4">
						<Button
							size="xs"
							variant="primary"
						>
							XS Button
						</Button>
						<Button
							size="sm"
							variant="primary"
						>
							Small Button
						</Button>
						<Button
							size="md"
							variant="primary"
						>
							Medium Button
						</Button>
						<Button
							size="lg"
							variant="primary"
						>
							Large Button
						</Button>
						<Button
							size="xl"
							variant="primary"
						>
							XL Button
						</Button>
					</div>
					<div class="flex flex-wrap items-center gap-4">
						<Button
							size="xs"
							variant="secondary"
						>
							XS Button
						</Button>
						<Button
							size="sm"
							variant="secondary"
						>
							Small Button
						</Button>
						<Button
							size="md"
							variant="secondary"
						>
							Medium Button
						</Button>
						<Button
							size="lg"
							variant="secondary"
						>
							Large Button
						</Button>
						<Button
							size="xl"
							variant="secondary"
						>
							XL Button
						</Button>
					</div>
				</div>
			</section>

			<!-- Button States -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Button States
				</h2>
				<p class="text-gray-600 mb-6">
					Different states for user interaction feedback
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Normal
						</h4>
						<Button variant="primary">
							Normal Button
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Loading
						</h4>
						<Button
							variant="primary"
							loading
						>
							Loading...
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Disabled
						</h4>
						<Button
							variant="primary"
							disabled
						>
							Disabled
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Custom Loading Text
						</h4>
						<Button
							variant="primary"
							loading
							loading-text="Processing..."
						>
							Button
						</Button>
					</div>
				</div>
			</section>

			<!-- With Icons Section -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Buttons with Icons
				</h2>
				<p class="text-gray-600 mb-6">
					Buttons with left, right, or both icons for better UX
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Left Icon
						</h4>
						<Button
							variant="primary"
							left-icon="🚀"
						>
							Start Sandbox
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Right Icon
						</h4>
						<Button
							variant="secondary"
							right-icon="→"
						>
							Learn More
						</Button>
					</div>
					<div class="space-y-3 p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600">
							Both Icons
						</h4>
						<Button
							variant="outline"
							left-icon="📧"
							right-icon="→"
						>
							Send Email
						</Button>
					</div>
				</div>
			</section>

			<!-- Interactive Examples -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Interactive Examples
				</h2>
				<p class="text-gray-600 mb-6">
					Interactive examples showing button functionality
				</p>
				<div class="flex flex-wrap gap-4">
					<Button
						:loading="isLoading"
						variant="primary"
						@click="handleAsyncAction"
					>
						{{ isLoading ? 'Processing...' : 'Async Action' }}
					</Button>

					<Button
						:disabled="count >= 5"
						variant="outline"
						@click="incrementCount"
					>
						Count: {{ count }}
					</Button>

					<Button
						:variant="isDark ? 'secondary' : 'ghost'"
						@click="toggleTheme"
					>
						{{ isDark ? 'Light Mode' : 'Dark Mode' }}
					</Button>
				</div>
			</section>

			<!-- Real-world Examples -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Real-world Examples
				</h2>
				<p class="text-gray-600 mb-6">
					Examples based on the actual IntelliToggle homepage
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Header Actions
						</h4>
						<div class="space-y-3">
							<Button
								variant="primary"
								size="md"
							>
								Start Sandbox
							</Button>
							<Button
								variant="secondary"
								size="md"
							>
								Join AI Early Access
							</Button>
						</div>
					</div>
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Pricing Cards
						</h4>
						<div class="space-y-3">
							<Button
								variant="primary"
								size="lg"
								class="w-full"
							>
								Get Started
							</Button>
							<Button
								variant="outline"
								size="md"
								class="w-full"
							>
								View Details
							</Button>
						</div>
					</div>
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Footer Actions
						</h4>
						<div class="space-y-3">
							<Button
								variant="primary"
								size="md"
							>
								Start for Free
							</Button>
							<Button
								variant="secondary"
								size="md"
							>
								Subscribe
							</Button>
						</div>
					</div>
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Content Actions
						</h4>
						<div class="space-y-3">
							<Button
								variant="outline"
								size="sm"
							>
								Learn More
							</Button>
							<Button
								variant="ghost"
								size="sm"
							>
								Read Now
							</Button>
						</div>
					</div>
				</div>
			</section>

			<!-- Custom Styling -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Custom Styling
				</h2>
				<p class="text-gray-600 mb-6">
					Buttons with custom classes for specific use cases
				</p>
				<div class="space-y-4">
					<div class="p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600 mb-3">
							Full Width Button
						</h4>
						<Button
							variant="primary"
							class="w-full"
						>
							Full Width Button
						</Button>
					</div>
					<div class="p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600 mb-3">
							Rounded Button
						</h4>
						<Button
							variant="secondary"
							class="rounded-full"
						>
							Rounded Button
						</Button>
					</div>
					<div class="p-4 bg-white rounded-lg shadow-sm">
						<h4 class="text-sm font-medium text-gray-600 mb-3">
							Custom Shadow
						</h4>
						<Button
							variant="primary"
							class="shadow-2xl"
						>
							Shadow Button
						</Button>
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
&lt;Button&gt;Click Me&lt;/Button&gt;

&lt;!-- With Variants --&gt;
&lt;Button variant="primary"&gt;Primary&lt;/Button&gt;
&lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;
&lt;Button variant="outline"&gt;Outline&lt;/Button&gt;

&lt;!-- With Sizes --&gt;
&lt;Button size="lg"&gt;Large Button&lt;/Button&gt;

&lt;!-- With Loading State --&gt;
&lt;Button :loading="true"&gt;Loading...&lt;/Button&gt;

&lt;!-- With Icons --&gt;
&lt;Button left-icon="🚀"&gt;Start Sandbox&lt;/Button&gt;

&lt;!-- With Custom Classes --&gt;
&lt;Button class="w-full"&gt;Full Width&lt;/Button&gt;</code></pre>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";

// Reactive state for interactive examples
const isLoading = ref(false);
const count = ref(0);
const isDark = ref(false);

// Async action handler
const handleAsyncAction = async () => {
	isLoading.value = true;
	// Simulate async operation
	await new Promise(resolve => setTimeout(resolve, 2000));
	isLoading.value = false;
};

// Counter handler
const incrementCount = () => {
	count.value++;
};

// Theme toggle handler
const toggleTheme = () => {
	isDark.value = !isDark.value;
};
</script>
