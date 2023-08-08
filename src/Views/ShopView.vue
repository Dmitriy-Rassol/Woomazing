<script setup>
import AppTitlePage from '../components/AppTitlePage.vue';

</script>

<template>
    <div class="shop">
        <AppTitlePage :title="'Магазин'" />
        <router-view/>
    </div>
</template>

<style lang="scss" scoped>
.shop {
    padding-top: 190px;
    padding-bottom: 130px;
}
</style>