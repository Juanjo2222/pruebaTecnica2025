<script setup lang="ts">
import LiveComponent from '@/components/mainSections/liveWithChat/LiveComponent.vue';
import ChatComponent from '@/components/mainSections/liveWithChat/ChatComponent.vue';

const route = useRoute();

definePageMeta({
  defaultLayout: "default-layout",
});

</script>

<template>
  <section class="live-chat-section">
    <NuxtLayout :name="$route.meta.defaultLayout">
      <LiveComponent :user_login="route.params.live"/>
      <ChatComponent :user_login="route.params.live"/>
    </NuxtLayout>
  </section>
</template>

<style scoped lang="scss">

.live-chat-section{
  display: flex;
}

</style>
