import { createRouter, createWebHistory } from "vue-router";
import ComparePage from './components/Page/ComparePage.vue'
const routerHistory = createWebHistory();
const routes = [
    {
      path: "/",
      name: "ComparePage",
      component: ComparePage,
    },
  ];
const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;