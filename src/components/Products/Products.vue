<script setup>
import ProductCardSkeleton from "../Loaders/ProductCardSkeleton.vue";
import ProductCard from "./ProductCard.vue";
defineProps({
    products: {
        type: Array,
        default: () => [],
        require: true,
    }
})


</script>

<template>
    <div class="products">
        <ProductCardSkeleton v-if="!products.length"/>
        <ProductCard v-else v-for="(product, i) in products" :key="i" :product="product" />
    </div>
</template>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
}
</style>