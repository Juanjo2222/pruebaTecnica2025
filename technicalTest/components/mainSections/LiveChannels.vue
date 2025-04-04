<script setup lang="ts">
const channels = [
  { id: 1, name: "Streamer1", category: "category", thumbnail: "https://placehold.co/150", language: "español" },
  { id: 2, name: "Streamer2", category: "category", thumbnail: "https://placehold.co/150", language: "español" },
  { id: 3, name: "Streamer3", category: "category", thumbnail: "https://placehold.co/150", language: "español" }
];
</script>

<template>
  <section class="live-channels-section">
    <h2 class="title">Live Channels we think you'll like</h2>
    <section class="live-channels">
      <div v-for="channel in channels" :key="channel.id" class="live-channels__card">
        <img :src="channel.thumbnail" class="live-channels__card--image">
        <div class="live-channels__card--info">
          <span class="live-channels__card--info-name">{{ channel.name }}</span>
          <span class="live-channels__card--info-category">{{ channel.category }}</span>
          <span class="live-channels__card--info-language">{{ channel.language }}</span>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">

.live-channels-section{
  margin-top:5rem;
}

.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ff0000;
}

.live-channels {
  margin-bottom: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background-color: #3a3aee;

  &__card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #b8ee3a;
    width: 23.9rem;

    &--image {
      width: 23.875rem;
      height: 13.1512rem;
      object-fit: cover;
    }

    &--info {
      display: flex;
      flex-direction: column;
      
      &-name {
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
        margin-top: 0.5rem;
      }

      &-category {
        font-size: 0.85rem;
        color: #b3b3b3;
        margin-top: 0.25rem;
      }
    }
    &:hover {
      background: #2e2e38;
    }
  }
}

</style>