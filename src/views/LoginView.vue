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
import { mapMutations } from "vuex";

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
		...mapMutations(["setToken"]),
		async login() {
			await axios
				.post("login", {
					username: this.user,
					password: this.password,
				})
				.then((res) => {
					const token = res.data.token;
					this.status = token;
					this.setToken(token);
				})
				.catch((error) => {
					this.status = error.message;
				});
		},
	},
};
</script>

<style></style>
