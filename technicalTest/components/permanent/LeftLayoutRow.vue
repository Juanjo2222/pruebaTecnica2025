<script setup lang="ts">
import { ApiTwitch } from '@/api/twitchApi';
import type { Streamer } from '@/types/streamer';
import { useViewersFormat  } from '@/composables/useViewersFormat';

const { formatViewers } = useViewersFormat();

const api = new ApiTwitch();
await api.getToken();
await api.requestApi("https://api.twitch.tv/helix/streams");
const streamersRaw = api.data.slice(0, 10) as Streamer[];

const userIds = streamersRaw.map(streamer => streamer.user_id);
await api.requestApi(`https://api.twitch.tv/helix/users?id=${userIds.join('&id=')}`);
const usersData = api.data;

const streamers = streamersRaw.map(streamer => {
  const userInfo = usersData.find((user: any) => user.id === streamer.user_id);
  return {
    ...streamer,
    profile_img: userInfo?.profile_image_url || '',
  };
});


</script>

<template>
  <li v-for="(streamer, index) in streamers" :key="index" class="streamer-card">
    <img :src="streamer.profile_img" class="streamer-card__image"/>
    <section class="streamer-card__info">
      <span class="streamer-card__info--name">{{ streamer.user_name }}</span>
      <span class="streamer-card__info--channel">{{ streamer.game_name }}</span>
    </section>
    <div class="streamer-card__live-indicator"/>
    <span class="streamer-card__viewers">{{ formatViewers(streamer.viewer_count) }}</span>
  </li>
</template>

<style scoped lang="scss">
.streamer-card {
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  gap: 0.8em;
  padding: 0.5em;
  border-radius: 0.3125em;

  &:hover {
    background: #23232a;
  }

  &__image {
    width: 2.7em;
    height: 2.7em;
    border-radius: 50%;
    border: none;
  }

  &__info {
    
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    font-size: 0.9em;

    &--name {
      font-weight: bold;
      
    }

    &--channel {
      color:#ADADB8;
    }

  }

  &__viewers {
    font-size: 0.9em;
    color: var(--c-white);
    margin-left:-0.5em;
  }

  &__live-indicator {
    width: 0.625em;
    height: 0.625em;
    background: red;
    border-radius: 50%;
    margin-left: auto;
  }
}
</style>
