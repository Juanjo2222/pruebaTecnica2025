<script setup lang="ts">
import CategoryButtons from './CategoryButtons.vue';
import texts from '@/assets/data/texts.json';

defineProps<{
  categories: {
    id: number;
    name: string;
    viewers: number;
    subCategory: string;
    image: string;
  }[];
}>();

const viewers = ['12K', '15K', '25K', '57K', '22K', '34K'];
const subCategories = ['IRL', 'Gaming', 'Music', 'Art', 'Cooking', 'Tech'];

</script>

<template>
  <section class="categories">
    <div
      v-for="(category, index) in categories"
      :key="category.id"
      class="categories__card"
    >
    <img :src="category.image" class="categories__card-image" alt="Category image"/>
    <div class="categories__card-content">
      <span class="categories__card-content-name">{{ category.name }}</span>
      <span class="categories__card-content-viewers">{{ viewers[index] }} {{ texts.viewers }}</span>
      <span class="categories__card-content-subCategory">{{ subCategories[index] }}</span>
    </div>
    </div>
  </section>
  <CategoryButtons/>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.categories {
  margin-bottom: 2em;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  &__card {
    background-color: var(--c-general-color);
    width: 11.3544em;
    height: 20.213em;
    margin-top: 1em;
    &-image {
      width: 11.3544em;
      height: 15.1387em;
    }
    &-content {
      padding-top: 1em;
      padding-bottom: 1em;
      display: flex;
      flex-direction: column;
      gap: 0.7em;
      &-name {
        font-size: var(--fs-big-texts);
        font-weight: 700;
        color: var(--c-white);
        @include text-ellipsis;
      }
      &-viewers {
        font-size: var(--fs-small-texts);
        color: #9999a3;
      }
      &-subCategory {
        @include tags;
      }
    }
  }
  @include category-card-responsive;
}
</style>
