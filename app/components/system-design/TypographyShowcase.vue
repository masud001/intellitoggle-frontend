<template>
  <div class="p-8 space-y-8 bg-gray-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 font-satoshi">
        Typography System
      </h1>
      
      <!-- Font Families -->
      <section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">Font Families</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Inter Font -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700 font-dm-sans">Inter (Primary)</h3>
            <div class="space-y-2">
              <p class="text-lg font-sans">The quick brown fox jumps over the lazy dog.</p>
              <p class="text-sm text-gray-500 font-mono">font-sans</p>
            </div>
          </div>

          <!-- Satoshi Font -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700 font-dm-sans">Satoshi (Premium)</h3>
            <div class="space-y-2">
              <p class="text-lg font-satoshi">The quick brown fox jumps over the lazy dog.</p>
              <p class="text-sm text-gray-500 font-mono">font-satoshi</p>
            </div>
          </div>

          <!-- DM Sans Font -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700 font-dm-sans">DM Sans (Modern)</h3>
            <div class="space-y-2">
              <p class="text-lg font-dm-sans">The quick brown fox jumps over the lazy dog.</p>
              <p class="text-sm text-gray-500 font-mono">font-dm-sans</p>
            </div>
          </div>

          <!-- Merriweather Sans Font -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700 font-dm-sans">Merriweather Sans (Elegant)</h3>
            <div class="space-y-2">
              <p class="text-lg font-merriweather-sans">The quick brown fox jumps over the lazy dog.</p>
              <p class="text-sm text-gray-500 font-mono">font-merriweather-sans</p>
            </div>
          </div>

          <!-- Segoe UI This Font -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700 font-dm-sans">Segoe UI This (System)</h3>
            <div class="space-y-2">
              <p class="text-lg font-segoe-ui-this">The quick brown fox jumps over the lazy dog.</p>
              <p class="text-sm text-gray-500 font-mono">font-segoe-ui-this</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Font Weights -->
      <section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">Font Weights</h2>
        <div class="space-y-6">
          <!-- Inter Weights -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">Inter Weights</h3>
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
            <h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">Satoshi Weights</h3>
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
        </div>
      </section>

      <!-- Text Sizes -->
      <section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">Text Sizes</h2>
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
        <h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">Line Heights</h2>
        <div class="space-y-6">
          <div class="space-y-2">
            <h3 class="text-lg font-medium text-gray-700 font-dm-sans">Tight Line Heights</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="max-w-md">
                  <p class="text-lg font-sans leading-tight">This is tight line height for compact layouts and headings.</p>
                </div>
                <code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-tight</code>
              </div>
              <div class="flex items-center justify-between">
                <div class="max-w-md">
                  <p class="text-lg font-sans leading-snug">This is snug line height for better readability.</p>
                </div>
                <code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-snug</code>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <h3 class="text-lg font-medium text-gray-700 font-dm-sans">Normal Line Heights</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="max-w-md">
                  <p class="text-lg font-sans leading-normal">This is normal line height for standard text content.</p>
                </div>
                <code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-normal</code>
              </div>
              <div class="flex items-center justify-between">
                <div class="max-w-md">
                  <p class="text-lg font-sans leading-relaxed">This is relaxed line height for comfortable reading.</p>
                </div>
                <code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-relaxed</code>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <h3 class="text-lg font-medium text-gray-700 font-dm-sans">Loose Line Heights</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="max-w-md">
                  <p class="text-lg font-sans leading-loose">This is loose line height for maximum readability and spacing.</p>
                </div>
                <code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">leading-loose</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Text Styles -->
      <section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">Text Styles</h2>
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

      <!-- Usage Examples -->
      <section class="mb-12 p-6 bg-white rounded-lg shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800 font-satoshi">Usage Examples</h2>
        <div class="space-y-8">
          <!-- Headings -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">Headings</h3>
            <div class="space-y-4">
              <h1 class="text-4xl font-bold text-gray-900 font-satoshi">Main Heading (H1)</h1>
              <h2 class="text-3xl font-semibold text-gray-800 font-dm-sans">Section Heading (H2)</h2>
              <h3 class="text-2xl font-medium text-gray-700 font-merriweather-sans">Subsection (H3)</h3>
              <h4 class="text-xl font-medium text-gray-600 font-sans">Subheading (H4)</h4>
              <h5 class="text-lg font-medium text-gray-600 font-sans">Minor Heading (H5)</h5>
              <h6 class="text-base font-medium text-gray-600 font-sans">Small Heading (H6)</h6>
            </div>
          </div>

          <!-- Body Text -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">Body Text</h3>
            <div class="space-y-4">
              <p class="text-base text-gray-700 font-sans leading-relaxed">
                This is a paragraph of body text using Inter font. It demonstrates the standard reading experience with proper line height and spacing for optimal readability.
              </p>
              <p class="text-base text-gray-600 font-satoshi leading-relaxed">
                This is another paragraph using Satoshi font for a more premium feel. The font choice can significantly impact the overall design aesthetic.
              </p>
            </div>
          </div>

          <!-- Code -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700 font-dm-sans">Code & Monospace</h3>
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
    </div>
  </div>
</template>

<script setup>
// Typography showcase component
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
