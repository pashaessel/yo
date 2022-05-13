<script setup>
import AppForm from "@/components/AppForm.vue";
import { reactive } from "@vue/reactivity";
const inputs = {
  login: {
    label: "Логин",
    name: "login",
    type: "text",
  },
  password: {
    label: "Пароль",
    name: "password",
    type: "password",
  },
};
</script>
<template>
  <div class="signUp">
    <AppForm
      :inputs="inputs"
      buttonText="Зарегистрироваться"
      title="Регистрация"
    />
  </div>
</template>
<style lang='scss' scoped>
.signUp {
  background-image: url("/src/assets/images/authorize/signup-bg.jpeg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>