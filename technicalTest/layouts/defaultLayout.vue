<script setup lang="ts"></script>

<template>
  <nav class="top-bar">
    <div class="top-bar__logo">Twitch</div>
    <div class="top-bar__search">
      <input
        class="top-bar__search--input"
        type="text"
        placeholder="Search..."
      />
    </div>
    <div class="top-bar__actions">
      <button class="top-bar__actions--login">Log in</button>
      <button class="top-bar__actions--signup">Sign up</button>
    </div>
  </nav>
  <slot></slot>
</template>

<style scoped lang="scss">
.top-bar {
  display: flex;
  margin: -0.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background-color: #18181b;
  color: white;

  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__search {
    &--input {
      padding: 0.5rem;
      border: 0.1rem solid #575353;
      border-radius: 0.3125rem;
      background-color: #18181b;
      width: 12.5rem;
    }
  }

  &__actions {
    display: flex;
    gap: 0.6rem;

    &--login {
      background-color: #2f2f35;
      border: none;
      padding: 0.3125rem 0.625rem;
      color: white;
      border-radius: 0.3125rem;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }

    &--signup {
      background-color: #199afc;
      border: none;
      padding: 0.3125rem 0.625rem;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
