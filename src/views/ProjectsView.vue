<template>
    <main id="project">
        <div class="container-fluid" id="project-background">
            <!-- Featuring projects -->
            <div class="container-xxl">
                <div class="row">
                    <div class="col-6 py-3 d-flex justify-content-center">
                        <img
                            src="@/assets/project-images/cover-1.png"
                            alt="Project 1"
                            class="mx-auto d-block"
                        />
                    </div>
                    <div class="col-6 py-3 d-flex justify-content-center">
                        <img
                            src="@/assets/project-images/cover-2.png"
                            alt="About image"
                            class="mx-auto d-block"
                        />
                    </div>
                    <div class="col-6 py-3 d-flex justify-content-center">
                        <img
                            src="@/assets/project-images/cover-1.png"
                            alt="Project 1"
                            class="mx-auto d-block"
                        />
                    </div>
                    <div class="col-6 py-3 d-flex justify-content-center">
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

<style scoped>
#project-background {
    background-color: var(--color-beige);
    min-height: 70rem;
    padding-top: 100px;
}

img {
    height: auto;
    min-width: 60%;
    max-width: 100%;
    min-height: 60%;
    max-width: 60%;
}
</style>
