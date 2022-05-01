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
		height: 4rem;
		padding: 1.2rem 2.5rem;
		border: 1px solid $purple;
		border-radius: 5px;
		&:focus {
			outline: 1px solid pink;
		}
	}
</style>
