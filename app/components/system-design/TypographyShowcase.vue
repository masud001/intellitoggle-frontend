<template>
	<div class="p-8 space-y-8 bg-gray-50 min-h-screen">
		<div class="max-w-6xl mx-auto">
			<h1 class="text-4xl font-bold text-gray-900 mb-8 font-satoshi">
				Typography System
			</h1>

			<!-- Font Families -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Font Families
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<!-- Inter Font -->
					<div class="space-y-4">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Inter (Primary)
						</h3>
						<div class="space-y-2">
							<p class="text-lg font-sans">
								The quick brown fox jumps over the lazy dog.
							</p>
							<p class="text-sm text-gray-500 font-mono">
								font-sans
							</p>
						</div>
					</div>

					<!-- Satoshi Font -->
					<div class="space-y-4">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Satoshi (Premium)
						</h3>
						<div class="space-y-2">
							<p class="text-lg font-satoshi">
								The quick brown fox jumps over the lazy dog.
							</p>
							<p class="text-sm text-gray-500 font-mono">
								font-satoshi
							</p>
						</div>
					</div>

					<!-- DM Sans Font -->
					<div class="space-y-4">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							DM Sans (Modern)
						</h3>
						<div class="space-y-2">
							<p class="text-lg font-dm-sans">
								The quick brown fox jumps over the lazy dog.
							</p>
							<p class="text-sm text-gray-500 font-mono">
								font-dm-sans
							</p>
						</div>
					</div>

					<!-- Roboto Font -->
					<div class="space-y-4">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Roboto (Google)
						</h3>
						<div class="space-y-2">
							<p class="text-lg font-roboto">
								The quick brown fox jumps over the lazy dog.
							</p>
							<p class="text-sm text-gray-500 font-mono">
								font-roboto
							</p>
						</div>
					</div>

					<!-- Plus Jakarta Sans Font -->
					<div class="space-y-4">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Plus Jakarta Sans (Modern)
						</h3>
						<div class="space-y-3">
							<p class="text-lg font-plus-jakarta-sans">
								The quick brown fox jumps over the lazy dog.
							</p>
							<p class="text-sm text-gray-500 font-mono">
								font-plus-jakarta-sans
							</p>
							<div class="text-xs text-gray-600 space-y-1">
								<p><strong>Type:</strong> Geometric Sans-serif</p>
								<p><strong>Designer:</strong> Tokotype</p>
								<p><strong>Style:</strong> Modern, clean, versatile</p>
								<p><strong>Best for:</strong> UI elements, headings, modern interfaces</p>
								<p><strong>Characteristics:</strong> Excellent readability, contemporary design, great for digital products</p>
							</div>
						</div>
					</div>

					<!-- Merriweather Sans Font -->
					<div class="space-y-4">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Merriweather Sans (Elegant)
						</h3>
						<div class="space-y-3">
							<p class="text-lg font-merriweather-sans">
								The quick brown fox jumps over the lazy dog.
							</p>
							<p class="text-sm text-gray-500 font-mono">
								font-merriweather-sans
							</p>
							<div class="text-xs text-gray-600 space-y-1">
								<p><strong>Type:</strong> Humanist Sans-serif</p>
								<p><strong>Designer:</strong> Sorkin Type</p>
								<p><strong>Style:</strong> Elegant, readable, warm</p>
								<p><strong>Best for:</strong> Body text, articles, long-form content</p>
								<p><strong>Characteristics:</strong> High readability, friendly appearance, excellent for extended reading</p>
							</div>
						</div>
					</div>

					<!-- Segoe UI This Font -->
					<div class="space-y-4">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Segoe UI This (System)
						</h3>
						<div class="space-y-2">
							<p class="text-lg font-segoe-ui-this">
								The quick brown fox jumps over the lazy dog.
							</p>
							<p class="text-sm text-gray-500 font-mono">
								font-segoe-ui-this
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Font Weights -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Font Weights
				</h2>
				<div class="space-y-6">
					<!-- Inter Weights -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Inter Weights
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-sans font-light text-lg">Light (300)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-light</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-sans font-normal text-lg">Regular (400)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-sans font-medium text-lg">Medium (500)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-medium</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-sans font-semibold text-lg">Semibold (600)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-semibold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-sans font-bold text-lg">Bold (700)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-bold</code>
							</div>
						</div>
					</div>

					<!-- Satoshi Weights -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Satoshi Weights
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-satoshi font-light text-lg">Light (300)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-light</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-satoshi font-normal text-lg">Regular (400)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-satoshi font-medium text-lg">Medium (500)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-medium</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-satoshi font-semibold text-lg">Semibold (600)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-semibold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-satoshi font-bold text-lg">Bold (700)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-bold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-satoshi font-black text-lg">Black (900)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-black</code>
							</div>
						</div>
					</div>

					<!-- DM Sans Weights -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							DM Sans Weights
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-dm-sans font-light text-lg">Light (300)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-light</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-dm-sans font-normal text-lg">Regular (400)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-dm-sans font-medium text-lg">Medium (500)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-medium</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-dm-sans font-semibold text-lg">Semibold (600)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-semibold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-dm-sans font-bold text-lg">Bold (700)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-bold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-dm-sans font-black text-lg">Black (900)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-black</code>
							</div>
						</div>
					</div>

					<!-- Merriweather Sans Weights -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Merriweather Sans Weights
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-merriweather-sans font-light text-lg">Light (300)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-light</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-merriweather-sans font-normal text-lg">Regular (400)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-merriweather-sans font-medium text-lg">Medium (500)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-medium</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-merriweather-sans font-semibold text-lg">Semibold (600)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-semibold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-merriweather-sans font-bold text-lg">Bold (700)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-bold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-merriweather-sans font-extrabold text-lg">Extra Bold (800)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-extrabold</code>
							</div>
						</div>
					</div>

					<!-- Plus Jakarta Sans Weights -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Plus Jakarta Sans Weights
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-plus-jakarta-sans font-extralight text-lg">Extra Light (200)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-extralight</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-plus-jakarta-sans font-light text-lg">Light (300)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-light</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-plus-jakarta-sans font-normal text-lg">Regular (400)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-plus-jakarta-sans font-medium text-lg">Medium (500)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-medium</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-plus-jakarta-sans font-semibold text-lg">Semibold (600)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-semibold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-plus-jakarta-sans font-bold text-lg">Bold (700)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-bold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-plus-jakarta-sans font-extrabold text-lg">Extra Bold (800)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-extrabold</code>
							</div>
						</div>
					</div>

					<!-- Roboto Weights -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Roboto Weights (All Available)
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="font-roboto font-thin text-lg">Thin (100)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-thin</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-roboto font-extralight text-lg">Extra Light (200)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-extralight</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-roboto font-light text-lg">Light (300)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-light</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-roboto font-normal text-lg">Regular (400)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-roboto font-medium text-lg">Medium (500)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-medium</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-roboto font-semibold text-lg">Semibold (600)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-semibold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-roboto font-bold text-lg">Bold (700)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-bold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-roboto font-extrabold text-lg">Extra Bold (800)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-extrabold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-roboto font-black text-lg">Black (900)</span>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">font-black</code>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Text Sizes -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Text Sizes
				</h2>
				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<span class="text-xs font-sans">Extra Small (12px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-xs</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-sm font-sans">Small (14px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-sm</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-base font-sans">Base (16px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-base</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-lg font-sans">Large (18px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-lg</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-xl font-sans">Extra Large (20px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-xl</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-2xl font-sans">2X Large (24px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-2xl</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-3xl font-sans">3X Large (30px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-3xl</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-4xl font-sans">4X Large (36px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-4xl</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-5xl font-sans">5X Large (48px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-5xl</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-6xl font-sans">6X Large (60px)</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">text-6xl</code>
					</div>
				</div>
			</section>

			<!-- Line Heights -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Line Heights
				</h2>
				<div class="space-y-6">
					<div class="space-y-2">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Tight Line Heights
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<div class="max-w-md">
									<p class="text-lg font-sans leading-tight">
										This is tight line height for compact layouts and headings.
									</p>
								</div>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-tight</code>
							</div>
							<div class="flex items-center justify-between">
								<div class="max-w-md">
									<p class="text-lg font-sans leading-snug">
										This is snug line height for better readability.
									</p>
								</div>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-snug</code>
							</div>
						</div>
					</div>

					<div class="space-y-2">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Normal Line Heights
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<div class="max-w-md">
									<p class="text-lg font-sans leading-normal">
										This is normal line height for standard text content.
									</p>
								</div>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<div class="max-w-md">
									<p class="text-lg font-sans leading-relaxed">
										This is relaxed line height for comfortable reading.
									</p>
								</div>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-relaxed</code>
							</div>
						</div>
					</div>

					<div class="space-y-2">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Loose Line Heights
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<div class="max-w-md">
									<p class="text-lg font-sans leading-loose">
										This is loose line height for maximum readability and spacing.
									</p>
								</div>
								<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-loose</code>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Text Styles -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Text Styles
				</h2>
				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<span class="text-lg font-sans italic">Italic text style</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">italic</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-lg font-sans underline">Underlined text style</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">underline</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-lg font-sans line-through">Strikethrough text style</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">line-through</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-lg font-sans no-underline">No underline text style</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">no-underline</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-lg font-sans uppercase">Uppercase text style</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">uppercase</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-lg font-sans lowercase">Lowercase text style</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">lowercase</code>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-lg font-sans capitalize">Capitalize text style</span>
						<code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">capitalize</code>
					</div>
				</div>
			</section>

			<!-- Font Comparison -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Font Comparison
				</h2>
				<div class="space-y-6">
					<div class="space-y-4">
						<h3 class="text-lg font-medium text-gray-700 font-dm-sans">
							Same Text in Different Fonts
						</h3>
						<div class="space-y-4">
							<div class="border-l-4 border-blue-500 pl-4">
								<p class="text-sm text-gray-500 font-mono mb-2">
									font-sans (Inter)
								</p>
								<p class="text-xl font-sans">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div class="border-l-4 border-purple-500 pl-4">
								<p class="text-sm text-gray-500 font-mono mb-2">
									font-satoshi
								</p>
								<p class="text-xl font-satoshi">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div class="border-l-4 border-green-500 pl-4">
								<p class="text-sm text-gray-500 font-mono mb-2">
									font-dm-sans
								</p>
								<p class="text-xl font-dm-sans">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div class="border-l-4 border-orange-500 pl-4">
								<p class="text-sm text-gray-500 font-mono mb-2">
									font-roboto
								</p>
								<p class="text-xl font-roboto">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div class="border-l-4 border-indigo-500 pl-4">
								<p class="text-sm text-gray-500 font-mono mb-2">
									font-plus-jakarta-sans
								</p>
								<p class="text-xl font-plus-jakarta-sans">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div class="border-l-4 border-red-500 pl-4">
								<p class="text-sm text-gray-500 font-mono mb-2">
									font-merriweather-sans
								</p>
								<p class="text-xl font-merriweather-sans">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div class="border-l-4 border-gray-500 pl-4">
								<p class="text-sm text-gray-500 font-mono mb-2">
									font-segoe-ui-this
								</p>
								<p class="text-xl font-segoe-ui-this">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Merriweather Sans Showcase -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Merriweather Sans Deep Dive
				</h2>
				<div class="space-y-8">
					<!-- Font Details -->
					<div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
						<h3 class="text-xl font-semibold mb-4 text-gray-800 font-merriweather-sans">
							About Merriweather Sans
						</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h4 class="font-semibold text-gray-700 mb-2 font-merriweather-sans">
									Design Philosophy
								</h4>
								<p class="text-sm text-gray-600 font-merriweather-sans leading-relaxed">
									Merriweather Sans is designed to be highly readable on screens. It features a large x-height,
									open counters, and strong diagonal stress, making it comfortable for extended reading sessions.
								</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-700 mb-2 font-merriweather-sans">
									Technical Features
								</h4>
								<ul class="text-sm text-gray-600 font-merriweather-sans leading-relaxed space-y-1">
									<li>• Humanist sans-serif design</li>
									<li>• Optimized for screen reading</li>
									<li>• Large x-height for clarity</li>
									<li>• Open counters for legibility</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- Weight Progression -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Weight Progression
						</h3>
						<div class="space-y-3">
							<div class="flex items-center justify-between p-3 bg-gray-50 rounded">
								<span class="font-merriweather-sans font-light text-lg">Light (300) - Elegant and airy</span>
								<code class="text-sm bg-white px-2 py-1 rounded font-mono">font-light</code>
							</div>
							<div class="flex items-center justify-between p-3 bg-gray-50 rounded">
								<span class="font-merriweather-sans font-normal text-lg">Regular (400) - Perfect for body text</span>
								<code class="text-sm bg-white px-2 py-1 rounded font-mono">font-normal</code>
							</div>
							<div class="flex items-center justify-between p-3 bg-gray-50 rounded">
								<span class="font-merriweather-sans font-medium text-lg">Medium (500) - Subtle emphasis</span>
								<code class="text-sm bg-white px-2 py-1 rounded font-mono">font-medium</code>
							</div>
							<div class="flex items-center justify-between p-3 bg-gray-50 rounded">
								<span class="font-merriweather-sans font-semibold text-lg">Semibold (600) - Strong headings</span>
								<code class="text-sm bg-white px-2 py-1 rounded font-mono">font-semibold</code>
							</div>
							<div class="flex items-center justify-between p-3 bg-gray-50 rounded">
								<span class="font-merriweather-sans font-bold text-lg">Bold (700) - Maximum impact</span>
								<code class="text-sm bg-white px-2 py-1 rounded font-mono">font-bold</code>
							</div>
							<div class="flex items-center justify-between p-3 bg-gray-50 rounded">
								<span class="font-merriweather-sans font-extrabold text-lg">Extra Bold (800) - Heavy emphasis</span>
								<code class="text-sm bg-white px-2 py-1 rounded font-mono">font-extrabold</code>
							</div>
						</div>
					</div>

					<!-- Use Cases -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Perfect Use Cases
						</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="border border-gray-200 rounded-lg p-4">
								<h4 class="font-semibold text-gray-800 mb-3 font-merriweather-sans">
									Blog Articles
								</h4>
								<p class="text-sm text-gray-600 font-merriweather-sans leading-relaxed">
									"Merriweather Sans excels in long-form content. Its humanist design and excellent readability
									make it perfect for blog posts, articles, and editorial content where reader comfort is paramount."
								</p>
							</div>
							<div class="border border-gray-200 rounded-lg p-4">
								<h4 class="font-semibold text-gray-800 mb-3 font-merriweather-sans">
									Documentation
								</h4>
								<p class="text-sm text-gray-600 font-merriweather-sans leading-relaxed">
									"Ideal for technical documentation, user guides, and help content. The font's clarity and
									professional appearance maintain readability across different devices and screen sizes."
								</p>
							</div>
							<div class="border border-gray-200 rounded-lg p-4">
								<h4 class="font-semibold text-gray-800 mb-3 font-merriweather-sans">
									News & Editorial
								</h4>
								<p class="text-sm text-gray-600 font-merriweather-sans leading-relaxed">
									"Perfect for news websites and editorial content. The warm, friendly appearance creates
									trust while maintaining the professional look expected in journalistic contexts."
								</p>
							</div>
							<div class="border border-gray-200 rounded-lg p-4">
								<h4 class="font-semibold text-gray-800 mb-3 font-merriweather-sans">
									Educational Content
								</h4>
								<p class="text-sm text-gray-600 font-merriweather-sans leading-relaxed">
									"Excellent for educational materials, tutorials, and learning content. The font's
									readability helps reduce eye strain during extended study sessions."
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Usage Examples -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Usage Examples
				</h2>
				<div class="space-y-8">
					<!-- Headings -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Headings
						</h3>
						<div class="space-y-4">
							<h1 class="text-4xl font-bold text-gray-900 font-satoshi">
								Main Heading (H1)
							</h1>
							<h2 class="text-3xl font-semibold text-gray-800 font-dm-sans">
								Section Heading (H2)
							</h2>
							<h3 class="text-2xl font-medium text-gray-700 font-roboto">
								Subsection (H3) - Roboto
							</h3>
							<h4 class="text-xl font-medium text-gray-600 font-sans">
								Subheading (H4)
							</h4>
							<h5 class="text-lg font-medium text-gray-600 font-sans">
								Minor Heading (H5)
							</h5>
							<h6 class="text-base font-medium text-gray-600 font-sans">
								Small Heading (H6)
							</h6>
						</div>
					</div>

					<!-- Body Text -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Body Text
						</h3>
						<div class="space-y-4">
							<p class="text-base text-gray-700 font-sans leading-relaxed">
								This is a paragraph of body text using Inter font. It demonstrates the standard reading experience with proper line height and spacing for optimal readability.
							</p>
							<p class="text-base text-gray-600 font-satoshi leading-relaxed">
								This is another paragraph using Satoshi font for a more premium feel. The font choice can significantly impact the overall design aesthetic.
							</p>
							<p class="text-base text-gray-600 font-roboto leading-relaxed">
								This paragraph uses Roboto font, which is clean and modern. Roboto is excellent for UI elements and provides great readability across different screen sizes.
							</p>
							<p class="text-base text-gray-600 font-plus-jakarta-sans leading-relaxed">
								This paragraph demonstrates Plus Jakarta Sans, a modern geometric sans-serif that's perfect for contemporary digital interfaces. Its clean lines and excellent readability make it ideal for UI elements, headings, and modern web applications.
							</p>
							<p class="text-base text-gray-600 font-merriweather-sans leading-relaxed">
								This paragraph showcases Merriweather Sans, which is specifically designed for comfortable reading. Its humanist design and optimized letterforms make it perfect for extended reading sessions, whether in articles, documentation, or any content where readability is crucial.
							</p>
						</div>
					</div>

					<!-- Code -->
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Code & Monospace
						</h3>
						<div class="space-y-2">
							<code class="text-sm bg-gray-100 px-3 py-2 rounded font-mono block">
								const greeting = "Hello, World!";
							</code>
							<pre class="text-sm bg-gray-100 px-3 py-2 rounded font-mono overflow-x-auto">
function calculateTotal(price, tax) {
  return price + (price * tax);
}
              </pre>
						</div>
					</div>
				</div>
			</section>

			<!-- Quick Reference -->
			<section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">
					Quick Reference
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Font Classes
						</h3>
						<div class="space-y-2">
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-sans</span>
								<span class="text-sm text-gray-500">Inter</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-satoshi</span>
								<span class="text-sm text-gray-500">Satoshi</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-dm-sans</span>
								<span class="text-sm text-gray-500">DM Sans</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-roboto</span>
								<span class="text-sm text-gray-500">Roboto</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-plus-jakarta-sans</span>
								<span class="text-sm text-gray-500">Plus Jakarta Sans</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-merriweather-sans</span>
								<span class="text-sm text-gray-500">Merriweather Sans</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-segoe-ui-this</span>
								<span class="text-sm text-gray-500">Segoe UI This</span>
							</div>
						</div>
					</div>
					<div>
						<h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">
							Weight Classes
						</h3>
						<div class="space-y-2">
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-thin</span>
								<span class="text-sm text-gray-500">100</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-extralight</span>
								<span class="text-sm text-gray-500">200</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-light</span>
								<span class="text-sm text-gray-500">300</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-normal</span>
								<span class="text-sm text-gray-500">400</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-medium</span>
								<span class="text-sm text-gray-500">500</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-semibold</span>
								<span class="text-sm text-gray-500">600</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-bold</span>
								<span class="text-sm text-gray-500">700</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-extrabold</span>
								<span class="text-sm text-gray-500">800</span>
							</div>
							<div class="flex justify-between">
								<span class="font-mono text-sm">font-black</span>
								<span class="text-sm text-gray-500">900</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
// Typography showcase component
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
