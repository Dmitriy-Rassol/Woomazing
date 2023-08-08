<script setup>
import AppTitleSection from './AppTitleSection.vue'
import { IMPORTANTS } from '../shared/constant.js'
</script>

<template>
    <div class="importants">
        <AppTitleSection :title="'Что для нас важно'" />
        <div class="importants-list">
            <div class="importants-list__item" v-for="(important, i) in IMPORTANTS" :key="i">
                <img :src="`src/assets/img/importants/${important.img}`" :alt="important.title">
                <h4 class="importants-title">{{ important.title }}</h4>
                <p class="importants-desc">{{ important.desc }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.importants {
    &-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 75px;

        & img {
            margin-bottom: 37px;
        }


    }

    &-title {
        font-weight: 500;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        margin-bottom: 24px;
    }

    &-desc {
        font-weight: 500;
        font-size: 17px;
        line-height: 140%;
        letter-spacing: 0.02em;

    }
}
</style>