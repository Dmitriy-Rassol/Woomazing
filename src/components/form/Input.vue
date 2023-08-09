<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
    id: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    value: {
        default: "",
        type: [String, Boolean],
    },
    name: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: " ",
        required: false
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: "",
    },

    type: {
        type: String,
        default: "text",
    },
    autocomplete: {
        type: String,
        default: '',
        required: false
    },
    errorMessage: {
        type: String,
        default: '',
        required: false
    }
})

const isCheckedRadio = computed(() => {
    return props.modelValue == props.value
});

</script>

<template>
    <div class="input-wrapper" v-if="props.type !== 'checkbox'">
        <input class="input" :id="id" :type="type" :value="props.type === 'radio' ? value : modelValue.trim()" :name="name"
            :autocomplete="autocomplete" :checked="isCheckedRadio" :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)" />
        <label v-if="label" :for="id" class="label">
            <div></div>
            {{ label }}
        </label>
        <small class="error">
            {{ errorMessage }}
        </small>
    </div>
    <div v-else class="input-wrapper">
        <input class="input" :type="type" :id="id" @input="$emit('update:modelValue', $event.target.checked)" />>
        <label class="label" :for="id"><div></div>{{ label }}</label>
    </div>
</template>

<style lang="scss" scoped>
.label {
    position: absolute;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0.34px;
    color: var(--label);
    left: 0;
    transition: all var(--tr);
}

.input {
    position: relative;
    border-bottom: 1px solid;
    padding: 8px 0;
    width: 100%;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0.34px;

    &::placeholder {
        display: none;
        color: transparent;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    &:focus+.label,
    &:not(:placeholder-shown)+.label {
        transform: translateY(-15px);
    }

    &:focus {
        border-bottom: 2px solid;
        padding: 8px 0 7px;

    }

    &-clear {
        transition: all var(--tr);
        position: absolute;
        top: 5px;
        right: 0;
    }
}

.input[type=radio],
.input[type=checkbox] {
    width: auto;
    -webkit-appearance: none;
    appearance: none;

    &~.label {
        position: relative;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.34px;
        color: var(--color-black);
        display: flex;
        align-items: center;
    }

    &~.label div {
        position: relative;
        background-color: #fff;
        color: black;
        left: 0;
        width: 22px;
        height: 22px;
        border: 2px solid black;
        margin-right: 14px;
    }

    &:checked~.label div::before {
        content: '';
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        left: 0.3em;
        top: 0.25em;
        background: black;
    }

}

.input-wrapper {
    position: relative;
    max-width: 350px;
}

.error {
    position: absolute;
    left: 0;
    bottom: -15px;
    color: var(--invalid);
}
</style>