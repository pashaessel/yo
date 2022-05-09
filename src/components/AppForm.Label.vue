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
		margin: 2rem auto 0 auto;
		font-size: 2.1rem;
		opacity: 0.9;
		align-self: flex-start;
		color: #fff;
	}
</style>
