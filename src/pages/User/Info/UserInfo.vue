<script>
import API from "@/pages/User/API";

export default {
	components: {},
	data() {
		return {
			user: {}
		}
	},
	methods: {},
	computed: {},
	watch: {},
	beforeMount() {
		API.getUser(this.$route.params.id).then(user => {
			this.user = user;
		});
	},
}
</script>

<template>
	<div>
		<div>{{ user.id }}</div>
		<div>{{ user.firstName }}</div>
		<div>{{ user.lastName }}</div>
		<div>{{ user.oib }}</div>
		<div>{{ user.address.country }}</div>
		<div>{{ user.address.city }}</div>
		<div>{{ user.address.postalNumber }}</div>
		<div>{{ user.address.street }}</div>
		<div>{{ user.address.streetNumber }}</div>
	</div>
</template>

<style scoped>
</style>
