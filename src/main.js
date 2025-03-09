import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { inject } from '@vercel/analytics'

// Import all icons
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  BookOpenIcon,
  CodeBranchIcon,
  ChipIcon,
  PaletteIcon,
  ChatIcon
} from './components/icons'

// Force HTTPS in production
if (process.env.NODE_ENV === 'production' && location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`)
}

// Create app instance
const app = createApp(App)
const head = createHead()

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

// Register icons globally
app.component('CodeIcon', CodeIcon)
app.component('ServerIcon', ServerIcon)
app.component('DatabaseIcon', DatabaseIcon)
app.component('GithubIcon', GithubIcon)
app.component('LinkedinIcon', LinkedinIcon)
app.component('TwitterIcon', TwitterIcon)
app.component('BookOpenIcon', BookOpenIcon)
app.component('CodeBranchIcon', CodeBranchIcon)
app.component('ChipIcon', ChipIcon)
app.component('PaletteIcon', PaletteIcon)
app.component('ChatIcon', ChatIcon)

app.use(router)
app.use(head)
app.mount('#app')
