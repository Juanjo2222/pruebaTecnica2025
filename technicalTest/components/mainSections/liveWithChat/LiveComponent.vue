<script setup lang="ts">
import IconTwitchLogo from '@/components/icons/TwitchLogoIcon.vue';
import IconOptions from '@/components/icons/OptionsIcon.vue';
import AboutInfoComponent from '@/components/mainSections/liveWithChat/AboutInfoComponent.vue'
import FollowIcon from '@/components/icons/FollowIcon'
import SuscribeIcon from '@/components/icons/SuscribeIcon'
import DownArrowIcon from '@/components/icons/DownArrowIcon'
import RedViewersIcon from '@/components/icons/RedViewersIcon'
import ShareIcon from '@/components/icons/ShareIcon'
import { ApiTwitch } from '@/api/twitchApi';
import texts from '@/assets/data/texts.json';
import type { Streamer } from '@/types/streamer';
import { useViewersFormat } from '@/composables/useViewersFormat';

const { formatViewers } = useViewersFormat();

const props = defineProps<{ user_login: string }>();

const api = new ApiTwitch();
await api.getToken();

await api.requestApi(`https://api.twitch.tv/helix/streams?user_login=${props.user_login}&fields=user_id,user_name,title,thumbnail_url,tags,type,started_at,viewer_count`);
const user_id = (api.data[0] as Streamer).user_id;
const user_name = (api.data[0] as Streamer).user_name;
const title = (api.data[0] as Streamer).title;
const tags = (api.data[0] as Streamer).tags;
const game_name = (api.data[0] as Streamer).game_name;
const thumbnail_url = (api.data[0] as Streamer).thumbnail_url;
const viewer_count = (api.data[0] as Streamer).viewer_count;
const thumbnail = thumbnail_url.replace('{width}x{height}', '1280x683');

await api.requestApi(`https://api.twitch.tv/helix/users?id=${user_id}`);
const description = (api.data[0] as Streamer).description;
const profile_image_url = (api.data[0] as Streamer).profile_image_url || '';

await api.requestApi(`https://api.twitch.tv/helix/channels/followers?broadcaster_id=${user_id}`);
const totalFollowers = api.total;
</script>

<template>
  <section class="live">
    <section class="live__video">
      <img :src="thumbnail" class="live__video-image" />
    </section>

    <section class="live__main-info">
      <div class="live__profile-container">
        <img :src="profile_image_url" class="live__profile-image" />
        <span class="live__live-label">{{ texts.live }}</span>
      </div>

      <section class="live__details">
        <section class="live__header">
          <span class="live__streamer-name">{{ user_name }}</span>
          <section class="live__actions">
            <button class="live__follow-button">
              <FollowIcon class="live__icon" />
              {{ texts.followButtonText }}
            </button>
            <button class="live__subscribe-button">
              <SuscribeIcon class="live__icon" />
              {{ texts.subscribeButtonText }}
              <DownArrowIcon class="live__icon" />
            </button>
          </section>
        </section>

        <section class="live__summary">
          <span class="live__title">{{ title }}</span>
          <div class="live__right-info">
            <span class="live__viewers"><RedViewersIcon />{{ formatViewers(viewer_count) }}</span>
            <span class="live__duration">3:25:00</span>
            <section class="live__options">
              <button class="live__options-button"><ShareIcon /></button>
              <button class="live__options-button"><IconOptions /></button>
            </section>
          </div>
        </section>

        <section class="live__extra">
          <span class="live__category">{{ game_name }}</span>
          <div class="live__tags-container">
            <div
              v-for="(tag, index) in tags"
              :key="index"
              class="live__tag"
            >
              {{ tag }}
            </div>
          </div>
        </section>
      </section>
    </section>

    <span class="live__about">{{ texts.about }} {{ user_name }}</span>
    <AboutInfoComponent :total="totalFollowers" :description="description" />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixins.scss';

.live {
  display: flex;
  flex-direction: column;
  background-color: var(--c-general-color);

  &__video {
    width: 75rem;
    height: 40rem;
    background-color: gray;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__main-info {
    display: flex;
    margin-top: 1rem;
  }

  &__profile-container {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: none;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    &:hover {
      opacity: 0.8;
    }
  }

  &__profile-image {
    border-radius: 50%;
    border: none;
    object-fit: cover;
  }

  &__live-label {

    font-size: 0.8rem;
    font-weight: bold;
    background-color: red;
    color: var(--c-white);
    padding-left: 0.3rem;
    border-radius: 0.3rem;
    margin-left: 0.7rem;
    margin-top: -0.6rem;
    width: 2rem;
  }

  &__details {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    margin-right: 1rem;
    width: 100%;

  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  &__streamer-name {
    color: var(--c-white);
    font-weight: bold;
    font-size: 1rem;
  }

  &__actions {
    display: flex;
    gap: 1rem;
  }

  &__follow-button,
  &__subscribe-button {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-size: 0.9rem;
    color: var(--c-white);
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    height: 2rem;

    &:hover {
      opacity: 0.85;
    }
  }

  &__follow-button {
    background-color: var(--c-blue-button-and-words);
  }

  &__subscribe-button {
    background-color: #2f2f35;
    height: 2.2rem;
  }

  &__icon {
    padding-right: 0.3rem;
  }

  &__summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    color: var(--c-white);
  }

  &__title {
    font-weight: bold;
    font-size: 1rem;
  }

  &__right-info {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  &__viewers {
    color: #ff8280;
    display: flex;
    align-items: center;
  }

  &__duration {
    font-size: 0.875rem;
    color: var(--c-white);
  }

  &__options {
    display: flex;
    gap: 0.3rem;
  }

  &__options-button {
    background-color: var(--c-general-color);
    border: none;
    color: var(--c-white);
    border-radius: 0.3125rem;
    padding: 0.2rem;
    cursor: pointer;

    &:hover {
      @include gray-buttons-hover;
    }
  }

  &__extra {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  &__category {
    color: #1788de;
    font-size: 1rem;
    padding: 0.4rem 0;
  }

  &__tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__tag {
    @include tags;
  }

  &__about {
    color: var(--c-white);
    font-weight: bold;
    padding: 1rem 0;
  }
}
</style>
