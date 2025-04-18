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
  gap: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
}

.category-button{
  @include category-buttons;
  background-color: var(--c-blue-button-and-words);

  &__text{
    color: var(--c-white);
    font-weight: bold;
    font-size: 1.3rem;
  }
  
  &__icon{
    margin-left: auto;
  }

  &:hover{
    opacity: 0.8;
  }

}

</style>
