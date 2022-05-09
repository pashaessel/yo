<template>
	<main><AppForm title="Создание кампании" :inputs="inputs" /></main>
</template>
<script setup>
	import AppForm from "@/components/AppForm";
	const inputs = {
		name: {
			label: "Название",
			type: "text",
			name: "name",
		},
	};
</script>
<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 6rem);
		background-image: url("@/assets/images/campaings/bg.jpg");
		background-position: 100%;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
