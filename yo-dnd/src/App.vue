<template>
  <AppHeader></AppHeader>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import AppHeader from "@/components/AppHeader";
</script>


<style lang="scss">
@import url(/src/assets/scss/variables.scss);
</style>
