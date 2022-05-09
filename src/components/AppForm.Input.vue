<script setup>
	import AppFormLabel from "./AppForm.Label";
	import { ref } from "vue";
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
		modelValue: String,
	});
	defineEmits(["update:modelValue"]);
</script>

<template>
	<AppFormLabel :for="name" v-if="label" :text="label"></AppFormLabel>
	<input
		:type="type"
		:id="name"
		:name="name"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
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
		}
	}
</style>
