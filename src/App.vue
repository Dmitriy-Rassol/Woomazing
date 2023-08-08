<script setup>
import Footer from "@/Layouts/Footer.vue";
import Menu from "@/Layouts/Menu.vue";
import AppModal from "./components/AppModal.vue";

</script>

<template>
    <Menu :isFooter="false" />
    <div class="container">
        <AppModal />
        <main>
            <router-view v-slot="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <div :key="route.path">
                        <component :is="Component" />
                    </div>

                </transition>
            </router-view>
        </main>
    </div>
    <Footer />
</template>

