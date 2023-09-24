import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/ProjectsHomeView.vue'),
        },
        {
            path: '/projects/personal-expenses',
            name: 'personal-expenses',
            component: () => import('../views/projects/PersonalExpensesView.vue'),
        },
        {
            path: '/projects/airfare-analysis',
            name: 'airfare-analysis',
            component: () => import('../views/projects/AirfareAnalysisView.vue'),
        },
    ],
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    },
});

export default router;
