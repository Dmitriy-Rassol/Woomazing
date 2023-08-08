<script setup>    
import Products from '@/components/Products/Products.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Tabs from '@/components/Tabs.vue';
import Quantity from '@/components/Quantity.vue';
import Pagination from '@/components/Pagination.vue';
import { useProductsStore } from '@/stores/ProductsStore';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useFilterStore } from '@/stores/FilterStore';

const filterStore = useFilterStore();
const productsStore = useProductsStore();
const route = useRoute();

onMounted(async () => {
    filterStore.currentCategory = 'all';
    filterStore.setActiveTab(0, 'all')
    await productsStore.fetchCollection();
})

const pagination = computed(() => {
    return productsStore.products;
})

const paginatedData = computed(() =>
    [...productsStore.products].slice((filterStore.page - 1) * filterStore.perPage, filterStore.page * filterStore.perPage)
);

const totalCount = computed(() => {
    return [...productsStore.products].length;
})

const activeProducts = computed(() => {
    return filterStore.perPage * filterStore.page < totalCount.value ? filterStore.perPage * filterStore.page : totalCount.value
})

const section = computed(() => {
    return route.name;
});

</script>

<template>
    <div class="category">
        <Breadcrumbs :section="section" />
        <Tabs />
        <Quantity :count="activeProducts" :totalCount="totalCount" />
        <Products :products="paginatedData" />
        <Quantity :count="activeProducts" :totalCount="totalCount" />
        <Pagination :data="pagination" />
    </div>
</template>

<style lang="scss" scoped></style>