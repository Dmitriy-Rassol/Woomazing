<script setup>
defineProps({
    id: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    modelValue: {
        type: [String, Number],
        default: "",
    },
    name: {
        type: String,
        default: "text",
    }
})

</script>

<template>
    <div class="textarea-wrapper">
        <textarea 
        :id="id" 
        :name="id" 
        :value="modelValue" 
        placeholder=" " 
        @input="$emit('update:modelValue', $event.target.value)" class="textarea" ></textarea>
        <label v-if="label" :for="id"
            class="label">
            {{ label }}
        </label>
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

.textarea {
    border-bottom: 1px solid;
    width: 100%;
    height: 134px;
    padding: 8px 0;
    outline: none;
    resize: none;
    &::placeholder {
          display: none;
          color: transparent;
         -webkit-user-select: none; 
          -ms-user-select: none; 
          user-select: none; 
      }
    &:focus+.label, &:not(:placeholder-shown) + .label {
        transform: translateY(-15px);
    }
    &:focus {
        border-bottom: 3px solid;
        padding: 8px 0 7px;

    }
}

.textarea-wrapper {
    position: relative;
    max-width: 443px;
}
</style>