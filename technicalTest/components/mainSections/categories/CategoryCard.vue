<script setup lang="ts">
import IconTwitchLogo from '@/components/icons/TwitchLogoIcon.vue';
import CategoryButtons from './CategoryButtons.vue';

const props = defineProps<{
  categories: {
    id: number;
    name: string;
    viewers: string;
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
    <img :src="category.image" class="categories__card--image" />
    <div class="categories__card--content">
      <span class="categories__card--content-name">{{ category.name }}</span>
      <span class="categories__card--content-viewers">{{ category.viewers }} viewers</span>
      <span class="categories__card--content-subCategory">{{ category.subCategory }}</span>
    </div>
    </div>
  </section>
  <CategoryButtons/>
</template>

<style scoped lang="scss">

.categories {
  margin-bottom: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  gap: 2.2rem;
  margin-bottom: auto;

  &__card {
    background-color: #0e0e10;
    width: 15.6rem;
    
    &--image {
      width: 100%;
      height: 18rem;
    }

    &--content {
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

        &-name {
            font-size: 1.1rem;
            font-weight: bold;
            color: #fff;
        }

        &-viewers {
            font-size: 0.9rem;
            color: #9999a3;
        }

        &-subCategory {
            display: inline-block;
            font-size: 0.85rem;
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
