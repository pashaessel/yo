<script setup>
import AppFormLabel from "./AppForm.Label";
defineProps({
  label: String,
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<template>
  <AppFormLabel :for="name" v-if="label" :text="label"></AppFormLabel>
  <input :type="type" :id="name" :name="name" :value="value" @focus=""/>
</template>

<style lang="scss" scoped>
input {
  font-family: "Poiret One";
  font-weight: bold;
  text-align: center;
  width: 80%;
  font-size: 1.9rem;
  height: 2.5rem;
  margin-top: 1rem;
  padding: 1.2rem 2.5rem;
  border-radius: 10px;
  background-color: rgb(255 255 255 / 39%);
  transition: border 0.5s ease-in;
  color: #fff;

  &:focus {
    outline: none;
    border-bottom: 2px solid $primary-button;
  }
}
</style>
