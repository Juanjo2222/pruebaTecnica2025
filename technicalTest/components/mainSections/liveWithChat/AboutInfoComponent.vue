<script setup lang="ts">
import YotubeIcon from '@/components/icons/YotubeIcon.vue'
import InstragramIcon from '@/components/icons/InstragramIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import TikTokIcon from '@/components/icons/TikTokIcon.vue'
</script>

<template>
  <section class="about-info">
    <span class="about-info__followers">"184M"
      <span class="about-info__followers--word"> followers</span>
    </span>
    <span class="about-info__description">Description</span>
    <div class="about-info__divider"/>
    <section class="about-info__social-buttons">
      <button class="about-info__social-button"><YotubeIcon/>YouTube</button>
      <button class="about-info__social-button"><InstragramIcon/>Instagram</button>
      <button class="about-info__social-button"><TwitterIcon/>Twitter</button>
      <button class="about-info__social-button"><TikTokIcon/>TikTok</button>
    </section>
  </section>
</template>

<style scoped lang="scss">

.about-info{
  display: flex;
  flex-direction: column;
  background-color: #18181b;
  color:white;
  height: 10rem;
  padding:1.5rem;
  margin-right: 1rem;
  
  &__followers{
    color:white;
        
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
      border-top: 0.0625rem solid #444;
    }

  }

  &__social-buttons {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}

    &__social-button {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.5rem;
      background-color: #18181b;
      color: #a4a4ae;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #77777a;
      }
    }

}

</style>
