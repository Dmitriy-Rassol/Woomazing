<script setup>
import { computed, reactive, watch } from "vue";
import { useProductsStore } from "../stores/ProductsStore";
import { useFilterStore } from "../stores/FilterStore";
import { useCartStore } from "../stores/CartStore";
import { useRoute } from "vue-router";
import TitlePage from '@/components/TitlePage.vue';
import TitleSection from '@/components/TitleSection.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Button from '@/components/Button.vue';
import Alert from '@/components/Alert.vue';
import ProductSkeleton from "@/components/Skeletons/ProductSkeleton.vue";
import { CATEGORY } from "@/shared/constant";
import Size from "@/components/Size.vue";
import Products from '@/components/Products/Products.vue';


let cartStore = useCartStore();
const filterStore = useFilterStore();
const productsStore = useProductsStore();
const route = useRoute();

const state = reactive({
    details: [],
    category: '',
    quantity: 1,
});

const product = computed(() => {
    return state.details || {}
})

const category = computed(() => {
    return state.category
})


const related = computed(() => {
    return productsStore.relatedProducts || {};
})

async function fetchDetails() {
    await productsStore.getDetails(route.params.id);
    state.details = productsStore.product[0] || {};
    let type = CATEGORY.find(item => item.type === state.details.type && item.type === route.params.type)
     if(type) state.category = type.title 
}

async function fetchRelatedProducts() {
    await productsStore.getRelatedProducts(route.params.type);
}



function productCount(item) {
    if (item == 'minus' && state.quantity > 1) {
        --state.quantity;
    }
    if (item == 'plus' && state.quantity < filterStore.sizeQuantity) {
        ++state.quantity;
    }
}

function addProductCart() {
    const prodCart = {
        id: state.details.id,
        title: state.details.title,
        size: filterStore.titleSize,
        count: state.quantity,
        price: state.details.price,
        img: state.details.url,
        type: state.details.type
    }
    cartStore.addToCart(prodCart);
    filterStore.onActiveAlert();
}

watch(
    () => route.params.id,
    () => {
        if (route.params.id) {
            fetchDetails();
            fetchRelatedProducts();
        }
    },
    { immediate: true, deep: true }
);

watch(
    () => filterStore.sizeQuantity,
    () => {
        if (filterStore.sizeQuantity) {
            state.quantity = 1
        }
    },
    { immediate: true, deep: true }
);

</script>

<template>
    <Alert :message="'В корзине'" :isActive="filterStore.activeAlert" />
    <div class="product-details section">
        <TitlePage :title="product.title && category || 'Товар не найден'" />
        <Breadcrumbs :section="category || 'Товар не найден' " :path="`shop/category/${state.details.type}`" :title="category ? product.title : ''"/>
        <ProductSkeleton v-if="!product || !category"/>
        <div v-else class="product-details__wrapper">
            <div class="product-details__img">
                <img :src="`/src/assets/img/products/${product.type}/${product.url}`" :alt="product.title">
            </div>
            <div class="product-details__content">
                <div class="product-details__price">
                    <p> ${{ product.price }}</p>
                    <p class="product-details__price--old" v-if="product.oldPrice">${{ product.oldPrice }}</p>
                </div>
                <div class="product-details__size">
                    <Size :sizes="product.sizes" />
                </div>
                <div class="product-details__desc">
                    <h3 class="product-details__desc--title">Описание</h3>
                    <p>{{ product.desc }}</p>
                </div>
                <div class="product-details__quantity">
                    <button type="button" class="btn-minus" @click="productCount('minus')">-</button>
                    <div class="count">{{ state.quantity }}</div>
                    <button type="button" class="btn-plus" @click="productCount('plus')">+</button>
                </div>
                <Button :title="'Добавить в корзину'" @click="addProductCart" />
            </div>
        </div>
        <div class="section" v-if="related">
            <TitleSection :title="'Связанные товары'" />
            <Products :products="related" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

.product-details {
    &__wrapper {
        display: flex;
        gap: 74px;
    }

    &__img {
        width: 536px;
        img {
            background-image: linear-gradient(to right,
                    #d6d7d8 0%,
                    #e2e3e4 10%,
                    #d6d7d8 20%,
                    #d6d7d8 100%);
            background-size: 200% 100%;
            width: 100%;
            aspect-ratio: 3/4;
            animation: bgAnimate 1.2s linear infinite;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 59px;
    }

    &__desc {
        max-width: 660px;

        &--title {
            font-size: 20px;
            font-weight: 500;
            line-height: 140%;
            letter-spacing: 0.4px;
            margin-bottom: 34px;
        }
    }

    &__price {
        display: flex;
        gap: 29px;
        color: var(--color-price);
        font-size: 40px;
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        letter-spacing: 0.8px;
    }

    &__price--old {
        font-size: 30px;
        font-family: Raleway;
        letter-spacing: 0.6px;
        text-decoration-line: line-through;
    }

    &__quantity {
        display: flex;
        align-items: center;
        gap: 20px;
    }
}

.btn {

    &-minus,
    &-plus {
        font-size: 40px;
        font-family: Raleway;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0.4px;
    }

    &-minus {
        transform: translateY(-2px);
    }
}

.count {
    text-align: center;
    width: 20px;
    font-size: 26px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.4px;

}
</style>