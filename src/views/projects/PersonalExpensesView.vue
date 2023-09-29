<template>
    <main id="personalExpenses">
        <div class="container-fluid d-flex align-items-center" id="personal-expenses-background">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div
                            class="col-xl-6 col-lg-6 order-lg-1 col-12 order-2 mb-4 d-flex align-items-center write-up"
                        >
                            <div class="row">
                                <p class="heading-3 pb-2 col-12">
                                    Project 1 : Personal Expenses analysis
                                </p>
                                <p class="paragraph-3 col-12">
                                    The goal of this project was to do an analysis of my personal
                                    expenditures. As this was my first personal project, I made use
                                    of a smaller and simpler dummy dataset with the same idea in
                                    mind. The objective was to familiarize myself with using Python
                                    for data cleaning and basic statistical analysis, as well as
                                    Tableau to do data visualization.
                                </p>
                                <p class="paragraph-3 col-12">
                                    I started this project by first cleaning up the data. As this
                                    was a small dummy dataset, there was not much cleaning needed. I
                                    mainly ensured that the data types for each attribute was
                                    correctly suited for me to do further statistical analysis.
                                </p>
                                <p class="paragraph-3 col-12">
                                    After that, I completed simple analyses and found out how much I
                                    spent on average for each month, and which categories I spent
                                    the most on. This would help me when I decide to lower my
                                    spending as I would know which categories I can save more in.
                                    Lastly, I worked on a simple dashboard to show my findings.
                                </p>
                                <p class="paragraph-3 col-12">
                                    Github repository:
                                    <a
                                        class="paragraph-3"
                                        href="https://github.com/natalieheng/Project-1---Purchases-and-Transaction"
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
                            class="col-xl-6 col-lg-6 order-lg-2 col-12 order-1 mb-4 d-flex align-items-center"
                        >
                            <img
                                src="@/assets/project-images/cover-1.png"
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
                        prev-text="View all"
                        next-text="Next"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import CustomPagination from '@/components/ui/CustomPagination.vue';
const prevLink = '/projects';
const nextLink = '/projects/airfare-analysis';
</script>

<style scoped>
#personal-expenses-background {
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
    /* 0.25 for top and bottom 0.5 for left and right */
    margin: 0.25rem 0.5rem;
}

/* When bigger than md, write up's padding should be increased to 7.5rem */
@media (min-width: 1000px) {
    div .write-up {
        padding-left: 7.5rem;
    }
    .row .custom-pagination {
        padding-left: 7rem;
        padding-right: 7rem;
    }
}

.write-up {
    padding-left: 2.5rem;
}
</style>
