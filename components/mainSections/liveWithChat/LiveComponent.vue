<script setup lang="ts">
import IconOptions from '@/components/icons/OptionsIcon.vue';
import AboutInfoComponent from '@/components/mainSections/liveWithChat/AboutInfoComponent.vue';
import LiveSummaryComponent from '@/components/mainSections/liveWithChat/liveComponents/LiveSummaryComponent.vue';
import LiveHeaderComponent from '@/components/mainSections/liveWithChat/liveComponents/LiveHeaderComponent.vue';
import FollowIcon from '@/components/icons/FollowIcon';
import SuscribeIcon from '@/components/icons/SuscribeIcon';
import DownArrowIcon from '@/components/icons/DownArrowIcon';
import RedViewersIcon from '@/components/icons/RedViewersIcon';
import ShareIcon from '@/components/icons/ShareIcon';
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
    <title>{{ texts.pageTitle }} - {{ user_name }}</title>
    <section class="live__video">
      <img :src="thumbnail" class="live__video-image" alt="Thumbnail image"/>
    </section>
    <section class="live__main-info">
      <div class="live__profile-container">
        <img :src="profile_image_url" class="live__profile-image" alt="Channel profile image"/>
        <span class="live__live-label">{{ texts.live }}</span>
      </div>
      <section class="live__details">
        <LiveHeaderComponent :user_name="user_name" />
        <LiveSummaryComponent :title="title" :viewer_count="viewer_count" />
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
    width: 100%;
    background-color: var(--c-general-color);
    &-image {
      width: 54em;
      height: 100%;
      object-fit: cover;
    }
  }
  &__main-info {
    display: flex;
    margin-top: 1em;
  }
  &__profile-container {
    width: 4em;
    height: 4em;
    border-radius: 50%;
    border: none;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }
  &__profile-image {
    border-radius: 50%;
    border: none;
    object-fit: cover;
  }
  &__live-label {
    font-size: 0.8125em;
    font-weight: var(--fw-big-texts);
    background-color: red;
    color: var(--c-general-color);
    padding: 0.3em;
    border-radius: 0.3em;
    margin-left: 0.8em;
    margin-top: -0.5rem;
    width: 3em;
  }
  &__details {
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;
    margin-right: 1em;
    width: 100%;
  }
  &__extra {
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;
  }
  &__category {
    color: #1788de;
    font-size: var(--fs-big-texts);
    margin-bottom: 0.4em;
  }
  &__tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }
  &__tag {
    @include tags;
  }
  &__about {
    color: var(--c-white);
    font-size: 1.125em;
    font-weight: 600;
    padding: 1em 0;
  }
  @include live-component-responsive;
}
</style>
