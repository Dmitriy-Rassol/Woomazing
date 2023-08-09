<script setup>
import IconArrowRight from '../icons/arrows/IconArrowRight.vue';
defineProps({
    product: {
        type: Object,
        default: () => { },
        require: true,
    },
    load: {
        type: Boolean,
        default: false,
        require: true
    }
})
</script>

<template>
    <div class="card">
        <router-link class="card-link" :to="`/product/${product.type}/${product.id}`">
            <div class="card-img">
                <IconArrowRight class="card-img__arrow" />
                <img :src="`/src/assets/img/products/${product.type}/${product.url}`" :alt="product.title">
            </div>
            <p class="card-title">{{ product.title }}</p>
            <div class="card-price">
                <p class="card-price__old" v-if="product.oldPrice">${{ product.oldPrice }}</p>
                <p> ${{ product.price }}</p>
            </div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding-bottom: 65px;
    display: flex;
    align-items: stretch;

    &-img {
        position: relative;
        width: 100%;

        & img {
            width: 500px;
            max-height: 1000px;
            min-height: 200px;
            aspect-ratio: 3/4;
            background-image: linear-gradient(to right,
                    #d6d7d8 0%,
                    #f8f8f8 10%,
                    #f8f8f8 20%,
                    #d6d7d8 100%);
            background-size: 200% 100%;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
                0 2px 4px -2px rgb(0 0 0 / 0.1);
            animation: bgAnimate 1.2s linear infinite;
        }

    }

    &-img__arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: all var(--tr);
    }

    &:hover &-img__arrow {
        opacity: 1;
    }

    &-img::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all var(--tr);
        background: rgb(110, 156, 159);
        opacity: 0;
    }

    &:hover &-img::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(110, 156, 159);
        opacity: .77;
    }

    &-title {
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: 0.02em;
        padding: 24px 7px;
    }

    &-price {
        display: flex;
        justify-content: center;
        gap: 10px;
        font-weight: 500;
        font-size: 15px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: var(--price);
    }

    &-price__old {
        text-decoration-line: line-through;
    }
}
</style>