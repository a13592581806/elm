import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from './../components/vue-cli/home'
import Msite from './../components/vue-cli/msite'
import Search from './../components/vue-cli/search'
import Order from './../components/vue-cli/order'
import Mine from './../components/vue-cli/mine'
import Login from './../components/vue-cli/login'
import Shop from './../components/vue-cli/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Msite',
      component: Msite
    },{
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'msite',
          component: Msite
        },{
          path: 'search',
          component: Search
        },{
          path: 'order',
          component: Order
        },{
          path: 'mine',
          component: Mine
        }
      ]
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/shop/:id',
      name: 'shop',
      component: Shop
    }
  ]
})
