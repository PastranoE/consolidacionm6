import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import NotFound from'@/views/NotFound.vue'
import ListaJuegos from '@/components/ListaJuegos.vue'
import Opiniones from '@/views/Opiniones.vue'
import Administracion from '@/views/Administracion.vue'
import Rcuenta from '@/views/Rcuenta.vue'





Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {  
    path: '/',
    component: ListaJuegos
  },
  {  
    path: '/Opiniones/:gameName',
    component: Opiniones
  },
  {  
    path: '/Administracion',
    component: Administracion
  },
  {  
    path: '/registro_cuenta',
    component: Rcuenta
  },


  {
    path:'*',
    component: NotFound
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
