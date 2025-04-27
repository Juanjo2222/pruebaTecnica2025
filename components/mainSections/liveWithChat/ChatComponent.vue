<script setup lang="ts">
import IconCollapseLogo from '@/components/icons/CollapseIcon.vue';
import CommunityIcon from '@/components/icons/CommunityIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import GiftIcon from '@/components/icons/GiftIcon.vue';
import EmojiIcon from '@/components/icons/EmojiIcon.vue';
import BitsIcon from '@/components/icons/BitsIcon.vue';
import ConfigIcon from '@/components/icons/ConfigIcon.vue';
import texts from '@/assets/data/texts.json';
import { ApiTwitch } from '@/api/twitchApi';
import type { Streamer } from '@/types/streamer';

const props = defineProps<{
  user_login: string
}>();

const api = new ApiTwitch();
await api.getToken();

await api.requestApi(`https://api.twitch.tv/helix/streams?user_login=${props.user_login}&fields=user_id`);
const user_id = (api.data[0] as Streamer).user_id;

await api.requestApi(`https://api.twitch.tv/helix/users?id=${user_id}&fields=profile_image_url`);
const profile_image_url = (api.data[0] as Streamer).profile_image_url || '';

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
  <section class="chat">
    <section class="chat__front">
      <button class="chat__collapse-icon chat__collapse-icon--flipped" aria-label="Show this live chat">
        <IconCollapseLogo/>
      </button>
      <span class="chat__title">{{ texts.chatTitle }}</span>
      <button class="chat__community-icon" aria-label="Show this live community">
        <CommunityIcon class="chat__comunity-icon"/>
      </button>
    </section>
    <div class="chat__divider-one"/>
    <section class="chat__gifts">
      <ArrowIcon class="chat__arrow-icon chat__arrow-icon--flipped" />
      <section class="chat__gifts-title">
        <GiftIcon/>
        <span class="chat__gifts-text">
          {{ texts.giftsTitle }}
        </span>
      </section>
      <ArrowIcon class="chat__arrow-icon" />
    </section>
    <div class="chat__divider-two"/>
    <section class="chat__content">
      <span class="chat__content-title">{{ texts.welcomeChatText }}</span>
      <div class="chat__message">
        <div v-for="(chat, index) in chatMessages" :key="index" class="chat__message-content">
          <span class="chat__message-user">{{ chat.user }}:</span>
          <span class="chat__message-text">{{ chat.message }}</span>
        </div>
      </div>
      <div class="chat__content-message">
        <input class="chat__content-message--input" type="text" placeholder="Send a message"><EmojiIcon/>
      </div>
      <div class="chat__bottom">
        <div class="chat__bottom-left">
          <span class="chat__bottom-bits"><BitsIcon />0</span>
          <span class="chat__bottom-points"><img :src="profile_image_url" class="chat__bottom--image" alt="Channel profile image"/>0</span>
        </div>
        <div class="chat__bottom-right">
          <ConfigIcon />
          <button class="chat__bottom-send" aria-label="Send a message">{{ texts.chatButtonText }}</button>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.chat {
  background-color: var(--c-nav-background-color);
  height: 100%;
  &__front {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    height: 3em;
    padding-right: 0.5em;
  }
  &__collapse-icon {
    background-color: var(--c-nav-background-color);
    padding: 1em;
    &--flipped {
      transform: scaleX(-1);
    }
  }
  &__community-icon {
    background-color: var(--c-nav-background-color);
    padding-right: 0.5em;
  }
  &__arrow-icon {
    background-color: var(--c-nav-background-color);
    margin-right: 0.3em;
    &--flipped {
      transform: scaleX(-1);
      margin-left: 0.5em;
    }
  }
  &__title{
    color:var(--c-white);
    margin-top: 1.2em;
    font-size: var(--fs-small-texts);
    font-weight: 600;
  }
  &__divider-one{
    border-top: 0.0625em solid var(--c-border-color);
  }
  &__gifts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5em;
    &-title{
      display: flex;
      align-items: center;
      gap:0.7em;
    }
    &-text {
      font-size: var(--fs-small-texts);
      color: #198ae0;
      padding-top: 0.3em;
      font-weight: bold;
      display: flex;
      gap: 0.5em;
    }
  }
  &__divider-two{
    border-top: 0.0625em solid var(--c-border-color);
    margin: 1em 1em 0 1em;
  }
  &__content{
    display:flex;
    flex-direction: column;
    padding: 1em;
    &-title{
      font-size: var(--fs-small-texts);
      color: #9a9aa5;
    }
    &-message {
      margin-top: auto;
      background-color: var(--c-nav-background-color);
      display:flex;
      align-items: center;
      margin-top: 1em;
      border: 0.0625em solid #545457;
      border-radius: 0.375em;
      padding: 0.1em;
      &--input {
        width: 100%;
        padding: 0.6em;
        color: var(--c-white);
        border: none;
        background-color: var(--c-nav-background-color);
      }
    }
  }
  &__message {
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    overflow-y: auto;
    max-height: 90vh;
    margin-top: 1em;
    &-content {
      display: flex;
      gap: 0.3em;
      background-color: var(--c-nav-background-color);
      width: 19em;
      padding: 0.5em;
      border-radius: 0.5em;
      align-items: flex-end;
      
    }
    &-user {
      font-weight: bold;
      color: #9ecbff;
      font-size: 0.9em;
      font-weight: 700;
    }
    &-text {
      color: var(--c-white);
      font-size: 0.9em;
    }
  }
  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.8em;
    overflow-x: auto;
    max-width: 100%;
    &-left {
      display: flex;
      gap: 0.5em;
      color: #9b9ba4;
    }
    &-right {
      display: flex;
      gap: 0.5em;
    }
    &-bits,
    &-points {
      display: flex;
      align-items: center;
    }
    &-send {
      background-color: var(--c-blue-button-and-words);
      border: none;
      padding: 0.4em;
      color: var(--c-white);
      border-radius: 0.3125em;
  
    }
    &--image{
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      margin-right: 0.3em;
    }
  }
  @include chat-component-responsive;
}
</style>
