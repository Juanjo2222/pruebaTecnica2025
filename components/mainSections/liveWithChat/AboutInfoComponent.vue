<script setup lang="ts">
import YotubeIcon from '@/components/icons/YotubeIcon.vue'
import InstragramIcon from '@/components/icons/InstragramIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import TikTokIcon from '@/components/icons/TikTokIcon.vue'
import texts from '@/assets/data/texts.json';
import { useViewersFormat  } from '@/composables/useViewersFormat';

const { formatViewers } = useViewersFormat();

const props = defineProps<{
  total: number
  description: string
}>();


</script>

<template>
  <section class="about-info">
    <span class="about-info__followers">{{ formatViewers(props.total) }}
      <span class="about-info__followers-word">{{ texts.followers }}</span>
    </span>
    <span class="about-info__description">{{ props.description }}</span>
    <div class="about-info__divider"/>
    <section class="about-info__socials">
      <button class="about-info__social-button" aria-label="Go to youtube channel"><YotubeIcon/>{{ texts.youtube }}</button>
      <button class="about-info__social-button" aria-label="Go to this channel instagram account"><InstragramIcon/>{{ texts.instagram }}</button>
      <button class="about-info__social-button" aria-label="Go to this channel twitter account"><TwitterIcon/>{{ texts.twitter }}</button>
      <button class="about-info__social-button" aria-label="Go to this channel tiktok account"><TikTokIcon/>{{ texts.tiktok }}</button>
    </section>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.about-info {
  display: flex;
  flex-direction: column;
  background-color: var(--c-nav-background-color);
  color: var(--c-white);
  width: fit-content;
  margin-right: 1em;
  padding: 1.5em;

  &__followers {
    font-size: var(--fs-big-texts);
    font-weight: 600;

    &-word {
      color: #878790;
    }
  }

  &__description {
    font-size: var(--fs-big-texts);
    margin-top: 1em;
  }

  &__divider {
    display: flex;
    align-items: center;
    margin-top: 1em;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-top: 0.0625em solid var(--c-border-color);
    }
  }

  &__socials {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    font-size: var(--fs-small-texts);
    font-weight: 600;
  }

  &__social-button {
    @include social-buttons;

    &:hover {
      @include gray-buttons-hover;
    }
  }
}

</style>
