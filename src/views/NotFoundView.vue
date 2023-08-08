<template>
    <div class="not-found">
        <IconNotFound />
        <div class="not-found__content">
            <h1>404</h1>
            <span>Произошла ошибка</span>
            <span>Данная страница не найдена</span>
            <AppButton :title="'На главную'" @path="$router.push('/')" />
        </div>
    </div>
</template>

<script setup>
import IconNotFound from '../components/icons/IconNotFound.vue'
import AppButton from '../components/AppButton.vue'
</script>

<style lang="scss" scoped>
.not-found {
    padding: 130px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    min-height: fit-content ;


    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        & h1 {
            font-size: 154px;
            margin: 15px 0px;
            font-weight: bold;
        }

        & span {
            font-size: 34px;
        }

    }
}
</style>