import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/Home/Home.view.vue'
import DetailsView from '../views/Details/Details.view.vue'
import FavouritesView from '../views/Favourites/Favourites.view.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/liked',
		name: 'liked',
		component: FavouritesView,
	},
	{
		path: '/photo/:id',
		name: 'details',
		component: DetailsView,
	},
]

const router = new VueRouter({
	routes,
})

export default router
