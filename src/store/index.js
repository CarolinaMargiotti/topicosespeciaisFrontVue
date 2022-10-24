import { createStore } from "vuex";

export default createStore({
	state: {
		token: "",
	},
	getters: {},
	mutations: {
		//setters
		setToken(state, token) {
			//state sempre é o primeiro parametro
			state.token = token;
		},
	},
	actions: {},
	modules: {},
});
