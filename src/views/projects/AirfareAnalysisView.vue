<template>
    <main id="airfaresAnalysis">
        <div class="container-fluid d-flex align-items-center" id="airfare-analysis-background">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div
                            class="col-xl-6 col-lg-6 order-lg-1 col-12 order-2 mb-4 d-flex align-items-center write-up"
                        >
                            <div class="row">
                                <p class="heading-3 pb-2 col-12">Project 2 : Airfare analysis</p>
                                <p class="paragraph-3 col-12">
                                    The goal of this project was to analyze the trends of the fares
                                    in different airlines in order to conclude the reasons for the
                                    fluctuations in the airplane flight fares. I made use of this
                                    project to practice on the the skills I picked up with the
                                    previous project using Python and Tableau, only this time I
                                    worked with a larger dataset.
                                </p>
                                <p class="paragraph-3 col-12">
                                    This dataset was a good simulation of how real-world data would
                                    be like, and it helped me pick up different data-cleaning
                                    techniques. Compared to my first project, it had more null
                                    values, or wrong values in the wrong rows and columns which had
                                    to be dealt with before I worked on the data analysis portion of
                                    the project.
                                </p>
                                <p class="paragraph-3 col-12">
                                    The data visualization portion of the project was also not easy
                                    as if had to take into account the different variables, along
                                    with its large dataset. Hence, I took much longer to complete
                                    this project compared to the first one, however, I also managed
                                    to learn and pick up more data cleaning and visualization skills
                                    with this project.
                                </p>
                                <p class="paragraph-3 col-12">
                                    Github repository:
                                    <a
                                        class="paragraph-3"
                                        href="https://github.com/natalieheng/Project-2-Airline-Flight-Fares"
                                        target="_blank"
                                        >Link</a
                                    >
                                </p>
                                <p class="paragraph-3 col-12">
                                    Tableau visualization:
                                    <a
                                        class="paragraph-3"
                                        href="https://public.tableau.com/app/profile/natalie.heng/viz/AirlineFlightFares/Airlines"
                                        target="_blank"
                                        >Link</a
                                    >
                                </p>

                                <p class="heading-4 col-12">Languages used :</p>
                                <div class="col-12 pb-3 paragraph-3">
                                    <span class="badge ms-0">Python</span>
                                </div>

                                <p class="heading-4 col-12">Data visualization tools used :</p>
                                <div class="col-12 pb-3 paragraph-3">
                                    <span class="badge ms-0">Tableau</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-xl-6 col-lg-6 order-lg-2 col-12 order-1 mb-4 d-flex align-items-center py-2"
                        >
                            <img
                                src="@/assets/project-images/cover-2.png"
                                alt="Personal Expense Project image"
                                class="mx-auto d-block"
                            />
                        </div>
                    </div>
                </div>
                <!-- Previous and Next project -->
                <div class="col-12">
                    <!-- Left button -->
                    <CustomPagination
                        :prev-link="prevLink"
                        :next-link="nextLink"
                        prev-text="Previous"
                        next-text="Back to all"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import CustomPagination from '@/components/ui/CustomPagination.vue';

const prevLink = '/projects/personal-expenses';
const nextLink = '/projects';
</script>

<style scoped>
#airfare-analysis-background {
    background-color: var(--color-beige);
    min-height: 40rem;
    max-height: 150rem;
    padding-top: 6.5rem;
}

img {
    max-width: 100%;
    height: auto;
    min-width: 50%;
    min-height: 50%;
    max-width: 70%;
}

/* When later than xl, img max width is 60% */
@media (min-width: 1440px) {
    img {
        max-width: 60%;
    }
}

/* When smaller than md, img max width should be 40 */
@media (max-width: 987px) {
    img {
        max-width: 40%;
    }
}

.badge {
    background-color: var(--color-brown);
    font-weight: normal;
    padding: 10px;
    margin: 0.25rem 0.5rem;
}

@media (min-width: 1000px) {
    div .write-up {
        padding-left: 7.5rem;
    }
}

.write-up {
    padding-left: 2.5rem;
}
</style>
