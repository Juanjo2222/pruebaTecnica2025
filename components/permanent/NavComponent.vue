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
    <section class="top-bar__left">
      <button class="top-bar__logo" aria-label="Go to principal page">
        <IconTwitchLogo />
      </button>
      <div class="top-bar__title">{{ texts.midutch }}</div>
      <button class="top-bar__more" aria-label="Show more options">
        <IconOptions />
      </button>
    </section>

    <section class="top-bar__search">
      <input
        class="top-bar__search-input"
        type="text"
        placeholder="Search"
      >
      <button class="top-bar__search-button" aria-label="Look for a streamer or live">
        <IconSearch />
      </button>
    </section>

    <section class="top-bar__right">
      <div class="top-bar__notification-wrapper">
        <button class="top-bar__notification" aria-label="Notifications">
          <IconNotification />
        </button>
        <span class="top-bar__notification-text">{{ texts.notifNumber }}</span>
      </div>
      <button class="top-bar__login" aria-label="Button to login">{{ texts.loginButton }}</button>
      <button class="top-bar__signup" aria-label="Button to sign up">{{ texts.signUpButton }}</button>
      <button class="top-bar__profile" aria-label="Show your account">
        <IconProfile />
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
  padding: 0.1325em 1.25em 0.1325em 1.25em;
  background-color: var(--c-nav-background-color);
  color: var(--c-white);
  height: 3.125em;

  &__left {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  &__title {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  &__logo,
  &__more {
    @include nav-icon-buttons;
    padding: 0.1em;
  }

  &__search {
    display: flex;
    gap: 0em;
    height: 2.5em;
  }

  &__search-input {
    margin-top: 0.2em;
    font-size: var(--fs-big-texts);
    border: 0.1em solid var(--c-border-color);
    padding: 1em;
    border-top-left-radius: 0.375em;
    border-bottom-left-radius: 0.375em;
    background-color: #abc1c7;
    width: 24.375em;
  }

  &__search-button {
    border-top-right-radius: 0.375em;
    border-bottom-right-radius: 0.375em;
    margin-top: 0.2em;
    padding-right: 0.1em;
    padding-left: 0.2em;
    background-color: #53535F61;
  }

  &__right {
    display: flex;
    gap: 0.6em;
    height: 2.5em;
  }

  &__notification-wrapper {
    position: relative;
    margin-top: 0.6em;
  }

  &__notification {
    @include nav-icon-buttons;
    font-weight: bold;
    padding: 0.2em;
  }

  &__notification-text {
    position: absolute;
    top: -0.7em;
    right: -0.4em;
    border-radius: 562.5em;
    background-color: red;
    color: white;
    font-size: 0.7em;
    padding: 0.2em 0.45em;
    font-size: 0.75em;
    line-height: 1;
  }

  &__login {
    @include nav-icon-buttons;
    font-size: var(--fs-small-texts);
    margin: auto;
    background-color: #2f2f35;
  }

  &__signup {
    @include nav-icon-buttons;
    background-color: var(--c-blue-button-and-words);
    font-size: var(--fs-small-texts);
    font-weight: var(--fw-big-texts);
    margin: auto;
    color: black;
  }

  &__profile {
    @include nav-icon-buttons;
    padding: 0.3125em;
    margin: auto;
  }
}
</style>
