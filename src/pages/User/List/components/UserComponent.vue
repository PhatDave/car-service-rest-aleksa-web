<script>
export default {
	props: ['user'],
	emits: ['user-info'],
	data() {
		return {}
	},
	methods: {
		userInfo() {
			this.$emit('user-info', this.user);
		}
	}
}
</script>

<template>
	<tr @click="userInfo">
		<td>{{ user.id }}</td>
		<td>{{ user.firstName }}</td>
		<td>{{ user.lastName }}</td>
	</tr>
</template>

<style scoped>
</style>
