<script setup lang="ts">
import IconCollapseLogo from '@/components/icons/CollapseIcon.vue';
import CommunityIcon from '@/components/icons/CommunityIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import GiftIcon from '@/components/icons/GiftIcon.vue';
import EmojiIcon from '@/components/icons/EmojiIcon.vue';
import BitsIcon from '@/components/icons/BitsIcon.vue';
import ConfigIcon from '@/components/icons/ConfigIcon.vue';
</script>

<template>
  <section class="chat">
    <section class="chat__front">
      <button class="chat__collapse-icon chat__collapse-icon--flipped">
        <IconCollapseLogo/>
      </button>
      <span class="chat__title">STREAM CHAT</span>
      <button class="chat__collapse-icon chat__collapse-icon">
        <CommunityIcon/>
      </button>
    </section>
    <div class="chat__divider-one"/>
    <section class="chat__gifts">
      <ArrowIcon class="chat__collapse-icon chat__collapse-icon--flipped" />
      <section class="chat__gifts-title">
        <GiftIcon/>
        <span class="chat__gifts-text">
          Gift a Sub now to be #1!
        </span>
      </section>
      <ArrowIcon class="chat__collapse-icon" />
    </section>
    <div class="chat__divider-two"/>
    <section class="chat__content">
      <span class="chat__content-title">Welcome to the chat room!</span>
      <div class="chat__content-message">
        <input class="chat__content-message--input" type="text" placeholder="Send a message"><EmojiIcon/>
      </div>
      <div class="chat__bottom">
        <div class="chat__bottom-left">
          <span class="chat__bottom-bits"><BitsIcon />1</span>
          <span class="chat__bottom-points"><BitsIcon />0</span>
        </div>
        <div class="chat__bottom-right">
          <ConfigIcon />
          <button class="chat__bottom-send">Chat</button>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">

.chat {
  background-color: #18181b;
  width: 22rem;

  &__front {
    display:flex;
    flex-direction: row;
    justify-content: space-between
  }

  &__collapse-icon {
    border: 0;
    background-color: #18181b;
    padding: 1rem;

    &:hover {
      background-color: #77777a;
    }

    &--flipped {
      transform: scaleX(-1);
    }
  }

  &__title{
    color:white;
    padding-top: 1.5rem;
  }

  &__divider-one{
    border-top: 0.0625rem solid #444;
  }

  &__gifts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5rem;

    &-title{
      display: flex;
      align-items: center;
      gap:0.4rem;
    }

    &-text {
      color: #198ae0;
      padding-top: 0.7rem;
      font-weight: bold;
      display: flex;
      gap: 0.5rem;
    }
  }

  &__divider-two{
    border-top: 0.0625rem solid #444;
    margin: 1rem 1rem 0 1rem;
  }

  &__content{
    display:flex;
    flex-direction: column;
    padding: 1rem;
    height: 55rem;

    &-title{
      color: #9a9aa5;
    }

    &-message {
      margin-top: auto;
      background-color: 18181b;
      display:flex;
      align-items: center;

      &--input {
        width: 18rem;
        padding: 0.6rem;
        color: white;
        border: none;
        background-color: #18181b;
        border: 0.0625rem solid #545457;
        border-radius: 0.4rem;
      }

    }

  }

  
  &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      &-left {
        display: flex;
        gap: 0.5rem;
        color: #9b9ba4;
      }

      &-right {
        display: flex;
        gap: 0.5rem;
      }

      &-bits,
      &-points {
        display: flex;
        align-items: center;
      }

      &-send {
        background-color: #199afc;
        border: none;
        padding: 0.4rem;
        color: white;
        border-radius: 0.3125rem;
        cursor: pointer;
      }
    }

}

</style>
