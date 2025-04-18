<script setup lang="ts">
import YotubeIcon from '@/components/icons/YotubeIcon.vue'
import InstragramIcon from '@/components/icons/InstragramIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import TikTokIcon from '@/components/icons/TikTokIcon.vue'
import texts from '@/assets/texts.json';
</script>

<template>
  <section class="about-info">
    <span class="about-info__followers">"184M"
      <span class="about-info__followers--word">{{ texts.followers }}</span>
    </span>
    <span class="about-info__description">Description</span>
    <div class="about-info__divider"/>
    <section class="about-info__social-buttons">
      <button class="about-info__social-button"><YotubeIcon/>{{ texts.youtube }}</button>
      <button class="about-info__social-button"><InstragramIcon/>{{ texts.instagram }}</button>
      <button class="about-info__social-button"><TwitterIcon/>{{ texts.twitter }}</button>
      <button class="about-info__social-button"><TikTokIcon/>{{ texts.tiktok }}</button>
    </section>
  </section>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.about-info{
  display: flex;
  flex-direction: column;
  background-color: var(--c-nav-background-color);
  color: var(--c-white);
  height: 10rem;
  padding:1.5rem;
  margin-right: 1rem;
  
  &__followers{
    
    &--word{
    color:#878790;
  }

  }

  &__description{
    margin-top:1rem;
  }

  &__divider{
    display: flex;
    align-items: center;
    margin-top:1rem;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-top: 0.0625rem solid var(--c-border-color);
    }

  }

  &__social-buttons {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}

    &__social-button {
      @include social-buttons;

      &:hover {
        @include gray-buttons-hover;
      }
    }

}

</style>
