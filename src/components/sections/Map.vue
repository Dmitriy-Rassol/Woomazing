<script setup>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import { reactive } from 'vue';

const settingsMap = reactive({
    coord: [55.72, 37.65],
    zoom: 10,
    detailedControls: { zoomControl: { position: { right: 10, top: 50 } } },
    controls: ['fullscreenControl']
})

</script>

<template>
    <yandex-map class="yandex-container" ref="map" 
    :detailed-controls="settingsMap.detailedControls" 
    :coords="settingsMap.coord"
    :zoom="settingsMap.zoom" 
    :controls="settingsMap.controls">
        <ymap-marker :markerId="'p_marker'" :coords="[55.7532, 37.6225]" />
    </yandex-map>
</template>

<style lang="scss" scoped>
.yandex-container {
    height: 476px;
}
</style>