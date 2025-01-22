<script setup>
import { RouterView } from 'vue-router'
import HeaderNavbar from '@/components/layout/HeaderNavbar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
</script>

<template>
  <HeaderNavbar />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
