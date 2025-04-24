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

    &__main-part{
      display: flex;
    }
  }

@media (max-width: 45.8125em) {
  .layout{  
    &__main-part{
      display: flex;
      flex-direction: column;
      height: 10em;
    }
  }
}

@media (min-width: 126.5625em) {
  .layout{  
    &__main-part{
      display: flex;
      gap:30em;
    }
  }
}

</style>
