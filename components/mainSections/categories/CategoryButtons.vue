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
@include categories-buttons-responsive;
</style>
