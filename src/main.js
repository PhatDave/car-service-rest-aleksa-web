import {createApp} from 'vue'
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import UserList from "@/pages/User/List/UserList.vue";
import UserAdd from "@/pages/User/Add/UserAdd.vue";
import UserInfo from "@/pages/User/Info/UserInfo.vue";

const routes = [
	{
		path: '/:url(.*)',
		redirect: '/user/list'
	},
	{
		path: '/user/list',
		component: UserList
	},
	{
		path: '/user/add',
		component: UserAdd
	},
	{
		path: '/user/:id(\\d+)',
		component: UserInfo
	}
]

const router = createRouter({
	                                      history: createWebHistory(),
	                                      routes,
                                      })

const app = createApp({})
app.use(router)

app.mount('#app')
