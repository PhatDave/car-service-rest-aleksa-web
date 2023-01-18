<script>
export default {
	props: ['user'],
	data() {
		return {}
	},
	methods: {
	},
	computed: {
		infoURL() {
			return `/user/${this.user.id}`;
		}
	}
}
</script>

<template>
	<tr>
		<td>{{ user.id }}</td>
		<td>{{ user.firstName }}</td>
		<td>{{ user.lastName }}</td>
		<router-link :to="infoURL">Info</router-link>
	</tr>
</template>

<style scoped>
</style>
