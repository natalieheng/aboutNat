<template>
    <main id="project">
        <div class="container-fluid" id="project-background">
            <!-- Featuring projects -->
            <div class="container-xxl">
                <div class="row">
                    <div class="col-lg-6 pb-4 d-flex justify-content-center">
                        <RouterLink to="/projects/personal-expenses">
                            <img
                                src="@/assets/project-images/cover-1.png"
                                alt="Project 1"
                                class="mx-auto d-block"
                            />
                        </RouterLink>
                    </div>
                    <div class="col-lg-6 pb-4 d-flex justify-content-center">
                        <img
                            src="@/assets/project-images/cover-2.png"
                            alt="About image"
                            class="mx-auto d-block"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectsHomeView',
    components: {},
    setup() {
        return {};
    },
});
</script>

<style scoped>
#project-background {
    background-color: var(--color-beige);
    min-height: 40rem;
    padding-top: 125px;
}

@media (min-width: 1440) {
    #project-background {
        padding-top: 100px;
    }
}

img {
    height: auto;
    min-width: 60%;
    max-width: 100%;
    min-height: 60%;
    max-width: 60%;
}
</style>
