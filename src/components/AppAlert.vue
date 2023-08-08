<script setup>
defineProps({
    message: {
        type: String,
        required: true,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: false,
        required: true
    }
})
</script>

<template>
    <div :class="['alert', { 'alert-active': isActive } ]">
        <div>{{ message }}</div>
    </div>
</template>

<style lang="scss" scoped>
.alert {
    background: var(--primary);
    display: inline-block;
    position: fixed;
    right: 0px;
    top: 100px;
    z-index: 10;
    border-radius: 10px 0 0 10px;
    padding: 20px 50px;
    font-weight: 500;
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.02em;
    -webkit-box-shadow: 0px 10px 10px 5px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 10px 10px 5px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 10px 10px 5px rgba(34, 60, 80, 0.2);
    color: var(--color-white);
    transform: translateX(110%);
    transition: all var(--tr);

    &-active {
        transform: translateX(0%);
    }
}
</style>