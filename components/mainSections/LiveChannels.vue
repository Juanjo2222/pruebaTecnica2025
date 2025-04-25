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
    margin-top: 5em;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-top: 0.0625em solid var(--c-border-color);
    }
  }

  &__divider-text {
    padding-left: 1.8em;
    padding-right: 0.5em;
    font-size: var(--fs-small-texts);
    font-weight: 600;
    cursor: pointer;
  }

  &__arrow-icon {
    margin-right: 1em;
  }
}

/* XS: Móviles (0 - 480px) */
@media (max-width: 30em) {
  .live-channels-section {
    width: 100%;
    padding: 0 0.5em;

    &__title {
      font-size: 1em;
      text-align: center;
    }

    &__divider {
      flex-direction: column;
      gap: 0.5em;
      margin: 2em 0;
    }

    &__divider-text {
      font-size: 0.85em;
      padding: 0;
    }

    &__arrow-icon {
      margin: 0 auto;
    }
  }
}

@media (max-width: 43.9375em) {
  .live-channels-section {
    &__row{
      width: 100%;
      margin-left: 0.5em;
    }
  }
}

@media (max-width: 45.8125em) {
  .live-channels-section {
    width: 100%;
  }
}

/* MD: Laptops (769px - 1024px) */
@media (max-width: 68.6875em) {
  .live-channels-section {
    min-width: 18.75em;
  }
}


@media (max-width: 93.25em) {
  .live-channels-section {
    width: 100%;
    
    &__title {
      display: flex;
      align-items: center;
      gap: 0.3em;
      justify-content: center;
    }
  }
}

  @media (min-width: 119.5em){
    .live-channels-section {
      margin-left: 25em;
    }
  }

</style>
