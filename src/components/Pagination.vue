<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import IconArrowPagination from '../components/icons/iconArrowPagination.vue'
import { useFilterStore } from '../stores/FilterStore';
import { computed } from 'vue';

const filterStore = useFilterStore();

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

const totalPage = computed(() => {
    return Math.ceil(props.data.length / filterStore.perPage)
})


const nextPage = () => {
    if (filterStore.page !== totalPage.value) {
        filterStore.page += 1;
        filterStore.activePage += 1;
        scrollToFirstCardsRow()
    }
};

const backPage = () => {
    if (filterStore.page !== 1) {
        filterStore.page -= 1;
        filterStore.activePage -= 1;
        scrollToFirstCardsRow()
    }
};

const toPage = (item) => {
    filterStore.goToPage(item);
    scrollToFirstCardsRow()
}

function scrollToFirstCardsRow() {
    window.scrollTo({ top: 350, behavior: "smooth" });
}
</script>

<template>
    <div class="pagination">
        <div :class="[{ 'pagination-active': filterStore.page == 1 }, 'pagination-prev']" @click="backPage">
            <IconArrowPagination />
        </div>
        <div class="pagination-btns">
            <button :class="['pagination-btn', { 'pagination-btn--active': filterStore.activePage === i }]"
                v-for="(item, i) in totalPage" :key="item" @click="toPage(item)">
                {{ item }}
            </button>
        </div>
        <div :class="[{ 'pagination-active': filterStore.page == totalPage }, 'pagination-next']" @click="nextPage">
            <IconArrowPagination />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    &-active {
        opacity: 0;
    }

    &-prev {
        transform: rotate(180deg);
        cursor: pointer;
        width: 41px;
    }

    &-next {
        transform: translateY(-0.5px);
        cursor: pointer;
    }

    &-btns {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 0 14px;
    }

    &-btn {
        font-weight: 500;
        font-size: 17px;
        line-height: 140%;
        text-align: center;
        letter-spacing: 0.02em;
        border: 1px solid var(--color-black);
        padding: 9px 0;
        transition: all var(--tr);
        width: 41px;
    }

    &-btn:hover {
        background: var(--color-black);
        color: var(--color-white);
    }

    &-btn--active {
        background: var(--color-black);
        color: var(--color-white);
    }
}
</style>