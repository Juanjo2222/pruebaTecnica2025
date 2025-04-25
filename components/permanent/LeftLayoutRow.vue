<script setup lang="ts">
import { ApiTwitch } from '@/api/twitchApi';
import type { Streamer } from '@/types/streamer';
import { useViewersFormat } from '@/composables/useViewersFormat';

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
    <img
      :src="streamer.profile_img"
      class="streamer-card__image"
      :alt="`${streamer.user_name}'s profile picture`"
    />
    <section class="streamer-card__info">
      <span class="streamer-card__name">{{ streamer.user_name }}</span>
      <span class="streamer-card__channel">{{ streamer.game_name }}</span>
    </section>
    <div class="streamer-card__status">
      <div class="streamer-card__live-indicator" aria-hidden="true" />
      <span class="streamer-card__viewers" :aria-label="`${formatViewers(streamer.viewer_count)} viewers`">
        {{ formatViewers(streamer.viewer_count) }}
      </span>
    </div>
  </li>
</template>

<style scoped lang="scss">
.streamer-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4em;
  margin-bottom: 1em;
  border-radius: 0.3125em;
  font-family: Arial, Helvetica, sans-serif;
  height: 2.5em;

  &__image {
    width: 2.7em;
    height: 2.7em;
    border-radius: 50%;
    object-fit: cover;
  }

  &__info {
    display: grid;
    grid-template-rows: repeat(2, auto);
    gap: 0.2em;
    font-size: 0.9em;
    width: 8.75em;
  }

  &__name {
    font-size: var(--fs-big-texts);
    font-weight: 600;
  }

  &__channel {
    font-size: var(--fs-small-texts);
    color: #adadb8;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 0.4em;
  }

  &__viewers {
    font-size: var(--fs-small-texts);
    color: var(--c-white);
  }

  &__live-indicator {
    width: 0.5em;
    height: 0.5em;
    background-color: red;
    border-radius: 50%;
  }
  
}

@media (max-width: 45.8125em) {
  .streamer-card{
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 68.75em) {

  .streamer-card__image {
    width: 3em;
    height: 3em;
  }

  .streamer-card__info,
  .streamer-card__status {
    display: none;
  }
}

</style>
