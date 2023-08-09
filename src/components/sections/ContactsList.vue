<script setup>
import { CONTACTS } from '../../shared/constant';
</script>

<template>
    <div class="contacts-list">
        <div class="contacts-item" v-for="(contact, i) in CONTACTS" :key="i">
            <p class="contacts-item__title">{{ contact.title }}</p>
            <p class="contacts-item__desc">{{ contact.desc }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contacts {
    &-list {
        padding: 130px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 943px;
    }

    &-item {
        display: flex;
        flex-direction: column;
        gap: 19px;
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.34px;
    }

    &-item__desc {
        font-size: 20px;
        letter-spacing: 0.4px;
    }
}
</style>