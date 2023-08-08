<template >
    <div class="product-card" v-for="item in 3" :key="item" >
      <div class="card-info">
        <AnimatedPlaceholder height="440px" width="100%" />
        <div class="summary-placeholder">
          <AnimatedPlaceholder height="20px" />
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
    padding-bottom: 65px;
  }
  .summary-placeholder {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 24px 7px;
  }
  </style>