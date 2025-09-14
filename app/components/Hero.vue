<template>
  <!-- Hero Section -->
  <div class="header-section-background absolute top-0 left-0 w-full h-[1303px]"></div>
  <section class="hero-section">
    <div class="container-custom z-10 flex items-center !pt-[154.2px] !pb-[141px]">
      <div class="hero-content mx-auto w-full max-w-[1040px] text-center">
        <h1 class="text-[64px] font-bold text-white font-satoshi leading-[1.3] mb-[16px]">
          The First <span class="bg-[#f9a71e] px-[10px] rounded-[8px]">
            <span class="dart-native-text ">Dart-Native</span>
          </span> Feature Flag With DartCodeAI
        </h1>
        
        <p class="font-sans text-[32px] text-[#fefeff] font-semibold leading-[1.3] px-[150px]">
          Feature flags built for Dart, Ship faster, roll back safely, and scale with AI-powered delivery
        </p>
        
        <p class="font-sans text-[32px] text-[#f9a71e] font-semibold leading-[1.3]">
          Starting at just $1/month
        </p>
        
        <div class=" mt-[32px]">
          <!-- Call-to-Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-8 justify-center items-end">
            <div class="">
              <!-- Small Text -->
              <p class="text-[16px] font-medium font-sans text-[#dedede] mb-[6px]">
                Valid till 15th September,2025
              </p>
              <Button 
                buttonClass="min-w-[260px] !py-[7px]"
                textClass=" leading-none"
                size="lg"
              >
                Get Access
              </Button>
            </div>
            <Button 
              variant="sandbox-outline"
              buttonClass="min-w-[260px] !py-[7px]"
              textClass=" leading-none"
              size="lg"
            >
              Join AI Early Access
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- hero section end -->
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
</script>

<style scoped>
/* Hero Section Background */
.header-section-background {
  background-image:url('/hero-background-image.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
}

/* Dart-Native span styling similar to sandbox-text but with different font properties */
.dart-native-text {
  background-image: linear-gradient(to bottom, #42389e, #0f1026);
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  letter-spacing: inherit;
  text-align: center;
  display: inline-block;
  border-radius: 8px;
  background-color: yellow;
  font-size: inherit;
}

/* Responsive sizing for dart-native-text */
@media (max-width: 768px) {
  .dart-native-text {
    padding: 2px 8px;
    font-size: 0.8em;
  }
}

@media (max-width: 480px) {
  .dart-native-text {
    padding: 1px 6px;
    font-size: 0.7em;
  }
}
</style>
