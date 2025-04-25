<script setup lang="ts">
import IconTwitchLogo from '@/components/icons/TwitchLogoIcon.vue';
import type { Streamer } from '@/types/streamer'; 

const props = defineProps<{
  channels: Streamer[];
}>();

</script>

<template>
  <section class="streamer-card">
    <div
      v-for="channel in channels"
      :key="channel.id"
      class="streamer-card__card"
    >
      <NuxtLink :to="`/${channel.user_login}`">
        <img :src="channel.thumbnail_url" class="streamer-card__card-image" alt="Thumbnail image"/>
      </NuxtLink>
      <div class="streamer-card__card-content">
        <img :src="channel.profile_image_url" class="streamer-card__card-content-profile" alt="Channel profile image"/>
        <div class="streamer-card__card-info">
          <span class="streamer-card__card-info-title">{{ channel.title }}</span>
          <span class="streamer-card__card-info-name">{{ channel.user_name }}</span>
          <span class="streamer-card__card-info-category">{{ channel.game_name }}</span>

          <div class="streamer-card__card-info-tags-container">
            <div
              v-for="(tag, index) in channel.tags"
              :key="index"
              class="streamer-card__card-info-tags"
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

.streamer-card {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  gap: 2.3125em;
  flex-wrap: wrap;
  margin-bottom: 4em;

  &__card {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    background-color: var(--c-general-color);
    width: 23.875em;
    height: 19.1903em;
    padding-right: 1em;
    margin-top: 1.7em;

    &-image {
      height: 13.1512em;
      width: 23.875em;
      padding-right: 1em;
    }

    &-content {
      display: flex;
      flex-direction: row;
      gap: 0.5em;

      &-profile {
        width: 2.6875em;
        height: 2.6875em;
        border-radius: 50%;
        margin-top: 0.3em;
        border: none;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.3125em;
      @include text-ellipsis;

      &-title {
        font-size: var(--fs-big-texts);
        font-weight: 600;
        color: var(--c-white);
        margin-top: 0.5em;
        @include text-ellipsis;
      }

      &-name {
        font-size: var(--fs-small-texts);
        color: #9999a3;
        margin-top: 0.5em;
      }

      &-category {
        font-size: var(--fs-small-texts);
        color: #b3b3b3;
        margin-top: 0.25em;
      }

      &-tags-container {
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
  @include streamer-card-responsive;
}

</style>