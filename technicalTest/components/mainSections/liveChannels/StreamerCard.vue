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
  margin-bottom: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  gap: 2.2rem;
  flex-wrap: wrap;

  &__card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--c-general-color);
    width: 29rem;
    margin-right: 1rem;

    &--image {
      height: 15rem;
      width: 100%;
    }

    &--content {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      &-profile {
        width: 3.2rem;
        height: 2.6rem;
        border-radius: 50%;
        margin-top: 0.3rem;
        border: none;
      }
    }

    &--info {
      display: flex;
      flex-direction: column;
      margin-left: 0.3rem;

      &-title {
        font-size: 1.1rem;
        color: var(--c-white);
        margin-top: 0.5rem;
      }

      &-name {
        font-size: 0.85rem;
        color: #9999a3;
        margin-top: 0.5rem;
      }

      &-category {
        font-size: 0.85rem;
        color: #b3b3b3;
        margin-top: 0.25rem;
      }

      &-labels-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      &-tags {
        @include tags;
      }
    }
  }
}
</style>
