<template>
  <div class="full-page">
    <div class="text-center text-primary-on">
      <router-link to="/" class="text-display-s font-display">Buddy House</router-link>
      <h1 class="text-display-m font-body py-4 mb-6 border-b">
        404
        <p>Page not Found</p>
      </h1>
      <p class="mb-4">The page you requested was not found.</p>
      <router-link to="/" class="text-display-m">回首頁</router-link>
    </div>
  </div>
</template>
<style scoped>
.full-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
