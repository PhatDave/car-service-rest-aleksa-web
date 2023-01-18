<script>
import UserListComponent from "@/pages/User/List/components/UserListComponent.vue";
import UserInfoComponent from "@/pages/User/List/components/UserInfoComponent.vue";
import AddUserComponent from "@/pages/User/List/components/AddUserComponent.vue";

export default {
	components: {
		AddUserComponent,
		UserListComponent,
		UserInfoComponent
	},
	data() {
		return {
			showUserInfo: -1,
		}
	},
	methods: {
		navigateUserInfo(userId) {
			this.showUserInfo = userId;
		}
	},
	beforeMount() {
	},
	computed: {},
	watch: {
		showUserInfo(newInfo) {
			console.log(`newInfo = ${newInfo}`);
		}
	}
}
</script>

<template>
	<UserListComponent v-if="this.showUserInfo === -1" @user-info="navigateUserInfo"/>
	<UserInfoComponent v-if="this.showUserInfo !== -1" @user-info="navigateUserInfo" :userId="showUserInfo"/>
	<router-link to="/user/add">Add user</router-link>
</template>

<style scoped>
</style>
