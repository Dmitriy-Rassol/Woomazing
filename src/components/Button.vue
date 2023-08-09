<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import IconArrowDown from './icons/arrows/IconArrowDown.vue';

defineProps({
    title: {
        type: String,
        default: 'Открыть магазин',
        require: true,
    },
    arrow: {
        type: Boolean,
        default: false,
        require: true,
    },
    type: {
        type: String,
        default: 'button',
        require: true,
    },
    classTransparent: {
        type: Boolean,
        default: false,
        require: true,
    }
})

const emit = defineEmits(['path'])

</script>

<template>
   <div>
    <button class="btn" :type="type" @click="emit('path')">
        <div class="btn-arrow" v-if="arrow">
            <IconArrowDown />
        </div>
        <span :class="!classTransparent ? 'btn-primary' : 'btn-transparent'">{{ title }}</span>
    </button>
   </div>
</template>

<style lang="scss" scoped>
.btn {
    display: flex;
    align-items: center;

    &:hover .btn-primary {
        background: var(--primary-hover);
    }

    &:hover .btn-transparent {
        background: var(--primary);
        color: var(--color-white);
    }

    &-arrow {
        display: flex;
        justify-content: center;
        width: 64px;
        height: 64px;
        background: rgba(110, 156, 159, 0.1);
    }

    &-transparent {
        color: var(--primary);
        padding: 21px 49px;
        border: 1px solid var(--primary);
        transition: all var(--tr);
    }

    &-primary {
        color: var(--color-white);
        padding: 22px 50px;
        border: none;
        transition: all var(--tr);
        background: var(--primary);
    }

}
</style>