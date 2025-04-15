<script setup lang="ts">
import IconDownArrow from '@/components/icons/DownArrowIcon.vue';
import StreamerCard from '@/components/mainSections/liveChannels/StreamerCard.vue';
import CategoriesRow from '@/components/mainSections/CategoriesRow.vue';
import { ApiTwitch } from '@/api/twitchApi';
import type { Streamer } from '@/types/streamer';

const api = new ApiTwitch();
await api.getToken();

await api.requestApi("https://api.twitch.tv/helix/streams");
const streamersRaw = (api.data as Streamer[]).slice(0, 12);

const userIds = streamersRaw.map(s => s.user_id);
await api.requestApi(`https://api.twitch.tv/helix/users?id=${userIds.join('&id=')}`);
const usersData = api.data;

const allStreamers = streamersRaw.map((streamer, index) => {
  const userInfo = usersData.find(user => user.id === streamer.user_id);
  return {
    id: index + 1,
    name: streamer.user_name,
    title: streamer.title,
    category: streamer.game_name,
    thumbnail: streamer.thumbnail_url.replace('{width}x{height}', '500x500'),
    tags: streamer.tags,
    profileImg: userInfo?.profile_image_url || ''
  };
});

const numRows = 4;
const perRow = 3;

const streamerRows = Array.from({ length: numRows }, (_, i) =>
  allStreamers.slice(i * perRow, (i + 1) * perRow)
);

const topRows = streamerRows.slice(0, 2);
const bottomRows = streamerRows.slice(2);

const blueText = "Live channels";
</script>


<template>
  <section class="live-channels-section">
    <h2 class="live-channels-section__title">
      <span class="live-channels-section__blue-text">{{ blueText }}</span>
      we think you'll like
    </h2>

    <div v-for="(row, index) in topRows" :key="'top-' + index" class="live-channels-section__row">
      <StreamerCard :channels="row" />
    </div>

    <CategoriesRow />

    <div v-for="(row, index) in bottomRows" :key="'bottom-' + index" class="live-channels-section__row">
      <StreamerCard :channels="row" />
    </div>

    <div class="live-channels-section__divider">
      <span class="live-channels-section__divider--text">Show more</span>
      <IconDownArrow class="arrow-icon" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.live-channels-section {
  background-color: #0e0e10;

  &__title {
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    padding-top: 1.2rem;
    margin-top: 0;

  }

  &__blue-text {
    color: #1889df;
  }

  &__row {
    margin-bottom: 2rem;
  }

  &__divider {
    display: flex;
    align-items: center;
    color: #199afc;
    font-weight: bold;

    &::before,
    &::after {
      content: '';
      flex: 1;
      margin-left: 1rem;
      border-top: 0.0625rem solid #444;
    }

    &--text {
      font-family: Arial, Helvetica, sans-serif;
      padding: 0.625rem;
      font-size: 0.875rem;
      cursor: pointer;
    }
  }
}
</style>
