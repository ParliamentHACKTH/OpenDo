import {createRouter, createWebHistory} from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

import MinistryView from "@/views/ministry/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/ministry",
            name: "default layout",
            component: DefaultLayout,
            meta: { requiresAuth: false },
            children: [
                {
                    path: '/ministry',
                    name: 'ministry',
                    component: MinistryView
                }
            ],
        },
        { path: "/:pathMatch(.*)*", redirect: "/ministry" },
    ]
});

export default router
