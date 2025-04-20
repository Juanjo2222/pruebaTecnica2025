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

</script>

<template>
  <section class="chat">
    <section class="chat__front">
      <button class="chat__collapse-icon chat__collapse-icon--flipped">
        <IconCollapseLogo/>
      </button>
      <span class="chat__title">{{ texts.chatTitle }}</span>
      <button class="chat__collapse-icon chat__collapse-icon">
        <CommunityIcon/>
      </button>
    </section>
    <div class="chat__divider-one"/>
    <section class="chat__gifts">
      <ArrowIcon class="chat__collapse-icon chat__collapse-icon--flipped" />
      <section class="chat__gifts-title">
        <GiftIcon/>
        <span class="chat__gifts-text">
          {{ texts.giftsTitle }}
        </span>
      </section>
      <ArrowIcon class="chat__collapse-icon" />
    </section>
    <div class="chat__divider-two"/>
    <section class="chat__content">
      <span class="chat__content-title">{{ texts.welcomeChatText }}</span>
      <div class="chat__message">
        <div class="chat__message-content">
          <span class="chat__message-user">{{ texts.user1 }}</span>
          <span class="chat__message-text">{{ texts.user1Message }}</span>
        </div>
      </div>
      <div class="chat__content-message">
        <input class="chat__content-message--input" type="text" placeholder="Send a message"><EmojiIcon/>
      </div>
      <div class="chat__bottom">
        <div class="chat__bottom-left">
          <span class="chat__bottom-bits"><BitsIcon />0</span>
          <span class="chat__bottom-points"><img :src="profile_image_url" class="chat__bottom--image"/>0</span>
        </div>
        <div class="chat__bottom-right">
          <ConfigIcon />
          <button class="chat__bottom-send">{{ texts.chatButtonText }}</button>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.chat {
  background-color: var(--c-nav-background-color);
  width: 22rem;

  &__front {
    display:flex;
    flex-direction: row;
    justify-content: space-between
  }

  &__collapse-icon {
    border: 0;
    background-color: var(--c-nav-background-color);
    padding: 1rem;

    &:hover {
      @include gray-buttons-hover;
    }

    &--flipped {
      transform: scaleX(-1);
    }
  }

  &__title{
    color:var(--c-white);
    padding-top: 1.5rem;
  }

  &__divider-one{
    border-top: 0.0625rem solid var(--c-border-color);
  }

  &__gifts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5rem;

    &-title{
      display: flex;
      align-items: center;
      gap:0.4rem;
    }

    &-text {
      color: #198ae0;
      padding-top: 0.7rem;
      font-weight: bold;
      display: flex;
      gap: 0.5rem;
    }
  }

  &__divider-two{
    border-top: 0.0625rem solid var(--c-border-color);
    margin: 1rem 1rem 0 1rem;
  }

  &__content{
    display:flex;
    flex-direction: column;
    padding: 1rem;
    height: 55rem;

    &-title{
      color: #9a9aa5;
    }

    &-message {
      margin-top: auto;
      background-color: var(--c-nav-background-color);
      display:flex;
      align-items: center;

      &--input {
        width: 18rem;
        padding: 0.6rem;
        color: var(--c-white);
        border: none;
        background-color: var(--c-nav-background-color);
        border: 0.0625rem solid #545457;
        border-radius: 0.4rem;
      }

    }

  }

  &__message {
    display: flex;
    margin-top: 1rem;
    gap: 0.5rem;

    &-content {
      display: flex;
      gap: 0.3rem;
      background-color: var(--c-nav-background-color);
      width: 19rem;
      height: 45rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      align-items: flex-end
    }

    &-user {
      font-weight: bold;
      color: #9ecbff;
      font-size: 0.875rem;
    }

    &-text {
      color: var(--c-white);
      font-size: 0.875rem;
    }
  }
  
  &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      &-left {
        display: flex;
        gap: 0.5rem;
        color: #9b9ba4;
      }

      &-right {
        display: flex;
        gap: 0.5rem;
      }

      &-bits,
      &-points {
        display: flex;
        align-items: center;
      }

      &-send {
        background-color: var(--c-blue-button-and-words);
        border: none;
        padding: 0.4rem;
        color: var(--c-white);
        border-radius: 0.3125rem;
        cursor: pointer;
      }

      &--image{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        margin-right: 0.3rem;
      }

    }

}

</style>
