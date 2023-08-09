<script setup>
import TitlePage from '@/components/TitlePage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Button from '@/components/Button.vue'

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const name = computed(() => {
    return route.name;
});
</script>

<template>
    <div class="about section">
        <TitlePage :title="name" />
        <Breadcrumbs :section="name" />
        <div class="about-wrapper">
            <div class="about-content">
                <div class="about-content__img">
                    <img src='src/assets/img/about/about-1.png' alt="main">
                </div>
                <div class="about-content__text">
                    <h4 class="about-content__title">Идея и женщина</h4>
                    <p class="about-content__desc">Womazing была основана в 2010-ом и стала одной из самых успешных компаний
                        нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из
                        членов семьи не является модельером.</p>
                    <p class="about-content__desc">Мы действуем по успешной формуле, прибегая к услугам известных модельеров
                        для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма
                        дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
                </div>
            </div>
            <div class="about-content">
                <div class="about-content__text">
                    <h4 class="about-content__title">Магия в деталях</h4>
                    <p class="about-content__desc">Первый магазин Womazing был открыт в маленьком городке на севере страны в
                        2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских
                        моделей. </p>
                    <p class="about-content__desc"> Несмотря на то, что по образованию основательница была адвокатом, ее
                        семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать
                        основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе
                        большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка
                        качественного prêt-a-porter попросту не существовало.</p>
                </div>
                <div class="about-content__img">
                    <img src="src/assets/img/about/about-2.png" alt="about-2">
                </div>
            </div>
            <Button class="center" @path="$router.push('/shop/category')" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about {
    &-content {
        display: flex;
        justify-content: space-between;
        gap: 49px;
        margin-bottom: 130px;

        &__img {
            min-width: 300px;
            max-width: 647px;

            & img {
                width: 647px;
                max-height: 1000px;
                min-height: 200px;
                aspect-ratio: 3/4;
                background-image: linear-gradient(to right,
                        #d6d7d8 0%,
                        #f8f8f8 10%,
                        #f8f8f8 20%,
                        #d6d7d8 100%);
                background-size: 200% 100%;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
                    0 2px 4px -2px rgb(0 0 0 / 0.1);
                animation: bgAnimate 1.2s linear infinite;
            }
        }
    }

    &-content__text {
        max-width: 542px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 46px;
    }

    &-content__title {
        font-size: 25px;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.5px;
    }

    &-content__desc {
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.34px;
    }
}
</style>