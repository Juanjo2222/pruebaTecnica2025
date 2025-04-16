<script setup lang="ts">
import { ApiTwitch } from '@/api/twitchApi';
import CategoryCard from '@/components/mainSections/categories/CategoryCard.vue';

const api = new ApiTwitch();
await api.getToken();
await api.requestApi("https://api.twitch.tv/helix/games/top?first=6");

const categories = api.data.map((category: any, index: number) => ({
  id: index + 1,
  name: category.name,
  viewers: category.viewers_count ? formatViewerCount(category.viewers_count) : 'N/A',
  subCategory: category.name,
  image: category.box_art_url.replace('{width}x{height}', '200x200')
}));

const blueText = "Categories";

</script>

<template>
  <section class="category-section">
    <h2 class="category-section__title">
      <span class="category-section__blue-text">
        {{ blueText }}
      </span> 
      we think you'll like
    </h2>

    <CategoryCard :categories="categories" />

  </section>
</template>

<style scoped lang="scss">
.category-section {
  background-color: #0e0e10;

  &__title {
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-top: auto;
    padding-top: 1.2rem;
  }

  &__blue-text {
    color: #1889df;
  }

}

</style>
