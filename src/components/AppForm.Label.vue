<script setup>
defineProps({
  id: String,
  text: String,
});
</script>
<template>
  <label :for="id">{{ text }}</label>
</template>

<style lang="scss" scoped>
label {
  font-family: "Poiret One";
  margin-left: 2rem;
  margin-top: 1rem;
  font-size: 1.7rem;
  opacity: 0.9;
  align-self: flex-start;
  color: #fff;
}
</style>
