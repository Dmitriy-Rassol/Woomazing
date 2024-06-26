<script setup>
import { computed, reactive, watch } from "vue";
import { useCartStore } from "../stores/CartStore";
import TitlePage from '@/components/TitlePage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Form from '../components/form/Form.vue';
import Button from '../components/Button.vue';
import Input from '../components/form/Input.vue';
import TextArea from '../components/form/TextArea.vue';
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();

const formData = reactive({
    username: '',
    email: '',
    tel: '',
    country: '',
    city: '',
    street: '',
    apartmentNumber: false,
    home: '',
    apartment: '',
    payment: 'Наличные',
    message: ''
})

const errors = reactive({
    username: '',
    email: '',
    tel: '',
    country: '',
    city: '',
    street: '',
    home: '',
    apartment: '',
    message: ''
})


const totalCart = computed(() => {
    return cartStore.total.reduce((a, b) => a + b, 0)
})


function totalPrice() {
    cartStore.total = []
    cartStore.cart.forEach(item => {
        return cartStore.total.push(item.total)
    }
    )
}

function isEmailValid() {
    errors.email = '';
    const emailValid = formData.email.includes('@') && formData.email.includes('.');
    if (!emailValid) {
        errors.email = 'Неверный email';
        return false
    }
    return true
}

function isTextValid() {
    errors.username = '';
    errors.country = '';
    errors.city = '';
    errors.street = '';

    if (!formData.username) {
        errors.username = 'Введите имя';
    }
    if (!formData.country) {
        errors.country = 'Введите страну';
    }
    if (!formData.city) {
        errors.city = 'Введите город';
    }
    if (!formData.street) {
        errors.street = 'Введите улицу';
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


function isHomeValid() {
    errors.home = '';
    const homeRegExp = /^\d*\.?\d+$/;

    if (!homeRegExp.test(formData.home)) {
        errors.home = 'Введите номер дома';
        return false
    }
    return true
}


function isFormValid() {
    let isEmail = isEmailValid()
    let isText = isTextValid()
    let isPhone = isPhoneValid()
    let isHome = isHomeValid()

    if (isEmail && isHome && isPhone && isText) {
        return true
    }
}


const submitForm = () => {
    let isValid = isFormValid()
    if (isValid) {
        formData.username = '';
        formData.email = '';
        formData.tel = '';
        formData.country = '';
        formData.city = '';
        formData.street = '';
        formData.home = '';
        formData.apartment = '';
        formData.payment = 'Наличные';
        formData.message = '';
        router.push('/received');
        cartStore.cart = [];
    }
}

watch(
    () => cartStore.cart,
    () => {
        if (cartStore.cart) {
            totalPrice()
        }
    },
    { immediate: true, deep: true }
);
</script>

<template>
    <div class="order">
        <TitlePage :title="'Оформление заказа'" />
        <Breadcrumbs :section="'Оформление заказа'" />
        <div class="order-wrapper">
            <div class="order-form">
                <Form :title="'Данные покупателя'" @submitForm="submitForm">
                    <template #input>
                        <Input id="username" type="text" label="Имя" v-model="formData.username"
                            :errorMessage="errors.username" />
                        <Input id="email" type="email" label="E-mail" v-model="formData.email"
                            :errorMessage="errors.email" />
                        <Input id="tel" type="tel" label="Телефон" v-model="formData.tel" :errorMessage="errors.tel" />
                    </template>
                </Form>

                <Form :title="'Адрес получателя'" @submitForm="submitForm">
                    <template #input>
                        <Input id="country" type="text" label="Страна" v-model="formData.country"
                            :errorMessage="errors.country" />
                        <Input id="city" type="text" label="Город" v-model="formData.city" :errorMessage="errors.city" />
                        <Input id="street" type="text" label="Улица" v-model="formData.street"
                            :errorMessage="errors.street" />
                        <Input id="home" type="text" label="Дом" v-model="formData.home" :errorMessage="errors.home" />
                        <Input id="checkbox" type="checkbox" label="Частный дом" v-model="formData.apartmentNumber" />
                        <Input v-show="!formData.apartmentNumber" checked id="apartment" type="text" label="Квартира" v-model="formData.apartment" />
                    </template>
                </Form>

                <Form :title="'Комментарии'" @submitForm="submitForm">
                    <template #input>
                        <TextArea id="message" name="message" label="Сообщение" v-model="formData.message" />
                    </template>
                </Form>
            </div>
            <div class="order-data">
                <h4 class="order-data__title">Ваш заказ</h4>
                <div class="order-data__list">
                    <div class="order-data__item">
                        <span>Товар</span>
                        <span>Всего</span>
                    </div>
                    <div class="order-data__item" v-for="data in cartStore.cart" :key="data.id">
                        <span>{{ data.title }}</span>
                        <span>${{ data.total }}</span>
                    </div>
                    <div class="order-data__item">
                        <span>Итог</span>
                        <span>${{ totalCart }}</span>
                    </div>
                </div>
                <div class="order-data__pay">
                    <Form :title="'Способ оплаты'" @submitForm="submitForm">
                        <template #input>
                            <Input type="radio" checked id="cash" value="Наличные" label="Оплата наличными"
                                name="payment" v-model="formData.payment" />
                            <Input type="radio" id="card" value="Карта" label="Оплата картой" name="payment"
                                v-model="formData.payment" />
                            <Button :title="'Разместить заказ'" :type="'submit'" />
                        </template>
                    </Form>
                </div>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>

.order {
    padding: 130px 0;

    &-wrapper {
        display: flex;
        justify-content: space-between;
    }

    &-data,
    &-form {
        width: 40%;
    }

    &-data__title {
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.5px;
        padding-left: 15px;
        padding-bottom: 47px;
    }

    &-data__list {
        display: flex;
        flex-direction: column;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.4px;
        margin-bottom: 145px;
    }

    &-data__item {
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }

    &-data__item:first-child,
    &-data__item:last-child {
        font-size: 20px;
    }

    &-data__item:last-child {
        background: var(--bg-lase);
    }
}
</style>