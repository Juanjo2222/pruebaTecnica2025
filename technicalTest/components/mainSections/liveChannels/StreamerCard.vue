<script setup lang="ts">
import IconTwitchLogo from '@/components/icons/TwitchLogoIcon.vue';

const props = defineProps<{
  channels: {
    id: number;
    name: string;
    title: string;
    category: string;
    thumbnail: string;
    tags: string[];
    profileImg: string;
  }[];
}>();

</script>

<template>
  <section class="live-channels">
    <div
      v-for="channel in channels"
      :key="channel.id"
      class="live-channels__card"
    >
      <img :src="channel.thumbnail" class="live-channels__card--image">
      <div class="live-channels__card--content">
        <img :src="channel.profileImg" class="live-channels__card--content-profile"/>
        <div class="live-channels__card--info">
          <span class="live-channels__card--info-title">{{ channel.title }}</span>
          <span class="live-channels__card--info-name">{{ channel.name }}</span>
          <span class="live-channels__card--info-category">{{ channel.category }}</span>

          <div class="live-channels__card--info-labels-container">
            <div
              v-for="(tag, index) in channel.tags"
              :key="index"
              class="live-channels__card--info-label"
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
    background-color: #0e0e10;
    width: 30rem;

    &--image {
      height: 15rem;
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
        color: #fff;
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

      &-label {
        font-size: 0.75rem;
        font-weight: bold;
        background-color: #29292e;
        padding: 0.3rem 0.6rem;
        border-radius: 1rem;
        color: #adadb8;
        width: fit-content;
      }
    }
  }
}
</style>
