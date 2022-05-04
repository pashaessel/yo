<template>
	<router-link :to="link" :class="type">{{ text }}</router-link>
	<!-- <button>{{ text }}</button> -->
</template>

<script setup>
	import { reactive } from "vue";

	defineProps({
		text: {
			type: String,
			required: true,
			default: "Кнопка",
		},
		link: {
			type: String,
		},
		type: {
			type: String,
			default: "btn-primary",
		},
	});
</script>

<style lang="scss" scoped>
	
</style>
