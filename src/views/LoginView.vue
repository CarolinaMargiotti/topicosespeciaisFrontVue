<template>
	<div>
		<p>Login</p>
		<input v-model="user" type="text" />
		<br />
		<input v-model="password" type="password" />
		<br />
		<button @click="login">Logar</button>
		<br />
		<h2>{{ status }}</h2>
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
				.post(
					"https://8080-carolinamar-topicosespe-vvyd2gjo61c.ws-us72.gitpod.io/login",
					{
						username: this.user,
						password: this.password,
					}
				)
				.then(() => {
					this.status = "ok";
				})
				.catch((error) => {
					this.status = error.message;
				});
		},
	},
};
</script>

<style></style>
