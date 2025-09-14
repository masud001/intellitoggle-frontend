<template>
  <footer class="bg-[#ECEBF5] pt-[102px] pb-[93px]">
    <div class="container-custom !pt-[0px] !pb-[0px]">
      <!-- Desktop Layout (1024px+) -->
     
        <div class="flex  justify-items-stretch gap-x-[240px]">
          <!-- Company Info & Social -->
          <div class="col-span-1 w-full max-w-[359px] justify-self-start">
              <div class="flex items-center">
                <nuxt-img 
                  src="/images/logo-dark.svg" 
                  alt="IntelliToggle" 
                  class="w-[170px] h-[50.8px]" 
                  width="170px"
                  height="50.8px"
                  loading="eager"
                  preload
                />
              </div>
              <p class="text-[18px] text-[#4a4b4d] font-sans font-regular my-[10px]">
                IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
              </p>
              <a href="#" class="w-[30px] h-[30px] bg-gray-600 rounded-full flex items-center justify-center">
                <nuxt-img 
                  src="/icons/logo-github-icon.svg" 
                  alt="Github" 
                  class="hover:scale-110 transition-transform duration-200" 
                  width="14"
                  height="14"
                />
              </a>
          </div>

          <div class="col-span-1 flex gap-x-[118px] w-full min-w-[510px] justify-self-center">
              <!-- Resources Links -->
            <div class="col-span-1">
              <h4 class="font-sans text-[#5f5f60] text-[18px] font-regular mb-[24px]">Resources</h4>
              <ul class="space-y-[16px]">
                <li><a href="#" class="font-sans font-semibold text-[#323338] text-[18]">Why IntelliToggle is different</a></li>
                <li><a href="#" class="font-sans font-semibold text-[#323338] text-[18]">Customer Support</a></li>
                <li><a href="#" class="font-sans font-semibold text-[#323338] text-[18]">Terms & conditions</a></li>
                <li><a href="#" class="font-sans font-semibold text-[#323338] text-[18]">Privacy Policy</a></li>
              </ul>
            </div>

            <!-- Company Links -->
            <div class="col-span-1">
              <h4 class="font-sans text-[#5f5f60] text-[18px] font-regular  mb-[24px]">Company</h4>
              <ul class="space-y-[16px]">
                <li><a href="#" class="font-sans font-semibold text-[#323338] text-[18]">Pricing</a></li>
                <li><a href="#" class="font-sans font-semibold text-[#323338] text-[18]">Documentation</a></li>
                <li><a href="#" class="font-sans font-semibold text-[#323338] text-[18]">About Us</a></li>
              </ul>
            </div>
          </div>
        <!-- Newsletter Subscription -->
        <div class="col-span-1 w-[321px] justify-self-end">
            <h4 class="font-sans font-semibold text-[#323338] text-[18] mb-[27px]">Subscribe to Newsletter</h4>
            <div class="flex">
              <input 
                type="email" 
                placeholder="Enter email address" 
                class="flex-1 px-[16px] py-[13px] text-[#8a8a8a] font-[13px] outline-none focus:outline-none bg-white rounded-l-[6.7px]  font-regular font-sans leading-1.57"
              />
              <button class=" font-[13px] font-semibold font-sans capitalize px-[24px] py-[10.7px] bg-[#f9a71e] rounded-r-[6.7px]">
                <span class="custom-text">subscribe</span>
              </button>
            </div>
        </div>
          

          

          

          
        </div>
     
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
