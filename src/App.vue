<template>
  <div class="layout">
    <Header
    />
    <div class="layout__content">
      <RouterView />
    </div>
    
    
  </div>

  
</template>

<style scoped>

</style>
<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/header.vue';
</script>