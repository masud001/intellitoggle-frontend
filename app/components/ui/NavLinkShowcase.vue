<template>
  <div class="container-custom py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8 font-satoshi">NavLink Component Showcase</h1>
    
    <!-- Basic Usage -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Basic Usage</h2>
      <div class="bg-gray-900 p-6 rounded-lg">
        <div class="flex space-x-8">
          <NavLink to="/" :active="false">Home</NavLink>
          <NavLink to="/about" :active="false">About</NavLink>
          <NavLink to="/pricing" :active="true">Pricing</NavLink>
          <NavLink to="/components" :active="false">Components</NavLink>
        </div>
      </div>
    </section>

    <!-- States Comparison -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">States Comparison</h2>
      <div class="bg-gray-900 p-6 rounded-lg">
        <div class="flex space-x-8">
          <div class="text-center">
            <NavLink to="/" :active="false">Normal</NavLink>
            <p class="text-gray-400 text-sm mt-2">font-weight: 300</p>
          </div>
          <div class="text-center">
            <NavLink to="/" :active="true">Active</NavLink>
            <p class="text-gray-400 text-sm mt-2">font-weight: bold</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Styling Details -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Styling Details</h2>
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Normal State</h3>
        <ul class="list-disc list-inside text-gray-600 space-y-2 font-sans mb-6">
          <li>Font: DMSans (font-dm-sans), 20px (text-xl), weight 300 (font-light)</li>
          <li>Color: #fff (text-white)</li>
          <li>Text alignment: center (text-center)</li>
          <li>Layout: flex items-center justify-center</li>
          <li>Transition: all 0.2s ease (transition-all duration-200)</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Active State</h3>
        <ul class="list-disc list-inside text-gray-600 space-y-2 font-sans mb-6">
          <li>Font: DMSans (font-dm-sans), 20px (text-xl), weight bold (font-bold)</li>
          <li>Color: #fff (text-white)</li>
          <li>Text alignment: center (text-center)</li>
          <li>Layout: flex items-center justify-center</li>
          <li>Transition: all 0.2s ease (transition-all duration-200)</li>
        </ul>
      </div>
    </section>

    <!-- Tailwind Classes Used -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Tailwind Classes Used</h2>
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Base Classes</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium text-gray-600 mb-2">Typography</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li><code class="bg-gray-200 px-2 py-1 rounded">font-dm-sans</code> - DMSans font family</li>
              <li><code class="bg-gray-200 px-2 py-1 rounded">text-xl</code> - 20px font size</li>
              <li><code class="bg-gray-200 px-2 py-1 rounded">text-center</code> - Center text alignment</li>
              <li><code class="bg-gray-200 px-2 py-1 rounded">text-white</code> - White text color</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-gray-600 mb-2">Layout & Effects</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li><code class="bg-gray-200 px-2 py-1 rounded">flex</code> - Flexbox display</li>
              <li><code class="bg-gray-200 px-2 py-1 rounded">items-center</code> - Vertical centering</li>
              <li><code class="bg-gray-200 px-2 py-1 rounded">justify-center</code> - Horizontal centering</li>
              <li><code class="bg-gray-200 px-2 py-1 rounded">transition-all duration-200</code> - Smooth transitions</li>
              <li><code class="bg-gray-200 px-2 py-1 rounded">no-underline</code> - Remove text decoration</li>
            </ul>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="font-medium text-gray-600 mb-2">State Classes</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li><code class="bg-gray-200 px-2 py-1 rounded">font-light</code> - Normal state (weight 300)</li>
            <li><code class="bg-gray-200 px-2 py-1 rounded">font-bold</code> - Active state (weight bold)</li>
            <li><code class="bg-gray-200 px-2 py-1 rounded">hover:opacity-80</code> - Hover effect for normal</li>
            <li><code class="bg-gray-200 px-2 py-1 rounded">hover:opacity-100</code> - Hover effect for active</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Code Examples -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Code Examples</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-2">Basic Usage</h3>
          <pre class="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto"><code>&lt;NavLink to="/" :active="false"&gt;Home&lt;/NavLink&gt;
&lt;NavLink to="/about" :active="true"&gt;About&lt;/NavLink&gt;</code></pre>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-2">With Click Handler</h3>
          <pre class="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto"><code>&lt;NavLink 
  to="/pricing" 
  :active="$route.path === '/pricing'"
  @click="handleMenuClick"
&gt;
  Pricing
&lt;/NavLink&gt;</code></pre>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-2">With Custom Classes</h3>
          <pre class="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto"><code>&lt;NavLink 
  to="/components" 
  :active="$route.path === '/components'"
  class="custom-nav-item"
&gt;
  Components
&lt;/NavLink&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- Props Documentation -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Props Documentation</h2>
      <div class="bg-gray-50 p-6 rounded-lg">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">to</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td class="px-6 py-4 text-sm text-gray-500">The route path for the navigation link</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">active</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                <td class="px-6 py-4 text-sm text-gray-500">Whether the link is in active state (bold font weight)</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">class</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                <td class="px-6 py-4 text-sm text-gray-500">Additional CSS classes to apply</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Events Documentation -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 font-sans">Events</h2>
      <div class="bg-gray-50 p-6 rounded-lg">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payload</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">click</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">MouseEvent</td>
                <td class="px-6 py-4 text-sm text-gray-500">Emitted when the link is clicked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// NavLinkShowcase component
</script>
