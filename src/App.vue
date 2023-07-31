<template>
    <NavigationBar />
    <RouterView />
    <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavigationBar from '@/components/layouts/NavigationBar.vue';
import Footer from '@/components/layouts/Footer.vue';
</script>

<style scoped></style>
