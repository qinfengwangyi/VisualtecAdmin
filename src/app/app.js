import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router'
import App from './views/app.vue'

Vue.use(VueRouter)
Vue.config.debug = true;

const router = new VueRouter({
	hashbang: true,
	saveScrollPosition: true,
	suppressTransitionError: true
})

// var hello = Vue.extend({
// 	template: '<div>hello!</div>'
// });

routerConfig(router)

router.start(App, '#app')

window.router = router
