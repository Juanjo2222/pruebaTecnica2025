<script setup lang="ts">
import IconCollapseLogo from '@/components/icons/CollapseIcon.vue';
import CommunityIcon from '@/components/icons/CommunityIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import GiftIcon from '@/components/icons/GiftIcon.vue';
import ChatBottomComponent from '@/components/mainSections/liveWithChat/chatComponents/ChatBottomComponent.vue';
import ChatMessagesComponent from '@/components/mainSections/liveWithChat/chatComponents/ChatMessagesComponent.vue';
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
    <ChatMessagesComponent/>
    <ChatBottomComponent :profile_image_url="profile_image_url" />
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
  @include chat-component-responsive;
}
</style>
