<script setup>
import { CATEGORY } from '../shared/constant';
import { useFilterStore } from "@/stores/FilterStore";
import { useProductsStore } from '../stores/ProductsStore';
const filterStore = useFilterStore();
const productsStore = useProductsStore();

const setTab = (id, type) => {
  filterStore.setActiveTab(id, type);
  productsStore.fetchCollection()
};
</script>

<template>
    <div class="tabs">
        <button :class="['tabs-btn', { 'tabs-btn--active': filterStore.activeTab === i }]" v-for="(tab, i) in CATEGORY"
            :key="i" @click="setTab(i, tab.type)">{{ tab.title }}</button>
    </div>
</template>

<style lang="scss" scoped>
.tabs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 92px;
    max-width: 1050px;

    &-btn {
        width: 100%;
        font-weight: 500;
        font-size: 17px;
        line-height: 140%;
        letter-spacing: 0.02em;
        padding: 19px 0;
        border: 1px solid var(--color-black);
        transition: all var(--tr);
    }

    &-btn:hover {
        color: var(--color-white);
        background: var(--color-black);
    }

    &-btn--active {
        color: var(--color-white);
        background: var(--color-black);
    }
}
</style>