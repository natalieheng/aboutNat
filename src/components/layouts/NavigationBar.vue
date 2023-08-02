<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Contextual links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                </ul>
                <ul class="navbar-center mb-lg-0">
                    <router-link class="heading-4" to="/">About Natalie</router-link>
                </ul>

                <!-- Social media links -->
                <!-- At the end -->
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-instagram"></i> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-telegram"></i> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-linkedin"></i> </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type router from '../../router';

export default defineComponent({
    name: 'NavigationBar',
});
</script>

<style scoped>
.nav-item {
    padding: 0 0.75rem;
}

.nav-link {
    font-size: 0.9rem;
}

.company-logo {
    width: 4.5rem;
}

.navbar-center {
    position: absolute;
    left: 49%;
    transform: translateX(-49%);
}

.navbar {
    padding: 1rem;
}

.heading-4 {
    /* Remove link colours */
    color: inherit;
    text-decoration: none;
}

a.heading-4:hover {
    color: var(--color-brown);
}

a.nav-link:hover {
    color: var(--color-brown);
}
</style>
