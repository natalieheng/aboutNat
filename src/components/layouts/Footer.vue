<template>
    <footer class="mt-3 p-2 d-flex flex-column h-100">
        <div class="container-xxl">
            <div class="row">
                <div class="col-2">
                    <div class="row">
                        <div class="heading-4 pb-3">About Natalie</div>
                        <a class="paragraph-3 color-brown">natalieheng.2020@economics.smu.edu.sg</a>
                    </div>
                </div>
                <div class="col-8"></div>
                <div class="col-2">
                    <div class="row">
                        <div class="heading-4 pb-3">Socials</div>
                        <a class="paragraph-3 color-brown">Instagram</a>
                        <a class="paragraph-3 color-brown mt-1">Telegram</a>
                        <a class="paragraph-3 color-brown mt-1">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
});
</script>

<style scoped>
/* Override colour for a with color brown */
.color-brown {
    color: var(--color-brown);
}
</style>
