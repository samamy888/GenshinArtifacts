import { createRouter, createWebHistory } from "vue-router"
import Home from '@/components/Page/HomePage.vue'
import ComparePage from '@/components/Page/ComparePage.vue'
import MaidComparePage from '@/components/Page/MaidComparePage.vue'
import ZhongLiComparePage from '@/components/Page/ZhongLiComparePage.vue'
const routerHistory = createWebHistory('/GenshinArtifacts/');
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ComparePage",
    name: "ComparePage",
    component: ComparePage,
  },
  {
    path: "/MaidComparePage",
    name: "MaidComparePage",
    component: MaidComparePage,
  },
  {
    path: "/ZhongLiComparePage",
    name: "ZhongLiComparePage",
    component: ZhongLiComparePage,
  },
];
const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;