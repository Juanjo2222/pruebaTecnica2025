<script setup>
import LiveChannels from '@/components/mainSections/LiveChannels.vue';
import texts from '@/assets/data/texts.json';

definePageMeta({
  defaultLayout: "default-layout",
});
</script>

<template>
  <div class="main">
    <title>{{ texts.pageTitle }}</title>
    <NuxtLayout :name="$route.meta.defaultLayout">
      <section class="main__live-channels">
        <LiveChannels/>
      </section>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
  .main{
    background-color: var(--c-general-color);
    
    &__live-channels{
      padding-right: 1.25em;
    }
  }
</style>