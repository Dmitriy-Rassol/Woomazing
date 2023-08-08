<script setup>
import AppForm from './AppForm.vue';
import AppInput from './AppInput.vue';
import AppButton from './AppButton.vue';
import IconClose from './icons/IconClose.vue';

import { reactive, ref } from 'vue';
import { useFilterStore } from "../stores/FilterStore";

const filterStore = useFilterStore();

const sendForm = ref(false);

const formData = reactive({
    username: '',
    email: '',
    tel: '',
})

const errors = reactive({
    username: '',
    email: '',
    tel: '',
})


function isEmailValid() {
    errors.email = '';
    const emailValid = formData.email.includes('@') && formData.email.includes('.');
    if (!emailValid) {
        errors.email = 'Неверный email';
        return false
    }
    return true
}

function isUsernameValid() {
    errors.username = '';
    if (!formData.username) {
        errors.username = 'Введите имя';
        return false
    }
    return true
}

function isPhoneValid() {
    errors.tel = '';
    const phoneRegExp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;
    if (!formData.tel.length) {
        errors.tel = 'Введите номер телефона';
        return false
    }
    if (!phoneRegExp.test(formData.tel)) {
        errors.tel = 'Проверьте номер';
        return false
    }
    return true
}

function isFormValid() {
    let isEmail = isEmailValid()
    let isUser = isUsernameValid()
    let isPhone = isPhoneValid()

    if (isEmail && isUser && isPhone) {
        return true
    }
}


const submitForm = () => {
    let isValid = isFormValid()
    if (isValid) {
        formData.username = '';
        formData.tel = '';
        formData.email = '';
        sendForm.value = true;
    }

}

const closeModal = () => {
    filterStore.activeModal = false
    setTimeout(() => {
        sendForm.value = false;
    }, "1000");

}
</script>

<template>
    <transition name="fade" mode="out-in" v-show="filterStore.activeModal">
        <div class="modal">
            <div class="modal-wrapper">
                <div class="modal-content" v-if="!sendForm">
                    <IconClose class="modal-close" @click="closeModal" />
                    <AppForm :title="'Заказать обратный звонок'" @submitForm="submitForm">
                        <template #input>
                            <AppInput id="username" type="text" label="Имя" :errorMessage="errors.username"
                                v-model="formData.username" autocomplete="text" />
                            <AppInput id="email" type="email" label="E-mail" :errorMessage="errors.email"
                                autocomplete="email" v-model="formData.email" />
                            <AppInput id="tel" type="tel" label="Телефон" :errorMessage="errors.tel" autocomplete="tel"
                                v-model="formData.tel" />
                            <AppButton class="center" :title="'Отправить'" :type="'submit'" />
                        </template>
                    </AppForm>
                </div>
                <div v-else class="modal-content">
                    <div class="modal-send">
                        <h4 class="modal-title">Отлично! Мы скоро вам перезвоним.</h4>
                        <AppButton :title="'Закрыть'" @click="closeModal" />
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.modal {
    position: absolute;
    z-index: 10;
    &-wrapper {
        position: fixed;
        content: '';
        background-color: rgba(110, 156, 159, 0.95);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
    }

    &-content {
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: var(--color-white);
        max-width: 600px;
        padding: 68px;
        transform: translate(-50%, -50%);
    }

    &-title {
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.5px;
    }

    &-send {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }

    &-close {
        position: absolute;
        right: 32px;
        top: 32px;
        cursor: pointer;
    }
}
</style>