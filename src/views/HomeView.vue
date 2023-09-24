<script setup lang="ts"></script>

<template>
    <main id="home">
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
                        Hi! I am Natalie, a final year student in SMU, eagerly seeking opportunities
                        to apply my analytical skills and classroom knowledge to real-world
                        projects. Through my coursework and dedication, I've developed a strong
                        foundation in data analysis techniques, and I'm excited to contribute to
                        organizations looking to harness the power of data-driven insights. You can
                        find out more about my background and skills below!
                    </p>
                </div>
                <div class="col-4"></div>
                <!-- Learn more button to link to about page -->
                <div class="col-12 pt-4 d-flex justify-content-center">
                    <router-link to="/about">
                        <button class="button-1 paragraph-3">Learn more</button>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- Projects -->
        <div class="container-fluid p-0 d-flex" id="project-background"></div>

        <div></div>
    </main>
</template>

<style scoped>
#header-background {
    background-image: url('@/assets/images/header-image.jpg');
    background-size: cover;
    background-position: center;
    height: 75vh;
}

#project-background {
    border-bottom: 8px solid var(--color-brown);
    padding: 20px;
    height: 60vh;
}

.paragraph-1 {
    width: 25%;
}

.button-1 {
    background-color: var(--color-brown);
    color: var(--color-white);
    border: none;
    border-radius: 30px;
    padding: 20px 30px;
    cursor: pointer;
    width: 150px;
}

.heading-3 {
    font-weight: lighter;
}
</style>
