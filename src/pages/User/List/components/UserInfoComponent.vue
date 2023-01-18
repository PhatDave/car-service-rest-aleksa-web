<script>
import API from "@/pages/User/API";

export default {
	props: ['userId'],
	emits: ['user-info'],
	data() {
		return {
			user: {},
		}
	},
	methods: {
		goBack() {
			this.$emit('user-info', -1);
		}
	},
	beforeMount() {
		API.getUser(this.userId).then(user => {
			this.user = user;
		});
	},
}
</script>

<template>
	<button @click="goBack">Go back</button>
	<div>
		<div>{{ user.id }}</div>
		<div>{{ user.firstName }}</div>
		<div>{{ user.lastName }}</div>
		<div>{{ user.oib }}</div>
		<div>{{ user.country }}</div>
		<div>{{ user.city }}</div>
		<div>{{ user.postalNumber }}</div>
		<div>{{ user.street }}</div>
		<div>{{ user.streetNumber }}</div>
	</div>
</template>

<style scoped>
</style>
