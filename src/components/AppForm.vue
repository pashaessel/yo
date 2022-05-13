<script setup>
import AppFormInput from "./AppForm.Input";
import AppButton from "./AppButton";
import { reactive } from "@vue/reactivity";

defineProps({
  inputs: {
    type: Object,
    required: true,
  },
  title: String,
  onSubmit: Object,
  buttonText: {
    default: "Отправить",
  },
});
const formData = reactive({});
const errors = reactive([]);
</script>
<template>
  <div class="form-wrapper">
    <form @submit.prevent="errors = formCallback(data)">
      <h3>{{ title }}</h3>
      <AppFormInput
        v-for="input of inputs"
        :label="input.label"
        :type="input.type"
        :name="input.name"
        v-model="formData[input.name]"
        :key="input.name"
      />
      {{ formData.name }}
      <AppButton :text="buttonText" type="submit"></AppButton>
    </form>
    <div class="errors" v-if="errors.length">
      <ul>
        <li v-for="(index, error) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h3 {
  font-family: "Amatic SC";
  font-weight: bold;
  font-size: 5rem;
  color: #edf6fe;
  margin-bottom: 2rem;
}
.form-wrapper {
  display: flex;
}
form {
  width: 45rem;
  padding: 2.5rem;
  background-color: rgba($color: #000000, $alpha: 0.6);
  font-size: 1.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.errors {
  margin-left: 2rem;
  width: 25rem;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
