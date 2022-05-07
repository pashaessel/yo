<script setup>
import AppFormLabel from "./AppForm.Label.vue";
defineProps({
  options: {
    type: Object,
  },
  name: String,
  label: String,
});
</script>

<template>
  <AppFormLabel :for="name" v-if="label" :text="label"></AppFormLabel>
  <select :id="name">
    <option value="Vanilla_DND" selected>Ванильный DnD</option>
    <option value="Enoa">Эноа</option>
  </select>
</template>

<style lang="scss">
</style>