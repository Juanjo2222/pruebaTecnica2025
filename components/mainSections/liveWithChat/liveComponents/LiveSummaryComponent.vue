<script setup lang="ts">
import ShareIcon from '@/components/icons/ShareIcon.vue';
import IconOptions from '@/components/icons/OptionsIcon.vue';
import RedViewersIcon from '@/components/icons/RedViewersIcon.vue';

const props = defineProps<{
  title: string;
  viewer_count: number;
}>();
</script>

<template>
  <section class="summary">
    <span class="summary__title">{{ title }}</span>
    <div class="summary__right-info">
      <span class="summary__viewers"><RedViewersIcon />{{ viewer_count.toLocaleString() }}</span>
      <span class="summary__duration">3:25:00</span>
      <section class="summary__options">
        <button class="summary__options-button" aria-label="Button for share this live"><ShareIcon /></button>
        <button class="summary__options-button" aria-label="Button for report this live"><IconOptions /></button>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
  color: var(--c-white);
  &__title {
    font-size: var(--fs-big-texts);
    font-weight: 600;
  }
  &__right-info {
    display: flex;
    gap: 0.5em;
    align-items: center;
  }
  &__viewers {
    color: #ff8280;
    display: flex;
    align-items: center;
    font-size: var(--fs-small-texts);
  }
  &__duration {
    font-size: var(--fs-small-texts);
    color: var(--c-white);
  }
  &__options {
    display: flex;
    gap: 0.3em;
  }
  &__options-button {
    background-color: var(--c-general-color);
    border: none;
    color: var(--c-white);
    border-radius: 0.3125em;
    padding: 0.2em;
    cursor: pointer;
    &:hover {
      @include gray-buttons-hover;
    }
  }


  @include live-summary-component-responsive;
}
</style>
