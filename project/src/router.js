// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  }, 
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  // Catch-all route for undefined paths
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
