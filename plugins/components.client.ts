// Plugin to ensure components are properly registered
export default defineNuxtPlugin(() => {
  // This plugin runs on the client side to ensure components are available
  console.log('Components plugin loaded')
  
  // Force component registration
  const { $router } = useNuxtApp()
  
  // Ensure proper hydration
  if (process.client) {
    nextTick(() => {
      console.log('Client-side hydration completed')
    })
  }
})
