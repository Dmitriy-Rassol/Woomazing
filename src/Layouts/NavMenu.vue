<template>
    <div class="menu">
        <div class="menu-wrapper container">
            <div class="menu-logo">
                <IconLogo/>
            </div>
            <div class="menu-nav nav">
                <ul class="nav-list">
                    <li class="nav-item" v-for="item in MENU" :key="item">
                        <router-link class="nav-link" active-class="nav-link--active" :to="{ path: item.path }">{{
                            item.title
                        }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="menu-phone">
                <button class="menu-phone__btn" @mouseover="isHover = true" @mouseout="isHover = false">
                    <Transition name="fade">
                        <IconPhone class="menu-phone__svg" v-if="!isHover" />
                        <IconPhoneHover class="menu-phone__svg" v-else />
                    </Transition>
                    {{ PHONE }}
                </button>
            </div>
            <router-link class="menu-cart" :to="'/cart'">
                <span class="menu-cart__active"></span>
                <IconCart class="menu-cart__svg" />
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MENU, PHONE } from '@/shared/constant'
import IconLogo from '@/components/Icons/IconLogo.vue'
import IconCart from '@/components/Icons/IconCart.vue'
import IconPhone from '../components/Icons/phone/IconPhone.vue'
import IconPhoneHover from '../components/Icons/phone/IconPhoneHover.vue'

const isHover = ref(false);
</script>

<style lang="scss" scoped>
.menu {
    &-wrapper {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        font-size: 15px;
        letter-spacing: 0.02em;
    }

    &-logo {
        flex-grow: 2;
    }

    &-phone {
        flex-grow: 1;
    }

    &-phone__btn {
        position: relative;
        display: flex;
        align-items: center;
        max-width: fit-content;
    }

    &-phone__svg {
        position: absolute;
        left: -35px;
        top: -2px;
    }

    &-cart {
        position: relative;
        flex-grow: 0;
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
}

.nav {
    flex-grow: 2;
    &-list {
        display: flex;
        gap: 45px;
    }

    &-link {
        transition: all var(--tr);
    }

    &-link:hover {
        color: var(--primary);
        transition: all var(--tr);
    }

    &-link--active {
        color: var(--primary);
    }
}
</style>
