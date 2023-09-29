<template>
    <footer class="mt-3 px-4 d-flex flex-column h-100">
        <div class="container-xxl">
            <div class="row">
                <div class="col-sm-2 py-4">
                    <div class="row">
                        <div class="heading-4 pb-3">Contact</div>
                        <a class="paragraph-3 color-brown">natalieheng.2020@economics.smu.edu.sg</a>
                    </div>
                </div>
                <div class="col-8"></div>
                <div class="col-sm-2 py-4">
                    <div class="row">
                        <div class="heading-4 pb-3">Socials</div>
                        <a class="paragraph-3 color-brown" href="https://github.com/natalieheng"
                            >GitHub</a
                        >
                        <a
                            class="paragraph-3 color-brown mt-1"
                            href="https://linkedin.com/in/natalie-heng-shu-hui"
                            >LinkedIn</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheFooter',
});
</script>

<style scoped>
/* Override colour for a with color brown */
.color-brown {
    color: var(--color-brown);
}

.container-xxl {
    max-width: 1800px;
    height: 20vh;
}

.heading-4 {
    font-weight: lighter;
}
</style>
