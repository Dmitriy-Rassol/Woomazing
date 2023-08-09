<script setup>
import { computed, watch } from "vue";
import { useCartStore } from "../stores/CartStore";
import TitlePage from '@/components/TitlePage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Button from '@/components/Button.vue';
import IconClose from "../components/icons/IconClose.vue";
import IconEmptyBasket from '../components/icons/IconEmptyBasket.vue';

const cartStore = useCartStore();

const cart = computed(() => {
    return cartStore.cart;
})

const totalCart = computed(() => {
    return cartStore.total.reduce((a, b) => a + b, 0)
})

function totalPrice() {
    cartStore.total = []
    cartStore.cart.forEach(item => {
        return cartStore.total.push(item.total)
    }
    )
}

watch(
    () => cartStore.cart,
    () => {
        if (cartStore.cart) {
            totalPrice()
        }
    },
    { immediate: true, deep: true }
);

</script>

<template>
    <div class="cart-wrapper section">
        <TitlePage :title="'Корзина'" />
        <Breadcrumbs :section="'Корзина'" />
        <div class="cart-content" v-if="cart.length">
            <div class="cart-header">
                <div>Товар</div>
                <div>Размер</div>
                <div>Цена</div>
                <div>Колличество</div>
                <div>Всего</div>
            </div>
            <div class="cart-list" v-for="item in cart" :key="item.id">
                <div class="cart-item">

                    <div class="cart-item__content">
                        <button @click="cartStore.deleteToCart(item)">
                            <IconClose />
                        </button>
                        <router-link class="cart-item__link" :to="`product/${item.type}/${item.id}`">
                            <div class="cart-img">
                                <img :src="`/src/assets/img/products/${item.type}/${item.img}`" :alt="item.title">
                            </div>
                            <div>{{ item.title }}</div>
                        </router-link>
                    </div>
                    <div class="cart-item__content">{{ item.size }}</div>
                    <div class="cart-item__content">${{ item.price }}</div>
                    <div class="cart-item__content">{{ item.count }}</div>
                    <div class="cart-item__content">${{ item.total }}</div>
                </div>
            </div>
            <div class="cart-total">
                <Button :title="'Очистить корзину'" @click="cartStore.cart = []" />
                <div class="cart-total__order">
                    <div class="cart-total__value"><span>Итого: </span><span>${{ totalCart }}</span> </div>
                    <Button :title="'Оформить заказ'" @path="$router.push('/order')" />
                </div>
            </div>
        </div>
        <div v-else class="cart-empty ">
            <IconEmptyBasket/>
        </div>

    </div>
</template>

<style lang="scss" scoped>

.cart {

    &-header {
        display: grid;
        grid-template-columns: 2fr repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.34px;
        padding-bottom: 26px;
        border-bottom: 1px solid #CCC;
    }

    &-item {
        display: grid;
        grid-template-columns: 2fr repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 23px 0;

    }

    &-item__link {
        display: flex;
        align-items: center;
    }

    &-item__content {
        display: flex;
        align-items: center;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.34px;
        gap: 36px;
    }

    &-img {
        max-width: 136px;
        padding-right: 36px;
    }

    &-empty {
        display: flex;
        justify-content: center;

    }

    &-total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 52px 0;
        gap: 15px;
    }

    &-total__order {
        display: flex;
        gap: 69px;
    }

    &-total__value {
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.5px;
        padding: 15px 51px 15px 31px;
        background: var(--bg-lase);
    }
}
</style>