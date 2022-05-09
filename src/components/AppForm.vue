<script setup>
	import AppFormInput from "./AppForm.Input";
	import AppButton from "./AppButton";
	import { reactive } from "@vue/reactivity";
	import { createCampaign } from "@/api/api";
	defineProps({
		inputs: Object,
		title: String,
	});

	const data = reactive({});
</script>
<template>
	<form method="{{method}}" @submit.prevent="createCampaign(data)">
		<h3>{{ title }}</h3>
		<AppFormInput
			v-for="input of inputs"
			:label="input.label"
			:type="input.type"
			:name="input.name"
			v-model="data.name"
			:key="input.name"
		/>
		{{ data.name }}
		<AppButton text="В путешествие!" type="submit"></AppButton>
	</form>
</template>
<style lang="scss" scoped>
	h3 {
		font-family: "Amatic SC";
		font-weight: bold;
		font-size: 5rem;
		color: #edf6fe;
		margin-bottom: 2rem;
	}
	form {
		height: 37rem;
		width: 45rem;
		padding: 2.5rem;
		background-color: rgba($color: #000000, $alpha: 0.6);
		font-size: 1.9rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
