import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: () => 
        import('./views/Exercises.vue')
    },
    {
      path: '/exercises/:exercise',
      name: 'exercises',
      component: () =>
        import(/* webpackChunkName: "exercise" */ './views/Exercises.vue')
    },
		{
			path: '/tasks/:task',
			name: 'tasks',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "tasks" */ './views/Tasks.vue')
		}
	]
})
