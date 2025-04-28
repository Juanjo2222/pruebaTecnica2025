<script setup lang="ts">
import BitsIcon from '@/components/icons/BitsIcon.vue';
import ConfigIcon from '@/components/icons/ConfigIcon.vue';
import texts from '@/assets/data/texts.json';

const props = defineProps<{
  profile_image_url: string;
}>();
</script>

<template>
  <section class="bottom">
    <div class="bottom__left">
      <span class="bottom__bits"><BitsIcon />0</span>
      <span class="bottom__points">
        <img :src="profile_image_url" class="bottom__profile" alt="Channel profile image"/>0
      </span>
    </div>
    <div class="bottom__right">
      <ConfigIcon />
      <button class="bottom__send" aria-label="Send a message">{{ texts.chatButtonText }}</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  max-width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  &__left {
    display: flex;
    gap: 0.5em;
    color: #9b9ba4;
  }
  &__right {
    display: flex;
    gap: 0.5em;
  }
  &__bits{
    display: flex;
    align-items: center;
  }
  &__points {
    display: flex;
    align-items: center;
  }
  &__profile {
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.3em;
  }
  &__send {
    background-color: var(--c-blue-button-and-words);
    border: none;
    padding: 0.4em;
    color: var(--c-general-color);
    border-radius: 0.3125em;
  }
}
</style>
