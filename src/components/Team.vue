<script setup>
import AppTitleSection from './AppTitleSection.vue';
import AppSlider from './AppSlider.vue';
import { TEAM } from '@/shared/constant.js'

</script>

<template>
    <div class="team">
        <AppTitleSection :title="'Команда мечты Womazing'" />
        <div class="team-wrapper">
            <AppSlider class="slider" :classActive="'team-pagination'" :sliderContent="TEAM" :navigation="true">
                <template #img="slotProps">
                    <img :src="`src/assets/img/team_slider/${slotProps.img}`">
                </template>
            </AppSlider>
            <div class="team-content">
                <h4 class="team-content__title">Для каждой</h4>
                <p class="team-content__desc">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                <p class="team-content__desc">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
                    подчеркивают достоинства каждой девушки.</p>
                <router-link :to="'/about'" class="team-content__link">
                    Подробнее о бренде
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.team {
    &-wrapper {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 124px;
    }

    &-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 28px;
        max-width: 255px;
        margin-left: auto;
    }

    &-content__title {
        font-weight: 500;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
    }

    &-content__desc {
        font-weight: 500;
        font-size: 17px;
        line-height: 140%;
        letter-spacing: 0.02em;
    }

    &-content__link {
        font-weight: 500;
        font-size: 17px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: var(--primary);
    }
}
</style>