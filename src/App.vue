<script setup>
import { RouterView } from 'vue-router'
import HeaderNavbar from '@/components/layout/HeaderNavbar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
</script>

<template>
  <div id="app">
    <HeaderNavbar v-if="!$route.meta.hideHeaderFooter" />
    <RouterView />
    <FooterSection v-if="!$route.meta.hideHeaderFooter" />
  </div>
</template>

<style scoped></style>
