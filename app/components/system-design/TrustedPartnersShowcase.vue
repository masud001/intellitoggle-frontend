<template>
	<div class="p-8 bg-gray-50 min-h-screen">
		<div class="container-custom">
			<h1 class="text-3xl font-bold text-gray-900 mb-8 font-satoshi">
				Trusted Partners Component Showcase
			</h1>

			<!-- Basic Usage -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Basic Usage
				</h2>
				<p class="text-gray-600 mb-6">
					Default trusted partners component with all major cloud providers
				</p>
				<div class="bg-white rounded-lg shadow-sm p-6">
					<TrustedPartners />
				</div>
			</section>

			<!-- Custom Partners -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Custom Partners
				</h2>
				<p class="text-gray-600 mb-6">
					Component with custom partner logos and configuration
				</p>
				<div class="bg-white rounded-lg shadow-sm p-6">
					<TrustedPartners
						:partners="customPartners"
						title="Our Technology Partners"
					/>
				</div>
			</section>

			<!-- Default Sizing -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Default Sizing & Spacing
				</h2>
				<p class="text-gray-600 mb-6">
					Default logo dimensions: 120px width × 60px height with responsive gaps
				</p>
				<div class="bg-white rounded-lg shadow-sm p-6">
					<TrustedPartners
						title="Default Dimensions"
					/>
				</div>
			</section>

			<!-- Custom Sizing -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Custom Sizing & Spacing
				</h2>
				<p class="text-gray-600 mb-6">
					Customize logo sizes and spacing for different devices
				</p>
				<div class="bg-white rounded-lg shadow-sm p-6">
					<TrustedPartners
						:logo-height="{
							mobile: '80px',
							tablet: '90px',
							desktop: '70px',
						}"
						:logo-max-width="{
							mobile: '150px',
							tablet: '140px',
							desktop: '130px',
						}"
						:logo-spacing="{
							mobile: '24px',
							tablet: '40px',
							desktop: '60px',
						}"
						title="Custom Sized Partners"
					/>
				</div>
			</section>

			<!-- Performance Optimized Sliding -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Infinite Loop Sliding
				</h2>
				<p class="text-gray-600 mb-6">
					True infinite loop: 1,2,3,4,5,6,1,2,3,4,5,6,1,2,3... - seamless continuous circle
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Default Speed (1.2px/frame) - Optimized
						</h4>
						<TrustedPartners
							:auto-slide="true"
							:slide-speed="1.2"
							slide-direction="left"
							title="Optimized Performance"
						/>
					</div>
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Fast Speed (2.0px/frame)
						</h4>
						<TrustedPartners
							:auto-slide="true"
							:slide-speed="2.0"
							slide-direction="right"
							title="Fast Performance"
						/>
					</div>
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Very Fast (3.0px/frame)
						</h4>
						<TrustedPartners
							:auto-slide="true"
							:slide-speed="3.0"
							slide-direction="left"
							title="Very Fast Performance"
						/>
					</div>
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Ultra Fast (4.0px/frame)
						</h4>
						<TrustedPartners
							:auto-slide="true"
							:slide-speed="4.0"
							slide-direction="right"
							title="Ultra Fast Performance"
						/>
					</div>
				</div>
			</section>

			<!-- Without Title -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Without Title
				</h2>
				<p class="text-gray-600 mb-6">
					Component without the section title for integration into other sections
				</p>
				<div class="bg-white rounded-lg shadow-sm p-6">
					<TrustedPartners
						:show-title="false"
					/>
				</div>
			</section>

			<!-- Different Sizes -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Responsive Behavior
				</h2>
				<p class="text-gray-600 mb-6">
					How the component adapts to different screen sizes
				</p>
				<div class="space-y-8">
					<!-- Desktop Preview -->
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Desktop (1024px+)
						</h4>
						<p class="text-sm text-gray-600 mb-4">
							Shows all 5 partner logos in a horizontal row
						</p>
						<div class="hidden lg:block">
							<TrustedPartners />
						</div>
						<div class="lg:hidden text-center py-8 text-gray-500">
							Resize your browser to desktop size to see this layout
						</div>
					</div>

					<!-- Tablet Preview -->
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Tablet (768px - 1023px)
						</h4>
						<p class="text-sm text-gray-600 mb-4">
							Shows at least 5 partner logos in a horizontal row with mobile-tablet optimized images
						</p>
						<div class="text-xs text-blue-600 mb-2">
							📱 Uses mobile-tablet images from /images/partners/mobile-tablet/
						</div>
						<div class="hidden md:block lg:hidden">
							<TrustedPartners />
						</div>
						<div class="md:hidden text-center py-8 text-gray-500">
							Resize your browser to tablet size to see this layout
						</div>
					</div>

					<!-- Mobile Preview -->
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							Mobile (&lt; 768px)
						</h4>
						<p class="text-sm text-gray-600 mb-4">
							Shows partner logos in a smooth infinite horizontal slider with touch/swipe support and mobile-optimized images
						</p>
						<div class="text-xs text-blue-600 mb-2">
							📱 Uses mobile-tablet images from /images/partners/mobile-tablet/ for both mobile and tablet
						</div>
						<div class="text-xs text-green-600 mb-2">
							🛡️ Fallback to original images + placeholder if mobile-tablet images not found
						</div>
						<div class="md:hidden">
							<TrustedPartners />
						</div>
						<div class="hidden md:block text-center py-8 text-gray-500">
							Resize your browser to mobile size to see this layout
						</div>
					</div>
				</div>
			</section>

			<!-- Interactive Demo -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Interactive Demo
				</h2>
				<p class="text-gray-600 mb-6">
					Test the optimized mobile slider with touch/swipe functionality and performance features
				</p>
				<div class="bg-white rounded-lg shadow-sm p-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
						<div>
							<label class="block text-sm font-medium text-gray-700 mb-2">
								Number of Partners:
							</label>
							<select
								v-model="selectedPartnerCount"
								class="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
							>
								<option value="3">
									5+ Partners
								</option>
								<option value="5">
									5 Partners
								</option>
								<option value="7">
									7 Partners
								</option>
							</select>
						</div>
						<div>
							<label class="block text-sm font-medium text-gray-700 mb-2">
								Performance Features:
							</label>
							<div class="text-sm text-gray-600 space-y-1">
								<div>✅ Hardware acceleration</div>
								<div>✅ Cached calculations</div>
								<div>✅ 60fps smooth animation</div>
								<div>✅ Touch/swipe support</div>
							</div>
						</div>
					</div>
					<TrustedPartners
						:partners="demoPartners"
						:title="demoTitle"
					/>
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
							Homepage Section
						</h4>
						<TrustedPartners
							:partners="homepagePartners"
							title="Trusted by leading companies"
						/>
					</div>
					<div class="p-6 bg-white rounded-lg shadow-sm">
						<h4 class="text-lg font-semibold text-gray-800 mb-4">
							About Page
						</h4>
						<TrustedPartners
							:partners="aboutPartners"
							title="Our Partners"
						/>
					</div>
				</div>
			</section>

			<!-- Performance Features -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Performance Features
				</h2>
				<p class="text-gray-600 mb-6">
					Advanced optimizations for smooth 60fps performance with true infinite loop
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-3">
							🔄 Infinite Loop
						</h4>
						<p class="text-sm text-gray-600 mb-4">
							True infinite scrolling: 1,2,3,4,5,6,1,2,3... seamless circle with bounded values
						</p>
						<div class="bg-gray-100 p-3 rounded text-xs font-mono">
							Array(6).fill(partners).flat()<br>
							Bounded translateX values<br>
							MAX: ±10,000px safety bounds
						</div>
					</div>
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-3">
							🚀 Hardware Acceleration
						</h4>
						<p class="text-sm text-gray-600 mb-4">
							Uses GPU acceleration with translate3d and will-change properties
						</p>
						<div class="bg-gray-100 p-3 rounded text-xs font-mono">
							transform: translate3d(x, 0, 0)<br>
							will-change: transform
						</div>
					</div>
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-3">
							⚡ Cached Calculations
						</h4>
						<p class="text-sm text-gray-600 mb-4">
							Eliminates repeated DOM queries with intelligent caching
						</p>
						<div class="bg-gray-100 p-3 rounded text-xs font-mono">
							cachedSlideWidth = getSlideWidth()<br>
							cachedTotalWidth = slideWidth * partners.length
						</div>
					</div>
					<div class="bg-white rounded-lg shadow-sm p-6">
						<h4 class="text-lg font-semibold text-gray-800 mb-3">
							📱 ResizeObserver
						</h4>
						<p class="text-sm text-gray-600 mb-4">
							Efficiently updates dimensions when container resizes
						</p>
						<div class="bg-gray-100 p-3 rounded text-xs font-mono">
							new ResizeObserver(() => {<br>
							&nbsp;&nbsp;updateCachedWidths()<br>
							})
						</div>
					</div>
				</div>
			</section>

			<!-- Usage Examples -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Usage Examples
				</h2>
				<div class="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
					<pre><code>&lt;!-- Basic Usage (Optimized) --&gt;
