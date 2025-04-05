<script setup lang="ts">
import IconTwitchLogo from '@/components/icons/TwitchLogoIcon.vue';
defineProps<{
  name: string;
  viewers: string;
  avatar: string;
}>();
</script>

<template>
  <li class="streamer-card">
    <button class="streamer-card__image">
      <IconTwitchLogo/>
    </button>
    <section class="streamer-card__info">
      <span class="streamer-card__info--name">{{ name }}</span>
      <span class="streamer-card__info--channel">channel</span>
    </section>
    <div class="streamer-card__live-indicator"/>
    <span class="streamer-card__viewers">{{ viewers }}</span>
  </li>
</template>

<style scoped lang="scss">
.streamer-card {
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  gap: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.3125rem;

  &:hover {
    background: #23232a;
  }

  &__image {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    border: none;
  }

  &__info {
    
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    font-size: 0.9rem;
    margin-left: 0.5rem;

    &--name {
      font-weight: bold;
    }

    &--channel {
      color:#ADADB8;
    }

  }

  &__viewers {
    font-size: 1rem;
    color: #ffffff;
    margin-left:-0.5rem;
  }

  &__live-indicator {
    width: 0.625rem;
    height: 0.625rem;
    background: red;
    border-radius: 50%;
    margin-left: auto;
  }
}
</style>
