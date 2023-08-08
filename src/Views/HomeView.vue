<script setup>
import Header from '@/components/Header.vue';
import NewCollection from '../components/NewCollection.vue';
import Importants from '../components/Importants.vue';
import Team from '@/components/Team.vue';

</script>

<template>
    <div class="home">
        <Header />
        <NewCollection />
        <Importants />
        <Team />
    </div>
</template>

<style lang="scss" scoped>
.home {
    padding-bottom: 130px;
}
</style>