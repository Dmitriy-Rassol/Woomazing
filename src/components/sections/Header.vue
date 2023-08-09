<script setup>
import Slider from '@/components/Slider.vue';
import Button from '@/components/Button.vue'
import { HEADER_SLIDER } from '@/shared/constant';

</script>

<template>
    <div class="header">
        <div class="header-wrapper">
            <Slider class="header-slider" :sliderContent="HEADER_SLIDER" :navigation="false">
                <template #content="slotProps">
                    <h1 class="header-slider__title">{{ slotProps.title }}</h1>
                    <p class="header-slider__desc">{{ slotProps.desc }}</p>
                </template>
                <template #btn>
                    <Button class="header-slider__btn" :arrow="true" @path="$router.push('/shop/category')" />
                </template>
            </Slider>
            <div class="header-img">
                <ProgressiveImage lazy-placeholder placeholder-src="src/assets/img/header/header-main.png"
                    src='src/assets/img/header/header-main.png' alt="main" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 825px;
        top: 0;
        left: calc(50% + 75px);
        z-index: -2;
        background-color: var(--bg-lase);
    }

    &-wrapper {
        display: grid;
        grid-template-columns: minmax(500px, 665px) minmax(200px, 410px);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    &-img {
        width: 100%;
        height: 100%;
        position: relative;
        padding-top: 5px;
        padding-bottom: 60px;
        z-index: 1;

        &::after {
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            bottom: 0;
            left: -120px;
            z-index: 10;
            background: url('/src/assets/img/header/header-left.png') no-repeat bottom left;
        }

        &::before {
            position: absolute;
            content: '';
            top: 0;
            right: -160px;
            bottom: 90px;
            left: 0;
            z-index: 10;
            background: url('/src/assets/img/header/header-right.png') no-repeat center right;
        }
    }

    &-slider {
        margin-top: 150px;

        &__title {
            text-align: left;
            font-weight: 500;
            font-size: 55px;
            line-height: 110%;
            letter-spacing: 0.02em;
            margin-bottom: 45px;
            max-width: 563px;
        }

        &__desc {
            max-width: 385px;
            font-size: 20px;
            line-height: 140%;
            text-align: right;
            letter-spacing: 0.02em;
            margin-bottom: 52px;
        }

        &__btn {
            padding-left: 90px;
        }

    }
}
</style>