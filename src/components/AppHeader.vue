<template>
	<header>
		<div class="container">
			<div class="content">
				<a hreff="/" class="logo">yo-<span>dnd</span></a>
				<nav>
					<ul>
						<li v-for="nav of navs" :key="nav.id">
							<router-link :to="nav.href"> {{ nav.title }} </router-link>
						</li>
					</ul>
				</nav>
				<div class="authorize">
					<router-link
						:to="button.link"
						class="btn"
						:class="button.type"
						v-for="button of authorizeButtons"
						:key="button.id"
					>
						{{ button.text }}
					</router-link>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { ref, reactive } from "vue";
	import AppButton from "./AppButton";
	const navs = {
		home: {
			title: "Главная",
			href: "/",
			id: 1,
		},
		campaigns: {
			title: "Кампании",
			href: "/campaigns",
			id: 2,
		},
		characters: {
			title: "Персонажи",
			href: "/characters",
			id: 3,
		},
	};
	const authorizeButtons = reactive({
		"sign-in": {
			text: "Вход",
			link: "/sign-in",
			type: "btn-secondary",
			id: 1,
		},
		"sign-up": {
			text: "Регистрация",
			link: "/sign-up",
			type: "btn-primary",
			id: 2,
		},
	});
</script>

<style scoped lang="scss">
	header {
		padding: 1rem 1.5rem;
		height: 6.5rem;
		width: 100%;
		box-shadow: -8px -8px 20px 1px grey;
		margin-bottom: 4rem;
	}
	.content {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.logo {
		margin: auto 0;
		font-size: 2.4rem;
		font-weight: bold;
		span {
			color: $purple;
		}
	}
	ul {
		margin-left: 5rem;
		display: flex;
		a {
			font-size: 1.8rem;
			margin-right: 4.2rem;
			font-weight: bold;
			&:hover {
				color: $purple;
				transition: color 0.5s;
			}
		}
	}
	.authorize {
		a {
			margin-left: 3.6rem;
		}
	}
</style>
