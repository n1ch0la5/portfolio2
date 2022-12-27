import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path : "/",
        component: () => import("../views/HomeView.vue"),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import("../views/GalleryView.vue"),
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;