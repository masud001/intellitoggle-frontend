<template>
  <div class="relative">
    <Header :key="$route.path" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Default layout component
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
