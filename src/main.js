import UserAdd from "@/pages/User/Add/UserAdd.vue";

import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
	                            history: createWebHistory(),
	                            routes: [
		                            {
			                            path: '/',
			                            component: UserAdd
		                            },
		                            {
			                            path: '/user',
			                            component: UserAdd
		                            },
		                            {
			                            path: '/user/add',
			                            component: UserAdd
		                            },
	                            ],
                            })

const app = createApp({})
app.use(router)

window.vm = app.mount('#app')
