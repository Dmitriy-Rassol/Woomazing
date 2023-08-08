<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '',
        require: true
    }
})
</script>

<template>
    <h2 class="title">{{ title }}</h2>
</template>

<style lang="scss" scoped>
.title {
    font-weight: 500;
    font-size: 55px;
    line-height: 110%;
    letter-spacing: 0.02em;
}
</style>