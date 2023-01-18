<script>
import API from "@/pages/User/API";
import UserComponent from "./UserComponent.vue";

export default {
	components: {UserComponent},
	emits: ['user-info'],
	data() {
		return {
			users: []
		}
	},
	methods: {
		navigateInfo(user) {
			this.$emit('user-info', user.id);
		}
	},
	beforeMount() {
		API.getAllUsers().then(users => {
			this.users = users;
		});
	}
}
</script>

<template>
	<div>
		<table>
			<thead>
			<tr>
				<th>Id</th>
				<th>FirstName</th>
				<th>LastName</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="user in users">
				<UserComponent :user="user" @user-info="navigateInfo"/>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
</style>