&lt;TrustedPartners /&gt;

&lt;!-- Custom Partners --&gt;
&lt;TrustedPartners
  :partners="customPartners"
  title="Our Technology Partners"
/&gt;

&lt;!-- Default Dimensions (120px × 60px) --&gt;
&lt;TrustedPartners
  :logo-height="{
    mobile: '60px',
    tablet: '60px',
    desktop: '60px'
  }"
  :logo-max-width="{
    mobile: '120px',
    tablet: '120px',
    desktop: '120px'
  }"
  :logo-spacing="{
    mobile: '53px',
    tablet: '50px',
    desktop: '100px'
  }"
/&gt;

&lt;!-- Performance Optimized Sliding --&gt;
&lt;TrustedPartners
  :auto-slide="true"
  :slide-speed="1.2"
  slide-direction="left"
/&gt;

&lt;!-- Fast Performance Sliding --&gt;
&lt;TrustedPartners
  :auto-slide="true"
  :slide-speed="2.0"
  slide-direction="right"
/&gt;

&lt;!-- Ultra Fast Sliding --&gt;
&lt;TrustedPartners
  :auto-slide="true"
  :slide-speed="4.0"
  slide-direction="left"
/&gt;

&lt;!-- Without Title --&gt;
&lt;TrustedPartners
  :show-title="false"
