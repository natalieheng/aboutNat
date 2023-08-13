<template>
    <main id="personalExpenses">
        <div class="container-fluid d-flex align-items-center" id="personal-expenses-background">
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-4 order-lg-1 col-12 order-2 mb-4 d-flex align-items-center">
                    <div class="row">
                        <p class="heading-3 pb-2 col-12">Personal Expenses analysis</p>
                        <p class="paragraph-3 col-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
                            sunt ut, rem atque quod quaerat veniam modi sequi dolor assumenda odit,
                            tempora nisi. Sed ad quibusdam earum veniam? Quo! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Magni sit dignissimos saepe cumque.
                            Officiis quidem, excepturi sapiente rem repellat, esse id nobis eius ad
                            ex necessitatibus nulla animi error adipisci?
                        </p>
                        <p class="paragraph-3 col-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
                            sunt ut, rem atque quod quaerat veniam modi sequi dolor assumenda odit,
                            tempora nisi. Sed ad quibusdam earum veniam? Quo! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Magni sit dignissimos saepe cumque.
                            Officiis quidem, excepturi sapiente rem repellat, esse id nobis eius ad
                            ex necessitatibus nulla animi error adipisci?
                        </p>

                        <p class="heading-4 col-12">Languages used :</p>
                        <div class="col-12 pb-3 paragraph-3">
                            <span class="badge me-2">Python</span>
                        </div>

                        <p class="heading-4 col-12">Data visualization tools used :</p>
                        <div class="col-12 pb-3 paragraph-3">
                            <span class="badge me-2">Tableau</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 order-lg-2 col-12 order-1 mb-4 d-flex align-items-center">
                    <img
                        src="@/assets/project-images/cover-1.png"
                        alt="About image"
                        class="mx-auto d-block"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts"></script>

<style scoped>
#personal-expenses-background {
    background-color: var(--color-beige);
    min-height: 40rem;
    max-height: 150rem;
    padding-top: 100px;
}

/* When smaller than lg add 100 padding to about-background */
@media (max-width: 992px) {
    #about-background {
        padding-top: 100px;
    }
}

img {
    max-width: 100%;
    height: auto;
    min-width: 50%;
    min-height: 50%;
    max-width: 60%;
}

.badge {
    background-color: var(--color-brown);
    font-weight: normal;
    padding: 10px;
}
</style>
