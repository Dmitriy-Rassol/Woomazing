<script setup>
defineProps({
    title: {
        type: String
    }
})

const emit = defineEmits(['submitForm']);
</script>

<template>
    <h4 class="form-title">{{ title }}</h4>
        <form class="form" action="" @submit.prevent="emit('submitForm')">
            <slot name="input"></slot>
        </form>
</template>

<style lang="scss" scoped>
.form {
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding: 47px 0;

    &-title {
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.5px;
    }
}
</style>