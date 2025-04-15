<script setup>
import LiveChannels from '@/components/mainSections/LiveChannels.vue';
import CategoriesRow from '@/components/mainSections/CategoriesRow.vue';

definePageMeta({
  defaultLayout: "default-layout",
});
</script>

<template>
  <div class="main">
    <NuxtLayout :name="$route.meta.defaultLayout">
      <section class="main__live-channels">
        <LiveChannels/>
      </section>
    </NuxtLayout>
  </div>
</template>
