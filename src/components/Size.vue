<script setup>
import { useFilterStore } from "@/stores/FilterStore";
import { onMounted } from "vue";

const filterStore = useFilterStore();

const setTab = (id, tab) => {
    filterStore.setActiveSize(id, tab);
};

onMounted(()=> {
    setTab(0, props.sizes[0])
})

const props = defineProps({
    sizes: {
        type: Array
    }
})
</script>

<template>
    <div class="size">
        <h3 class="size-title">Выберите Размер</h3>
        <div class="size-wrapper">
            <button :class="['size-btn', { 'size-btn--active': filterStore.activeSize === i }]" v-for="(tab, i) in sizes"
                :key="i" @click="setTab(i, tab)">{{ tab.seze }}
           </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.size {
    &-wrapper {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    &-title {
        font-size: 20px;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.4px;
        margin-bottom: 34px;
    }

    &-btn {
        width: 41px;
        height: 41px;
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.34px;
        padding: 9px;
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