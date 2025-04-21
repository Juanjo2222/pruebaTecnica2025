<script setup lang="ts">
import CategoryButtons from './CategoryButtons.vue';
import { useViewersFormat  } from '@/composables/useViewersFormat';
import texts from '@/assets/data/texts.json';

const { formatViewers } = useViewersFormat();

const props = defineProps<{
  categories: {
    id: number;
    name: string;
    viewers: number;
    subCategory: string;
    image: string;
  }[];
}>();
</script>

<template>
  <section class="categories">
    <div
      v-for="category in categories"
      :key="category.id"
      class="categories__card"
    >
    <img :src="category.image" class="categories__card-image" alt="Category image"/>
    <div class="categories__card-content">
      <span class="categories__card-content-name">{{ category.name }}</span>
      <span class="categories__card-content-viewers">{{ texts.defaultFollowersNumber }} {{ texts.viewers }}</span>
      <span class="categories__card-content-subCategory">{{ category.subCategory }}</span>
    </div>
    </div>
  </section>
  <CategoryButtons/>
</template>

<style scoped lang="scss">

.categories {
  margin-bottom: 2em;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  gap: 2.2em;
  margin-right: 1.5em;

  &__card {
    background-color: var(--c-general-color);
    width: 14em;
    
    &-image {
      width: 100%;
      height: 20em;
    }

    &-content {
      padding-top: 1em;
      padding-bottom: 1em;
      display: flex;
      flex-direction: column;
      gap: 0.7em;

      &-name {
        font-size: 1.1em;
        font-weight: bold;
        color: var(--c-white);
      }

      &-viewers {
        font-size: 0.9em;
        color: #9999a3;
      }

      &-subCategory {
        display: inline-block;
        font-size: 0.85em;
        font-weight: bold;
        background-color: #29292e;
        padding: 0.3em 0.6em;
        border-radius: 1em;
        color: #adadb8;
        width: fit-content;
      }
    }
  }
}

</style>
