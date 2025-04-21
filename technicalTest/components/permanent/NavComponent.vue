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
      />
      <button class="top-bar__search-button" aria-label="Look for a streamer or live">
        <IconSearch />
      </button>
    </section>

    <section class="top-bar__right">
      <button class="top-bar__notification" aria-label="Notifications">
        <span class="top-bar__notification-text">{{ texts.notifNumber }}</span>
        <IconNotification />
      </button>
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
  margin: -0.5em;
  padding: 0.4em 1.25em;
  background-color: var(--c-nav-background-color);
  color: var(--c-white);
  width: 116.6em;
  height: 4em;

  &__left {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  &__title {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    font-weight: bold;
  }

  &__logo,
  &__more {
    @include nav-icon-buttons;
    @include gray-buttons-hover;
    padding: 0.2em;
  }

  &__search {
    display: flex;
    gap: 0.1em;
  }

  &__search-input {
    padding: 0.5em;
    border: 0.1em solid var(--c-border-color);
    border-radius: 0.3125em;
    background-color: #abc1c7;
    width: 12.5em;
  }

  &__search-button {
    @include nav-icon-buttons;
    @include gray-buttons-hover;
  }

  &__right {
    display: flex;
    gap: 0.6em;
  }

  &__notification {
    @include nav-icon-buttons;
    @include gray-buttons-hover;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;

    &-text {
      border-radius: 2em;
      margin-left: 0.2em;
      background-color: red;
      color: black;
      padding: 0.2em 0.5em;
    }
  }

  &__login {
    @include nav-icon-buttons;
    @include gray-buttons-hover;
    margin: auto;
    background-color: #2f2f35;
    font-weight: bold;
  }

  &__signup {
    @include nav-icon-buttons;
    background-color: var(--c-blue-button-and-words);
    font-weight: bold;
    margin: auto;
    color: black;

    &:hover {
      opacity: 0.8;
    }
  }

  &__profile {
    @include nav-icon-buttons;
    @include gray-buttons-hover;
    margin: auto;
  }
}
</style>
