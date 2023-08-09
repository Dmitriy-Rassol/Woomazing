<script setup>
import TitleSection from '@/components/TitleSection.vue'
import Products from '../Products/Products.vue';
import Button from '../Button.vue';
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
   <div class="new-collection section">
    <TitleSection :title="'Новая коллекция'"/>
    <Products :products="productsNew" :load="filterStore.isLoader"/>
    <Button class="center" :classTransparent="true" @path="$router.push('/shop/category')"/>
   </div>
</template>

<style lang="scss" scoped>


</style>