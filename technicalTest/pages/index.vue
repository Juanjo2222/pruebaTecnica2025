<script setup>
import LiveChannels from '@/components/mainSections/LiveChannels.vue';

definePageMeta({
  defaultLayout: "default-layout",
});
</script>

<template>
  <div class="main">
    <NuxtLayout :name="$route.meta.defaultLayout">
      <section class="main__live-channels">
        <LiveChannels/>
        <LiveChannels/>
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
