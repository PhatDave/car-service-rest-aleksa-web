import {createApp} from 'vue'
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import UserList from "@/pages/User/List/UserList.vue";
import UserAdd from "@/pages/User/Add/UserAdd.vue";

const routes = [
	{
		path: '/',
		component: UserList
	},
	{
		path: '/user',
		component: UserList
	},
	{
		path: '/user/add',
		component: UserAdd
	},
]

const router = createRouter({
	                                      history: createWebHistory(),
	                                      routes,
                                      })

const app = createApp({})
app.use(router)

app.mount('#app')
