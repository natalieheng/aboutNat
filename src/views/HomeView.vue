<script setup lang="ts"></script>

<template>
    <!-- Header image -->
    <div
        class="container-fluid p-0 d-flex justify-content-center align-items-center"
        id="header-background"
    >
        <div class="row">
            <div class="col-12 pb-4 d-flex justify-content-center">
                <p class="heading-3">Aspiring Data Analyst</p>
            </div>
            <div class="col-4"></div>
            <div class="col-4 d-flex justify-content-center">
                <p class="paragraph-3 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi sunt ut,
                    rem atque quod quaerat veniam modi sequi dolor assumenda odit, tempora nisi. Sed
                    ad quibusdam earum veniam? Quo!
                </p>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    <!-- Projects -->
    <div class="container-fluid p-0 d-flex" id="project-background"></div>

    <div></div>
</template>

<style scoped>
#header-background {
    background-image: url('@/assets/images/header-image.jpg');
    background-size: cover;
    background-position: center;
    height: 75vh;
}

#project-background {
    border-bottom: 10px solid var(--color-brown);
    padding: 20px;
    height: 60vh;
}

.paragraph-1 {
    width: 25%;
}
</style>
