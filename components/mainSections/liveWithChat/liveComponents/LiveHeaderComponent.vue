<script setup lang="ts">
import FollowIcon from '@/components/icons/FollowIcon.vue';
import SuscribeIcon from '@/components/icons/SuscribeIcon.vue';
import DownArrowIcon from '@/components/icons/DownArrowIcon.vue';
import texts from '@/assets/data/texts.json';

defineProps<{
  user_name: string;
}>();
</script>

<template>
  <section class="header">
    <span class="header__streamer-name">{{ user_name }}</span>
    <section class="header__actions">
      <button class="header__follow-button" aria-label="Button to follow this streamer">
        <FollowIcon class="header__icon" />
        <span class="header__button-text">{{ texts.followButtonText }}</span>
      </button>
      <button class="header__subscribe-button" aria-label="Button to suscribe to this streamer channel">
        <SuscribeIcon class="header__icon" />
        {{ texts.subscribeButtonText }}
        <DownArrowIcon class="header__icon" />
      </button>
    </section>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
  &__streamer-name {
    color: var(--c-white);
    font-weight: bold;
    font-size: 1em;
  }
  &__actions {
    display: flex;
    gap: 1em;
  }
  &__follow-button,
  &__subscribe-button {
    display: flex;
    align-items: center;
    padding: 0.5em;
    font-size: 0.9em;
    color: var(--c-white);
    border: none;
    border-radius: 0.4em;
    cursor: pointer;
    height: 2em;
    &:hover {
      opacity: 0.85;
    }
  }
  &__follow-button {
    background-color: var(--c-blue-button-and-words);
    font-size: var(--fs-small-texts);
    font-weight: var(--fw-big-texts);
    color: var(--c-general-color);
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    padding-right: 0.7em;
    border-radius: 0.25em;
  }
  &__subscribe-button {
    background-color: #2f2f35;
    font-size: var(--fs-small-texts);
    font-weight: var(--fw-big-texts);
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    padding-right: 0.7em;
    border-radius: 0.25em;
  }
  &__icon {
    padding-right: 0.2em;
    padding-left: 0.3em;
  }
  &__button-text{
    padding-bottom: 0.2em;
  }
  @include live-header-component-responsive;
}
</style>