import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Exercises from './views/Exercises.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
      path: '/exercises/:exercise',
			name: 'exercises',
			component: Exercises
		},
		{
			path: '/tasks/:task',
			name: 'tasks',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ './views/Tasks.vue')
		}
	]
})
