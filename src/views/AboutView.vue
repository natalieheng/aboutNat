<template>
    <main id="about">
        <div class="container-fluid d-flex align-items-center" id="about-background">
            <div class="row">
                <div class="col-xl-2 col-lg-0"></div>
                <div
                    class="col-xl-4 col-lg-6 order-lg-1 col-12 order-2 mb-4 d-flex align-items-center ps-4"
                >
                    <div class="row">
                        <p class="heading-3 pb-2 col-12">About Me</p>
                        <p class="paragraph-3 col-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
                            sunt ut, rem atque quod quaerat veniam modi sequi dolor assumenda odit,
                            tempora nisi. Sed ad quibusdam earum veniam? Quo! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Magni sit dignissimos saepe cumque.
                            Officiis quidem, excepturi sapiente rem repellat, esse id nobis eius ad
                            ex necessitatibus nulla animi error adipisci?
                        </p>
                        <p class="paragraph-3 col-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iusto
                            ipsum quis atque at dolorem tenetur magni ad omnis, voluptates quia,
                            architecto numquam molestiae. Harum provident reiciendis nobis molestias
                            tempore.
                        </p>
                        <p class="heading-4 col-12">Technical skills :</p>
                        <div class="col-12 pb-3 paragraph-3">
                            <span class="badge me-2">Python</span>
                            <span class="badge mx-2">R Programming</span>
                            <span class="badge mx-2">MySQL</span>
                            <span class="badge mx-2">Excel</span>
                        </div>

                        <p class="heading-4 col-12">Data visualization tools :</p>
                        <div class="col-12 pb-3 paragraph-3">
                            <span class="badge me-2">Tableau</span>
                        </div>
                    </div>
                </div>
                <div
                    class="col-xl-5 col-lg-6 order-lg-2 col-12 order-1 mb-4 d-flex align-items-center"
                >
                    <img src="@/assets/images/me.jpg" alt="About image" class="mx-auto d-block" />
                </div>
                <div class="col-xl-1 order-3"></div>
            </div>
        </div>
    </main>
</template>

<style scoped>
#about-background {
    background-color: var(--color-beige);
    min-height: 40rem;
    max-height: 150rem;
    padding-top: 50px;
}

/* When larger than xl add 100 padding to about-background */
@media (min-width: 1440) {
    #about-background {
        padding-top: 100px;
    }
}

img {
    max-width: 100%;
    height: auto;
    min-width: 60%;
    min-height: 50%;
    max-width: 65%;
}

.badge {
    background-color: var(--color-brown);
    font-weight: normal;
    padding: 10px;
}
</style>
