import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue'
import CalculadoraV1 from '../Pages/CalculadoraV1.vue'
import CalculadoraV2 from '../Pages/CalculadoraV2.vue'
import Eventos from '../Pages/Eventos.vue'
import Horariodo from '../Pages/HorarioDocente.vue'
import HoraAlu from '../Pages/Horario.vue'
import Mistados from '../Pages/Misdatos.vue'
import Recorridos from '../Pages/Recorrido.vue'
import Login from '../Pages/Login.vue' // nueva ruta

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/calculadora',
    name: 'CalculadoraV1',
    component: CalculadoraV1
  },
  {
    path: '/calculadora2',
    name: 'CalculadoraV2',
    component: CalculadoraV2
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: Eventos
  },
  {
    path: '/horariodo',
    name: 'Horariodo',
    component: Horariodo
  },
  {
    path: '/mihorariodo',
    name: 'HorariodoAlu',
    component: HoraAlu
  },
  {
    path: '/midato',
    name: 'Midatos',
    component: Mistados
  },
  {
    path: '/recorrido',
    name: 'Recorrido',
    component: Recorridos
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// protección de rutas
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedIn')
  if (to.path !== '/login' && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