/&gt;</code></pre>
				</div>
			</section>

			<!-- Performance Comparison -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold text-gray-800 mb-6 font-satoshi">
					Performance Comparison
				</h2>
				<p class="text-gray-600 mb-6">
					Before vs After optimization improvements
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="bg-red-50 border border-red-200 rounded-lg p-6">
						<h4 class="text-lg font-semibold text-red-800 mb-4">
							❌ Before Optimization
						</h4>
						<ul class="text-sm text-red-700 space-y-2">
							<li>• 0.5px/frame speed (slow)</li>
							<li>• CSS transitions during animation</li>
							<li>• Repeated DOM queries every frame</li>
							<li>• No hardware acceleration</li>
							<li>• Complex DOM structure</li>
							<li>• ~30-45fps performance</li>
						</ul>
					</div>
					<div class="bg-green-50 border border-green-200 rounded-lg p-6">
						<h4 class="text-lg font-semibold text-green-800 mb-4">
							✅ After Optimization
						</h4>
						<ul class="text-sm text-green-700 space-y-2">
							<li>• 1.2px/frame speed (2.4x faster)</li>
							<li>• Pure JavaScript animation</li>
							<li>• Cached calculations</li>
							<li>• GPU hardware acceleration</li>
							<li>• Simplified DOM structure</li>
							<li>• 60fps smooth performance</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import TrustedPartners from "../ui/TrustedPartners.vue";

// Demo state
const selectedPartnerCount = ref(5);
const demoTitle = ref("Trusted by various engineering teams");

// Custom partners for demo
const customPartners = [
	{
		id: "stripe",
		name: "Stripe",
		logo: "/images/partners/stripe.svg",
		website: "https://stripe.com",
	},
	{
		id: "github",
		name: "GitHub",
		logo: "/images/partners/github.svg",
		website: "https://github.com",
	},
	{
		id: "vercel",
		name: "Vercel",
		logo: "/images/partners/vercel.svg",
		website: "https://vercel.com",
	},
	{
		id: "netlify",
		name: "Netlify",
		logo: "/images/partners/netlify.svg",
		website: "https://netlify.com",
	},
	{
		id: "heroku",
		name: "Heroku",
		logo: "/images/partners/heroku.svg",
		website: "https://heroku.com",
	},
];

// Homepage partners
const homepagePartners = [
	{
		id: "google-cloud",
		name: "Google Cloud",
		logo: "/images/partners/google-cloud.svg",
		website: "https://cloud.google.com",
	},
	{
		id: "aws",
		name: "Amazon Web Services",
		logo: "/images/partners/aws.svg",
		website: "https://aws.amazon.com",
	},
	{
		id: "microsoft-azure",
		name: "Microsoft Azure",
		logo: "/images/partners/microsoft-azure.svg",
		website: "https://azure.microsoft.com",
	},
	{
		id: "digital-ocean",
		name: "Digital Ocean",
		logo: "/images/partners/digital-ocean.svg",
		website: "https://www.digitalocean.com",
	},
	{
		id: "ibm",
		name: "IBM",
		logo: "/images/partners/ibm.svg",
		website: "https://www.ibm.com",
	},
];

// About page partners
const aboutPartners = [
	{
		id: "google-cloud",
		name: "Google Cloud",
		logo: "/images/partners/google-cloud.svg",
		website: "https://cloud.google.com",
	},
	{
		id: "aws",
		name: "Amazon Web Services",
		logo: "/images/partners/aws.svg",
		website: "https://aws.amazon.com",
	},
	{
		id: "microsoft-azure",
		name: "Microsoft Azure",
		logo: "/images/partners/microsoft-azure.svg",
		website: "https://azure.microsoft.com",
	},
];

// Demo partners based on selected count
const demoPartners = computed(() => {
	const allPartners = [
		...homepagePartners,
		...customPartners,
	];
	return allPartners.slice(0, parseInt(selectedPartnerCount.value));
});
</script>
