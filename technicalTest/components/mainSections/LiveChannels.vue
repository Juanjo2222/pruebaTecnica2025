<script setup lang="ts">
import IconDownArrow from '@/components/icons/DownArrowIcon.vue';
import StreamerCard from '@/components//mainSections/liveChannels/StreamerCard.vue';

const channels = [
  { id: 1, name: "Streamer1", title:"title", category: "category", thumbnail: "https://placehold.co/150", language: "español", drops: "drops" },
  { id: 2, name: "Streamer2", title:"title", category: "category", thumbnail: "https://placehold.co/150", language: "español", drops: "drops" },
  { id: 3, name: "Streamer3", title:"title", category: "category", thumbnail: "https://placehold.co/150", language: "español", drops: "drops" }
];
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

    <StreamerCard :channels="channels" />

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
