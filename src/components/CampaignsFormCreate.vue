<template>
  <div class="campaing-create">
    <div class="container">
      <div class="campaing-create__wrapper">
        <form action="/campaings/create" method="post">
          <h1>Создание кампании</h1>
          <AppFormInput
            :label="inputs.name.label"
            :name="inputs.name.name"
            :type="inputs.name.type"
            :value="campaign.name"
          >
          </AppFormInput>
          <AppButton
            text="В путешествие!"
            type="submit"
            @submit.prevent="createCampaing({})"
          ></AppButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppFormInput from "./AppForm.Input";
import AppButton from "./AppButton";
import createCampaign from "@/api/index";
import { reactive, ref } from "@vue/reactivity";
const inputs = {
  name: {
    label: "Название",
    type: "text",
    name: "name",
  },
};
const campaign = reactive({
  name: "",
  img: "",
});
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Amatic SC";
  font-weight: bold;
  font-size: 5rem;
  color: #edf6fe;
  margin-bottom: 2rem;
}
form {
  height: 37rem;
  padding: 2.5rem;
  background-color: rgba($color: #000000, $alpha: 0.6);
  font-size: 1.9rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
select {
  padding: 1.2rem 2.5rem;
  background-color: #fff;
  height: 4rem;
}
.campaing-create__wrapper {
  display: flex;
  justify-content: center;
}
</style>
