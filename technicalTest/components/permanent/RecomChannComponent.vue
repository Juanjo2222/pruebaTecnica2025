<script setup lang="ts">
import IconCollapseLogo from '@/components/icons/CollapseIcon.vue';
import LeftLayoutRow from '@/components/permanent/LeftLayoutRow.vue';

</script>

<template>
  <aside class="sidebar">
    <section class="sidebar__front-part">
      <h2 class="sidebar__front-part--title">RECOMMENDED CHANNELS</h2>
      <button class="sidebar__front-part--collapase-button">
        <IconCollapseLogo/>
      </button>
    </section>
    <LeftLayoutRow/>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  font-family: Arial, Helvetica, sans-serif;
  width: 18rem;
  background-color: #0e0e10;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: -0.5rem;

  &__front-part {
    display: flex;
    justify-content: space-between;

    &--title {
      font-size: 0.9rem;
      font-weight: bold;
    }

    &--collapase-button {
      border: 0;
      background-color: #0e0e10;
      padding-left: 0.3rem;
      margin-left: 2.1rem;
      &:hover{
        background-color: #77777a;
      }
    }

  }

}

</style>
