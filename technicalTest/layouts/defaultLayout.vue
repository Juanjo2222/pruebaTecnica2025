<script setup lang="ts">
import NavComponent from '@/components/layouts/NavComponent.vue';
import RecomChannComponent from '@/components/layouts/RecomChannComponent.vue';

</script>

<template>
  <div class="layout">
    <NavComponent/>
    <div class="container">
      <RecomChannComponent class="sidebar"/>
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .layout{
    margin-left:0rem;
  }

  .container{
    display: flex;
  }
  /*.sidebar{
    float: left;
  }*/
</style>
