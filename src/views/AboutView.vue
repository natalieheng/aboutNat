<template>
    <div class="about">
        <div class="container-fluid d-flex align-items-center" id="about-background">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-lg-4 order-lg-1 col-12 order-2 mb-4 d-flex align-items-center">
                    <div class="row">
                        <p class="heading-3 pb-4 col-12">About Me</p>
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
                    </div>
                </div>
                <div class="col-lg-5 order-lg-2 col-12 order-1 mb-4 d-flex align-items-center">
                    <img src="@/assets/images/me.jpg" alt="About image" class="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#about-background {
    background-color: var(--color-beige);
    min-height: 100vh;
    max-height: 100%;
    padding-top: 100px;
}

img {
    max-width: 100%;
    height: auto;
    min-width: 50%;
    min-height: 50%;
    max-width: 60%;
}
</style>
