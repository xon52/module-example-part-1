<template>
	<div>
		<h1>Home Page</h1>
		<p>Welcome home!</p>
		<ul>
			<li><router-link to="/contact">Contact</router-link></li>
			<li><router-link to="/faq">FAQ</router-link></li>
			<li><router-link to="/trees">Trees</router-link></li>
		</ul>
		<button @click="loadModuleA">Load Module A</button>
	</div>
</template>
<script>
	import moduleA from '../../moduleA/module'
	export default {
		methods: {
			loadModuleA () {
				this.$store.dispatch('system/initializeModule', moduleA)
			}
		}
	}
</script>
