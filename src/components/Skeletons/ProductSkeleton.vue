<template >
    <div class="product-card">
        <div class="card-info">
            <AnimatedPlaceholder height="440px" width="536px" />
            <div class="summary-placeholder">
                <AnimatedPlaceholder height="40px" />
                <AnimatedPlaceholder height="30px" />
                <AnimatedPlaceholder height="40px" />
                <AnimatedPlaceholder height="30px" />
                <AnimatedPlaceholder height="300px" />
                <AnimatedPlaceholder height="40px" />
                <AnimatedPlaceholder height="20px" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import AnimatedPlaceholder from "./AnimatePlaceholder.vue";
</script>
  
<style scoped>
.card-info {
    display: flex;
    padding-bottom: 65px;
    gap: 74px;
}

.summary-placeholder {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
}
</style>