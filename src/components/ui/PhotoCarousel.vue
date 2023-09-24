<template>
    <div class="photo-carousel">
        <img :src="currentImage" alt="Carousel Image" class="img-fluid" />
        <div class="carousel-controls">
            <button @click="prevImage" class="btn btn-primary">Prev</button>
            <button @click="nextImage" class="btn btn-primary">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                'https://example.com/image1.jpg',
                'https://example.com/image2.jpg',
                'https://example.com/image3.jpg',
            ],
            currentIndex: 0,
        };
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        },
    },
};
</script>

<style scoped>
.photo-carousel {
    position: relative;
    width: 100%;
    height: 400px;
}

.carousel-controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.carousel-controls button {
    font-size: 2rem;
    padding: 1rem;
}

.carousel-controls button:focus {
    outline: none;
}

.carousel-controls button:first-child {
    margin-right: auto;
}

.carousel-controls button:last-child {
    margin-left: auto;
}
</style>
