<script setup>
import LiveChannels from '@/components/mainSections/LiveChannels.vue';
import CategoriesRow from '@/components/mainSections/CategoriesRow.vue';

definePageMeta({
  defaultLayout: "default-layout",
});
</script>

<template>
  <div class="main">
    <NuxtLayout name="default-layout">
      <section class="main__live-channels">
        <LiveChannels/>
        <LiveChannels/>
        <CategoriesRow/>
        <LiveChannels/>
        <LiveChannels/>
      </section>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
  main{
    background-color: #0e0e10;
    
    &__live-channels{
      display: flex;
    }
  }
</style>
