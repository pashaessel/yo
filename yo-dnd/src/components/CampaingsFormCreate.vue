<template>
	<div class="campaing-create page">
		<h1>Создание кампании</h1>
		<div class="container">
			<div class="campaing-create__wrapper">
				<form action="/campaings/create" method="post">
					<AppFormInput
						:label="inputs.name.label"
						:name="inputs.name.name"
						:type="inputs.name.type"
					>
					</AppFormInput>
					<AppFormTextarea v-bind="inputs.description"></AppFormTextarea>
					<label for="name">Сеттинг</label>
					<select name="select">
						<option value="Vanilla_DND" selected>Ванильный DnD</option>
						<option value="Enoa">Эноа</option>
					</select>
				</form>
			</div>
		</div>
	</div>
</template>
<script setup>
	import AppFormInput from "./AppForm.Input";
	import AppFormTextarea from "./AppForm.Textarea";
	const inputs = {
		name: {
			label: "Название",
			type: "text",
			name: "name",
		},
		description: {
			label: "Краткое описание",
			name: "description",
		},
	};
</script>

<style lang="scss" scoped>
	form {
		font-size: 1.9rem;
		margin-top: 6.4rem;
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
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
