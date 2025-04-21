<script setup lang="ts">
import NavComponent from '@/components/permanent/NavComponent.vue';
import RecomChannComponent from '@/components/permanent/RecomChannComponent.vue';

</script>

<template>
  <div class="layout">
    <NavComponent/>
    <div class="layout__main-part">
      <RecomChannComponent/>
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .layout{
    margin-left:0em;

    &__main-part{
      display: flex;
    }
  }

</style>
