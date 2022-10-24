<template>
	<div>
		<h2>Login</h2>
		<input v-model="user" type="text" />
		<br />
		<br />
		<input v-model="password" type="password" />
		<br />
		<br />
		<button @click="login">Logar</button>
		<br />
		<br />
		<h4>{{ status }}</h4>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "LoginView",
	data() {
		return {
			user: "",
			password: "",
			status: "",
		};
	},
	methods: {
		async login() {
			await axios
				.post("login", {
					username: this.user,
					password: this.password,
				})
				.then((res) => {
					this.status = res.data.token;
				})
				.catch((error) => {
					this.status = error.message;
				});
		},
	},
};
</script>

<style></style>
