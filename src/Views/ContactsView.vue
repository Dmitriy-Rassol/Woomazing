<script setup>
import AppTitlePage from '@/components/AppTitlePage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Map from '../components/Map.vue';
import ContactsList from '../components/ContactsList.vue';
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import AppForm from '../components/AppForm.vue';
import AppButton from '../components/AppButton.vue';
import AppInput from '../components/AppInput.vue';
import AppTextArea from '../components/AppTextArea.vue';
import AppAlert from '@/components/AppAlert.vue'
import { useFilterStore } from "../stores/FilterStore";

const filterStore = useFilterStore();
const route = useRoute();
const name = computed(() => {
    return route.name;
});

const formData = reactive({
    username: '',
    email: '',
    tel: '',
    message: '',
})

const errors = reactive({
    username: '',
    email: '',
    tel: '',
    message: '',
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
        filterStore.onActiveAlert();
        formData.username = '';
        formData.tel = '';
        formData. email = '';
        formData.message = '';
    }
}

</script>

<template>
    <div class="contact">
        <AppAlert :message="'Сообщение отправлено'" :isActive="filterStore.activeAlert" />
        <AppTitlePage :title="name" />
        <Breadcrumbs :section="name" />
        <Map />
        <ContactsList />
        <AppForm :title="'Напишите нам'" @submitForm="submitForm">
            <template #input>
                <AppInput id="username" type="text" label="Имя" :errorMessage="errors.username" v-model="formData.username"
                    autocomplete="text" />
                <AppInput id="email" type="email" label="E-mail" :errorMessage="errors.email" autocomplete="email"
                    v-model="formData.email" />
                <AppInput id="tel" type="tel" label="Телефон" :errorMessage="errors.tel" autocomplete="tel"
                    v-model="formData.tel" />
                <AppTextArea id="message" name="message" label="Сообщение" v-model="formData.message" />
                <AppButton :title="'Отправить'" :type="'submit'" />
            </template>
        </AppForm>
    </div>
</template>

<style lang="scss" scoped>
.contact {
    padding-top: 190px;
    padding-bottom: 130px;
}
</style>