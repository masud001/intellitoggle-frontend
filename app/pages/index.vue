<template>
  <div class="">
    <!-- Hero Section -->
    <Hero />

    <!-- video section -->
    <div class="video-section relative z-10 max-w-[1440px] h-[1024px] w-full mx-auto rounded-xl shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-[#99a0ae] bg-white">
      <div class="video-play-button absolute inset-0 flex items-center justify-center">
        <nuxt-img 
          src="/icons/video-play-button-icon.svg" 
          alt="Play Video" 
          class="w-[155.7px] h-[134.7px] cursor-pointer hover:scale-105 transition-transform duration-200"
          width="155.7"
          height="134.7"
          loading="eager"
          preload
        />
      </div>
    </div>
    <!-- video section end -->

    <!-- Features Section -->
    <section class="py-20">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4 font-satoshi">
            Why Choose Our Platform?
          </h2>
          <p class="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
            Discover the features that make our platform the perfect choice for your business needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-blue-600 font-bold text-xl">⚡</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 font-satoshi">High Performance</h3>
            <p class="text-gray-600 font-sans leading-relaxed">
              Experience exceptional speed and reliability with our optimized infrastructure and modern technology stack.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-green-600 font-bold text-xl">🔒</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 font-satoshi">Enterprise Security</h3>
            <p class="text-gray-600 font-sans leading-relaxed">
              Your data is protected with industry-leading security measures and guaranteed 99.9% uptime.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-purple-600 font-bold text-xl">🎨</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 font-satoshi">Modern Interface</h3>
            <p class="text-gray-600 font-sans leading-relaxed">
              Enjoy a clean, intuitive interface designed with the latest user experience principles.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-orange-600 font-bold text-xl">📱</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 font-satoshi">Responsive Design</h3>
            <p class="text-gray-600 font-sans leading-relaxed">
              Seamless experience across all devices with our mobile-first responsive design approach.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-teal-600 font-bold text-xl">⚙️</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 font-satoshi">Simple Integration</h3>
            <p class="text-gray-600 font-sans leading-relaxed">
              Easy-to-use APIs with comprehensive documentation and dedicated support team.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-pink-600 font-bold text-xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 font-satoshi">Scalable Solution</h3>
            <p class="text-gray-600 font-sans leading-relaxed">
              Built to grow with your business from startup to enterprise scale with flexible architecture.
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
          Join thousands of satisfied customers who trust our platform for their business needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-medium font-sans transition-colors">
            Start Free Trial
          </button>
          <button class="px-8 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-blue-600 font-medium font-sans transition-colors">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page component
useHead({
  title: 'Home - IntelliToggle',
  meta: [
    { name: 'description', content: 'Welcome to IntelliToggle - The intelligent solution for modern web applications.' }
  ]
})
</script>

<style scoped>
/* Additional page-specific styles can be added here */
</style>
