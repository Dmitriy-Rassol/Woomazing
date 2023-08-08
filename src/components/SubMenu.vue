<script setup>
import { useFilterStore } from "@/stores/FilterStore";
const filterStore = useFilterStore();

const setCategory = (type, title) => {
    filterStore.setActiveCategory(type, title);
};

defineProps({
    submenu: {
        type: Array
    },
})
</script>

<template>
    <div class="submenu">
        <div class="submenu-list">
            <div class="submenu-item" v-for="(item, i) in submenu" :key="i">
                <router-link :to="`/shop/category/${item.type}`" @click="setCategory(item.type, item.subTitle)"
                    class="submenu-item__link">{{ item.subTitle }}</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.submenu {
    position: absolute;
    top: 39px;
    z-index: 10;

    &-list {
        display: flex;
        flex-direction: column;
    }

    &-item {
        position: relative;
    }

    &-item__link {
        display: block;
        transition: all var(--tr);
        padding-top: 5px;
        padding-bottom: 5px;
    }

    &-item__link:hover {
        color: var(--primary);
    }

    &-item__link--active {
        color: var(--primary);
    }
}
</style>