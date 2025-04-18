<script setup lang="ts">
import LiveComponent from '@/components/mainSections/liveWithChat/LiveComponent.vue';
import ChatComponent from '@/components/mainSections/liveWithChat/ChatComponent.vue';

</script>

<template>
  <section class="live-chat-section">
    <LiveComponent/>
    <ChatComponent/>
  </section>
</template>

<style scoped lang="scss">

.live-chat-section{
  display: flex;
}

</style>
