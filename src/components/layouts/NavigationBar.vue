<template>
    <nav class="navbar navbar-expand-md fixed-top">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header">
                    <p class="offcanvas-title heading-4" id="offcanvasNavbarLabel">About Natalie</p>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <!-- Contextual links -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <router-link class="nav-link" to="/projects">Projects</router-link>
                        </li>
                    </ul>

                    <ul class="navbar-center mb-lg-0 d-none d-md-block">
                        <router-link class="heading-4" to="/">About Natalie</router-link>
                    </ul>

                    <!-- Social media links -->
                    <!-- At the end -->
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <a class="nav-link" href="#"><i class="bi bi-instagram"></i> </a>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <a class="nav-link" href="#"><i class="bi bi-telegram"></i> </a>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <a class="nav-link" href="#"><i class="bi bi-linkedin"></i> </a>
                        </li>
                    </ul>
                </div>
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
    left: 49%;
    transform: translateX(-49%);
    padding-top: 10px;
}

.navbar {
    padding: 0.75rem;
}

.heading-4 {
    /* Remove link colours */
    color: inherit;
    text-decoration: none;
}

.offcanvas-title {
    padding: 0 0.75rem;
}

a.heading-4:hover {
    color: var(--color-brown);
}

a.nav-link:hover {
    color: var(--color-brown);
}

a.router-link-active {
    color: var(--color-brown);
    text-underline-offset: 0.25rem;
    text-decoration: underline;
}

/* heading 4 links do not show any css */
a.heading-4 {
    text-decoration: none;
    color: inherit;
}
</style>
