<script setup>
import AppFormLabel from "./AppForm.Label.vue";
defineProps({
  name: String,
  label: String,
  placeholder: String,
});
</script>
<template>
  <AppFormLabel :id="name" v-if="label" :text="label"></AppFormLabel>
  <textarea :name="name" :id="name" cols="30" rows="10"></textarea>
</template>
<style lang="scss" scoped>
textarea {
  resize: none;
  margin-top: 2rem;
  height: 4rem;
  padding: 1.2rem 2.5rem;
  border: 1px solid $purple;
  border-radius: 5px;
  transition: all 0.5s ease-in;
  &:focus {
    border: 1px solid #f21577;
    outline: none;
  }
}
</style>
