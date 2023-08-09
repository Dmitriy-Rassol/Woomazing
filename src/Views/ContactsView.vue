<script setup>
import TitlePage from '@/components/TitlePage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Map from '../components/sections/Map.vue';
import ContactsList from '../components/sections/ContactsList.vue';
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import Form from '../components/form/Form.vue';
import Button from '../components/Button.vue';
import Input from '../components/form/Input.vue';
import TextArea from '../components/form/TextArea.vue';
import Alert from '@/components/Alert.vue'
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
    <div class="contact section">
        <Alert :message="'Сообщение отправлено'" :isActive="filterStore.activeAlert" />
        <TitlePage :title="name" />
        <Breadcrumbs :section="name" />
        <Map />
        <ContactsList />
        <Form :title="'Напишите нам'" @submitForm="submitForm">
            <template #input>
                <Input id="username" type="text" label="Имя" :errorMessage="errors.username" v-model="formData.username"
                    autocomplete="text" />
                <Input id="email" type="email" label="E-mail" :errorMessage="errors.email" autocomplete="email"
                    v-model="formData.email" />
                <Input id="tel" type="tel" label="Телефон" :errorMessage="errors.tel" autocomplete="tel"
                    v-model="formData.tel" />
                <TextArea id="message" name="message" label="Сообщение" v-model="formData.message" />
                <Button :title="'Отправить'" :type="'submit'" />
            </template>
        </Form>
    </div>
</template>

<style lang="scss" scoped>
</style>