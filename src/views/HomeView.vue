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
                <div class="col-lg-4 col-2"></div>
                <div class="col-lg-4 col-8 d-flex justify-content-center">
                    <p class="paragraph-3 text-center">
                        Hi! I am Natalie, a fresh graduate from SMU majoring in Economics and Data Science and Analytics. I am currently looking for an entry-level position in Analytics and/or Data Science to solve business problems using underlying trends and insights derived from data. Skilled in Data analytics with Microsoft Excel, Python 3 and Tableau.

                        <br><br>You can find out more about my background and skills below or <a href="https://drive.google.com/file/d/1DgIwYI28OGEqfoUBXqhMAlsyO6SCfVG_/view?usp=sharing" target="_blank" class="paragraph-3">here</a>.

                    </p>
                </div>
                <div class="col-lg-4 col-2"></div>
                <!-- Learn more button to link to about page -->
                <div class="col-12 pt-4 d-flex justify-content-center">
                    <router-link to="/about">
                        <button class="button-1 paragraph-3">About me</button>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- Projects -->
        <div class="container-fluid p-0" id="project-background">
            <p class="heading-4 past-projects">Past projects:</p>
            <!-- Links to past projects -->
            <div class="row past-projects pe-2">
                <div class="col-xl-2 col-lg-3 col-md-4 col-12">
                    <RouterLink to="/projects/personal-expenses" class="d-inline">
                        <img
                            src="@/assets/project-images/cover-1.png"
                            alt="Project 1"
                            class="d-inline"
                        />
                    </RouterLink>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-12 pe-2">
                    <RouterLink to="/projects/airfare-analysis" class="d-inline">
                        <img
                            src="@/assets/project-images/cover-2.png"
                            alt="Project 2"
                            class="d-inline"
                        />
                    </RouterLink>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
#header-background {
    background-image: url('@/assets/images/header-image.jpg');
    background-size: cover;
    background-position: center;
    height: 85vh;
}

#project-background {
    border-bottom: 8px solid var(--color-brown);
    padding: 20px;
    margin-top: 1.5rem;
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

.heading-3,
.heading-4 {
    font-weight: lighter;
}

.past-projects {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
}

img {
    height: 20rem;
    width: auto;
    padding-bottom: 1.5rem;
}
</style>
