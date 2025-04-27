<script setup lang="ts">
import LiveComponent from '@/components/mainSections/liveWithChat/LiveComponent.vue';
import ChatComponent from '@/components/mainSections/liveWithChat/ChatComponent.vue';

const route = useRoute();

definePageMeta({
  defaultLayout: "default-layout",
});

</script>

<template>
    <NuxtLayout :name="$route.meta.defaultLayout">
      <section class="live-chat-section">
        <LiveComponent :user_login="route.params.live"/>
        <div class="live-chat-section__chat">
          <ChatComponent :user_login="route.params.live"/>
        </div>
      </section>
    </NuxtLayout>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

  .live-chat-section{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    @include live-page-responsive;
  }
</style>
