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
		margin: 0 auto;
		font-size: 1.5rem;
		align-self: flex-start;
		color: #444444;
	}
</style>
