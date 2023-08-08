<script setup>
import Menu from "./Menu.vue";
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import IconCard from '@/components/icons/IconCard.vue'
</script>

<template>
    <div class="footer">
        <div class="footer-wrapper container">
            <Menu :isFooter="true" :isSubmenuActive="true"/>
            <div class="footer-content">
                <div class="footer-content__law">
                    <p>© Все права защищены</p>
                    <p>Политика конфиденциальности</p>
                    <p>Публичная оферта</p>
                </div>
                <div class="footer-content__connection">
                    <p>hello@womazing.com</p>
                    <div class="footer-content__list">
                        <router-link class="footer-content__item" :to="'/'">
                            <IconInstagram />
                        </router-link>
                        <router-link class="footer-content__item" :to="'/'">
                            <IconFacebook />
                        </router-link>
                        <router-link class="footer-content__item" :to="'/'">
                            <IconTwitter />
                        </router-link>
                    </div>
                    <IconCard />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background: var(--bg-lase);
    padding: 104px 0 97px;

    &-content {
        display: flex;
        justify-content: space-between;
    }

    &-content__law {
        margin-top: 70px;

        & p {
            font-size: 13px;
            line-height: 140%;
            letter-spacing: 0.02em;
            cursor: pointer;
        }

    }

    &-content__connection {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;

        & p {
            font-size: 15px;
            line-height: 140%;
            letter-spacing: 0.02em;

        }
    }

    &-content__list {
        display: flex;
       gap: 12px;
    }
}
</style>