<script>
import API from "@/pages/User/API";

export default {
	components: {},
	data() {
		return {
			user: {
				address: {},
			},
		}
	},
	methods: {
		submitForm(event) {
			API.postUser(this.user).then(() => {
				this.$router.push('/user/list');
			})
		}
	},
	beforeMount() {
		if (!!this.$route.params.id) {
			API.getUser(this.$route.params.id).then(user => {
				this.user = user;
			});
		}
	},
	computed: {},
	watch: {}
}
</script>

<template>
	<div class="form">
		<div>
			<label for="firstName">First Name</label>
			<input type="text" id="firstName" v-model="user.firstName">
		</div>

		<div>
			<label for="lastName">Last Name</label>
			<input type="text" id="lastName" v-model="user.lastName">
		</div>

		<div>
			<label for="oib">OIB</label>
			<input type="text" id="oib" v-model="user.oib">
		</div>

		<div>
			<label for="country">Country</label>
			<input type="text" id="country" v-model="user.address.country">
		</div>

		<div>
			<label for="city">City</label>
			<input type="text" id="city" v-model="user.address.city">
		</div>

		<div>
			<label for="postalNumber">Postal Number</label>
			<input type="text" id="postalNumber" v-model="user.address.postalNumber">
		</div>

		<div>
			<label for="street">Street</label>
			<input type="text" id="street" v-model="user.address.street">
		</div>

		<div>
			<label for="streetNumber">Street Number</label>
			<input type="text" id="streetNumber" v-model="user.address.streetNumber">
		</div>

		<button @click="submitForm">Submit</button>
	</div>
</template>

<style scoped>
</style>
