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
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <ul class="navbar-center mb-lg-0">
                    <p class="heading-4" href="#">About Natalie</p>
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
    width: 100%;
    left: 0;
    text-align: center;
}

.navbar {
    padding: 1rem;
}
</style>
