<script setup lang="ts">
import IconDownArrow from '@/components/icons/DownArrowIcon.vue';
import StreamerCard from '@/components/mainSections/liveChannels/StreamerCard.vue'; // Corrige la ruta si es necesario
import { ApiTwitch } from '@/api/twitchApi';
import type { Streamer } from '@/types/streamer';

const api = new ApiTwitch();
await api.getToken();
await api.requestApi("https://api.twitch.tv/helix/streams");

const liveChannels = (api.data as Streamer[]).slice(0, 3).map((streamer: Streamer, index: number) => ({
  id: index + 1, 
  name: streamer.user_name, 
  title: streamer.title, 
  category: streamer.game_name, 
  thumbnail: streamer.thumbnail_url.replace('{width}x{height}', '200x200'), 
  tags: streamer.tags
}));

const blueText = "Live channels";
</script>

<template>
  <section class="live-channels-section">
    <h2 class="live-channels-section__title">
      <span class="live-channels-section__blue-text">
        {{ blueText }}
      </span> 
      we think you'll like
    </h2>

    <StreamerCard :channels="liveChannels" />

    <div class="live-channels-section__divider">
      <span class="live-channels-section__divider--text">Show more</span>
      <IconDownArrow class="arrow-icon" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.live-channels-section {
  background-color: #0e0e10;
  margin-right: auto;

  &__title {
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-top: auto;
    padding-top: 1.2rem;
  }

  &__blue-text {
    color: #1889df;
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
