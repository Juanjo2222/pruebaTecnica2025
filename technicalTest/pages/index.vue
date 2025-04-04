<script>
definePageMeta({
  defaultLayout: "default-layout",
  channelLayout: "channel-layout",
});
</script>

<template>
  <div class="container">
    <NuxtLayout :name="$route.meta.defaultLayout"/>
    <NuxtLayout :name="$route.meta.channelLayout"/>
  </div>
</template>

<style scoped lang="scss">

</style>
