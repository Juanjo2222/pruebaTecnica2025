<script setup lang="ts">
import IconCollapseLogo from '@/components/icons/CollapseIcon.vue';
import LeftLayoutRow from '@/components/permanent/LeftLayoutRow.vue';
import texts from '@/assets/data/texts.json';
</script>

<template>
  <aside class="sidebar">
    <section class="sidebar__header">
      <h2 class="sidebar__title">{{ texts.recommChannels }}</h2>
      <button class="sidebar__collapse-button" aria-label="Show recommended channels">
        <IconCollapseLogo />
      </button>
    </section>
    <LeftLayoutRow />
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  font-family: Arial, Helvetica, sans-serif;
  width: 19.1em;
  background-color: var(--c-general-color);
  padding: 1em;
  color: var(--c-white);
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-left: -0.5em;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 0.9em;
    font-weight: bold;
  }

  &__collapse-button {
    border: 0;
    background-color: var(--c-general-color);
    padding-left: 0.3em;
    margin-left: 2.1em;
    cursor: pointer;

    &:hover {
      background-color: var(--c-gray-hover);
    }
  }
}
</style>
