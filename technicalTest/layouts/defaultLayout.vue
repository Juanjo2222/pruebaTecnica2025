<script setup lang="ts">
import IconSearch from '@/components/icons/searchIcon.vue';
import IconOptions from '@/components/icons/optionsIcon.vue';
import IconNotification from '@/components/icons/notificationIcon.vue';
import IconProfile from '@/components/icons/profileIcon.vue';
import IconTwitchLogo from '@/components/icons/twitchLogoIcon.vue';
</script>

<template>
  <nav class="top-bar">
    <div class="top-bar__left-part">
      <button class="top-bar__left-part--logo">
        <IconTwitchLogo/>
      </button>
      <div class="top-bar__left-part--text">MIDUTCH</div>
      <button class="top-bar__left-part--more">
        <IconOptions/>
      </button>
    </div>
    <div class="top-bar__search">
      <input
        class="top-bar__search--input"
        type="text"
        placeholder="Search"
      >
      <button class="top-bar__search--button">
        <IconSearch/>
      </button>
    </div>
    <div class="top-bar__right-part">
      <button class="top-bar__right-part--notification">
        <span class="notification-text">63</span>
        <IconNotification/>
      </button>
      <button class="top-bar__right-part--login">Log in</button>
      <button class="top-bar__right-part--signup">Sign up</button>
      <button class="top-bar__right-part--profile">
        <IconProfile/>
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">

@mixin buttons{
  background-color: #18181b;
  border: none;
  padding: 0.625rem;
  color: white;
  border-radius: 0.3125rem;
  cursor: pointer;
}

@mixin hover{
  &:hover {
    background-color:#77777a;
  }
}

.top-bar {

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -0.5rem;
  padding: 0.625rem 1.25rem;
  background-color: #18181b;
  color: white;
  height: 3rem;

  &__left-part {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &--text {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      font-weight: bold;
    }

    &--more {
      @include buttons;
      @include hover;
      padding: 0.2rem;
    }

    &--logo {
      @include buttons;
      @include hover;
      padding: 0.2rem;
    }
  }

  &__search {
    display:flex;
    gap: 0.1rem;
    &--input {
      padding: 0.5rem;
      border: 0.1rem solid #575353;
      border-radius: 0.3125rem;
      background-color: #18181b;
      width: 12.5rem;
    }

    &--button{
      @include buttons;
      @include hover;
      
    }
  }

  &__right-part {
    display: flex;
    gap: 0.6rem;

    &--notification {
      @include buttons;
      @include hover;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;

      .notification-text {
        border-radius: 2rem;
        margin-left: 0.2rem;
        background-color: red;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }

    &--login {
      @include buttons;
      @include hover;
      margin:auto;
      background-color: #2f2f35;
      font-weight: bold;
    }

    &--signup {
      @include buttons;
      background-color: #199afc;
      font-weight: bold;
      margin:auto;
      &:hover{
        opacity: 0.8;
      }
    }

    &--profile {
      @include buttons;
      @include hover;
      margin:auto;
    }

  }
}
</style>
