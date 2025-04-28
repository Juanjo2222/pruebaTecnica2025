<script setup lang="ts">
import EmojiIcon from '@/components/icons/EmojiIcon.vue';
import texts from '@/assets/data/texts.json';

const chatMessages = [
  { user: 'GamerGirl42', message: '¡Qué buena partida!' },
  { user: 'NoobMaster69', message: 'JAJAJA te la rifaste' },
  { user: 'ChillVibes', message: 'Saludos desde México 🙌' },
  { user: 'ProPlayer', message: '¿Qué setup usas?' },
  { user: 'StreamerFan', message: '¡Te sigo desde 2020!' },
  { user: 'MemeLord', message: '¿Alguien dijo memes?' },
  { user: 'ShadowNinja', message: '¿Harás stream mañana?' },
  { user: 'TechGeek', message: 'El overlay está brutal 🔥' },
  { user: 'LunaLovegood', message: 'Me encanta' },
  { user: 'SpeedRunner', message: 'Nuevo PB en caminoooo' },
  { user: 'Juan', message: '¿Como estas?' },
  { user: 'TechNech', message: 'Me mola el layout' },
  { user: 'Sorse', message: 'GRAN MEME' },
  { user: 'Responsive', message: 'Soy complicado' },
];

</script>

<template>
  <section class="messages-container">
    <span class="messages-container__title">{{ texts.welcomeChatText }}</span>
    <div class="messages-container__messages-list">
      <div v-for="(chat, index) in chatMessages" :key="index" class="messages-container__messages">
        <span class="messages-container__user">{{ chat.user }}:</span>
        <span class="messages-container__text">{{ chat.message }}</span>
      </div>
    </div>
    <div class="messages-container__send-message">
      <input class="messages-container__input" type="text" placeholder="Send a message">
      <EmojiIcon/>
    </div>
  </section>
</template>

<style scoped lang="scss">
.messages-container {
  display: flex;
  flex-direction: column;
  padding: 1em;
  &__title {
    font-size: var(--fs-small-texts);
    color: #9a9aa5;
  }
  &__messages-list {
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    overflow-y: auto;
    max-height: 90vh;
    margin-top: 1em;
  }

  &__messages {
    display: flex;
    gap: 0.3em;
    background-color: var(--c-nav-background-color);
    width: 19em;
    padding: 0.5em;
    border-radius: 0.5em;
    align-items: flex-end;
  }
  &__user {
    font-weight: bold;
    color: #9ecbff;
    font-size: 0.9em;
  }
  &__text {
    color: var(--c-white);
    font-size: 0.9em;
  }
  &__send-message {
    margin-top: auto;
    background-color: var(--c-nav-background-color);
    display: flex;
    align-items: center;
    margin-top: 1em;
    border: 0.0625em solid #545457;
    border-radius: 0.375em;
    padding: 0.1em;
  }
  &__input {
    width: 100%;
    padding: 0.6em;
    color: var(--c-white);
    border: none;
    background-color: var(--c-nav-background-color);
  }
}
</style>