<template>
	<div>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/usuario">Usuário</router-link> |
			<router-link to="/login">Login</router-link>
		</nav>
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

input {
	border-radius: 4px;
}

button {
	font-weight: bold;
	color: #42b983;
	background-color: #2c3e50;
	border-radius: 4px;
	border-color: transparent;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
