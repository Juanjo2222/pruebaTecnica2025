<script setup lang="ts">

import CategoryCard from '@/components/mainSections/categories/CategoryCard.vue';

const categories = [
  { id: 1, name: "Category1", viewers:"10K", subCategory: "subCategory", image: "https://placehold.co/150"},
  { id: 2, name: "Category2", viewers:"25K", subCategory: "subCategory", image: "https://placehold.co/150"},
  { id: 3, name: "Category3", viewers:"15K", subCategory: "subCategory", image: "https://placehold.co/150"}
];
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

}

</style>
