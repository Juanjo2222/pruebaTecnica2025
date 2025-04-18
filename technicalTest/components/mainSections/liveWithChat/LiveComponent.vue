<script setup lang="ts">
import IconTwitchLogo from '@/components/icons/TwitchLogoIcon.vue';
import IconOptions from '@/components/icons/OptionsIcon.vue';
import AboutInfoComponent from '@/components/mainSections/liveWithChat/AboutInfoComponent.vue'
import FollowIcon from '@/components/icons/FollowIcon'
import SuscribeIcon from '@/components/icons/SuscribeIcon'
import DownArrowIcon from '@/components/icons/DownArrowIcon'
import RedViewersIcon from '@/components/icons/RedViewersIcon'
import ShareIcon from '@/components/icons/ShareIcon'
</script>

<template>
  <section class="live">
  <section class="live__video">
    <h2>IMAGEN DEL DIRECTO</h2><!--<img :src="channel.thumbnail" class="live-channels__card--image"> LA IMAGEN DEL DIRECTO-->
  </section>
  <section class="live__info">
    <button class="live__profile-button">
      <IconTwitchLogo />
      <span class="live__profile-button-text">LIVE</span>
    </button>
    <section class="live__info--positions">
      <section class="live__front">
        <span class="live__streamer-name">Streamer</span>
        <section class="live__actions">
          <button class="live__actions-button live__actions-button--follow"><FollowIcon class="live__icon-button"/>Follow</button>
          <button class="live__actions-button live__actions-button--subscribe"><SuscribeIcon class="live__icon-button"/>Subscribe<DownArrowIcon class="live__icon-button"/></button>
        </section>
      </section>
    <section class="live__middle">
      <span class="live__title">Título</span>
      <div class="live__right-info">
        <span class="live__viewers"><RedViewersIcon/>25.000</span>
        <span class="live__time">3:25:00</span>
        <section class="live__button-more">
          <button class="live__button-more--button"><ShareIcon/></button>
          <button class="live__button-more--button"><IconOptions/></button>
        </section>
      </div>
    </section>
    <section class="live__bottom">
      <span class="live__category">Categoría</span>
      <span class="live__tags">tags</span>
    </section>
   </section>
  </section>
  <span class="live__about">About "streamer"</span>
  <AboutInfoComponent/>
</section>

</template>

<style scoped lang="scss">
.live {
  display: flex;
  flex-direction: column;
  background-color: var(--c-general-color);

  &__video {
    color: white;
    background-color: gray;
    width: 75rem;
    height: 40rem;
  }

  &__info {
    display: flex;
    margin-top: 1rem;
  }

  &__info--positions {
    margin-right: 1rem;
    margin-left: 0.5rem;
  }

  &__profile-button {
    border-radius: 50%;
    border: none;
    width: 4rem;
    height: 4rem;
    background-color: rgb(245, 110, 20);
    margin-top: 1rem;

    &:hover {
      opacity: 0.8;
    }

    &-text {
      border-radius: 0.3rem;
      background-color: red;
      color: white;
      padding: 0.3rem;
      display: inline-block;
      margin-left: 0.5rem;
    }
  }

  &__front {

    display: flex;
    flex-direction: column;
    flex-direction: row;
    gap: 0.5rem;
  }

  &__streamer-name {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    margin-left: 52rem;

    &-button {
      padding: 0.5rem;
      border: none;
      border-radius: 0.4rem;
      cursor: pointer;
      font-size: 0.9rem;
      color: white;
      height: 2rem;
      display:flex;

      &--follow {
        background-color:#199afc;
      }

      &--subscribe {
        background-color: #2f2f35;
        .icon{
          padding-right:0.2rem;
        }
      }

      &:hover {
        opacity: 0.85;
      }
    }
  }

  &__middle {
    margin-top: 1rem;
    margin-left: 0.3rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color:white;
  }

  &__title {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }

  &__right-info {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-left: auto;
  }

  &__viewers{
    display:flex;
    color: #ff8280;
  }

  &__button-more{

    display:flex;

    &--button{
      background-color: var(--c-general-color);
      border: none;
      color: white;
      border-radius: 0.3125rem;
      cursor: pointer;
      padding: 0.2rem;

      &:hover {
        background-color:#77777a;
      }
    }

  }

  &__bottom {
    display:flex;
    flex-direction: column;
  }

  &__category{
    color:#1788de;
    padding: 0.4rem;
    font-size: 1rem;
  }

  &__tags{
    font-size: 0.75rem;
    font-weight: bold;
    background-color: #29292e;
    padding: 0.3rem 0.6rem;
    border-radius: 1rem;
    color: #adadb8;
    width: fit-content;
  }

  &__about{
    color:white;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &__icon-button {
    padding-right: 0.3rem;
  }

}

</style>
