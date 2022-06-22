import Vue from 'vue'
import VueRouter from 'vue-router'
// @ is an alias to /src
import HomeView from '@/views/HomeView'
import FoodsView from '@/views/FoodView'
import FoodDetailView from '@/views/FoodDetailView'
import KeranjangView from '@/views/KeranjangView'
import PesananSuksesView from '@/views/PesananSuksesView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'Foods',
    component: FoodsView
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail ',
    component: FoodDetailView
  },
  {
    path: '/keranjang',
    name: 'Keranjang ',
    component: KeranjangView
  },
  {
    path: '/pesanan-sukses',
    name: 'PesananSukses ',
    component: PesananSuksesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
