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
		value: {
			type: String,
			default: "",
		},
	});
</script>

<template>
	<AppFormLabel :for="name" v-if="label" :text="label"></AppFormLabel>
	<input :type="type" :name="name" :value="value" />
</template>

<style lang="scss" scoped>
	input {
		font-size: 1.9rem;
		height: 2.5rem;
		padding: 1.2rem 2.5rem;
		margin-bottom: 2.4rem;
		transition: border 0.5s ease-in;
		border-bottom: 2px solid $purple;
		&:focus {
			outline: none;
			border-bottom: 2px solid #f21577;
		}
	}
</style>
