<template>
  <NavMenu />
  <main class="container">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.path">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </main>
  <Footer />
</template>

<script setup>
import Footer from "@/Layouts/Footer.vue";
import NavMenu from "@/Layouts/NavMenu.vue";
</script>

<style lang="scss" scoped>

</style>
