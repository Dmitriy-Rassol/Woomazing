<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="quantity">
        <div class="quantity-content">Показано: {{ count}} из {{ totalCount }} товаров</div>
    </div>
</template>

<script setup>
defineProps({
    totalCount: {
        type: Number
    },
    count: {
        type: Number,
        default: 9
    }
})
 
</script>

<style lang="scss" scoped>
.quantity {
    &-content {
        font-weight: 500;
        font-size: 17px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: var(--color-quantity);
        padding-bottom: 65px;
    }
}
</style>