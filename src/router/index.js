import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import CalculadoraV1 from "../Pages/CalculadoraV1.vue"; 
import CalculadoraV2 from "../Pages/CalculadoraV2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/calculadora",
    name: "CalculadoraV1",
    component: CalculadoraV1, 
  },
  {
    path: "/calculadora2",
    name: "CalculadoraV2",
    component: CalculadoraV2,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
