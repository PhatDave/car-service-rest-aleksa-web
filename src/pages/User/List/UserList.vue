<script>
import UserListComponent from "@/pages/User/List/components/UserListComponent.vue";

export default {
	components: {
		UserListComponent,
	},
	data() {
		return {}
	},
	methods: {},
	beforeMount() {
	},
	computed: {},
	watch: {}
}
</script>

<template>
	<UserListComponent/>
	<router-link to="/user/add">Add user</router-link>
</template>

<style scoped>
</style>
