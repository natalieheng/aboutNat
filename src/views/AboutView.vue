<template>
    <main id="about">
        <div class="container-fluid d-flex align-items-center" id="about-background">
            <div class="row">
                <div
                    class="col-xl-6 col-lg-6 order-lg-1 col-12 order-2 mb-4 d-flex align-items-center write-up"
                >
                    <div class="row">
                        <p class="heading-3 pb-2 col-12">About Me</p>
                        <p class="paragraph-3 col-12">
                            Hi there, I am Natalie, an aspiring data analyst. I am currently in my
                            final year of studies in SMU where i am doing a Bachelors degree in
                            Economics with a Major in Data Science and Analytics. During my studies,
                            I have developed a strong interest in data analytics and data science,
                            specifically how it can be used to help businesses make better
                            decisions.
                        </p>
                        <p class="paragraph-3 col-12">
                            Currently, I am looking for a internship opportunity in the field of
                            data analytics. I am open to any opportunities that will allow me to
                            learn and grow as a data analyst. I have attached my resume at the
                            bottom of this page.
                        </p>
                        <p class="paragraph-3 col-12">
                            Please feel free to contact me if you have any opportunities or if you
                            would like to find out more about me!
                        </p>
                        <p class="heading-4 col-12">Technical skills :</p>
                        <div class="col-12 pb-3 paragraph-3">
                            <span class="badge ms-0">Python</span>
                            <span class="badge">Java</span>
                            <span class="badge">R Programming</span>
                            <span class="badge">MySQL</span>
                            <span class="badge">Excel</span>
                        </div>

                        <p class="heading-4 col-12">Data visualization tools :</p>
                        <div class="col-12 pb-3 paragraph-3">
                            <span class="badge ms-0">Tableau</span>
                        </div>
                    </div>
                </div>
                <div
                    class="col-xl-6 col-lg-6 order-lg-2 col-12 order-1 mb-4 d-flex align-items-center"
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
    padding-top: 6.5rem;
}

/* When larger than xl add 100 padding to about-background */
@media (min-width: 1440) {
    #about-background {
        padding-top: 150px;
    }
}
/* When smaller than md, img max width should be 40 */
@media (max-width: 1000px) {
    img {
        max-width: 40%;
    }
}

/* When bigger than md, write up's padding should be increased to 7.5rem */
@media (min-width: 1000px) {
    div .write-up {
        padding-left: 7.5rem;
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
    margin: 0.5rem;
}

.write-up {
    padding-left: 2.5rem;
}
</style>
