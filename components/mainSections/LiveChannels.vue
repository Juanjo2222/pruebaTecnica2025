<script setup lang="ts">
import IconDownArrow from '@/components/icons/DownArrowIcon.vue';
import StreamerCard from '@/components/mainSections/liveChannels/StreamerCard.vue';
import CategoriesRow from '~/components/mainSections/categories/CategoriesRow.vue';
import texts from '@/assets/data/texts.json';
import { ApiTwitch } from '@/api/twitchApi';
import type { Streamer } from '@/types/streamer';

const api = new ApiTwitch();
await api.getToken();

await api.requestApi("https://api.twitch.tv/helix/streams");
const streamersRaw = (api.data as Streamer[]).slice(0, 16);

const userIds = streamersRaw.map(s => s.user_id);
await api.requestApi(`https://api.twitch.tv/helix/users?id=${userIds.join('&id=')}`);
const usersData = api.data;

const allStreamers = streamersRaw.map((streamer, index) => {
  const userInfo = usersData.find(user => user.id === streamer.user_id);
  return {
    ...streamer,
    id: index + 1,
    profile_image_url: userInfo?.profile_image_url || '',
    thumbnail_url: streamer.thumbnail_url.replace('{width}x{height}', '500x500'),
  };
});

const numRows = 4;
const perRow = 3;

const streamerRows = Array.from({ length: numRows }, (_, i) =>
  allStreamers.slice(i * perRow, (i + 1) * perRow)
);

const topRows = streamerRows.slice(0, 2);
const bottomRows = streamerRows.slice(2);

</script>

<template>
  <section class="live-channels-section">
    <div v-for="(row, index) in topRows" :key="'top-' + index" class="live-channels-section__row">
      <h2 class="live-channels-section__title">
        <span class="live-channels-section__blue-text">{{ texts.liveChannelsTitleBlue }}</span>
        {{ texts.titlesWhite }}
      </h2>
      <StreamerCard :channels="row" />
      <div class="live-channels-section__divider">
        <span class="live-channels-section__divider-text">{{ texts.showMore }}</span>
        <IconDownArrow class="live-channels-section__arrow-icon" />
      </div>
    </div>
    <CategoriesRow />
    <div v-for="(row, index) in bottomRows" :key="'bottom-' + index" class="live-channels-section__row">
      <h2 class="live-channels-section__title">
        <span class="live-channels-section__blue-text">{{ texts.liveChannelsTitleBlue }}</span>
        {{ texts.titlesWhite }}
      </h2>
      <StreamerCard :channels="row" />
      <div class="live-channels-section__divider">
        <span class="live-channels-section__divider-text">{{ texts.showMore }}</span>
        <IconDownArrow class="live-channels-section__arrow-icon" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.live-channels-section {
  background-color: var(--c-general-color);
  height: 100%;
  width: 76.25em;
  &__title {
    color: var(--c-white);
    padding-top: 0.9em;
    padding-bottom: 0.6em;
  }
  &__blue-text {
    color: #1889df;
  }
  &__divider {
    display: flex;
    align-items: center;
    color: var(--c-blue-button-and-words);
    margin-bottom: 1em;
    margin-top: 6em;
    &::before,
    &::after {
      content: '';
      flex: 1;
      border-top: 0.0625em solid var(--c-border-color);
    }
    &-text {
      padding-left: 1.8em;
      padding-right: 0.5em;
      font-size: var(--fs-small-texts);
      font-weight: 600;
      cursor: pointer;
    }
  }
  &__arrow-icon {
    margin-right: 1em;
  }
  @include live-channels-responsive;
}

</style>
