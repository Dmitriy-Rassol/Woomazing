<script setup>
import AppTitleSection from '@/components/AppTitleSection.vue'
import Products from './Products/Products.vue';
import AppButton from './AppButton.vue';
import { useProductsStore } from '@/stores/ProductsStore';
import { useFilterStore } from '@/stores/FilterStore';
import { onMounted, computed } from 'vue';

const productsStore = useProductsStore();
const filterStore = useFilterStore();

onMounted(async () => {
    await productsStore.fetchCollectionNew();
})


const productsNew = computed(() => {
    return  [...productsStore.productsNew];
})

</script>

<template>
   <div class="new-collection">
    <AppTitleSection :title="'Новая коллекция'"/>
    <Products :products="productsNew" :load="filterStore.isLoader"/>
    <AppButton class="center" @path="$router.push('/shop/category')"/>
   </div>
</template>

<style lang="scss" scoped>


</style>