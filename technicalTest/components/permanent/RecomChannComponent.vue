<script setup lang="ts">
import IconCollapseLogo from '@/components/icons/CollapseIcon.vue';
import LeftLayoutRow from '@/components/permanent/LeftLayoutRow.vue';
import texts from '@/assets/texts.json';
</script>

<template>
  <aside class="sidebar">
    <section class="sidebar__front-part">
      <h2 class="sidebar__front-part--title">{{ texts.recommChannels }}</h2>
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
  background-color: var(--c-general-color);
  padding: 1rem;
  color: var(--c-white);
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
      background-color: var(--c-general-color);
      padding-left: 0.3rem;
      margin-left: 2.1rem;
      &:hover{
        background-color: var(-c-gray-hover);
      }
    }

  }

}

</style>
