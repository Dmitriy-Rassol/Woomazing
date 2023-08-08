<script setup>
import Products from '../components/Products/Products.vue';
import Breadcrumbs from '../components/Breadcrumbs.vue';
import Quantity from '../components/Quantity.vue';
import Pagination from '../components/Pagination.vue';
import { useProductsStore } from '@/stores/ProductsStore';
import { onMounted, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFilterStore } from '../stores/FilterStore';
import AppButton from '../components/AppButton.vue';
import { CATEGORY } from '../shared/constant';
const filterStore = useFilterStore();
const productsStore = useProductsStore();
const route = useRoute();
const category = ref('');

onMounted(() => {
    setCategory();
    filterStore.currentCategory = route.params.type;
    productsStore.fetchCollection();
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

function setCategory() {
    CATEGORY.forEach(item => {
        if (item.type == route.params.type) {
            return category.value = item.title
        }
    })
}

</script>

<template>
    <div class="category">
        <Breadcrumbs :section="category || 'Категория не найдена'" />
        <div v-if="category">
            <Quantity :count="activeProducts" :totalCount="totalCount" />
            <Products :products="paginatedData" />
            <Quantity :count="activeProducts" :totalCount="totalCount" />
            <Pagination :data="pagination" />
        </div>

        <div class="category__not-found">
            <h2>Категория товаров не найдена</h2>
            <AppButton :title="'Назад'" @path="$router.push('/shop/category')"/>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.category {
    &__not-found {
        & h2 {
            font-size: 30px;
            font-weight: 500;
            line-height: 140%;
            letter-spacing: 0.4px;
            margin-bottom: 34px;
            padding-bottom: 30px;
        }
    }
}
</style>