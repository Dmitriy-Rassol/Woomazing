<script setup>
import { Carousel,Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue'

const props = defineProps({
    sliderContent: {
        type: Array,
        required: true,
    },
    navigation: {
        type: Boolean,
        default: true,
    },
    pagination: {
        type: Boolean,
        default: true,
    },
    classActive: {
        type: String,
        default: 'header-pagination',
    },

})

</script>

<template>
        <Carousel ref="carousel" :autoplay="5000" :wrap-around="true">
            <Slide class="carousel-slide" v-for="(slide, i) in sliderContent" :key="i">
                <slot name="content" :title="slide.title" :desc="slide.desc"></slot>
                <slot name="img" :img="slide.img"></slot>
                <slot name="btn"></slot>
            </Slide>
            <template #addons>
                <Navigation v-if="navigation"/>
                <Pagination :class="[classActive]" v-if="pagination" />
            </template>
        </Carousel>   
</template>

<style lang="scss" scoped>
.carousel {
    &-slide {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>