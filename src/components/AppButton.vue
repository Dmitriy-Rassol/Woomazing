<script setup>
import IconArrowDown from './icons/IconArrowDown.vue';

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
        <span class="btn-primary">{{ title }}</span>
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

    &-arrow {
        display: flex;
        justify-content: center;
        width: 64px;
        height: 64px;
        background: rgba(110, 156, 159, 0.1);
    }

    &-primary {
        color: var(--color-white);
        background: #6E9C9F;
        padding: 22px 50px;
        transition: all var(--tr);
    }

}
</style>