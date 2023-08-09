<template>
    <div class="placeholder">
      &nbsp;
    </div>
  </template>
  
  <script setup>
  defineProps({
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    borderRadius: {
      type: String,
    },
  });
  </script>
  
  <style scoped>

  .placeholder {
    max-height: v-bind(height);
    width: v-bind(width);
    aspect-ratio: 3/4;
    border-radius: v-bind(borderRadius);
    background-image: linear-gradient(
      to right,
      #d6d7d8 0%,
      #f8f8f8 10%,
      #f8f8f8 20%,
      #d6d7d8 100%
    );
    background-size: 200% 100%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    animation: bgAnimate 1.2s linear infinite;
  }
  </style>