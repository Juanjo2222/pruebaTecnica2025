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
      <div class="live-chat-section__chat">
        <ChatComponent :user_login="route.params.live"/>
      </div>
    </NuxtLayout>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

  .live-chat-section{
    &__chat{
      display: flex;
    }
    @include live-page-responsive;
  }
</style>
