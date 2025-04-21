<script setup lang="ts">
import IconTwitchLogo from '@/components/icons/TwitchLogoIcon.vue';
import type { Streamer } from '@/types/streamer'; 

const props = defineProps<{
  channels: Streamer[];
}>();

</script>

<template>
  <section class="live-channels">
    <div
      v-for="channel in channels"
      :key="channel.id"
      class="live-channels__card"
    >
      <NuxtLink :to="`/${channel.user_login}`">
        <img :src="channel.thumbnail_url" class="live-channels__card--image" />
      </NuxtLink>
      <div class="live-channels__card--content">
        <img :src="channel.profile_image_url" class="live-channels__card--content-profile"/>
        <div class="live-channels__card--info">
          <span class="live-channels__card--info-title">{{ channel.title }}</span>
          <span class="live-channels__card--info-name">{{ channel.user_name }}</span>
          <span class="live-channels__card--info-category">{{ channel.game_name }}</span>

          <div class="live-channels__card--info-labels-container">
            <div
              v-for="(tag, index) in channel.tags"
              :key="index"
              class="live-channels__card--info-tags"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.live-channels {
  margin-bottom: 2em;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  gap: 2.2em;
  flex-wrap: wrap;

  &__card {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    background-color: var(--c-general-color);
    width: 29em;
    margin-right: 1em;

    &--image {
      height: 15em;
      width: 100%;
    }

    &--content {
      display: flex;
      flex-direction: row;
      gap: 0.5em;

      &-profile {
        width: 3.2em;
        height: 2.6em;
        border-radius: 50%;
        margin-top: 0.3em;
        border: none;
      }
    }

    &--info {
      display: flex;
      flex-direction: column;
      margin-left: 0.3em;

      &-title {
        font-size: 1.1em;
        color: var(--c-white);
        margin-top: 0.5em;
      }

      &-name {
        font-size: 0.85em;
        color: #9999a3;
        margin-top: 0.5em;
      }

      &-category {
        font-size: 0.85em;
        color: #b3b3b3;
        margin-top: 0.25em;
      }

      &-labels-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 0.5em;
      }

      &-tags {
        @include tags;
      }
    }
  }
}
</style>
