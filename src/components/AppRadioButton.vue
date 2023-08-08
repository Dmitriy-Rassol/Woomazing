<script setup>
import { computed } from 'vue';
import IconClose from '@/components/icons/IconClose.vue'
const props = defineProps({
    option: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    }, value: {
        required: true,
        type: String,
    },
    modelValue: {
        type: [String, Number],
        default: "",
    },
})
const isChecked = computed(() => {
    return props.modelValue === props.value;
});
</script>

<template>
    <div class="input-wrapper">
        <label :for="option">
            <input type="radio" :name="name" :id="option" :checked="isChecked" :value="value"
                @input="$emit('update:modelValue', $event.target.value)" />
            {{ option }}
            {{ $emit('input') }}
        </label>
    </div>
</template>

<style lang="scss" scoped></style>