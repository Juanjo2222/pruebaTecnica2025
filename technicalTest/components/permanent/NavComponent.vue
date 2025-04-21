<script setup lang="ts">
import IconSearch from '@/components/icons/SearchIcon.vue';
import IconOptions from '@/components/icons/OptionsIcon.vue';
import IconNotification from '@/components/icons/NotificationIcon.vue';
import IconProfile from '@/components/icons/ProfileIcon.vue';
import IconTwitchLogo from '@/components/icons/TwitchLogoIcon.vue';
import texts from '@/assets/data/texts.json';
</script>

<template>
  <nav class="top-bar">
    <section class="top-bar__left-part">
      <button class="top-bar__left-part--logo">
        <IconTwitchLogo/>
      </button>
      <div class="top-bar__left-part--text">{{ texts.midutch }}</div>
      <button class="top-bar__left-part--more">
        <IconOptions/>
      </button>
    </section>
    <section class="top-bar__search">
      <input
        class="top-bar__search--input"
        type="text"
        placeholder="Search"
      >
      <button class="top-bar__search--button">
        <IconSearch/>
      </button>
    </section>
    <section class="top-bar__right-part">
      <button class="top-bar__right-part--notification">
        <span class="notification-text">{{ texts.notifNumber }}</span>
        <IconNotification/>
      </button>
      <button class="top-bar__right-part--login">{{ texts.loginButton }}</button>
      <button class="top-bar__right-part--signup">{{ texts.signUpButton }}</button>
      <button class="top-bar__right-part--profile">
        <IconProfile/>
      </button>
    </section>
  </nav>
</template>

<style scoped lang="scss">

@import '@/assets/styles/mixins.scss';

.top-bar {

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -0.5em;
  padding: 0.4em 1.25em;
  background-color: var(--c-nav-background-color);
  color: var(--c-white);
  width: 116.6em;
  height: 4em;

  &__left-part {
    display: flex;
    align-items: center;
    gap: 0.5em;

    &--text {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1em;
      font-weight: bold;
    }

    &--more {
      @include nav-icon-buttons;
      @include gray-buttons-hover;
      padding: 0.2em;
    }

    &--logo {
      @include nav-icon-buttons;
      @include gray-buttons-hover;
      padding: 0.2em;
    }
  }

  &__search {
    display:flex;
    gap: 0.1em;
    
    &--input {
      padding: 0.5em;
      border: 0.1em solid var(--c-border-color);
      border-radius: 0.3125em;
      background-color: var(--c-nav-background-color);
      width: 12.5em;
    }

    &--button{
      @include nav-icon-buttons;
      @include gray-buttons-hover;
      
    }
  }

  &__right-part {
    display: flex;
    gap: 0.6em;

    &--notification {
      @include nav-icon-buttons;
      @include gray-buttons-hover;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;

      .notification-text {
        border-radius: 2em;
        margin-left: 0.2em;
        background-color: red;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        padding-left: 0.5em;
        padding-right: 0.5em;
      }
    }

    &--login {
      @include nav-icon-buttons;
      @include gray-buttons-hover;
      margin:auto;
      background-color: #2f2f35;
      font-weight: bold;
    }

    &--signup {
      @include nav-icon-buttons;
      background-color: var(--c-blue-button-and-words);
      font-weight: bold;
      margin:auto;
      &:gray-buttons-hover{
        opacity: 0.8;
      }
    }

    &--profile {
      @include nav-icon-buttons;
      @include gray-buttons-hover;
      margin:auto;
    }

  }
}
</style>
