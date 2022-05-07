<template>
  <router-link :to="link" v-if="link">{{ text }}</router-link>
  <button class="btn" :class="class" :type="type">{{ text }}</button>
</template>

<script setup>
import { reactive } from "vue";

defineProps({
  text: {
    type: String,
    required: true,
    default: "Кнопка",
  },
  link: String,
  type: String,
  class: {
    type: String,
    default: "btn-primary",
  },
});
</script>

<style lang="scss" scoped>
</style>
