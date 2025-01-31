import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { inject } from '@vercel/analytics'

// Force HTTPS in production
if (process.env.NODE_ENV === 'production' && location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`)
}

// Create app instance
const app = createApp(App)

// Add performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Lazy load analytics in production
  setTimeout(() => {
    inject()
  }, 3000)
}

// Route-based code splitting
router.beforeEach((to, from, next) => {
  // Add preload hints for linked pages
  const preloadLink = document.createElement('link')
  preloadLink.rel = 'preload'
  preloadLink.as = 'script'
  preloadLink.href = `/assets/${to.name}.js`
  document.head.appendChild(preloadLink)
  next()
})

app.use(router)
app.mount('#app')
