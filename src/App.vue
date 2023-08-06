<template>
    <NavigationBar />
    <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
            <component :is="Component" />
        </Transition>
    </RouterView>
    <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavigationBar from '@/components/layouts/NavigationBar.vue';
import Footer from '@/components/layouts/Footer.vue';
</script>

<style scoped>
/* Vue transitions */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-out;
}
</style>
