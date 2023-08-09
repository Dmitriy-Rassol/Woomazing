<script setup>
import TitlePage from '../components/TitlePage.vue';

</script>

<template>
    <div class="shop section">
        <TitlePage :title="'Магазин'" />
        <router-view/>
    </div>
</template>

<style lang="scss" scoped>
</style>