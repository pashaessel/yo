<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader";
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
</style>
