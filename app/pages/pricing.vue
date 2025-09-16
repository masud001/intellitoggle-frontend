<template>
	<div class="min-h-screen bg-gray-50">
		<!-- Hero Section -->
		<section class="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
			<div class="container-custom">
				<div class="text-center">
					<h1 class="text-5xl font-bold text-gray-900 mb-6 font-satoshi">
						Flexible Pricing Plans
					</h1>
					<p class="text-xl text-gray-600 mb-8 font-sans leading-relaxed max-w-3xl mx-auto">
						Select the ideal plan for your business requirements. All plans include essential features
						with transparent pricing and no hidden costs.
					</p>
				</div>
			</div>
		</section>

		<!-- Pricing Cards -->
		<section class="py-20">
			<div class="container-custom">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<!-- Starter Plan -->
					<div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
						<div class="text-center mb-8">
							<h3 class="text-2xl font-semibold text-gray-900 mb-2 font-satoshi">
								Basic
							</h3>
							<p class="text-gray-600 font-sans">
								Ideal for individuals and small projects
							</p>
							<div class="mt-6">
								<span class="text-5xl font-bold text-gray-900 font-satoshi">৳2,500</span>
								<span class="text-gray-600 font-sans">/month</span>
							</div>
						</div>
						<ul class="space-y-4 mb-8">
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Up to 5 projects</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">10GB storage</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Basic support</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Core features</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Mobile app access</span>
							</li>
						</ul>
						<button class="w-full px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium font-sans transition-colors">
							Get Started
						</button>
					</div>

					<!-- Professional Plan -->
					<div class="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative">
						<div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
							<span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium font-sans">Most Popular</span>
						</div>
						<div class="text-center mb-8">
							<h3 class="text-2xl font-semibold text-gray-900 mb-2 font-satoshi">
								Pro
							</h3>
							<p class="text-gray-600 font-sans">
								Perfect for growing businesses
							</p>
							<div class="mt-6">
								<span class="text-5xl font-bold text-gray-900 font-satoshi">৳7,500</span>
								<span class="text-gray-600 font-sans">/month</span>
							</div>
						</div>
						<ul class="space-y-4 mb-8">
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Up to 25 projects</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">100GB storage</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Priority support</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Advanced features</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Team collaboration</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">API access</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Custom integrations</span>
							</li>
						</ul>
						<button class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium font-sans transition-colors">
							Get Started
						</button>
					</div>

					<!-- Enterprise Plan -->
					<div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
						<div class="text-center mb-8">
							<h3 class="text-2xl font-semibold text-gray-900 mb-2 font-satoshi">
								Business
							</h3>
							<p class="text-gray-600 font-sans">
								For large organizations
							</p>
							<div class="mt-6">
								<span class="text-5xl font-bold text-gray-900 font-satoshi">৳25,000</span>
								<span class="text-gray-600 font-sans">/month</span>
							</div>
						</div>
						<ul class="space-y-4 mb-8">
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Unlimited projects</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">1TB storage</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">24/7 dedicated support</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">All features</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Advanced analytics</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">Custom development</span>
							</li>
							<li class="flex items-center">
								<span class="text-green-500 mr-3">✓</span>
								<span class="text-gray-600 font-sans">SLA guarantee</span>
							</li>
						</ul>
						<button class="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium font-sans transition-colors">
							Contact Sales
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Features Comparison -->
		<section class="py-20 bg-white">
			<div class="container-custom">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-4 font-satoshi">
						Plan Comparison
					</h2>
					<p class="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
						Compare features across all plans to find the perfect solution for your business.
					</p>
				</div>

				<div class="overflow-x-auto">
					<table class="w-full border-collapse">
						<thead>
							<tr class="border-b border-gray-200">
								<th class="text-left py-4 px-6 font-semibold text-gray-900 font-satoshi">
									Features
								</th>
								<th class="text-center py-4 px-6 font-semibold text-gray-900 font-satoshi">
									Basic
								</th>
								<th class="text-center py-4 px-6 font-semibold text-gray-900 font-satoshi">
									Pro
								</th>
								<th class="text-center py-4 px-6 font-semibold text-gray-900 font-satoshi">
									Business
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							<tr>
								<td class="py-4 px-6 font-medium text-gray-900 font-sans">
									Projects
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									5
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									25
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									Unlimited
								</td>
							</tr>
							<tr>
								<td class="py-4 px-6 font-medium text-gray-900 font-sans">
									Storage
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									10GB
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									100GB
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									1TB
								</td>
							</tr>
							<tr>
								<td class="py-4 px-6 font-medium text-gray-900 font-sans">
									Support
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									Basic
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									Priority
								</td>
								<td class="py-4 px-6 text-center text-gray-600 font-sans">
									24/7 Dedicated
								</td>
							</tr>
							<tr>
								<td class="py-4 px-6 font-medium text-gray-900 font-sans">
									API Access
								</td>
								<td class="py-4 px-6 text-center text-gray-400 font-sans">
									✗
								</td>
								<td class="py-4 px-6 text-center text-green-500 font-sans">
									✓
								</td>
								<td class="py-4 px-6 text-center text-green-500 font-sans">
									✓
								</td>
							</tr>
							<tr>
								<td class="py-4 px-6 font-medium text-gray-900 font-sans">
									Team Collaboration
								</td>
								<td class="py-4 px-6 text-center text-gray-400 font-sans">
									✗
								</td>
								<td class="py-4 px-6 text-center text-green-500 font-sans">
									✓
								</td>
								<td class="py-4 px-6 text-center text-green-500 font-sans">
									✓
								</td>
							</tr>
							<tr>
								<td class="py-4 px-6 font-medium text-gray-900 font-sans">
									Custom Integrations
								</td>
								<td class="py-4 px-6 text-center text-gray-400 font-sans">
									✗
								</td>
								<td class="py-4 px-6 text-center text-green-500 font-sans">
									✓
								</td>
								<td class="py-4 px-6 text-center text-green-500 font-sans">
									✓
								</td>
							</tr>
							<tr>
								<td class="py-4 px-6 font-medium text-gray-900 font-sans">
									Advanced Analytics
								</td>
								<td class="py-4 px-6 text-center text-gray-400 font-sans">
									✗
								</td>
								<td class="py-4 px-6 text-center text-gray-400 font-sans">
									✗
								</td>
								<td class="py-4 px-6 text-center text-green-500 font-sans">
									✓
								</td>
							</tr>
							<tr>
								<td class="py-4 px-6 font-medium text-gray-900 font-sans">
									SLA Guarantee
								</td>
								<td class="py-4 px-6 text-center text-gray-400 font-sans">
									✗
								</td>
								<td class="py-4 px-6 text-center text-gray-400 font-sans">
									✗
								</td>
								<td class="py-4 px-6 text-center text-green-500 font-sans">
									✓
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>

		<!-- FAQ Section -->
		<section class="py-20">
			<div class="container-custom">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-4 font-satoshi">
						Common Questions
					</h2>
					<p class="text-lg text-gray-600 font-sans">
						Find answers to frequently asked questions about our pricing and service plans.
					</p>
				</div>

				<div class="space-y-8">
					<div class="bg-white p-6 rounded-lg shadow-sm">
						<h3 class="text-lg font-semibold text-gray-900 mb-3 font-satoshi">
							Can I change my plan at any time?
						</h3>
						<p class="text-gray-600 font-sans">
							Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated
							and reflected in your next billing cycle.
						</p>
					</div>

					<div class="bg-white p-6 rounded-lg shadow-sm">
						<h3 class="text-lg font-semibold text-gray-900 mb-3 font-satoshi">
							Is there a free trial available?
						</h3>
						<p class="text-gray-600 font-sans">
							Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
						</p>
					</div>

					<div class="bg-white p-6 rounded-lg shadow-sm">
						<h3 class="text-lg font-semibold text-gray-900 mb-3 font-satoshi">
							What payment methods do you accept?
						</h3>
						<p class="text-gray-600 font-sans">
							We accept all major credit cards, bank transfers, and mobile payment methods including
							bKash, Rocket, and Nagad for Bangladesh customers.
						</p>
					</div>

					<div class="bg-white p-6 rounded-lg shadow-sm">
						<h3 class="text-lg font-semibold text-gray-900 mb-3 font-satoshi">
							Do you offer custom pricing for large organizations?
						</h3>
						<p class="text-gray-600 font-sans">
							Yes, we offer custom pricing and features for enterprise customers. Contact our sales
							team to discuss your specific requirements.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="bg-blue-600 py-20">
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 class="text-4xl font-bold text-white mb-6 font-satoshi">
					Ready to Get Started?
				</h2>
				<p class="text-xl text-blue-100 mb-8 font-sans">
					Choose your plan and start building amazing things today.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<button class="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-medium font-sans transition-colors">
						Start Free Trial
					</button>
					<button class="px-8 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-blue-600 font-medium font-sans transition-colors">
						Contact Sales
					</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
// Pricing page component
useHead({
	title: "Pricing - IntelliToggle",
	meta: [
		{ name: "description", content: "Simple, transparent pricing for IntelliToggle. Choose the perfect plan for your business needs with BDT pricing." },
	],
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
