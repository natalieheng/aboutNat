<template>
    <div class="custom-pagination">
        <div class="row">
            <div class="col-6 d-flex justify-content-end text-center">
                <router-link :to="prevLink" :class="{ disabled: prevDisabled }">
                    <i class="bi bi-arrow-left arrow"></i>
                    <p class="navigation-button-wording">{{ prevText }}</p>
                </router-link>
            </div>
            <div class="col-6 d-flex justify-content-start text-center">
                <router-link :to="nextLink" :class="{ disabled: nextDisabled }">
                    <i class="bi bi-arrow-right arrow"></i>
                    <p class="navigation-button-wording">{{ nextText }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    prevLink: string;
    nextLink: string;
    prevText?: string;
    nextText?: string;
    prevDisabled?: boolean;
    nextDisabled?: boolean;
}>();
</script>

<style scoped>
.custom-pagination {
    padding: 0.5rem 2.5rem;
}

.arrow {
    font-size: 2rem;
    color: var(--color-brown);
}

/* On hover, navigation-word-button fade in */
.navigation-button-wording {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    font-size: 0.8rem;
    color: var(--color-brown);
}

.custom-pagination:hover .navigation-button-wording {
    opacity: 1;
}

a {
    /* Remove link colours */
    color: inherit;
    text-decoration: none;
}
</style>
