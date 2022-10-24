import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/HomeView.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"), //só baixa a pagina quando é acessada, para ja baixar na hora que o site carrega não importa a pagina por o componente direto
	},
	{
		path: "/usuario",
		name: "usuario",
		component: () => import("../views/UsuarioView.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/LoginView.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
