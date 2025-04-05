<script setup lang="ts">
import IconCollapseLogo from '@/components/icons/CollapseIcon.vue';
import LeftLayoutRow from '~/components/LeftLayoutRow.vue';

const channels = [
  { name: "Streamer1", viewers: "12.3K", avatar: "https://placehold.co/40" },
  { name: "Streamer2", viewers: "8.5K", avatar: "https://placehold.co/40" },
  { name: "Streamer3", viewers: "5.2K", avatar: "https://placehold.co/40" }
];
</script>

<template>
  <aside class="sidebar">
    <section class="sidebar__front-part">
      <h2 class="sidebar__front-part--title">RECOMMENDED CHANNELS</h2>
      <button class="sidebar__front-part--collapase-button">
        <IconCollapseLogo/>
      </button>
    </section>
    <LeftLayoutRow 
      v-for="channel in channels" 
      :key="channel.name" 
      :name="channel.name" 
      :viewers="channel.viewers" 
      :avatar="channel.avatar" 
    />
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  font-family: Arial, Helvetica, sans-serif;
  width: 17rem;
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
