<script setup lang="ts">
import NavComponent from '@/components/layouts/NavComponent.vue';
import RecomChannComponent from '@/components/layouts/RecomChannComponent.vue';

</script>

<template>
  <div class="layout">
    <NavComponent/>
    <RecomChannComponent/>
    <slot/>
  </div>
</template>

<style scoped lang="scss">
  .layout{
    margin-left:0rem;
  }
</style>
