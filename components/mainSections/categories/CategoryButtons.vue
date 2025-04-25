<script setup lang="ts">
import GameCategIcon from '@/components/icons/GameCategIcon.vue';
import IrlCategIcon from '@/components/icons/IrlCategIcon.vue';
import MusicCategIcon from '@/components/icons/MusicCategIcon.vue';
import CreativeCategIcon from '@/components/icons/CreativeCategIcon.vue';
import SportsCategIcon from '@/components/icons/SportsCategIcon.vue';

const buttons = [
  { label: "Games", icon: GameCategIcon },
  { label: "IRL", icon: IrlCategIcon },
  { label: "Music & DJs", icon: MusicCategIcon },
  { label: "Creative", icon: CreativeCategIcon },
  { label: "Esports", icon: SportsCategIcon }
];
</script>

<template>
  <div class="category-button-container">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      aria-label="Go to streams about this category"
      class="category-button"
    >
      <span class="category-button__text">{{ button.label }}</span>
      <component :is="button.icon" class="category-button__icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.category-button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding-top: 1em;
  padding-bottom: 1.5em;
}

.category-button {
  @include category-buttons;
  background-color: var(--c-blue-button-and-words);
  width: 14em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 1.2em;

  &__text {
    color: black;
    font-weight: bold;
    font-size: 1.3em;
  }

  &__icon {
    margin-left: auto;
  }
}

/* XS - Móviles (0 - 480px) */
@media (max-width: 30em) {
  .category-button-container {
    flex-direction: column;
    align-items: center;
    gap: 0.8em;
  }

  .category-button {
    width: 100%;
    max-width: 16em;

    &__text {
      font-size: 1.1em;
    }
  }
}


/* MD - Laptops (769px - 1024px) */
@media (max-width: 68.6875em) {
  .category-button {
    width: 14.25em;
    
  }
}

@media (max-width: 95.625em) {
  .category-button-container {
    justify-content: center;
  }
}
</style>
