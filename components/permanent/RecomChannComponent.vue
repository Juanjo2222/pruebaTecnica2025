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
    <LeftLayoutRow/>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  background-color: var(--c-general-color);
  padding: 1em;
  color: var(--c-white);
  display: flex;
  flex-direction: column;
  padding-left: 1.5em;
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625em;
  }

  &__title {
    font-size: var(--fs-small-texts);
  }

  &__collapse-button {
    border: 0;
    background-color: var(--c-general-color);
    padding-left: 0.3em;
    margin-left: 2.1em;
  }

}

@media (max-width: 45.8125em) {
  .sidebar{
    margin-left: 2em;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1em;

  }
}

@media (max-width: 68.75em) {
  .sidebar {
    &__header{
      display: none;
    }
  }
}
</style>
