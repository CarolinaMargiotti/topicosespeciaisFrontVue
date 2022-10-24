<template>
	<div class="usuario">
		<ul>
			<li v-for="(usuario, i) in usuarios" :key="i">
				{{ usuario.nome }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
	name: "usuarioView",
	data() {
		return {
			usuarios: [],
		};
	},
	methods: {
		atualizar() {
			axios
				.get("usuario", {
					headers: {
						authorization: this.token,
					},
				})
				.then((res) => {
					this.usuarios = res.data;
				})
				.catch((error) => {
					console.log(error.message);
				});
		},
	},
	computed: {
		...mapState(["token"]),
	},
	mounted() {
		this.atualizar();
	},
};
</script>
