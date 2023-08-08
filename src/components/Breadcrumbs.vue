<script setup>
defineProps({
    section: String,
    path: String,
    title: String,
});
</script>

<template>
    <div class="breadcrumbs">
        <router-link class="breadcrumbs-link" to="/">
            Главная
        </router-link>
        <span class="breadcrumbs-dash" v-if="title">—</span>
        <router-link v-if="title" class="breadcrumbs-link" :to="`/${path}`">
            {{ section }}
        </router-link>
        <span class="breadcrumbs-dash">—</span>
        <p class="breadcrumbs-btn" to="/">
            {{ title ? title : section }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-top: 26px;
    margin-bottom: 84px;

    &-link {
        font-weight: 500;
        font-size: 17px;
        line-height: 140%;
        letter-spacing: 0.02em;

    }

    &-btn {
        font-weight: 500;
        font-size: 17px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: var(--color-gray);
    }
}
</style>