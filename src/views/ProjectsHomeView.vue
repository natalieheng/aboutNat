<template>
    <main id="project">
        <div class="container-fluid" id="project-background">
            <!-- Featuring projects -->
            <div class="container-xxl">
                <div class="row">
                    <div class="col-lg-6 pb-4 text-center">
                        <RouterLink to="/projects/personal-expenses" class="d-inline">
                            <img
                                src="@/assets/project-images/cover-1.png"
                                alt="Project 1"
                                class="d-inline"
                            />
                        </RouterLink>
                    </div>
                    <div class="col-lg-6 pb-4 text-center">
                        <RouterLink to="/projects/airfare-analysis" class="d-inline">
                            <img
                                src="@/assets/project-images/cover-2.png"
                                alt="About image"
                                class="d-inline"
                            />
                        </RouterLink>
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
    padding-top: 6.5rem;
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
