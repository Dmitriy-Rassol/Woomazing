<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { NAV_PATH, PHONE } from '@/shared/constant';
import { ref } from 'vue';
import { useCartStore } from "../stores/CartStore";
import IconLogo from '@/components/icons/IconLogo.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconPhone from '@/components/icons/IconPhone.vue';
import IconPhoneHover from '@/components/icons/IconPhoneHover.vue';
import SubMenu from '../components/SubMenu.vue';
import { useFilterStore } from "../stores/FilterStore";

const filterStore = useFilterStore();
const cartStore = useCartStore();
const isHover = ref(false);

defineProps({
    isFooter: {
        type: Boolean,
        default: false
    },
    isSubmenuActive: {
        type: Boolean,
        default: false
    }
})
const vScroll = {
    mounted: (el, binding) => {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
}


const handleScroll = (evt, el) => {
    if (window.scrollY > 17 && el.parentElement.className !== 'footer-wrapper container') {
        el.classList.add('color-scroll');
    }
    if (window.scrollY < 17) {
        el.classList.remove('color-scroll');
    }
}

</script>

<template>
    <div v-scroll="handleScroll" :class="[{ 'fixed': !isFooter }]">
        <div class="container nav">
            <div class="nav-logo">
                <IconLogo />
            </div>
            <div class="nav-list">
                <div class="nav-item" v-for="(item, i) in NAV_PATH" :key="i">
                    <router-link class="nav-item__link" active-class="nav-item__link--active" :to="item.path">
                        <div>
                            {{ item.title }}
                        </div>
                        <SubMenu :class="{ 'nav-item__submenu--active': isSubmenuActive }" class="nav-item__submenu"
                            :submenu="item.submenu" />
                    </router-link>
                </div>
            </div>
            <div class="nav-phone">
                <button class="nav-phone__btn" @click="filterStore.activeModal = true" @mouseover="isHover = true"
                    @mouseout="isHover = false">
                    <Transition name="fade" v-if="!isFooter">
                        <IconPhone class="nav-phone__svg" v-if="!isHover" />
                        <IconPhoneHover class="nav-phone__svg" v-else />
                    </Transition>
                    {{ PHONE }}
                </button>
            </div>
            <router-link class="nav-cart" v-if="!isFooter" :to="'/cart'">
                <span class="nav-cart__active" v-if="cartStore.cart.length"></span>
                <IconCart class="nav-cart__svg" />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fixed {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 34px 0;
    margin-top: 17px;
    transition: all var(--tr);
    background-color: transparent;

}

.color-scroll {
    -webkit-box-shadow: 0px 19px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 19px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 19px 10px 2px rgba(34, 60, 80, 0.2);
    background-color: var(--color-white);
    transition: all var(--tr);
}

.nav {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.02em;


    &-logo {
        display: flex;
        align-items: center;
        flex-grow: 2;
    }

    &-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 2;
    }

    &-item {
        position: relative;
    }

    &-item__link {
        transition: all var(--tr);
    }

    &-item__link:hover {
        color: var(--primary);
        transition: all var(--tr);
    }

    &-item__link--active {
        color: var(--primary);
    }

    &-item__submenu {
        display: none;
        opacity: 0;

    }

    &-item__submenu--active {
        display: block;
        opacity: 1;
    }

    &-phone {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 2;
    }

    &-phone__btn {
        display: flex;
        align-items: center;
        position: relative;
        border: none;
    }

    &-phone__svg {
        position: absolute;
        left: -35px;
        top: -2px;
    }

    &-cart {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
    }

    &-cart__active {
        position: absolute;
        top: -1px;
        right: -1px;
        width: 8px;
        height: 8px;
        background-color: var(--primary-hover);
        border-radius: 50%;
    }

    &-cart__svg {
        cursor: pointer;
    }
}
</style>