<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <div class="container-custom">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 font-satoshi">Button Component Showcase</h1>
      
      <!-- Variants Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Variants</h2>
        <div class="flex flex-wrap gap-4">
          <Button variant="sandbox">Sandbox Primary</Button>
          <Button variant="sandbox-outline">Sandbox Outline</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
        </div>
      </section>

      <!-- Sizes Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Standard Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="xs">Extra Small</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" size="xl">Extra Large</Button>
        </div>
      </section>

      <!-- Sandbox Sizes Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Sandbox Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <Button variant="sandbox" size="sandbox-xs">Sandbox XS</Button>
          <Button variant="sandbox" size="sandbox-sm">Sandbox SM</Button>
          <Button variant="sandbox" size="sandbox-md">Sandbox MD</Button>
          <Button variant="sandbox" size="sandbox-lg">Sandbox LG</Button>
          <Button variant="sandbox" size="sandbox-xl">Sandbox XL</Button>
        </div>
      </section>

      <!-- Sandbox Outline Sizes Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Sandbox Outline Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <Button variant="sandbox-outline" size="sandbox-xs">Sandbox XS</Button>
          <Button variant="sandbox-outline" size="sandbox-sm">Sandbox SM</Button>
          <Button variant="sandbox-outline" size="sandbox-md">Sandbox MD</Button>
          <Button variant="sandbox-outline" size="sandbox-lg">Sandbox LG</Button>
          <Button variant="sandbox-outline" size="sandbox-xl">Sandbox XL</Button>
        </div>
      </section>

      <!-- States Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">States</h2>
        <div class="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button :loading="true">Loading</Button>
          <Button :disabled="true">Disabled</Button>
          <Button :loading="true" loading-text="Processing...">Custom Loading</Button>
        </div>
      </section>

      <!-- With Icons Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">With Icons</h2>
        <div class="flex flex-wrap gap-4">
          <Button left-icon="PlusIcon">
            Add Item
          </Button>
          <Button right-icon="ArrowRightIcon" variant="outline">
            Continue
          </Button>
          <Button left-icon="DownloadIcon" right-icon="ArrowDownIcon" variant="success">
            Download
          </Button>
        </div>
      </section>

      <!-- Interactive Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Interactive Examples</h2>
        <div class="flex flex-wrap gap-4">
          <Button 
            :loading="isLoading" 
            @click="handleAsyncAction"
            variant="primary"
          >
            {{ isLoading ? 'Processing...' : 'Async Action' }}
          </Button>
          
          <Button 
            :disabled="count >= 5"
            @click="incrementCount"
            variant="outline"
          >
            Count: {{ count }}
          </Button>
          
          <Button 
            @click="toggleTheme"
            :variant="isDark ? 'secondary' : 'ghost'"
          >
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </Button>
        </div>
      </section>

      <!-- Sandbox Button Special Features -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Sandbox Button Features</h2>
        <div class="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4 font-sans">Special Design Elements</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-2 font-sans">
            <li>Gradient text effect (purple to dark gradient)</li>
            <li>Custom dimensions (214px × 53px)</li>
            <li>Orange background (#f9a71e) with hover effects</li>
            <li>Subtle shadow with glow effect</li>
            <li>Inter font family with 24px size and 600 weight</li>
            <li>Disabled state support</li>
          </ul>
        </div>
        <div class="flex flex-wrap gap-4">
          <Button variant="sandbox">Start Sandbox</Button>
          <Button variant="sandbox" :disabled="true">Disabled Sandbox</Button>
        </div>
      </section>

      <!-- Sandbox Customization Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Sandbox Customization</h2>
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Custom Dimensions & Styling</h3>
          <div class="space-y-6">
            <div>
              <h4 class="font-medium text-gray-600 mb-2">Custom Width & Height</h4>
              <div class="flex flex-wrap gap-4">
                <Button variant="sandbox" :width="180" :height="45">Custom Size</Button>
                <Button variant="sandbox-outline" :width="250" :height="60">Custom Outline</Button>
              </div>
            </div>
            <div>
              <h4 class="font-medium text-gray-600 mb-2">Custom Border Radius</h4>
              <div class="flex flex-wrap gap-4">
                <Button variant="sandbox" :border-radius="4">Small Radius</Button>
                <Button variant="sandbox" :border-radius="16">Large Radius</Button>
                <Button variant="sandbox" :border-radius="25">Pill Shape</Button>
              </div>
            </div>
            <div>
              <h4 class="font-medium text-gray-600 mb-2">Code Examples</h4>
              <pre class="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto"><code>&lt;!-- Custom dimensions --&gt;
&lt;Button variant="sandbox" :width="180" :height="45"&gt;Custom Size&lt;/Button&gt;

&lt;!-- Custom border radius --&gt;
&lt;Button variant="sandbox" :border-radius="25"&gt;Pill Shape&lt;/Button&gt;

&lt;!-- Outline variant --&gt;
&lt;Button variant="sandbox-outline" size="sandbox-lg"&gt;Large Outline&lt;/Button&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Styling -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Custom Styling</h2>
        <div class="flex flex-wrap gap-4">
          <Button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
            Gradient Button
          </Button>
          
          <Button class="bg-yellow-400 text-purple-900 hover:bg-yellow-300 border-0 font-bold">
            Custom Colors
          </Button>
          
          <Button class="rounded-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white">
            Rounded Button
          </Button>
        </div>
      </section>

      <!-- Code Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Usage Examples</h2>
        <div class="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
          <pre><code>&lt;!-- Basic Usage --&gt;
&lt;Button&gt;Click Me&lt;/Button&gt;

&lt;!-- With Variants --&gt;
&lt;Button variant="primary"&gt;Primary&lt;/Button&gt;
&lt;Button variant="outline"&gt;Outline&lt;/Button&gt;
&lt;Button variant="sandbox"&gt;Start Sandbox&lt;/Button&gt;

&lt;!-- With Sizes --&gt;
&lt;Button size="lg"&gt;Large Button&lt;/Button&gt;

&lt;!-- With Loading State --&gt;
&lt;Button :loading="true"&gt;Loading...&lt;/Button&gt;

&lt;!-- With Icons --&gt;
&lt;Button left-icon="PlusIcon"&gt;Add Item&lt;/Button&gt;

&lt;!-- With Custom Classes --&gt;
&lt;Button class="bg-gradient-to-r from-purple-500 to-pink-500"&gt;
  Custom Styled
&lt;/Button&gt;</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'

// Reactive state for interactive examples
const isLoading = ref(false)
const count = ref(0)
const isDark = ref(false)

// Async action handler
const handleAsyncAction = async () => {
  isLoading.value = true
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 2000))
  isLoading.value = false
}

// Counter handler
const incrementCount = () => {
  count.value++
}

// Theme toggle handler
const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>
