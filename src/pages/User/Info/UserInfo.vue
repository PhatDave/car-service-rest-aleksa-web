<script>
import API from "@/pages/User/API";

export default {
	components: {},
	data() {
		return {
			user: {},
			loading: true,
		}
	},
	methods: {},
	computed: {},
	watch: {},
	beforeMount() {
		API.getUser(this.$route.params.id).then(user => {
			this.user = user;
			this.loading = false;
		});
	},
}
</script>

<template>
	<div v-if="!loading">
		<div>ID: {{ user.id }}</div>
		<div>FirstName: {{ user.firstName }}</div>
		<div>LastName: {{ user.lastName }}</div>
		<div>OIB: {{ user.oib }}</div>
		<div>Country: {{ user.address.country }}</div>
		<div>City: {{ user.address.city }}</div>
		<div>Postal Number:{{ user.address.postalNumber }}</div>
		<div>Street: {{ user.address.street }}</div>
		<div>Street Number: {{ user.address.streetNumber }}</div>
	</div>
</template>

<style scoped>
</style>
