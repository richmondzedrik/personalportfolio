import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import ServicesView from '../views/ServicesView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '../views/ContactView.vue'
import ContinuousLayout from '../layouts/ContinuousLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContinuousLayout
    },
    {
      path: '/about',
      name: 'about',
      redirect: '/#about'
    },
    {
      path: '/projects',
      name: 'projects',
      redirect: '/#projects'
    },
    {
      path: '/services',
      name: 'services',
      redirect: '/#services'
    },
    {
      path: '/resume',
      name: 'resume',
      redirect: '/#resume'
    },
    {
      path: '/contact',
      name: 'contact',
      redirect: '/#contact'
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPostView
    },
    // 404 route
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return savedPosition || { top: 0 }
  }
})

// Navigation guard for analytics or loading states
router.beforeEach((to, from, next) => {
  // You can add loading states or analytics here
  next()
})

export default router
