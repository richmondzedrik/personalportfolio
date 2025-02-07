<template>
  <nav class="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 text-white p-4 z-50 backdrop-blur-lg border-b border-white/10">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link 
          to="/" 
          class="transition-transform duration-300 hover:scale-105"
        >
          <img 
            src="https://res.cloudinary.com/dmgivh17b/image/upload/v1738947903/portfolio/jv7u26yrdgr7hgwujxxb.png"
            alt="Logo"
            class="w-10 h-10 object-contain"
          />
        </router-link>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <svg 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            v-if="!isMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-6">
        <router-link 
          v-for="item in navItems" 
          :key="item.id"
          :to="item.path"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/15 relative group"
        >
          {{ item.label }}
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </router-link>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div 
      v-show="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-white/10"
    >
      <div class="container mx-auto py-4 px-4 space-y-2">
        <router-link 
          v-for="item in navItems" 
          :key="item.id"
          :to="item.path"
          class="block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/15"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>

  <main class="pt-16">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <TheFooter />
</template>

<script setup>
import { ref } from 'vue'
import TheFooter from './components/TheFooter.vue'

const isMenuOpen = ref(false)

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'resume', label: 'Resume', path: '/resume' },
  { id: 'contact', label: 'Contact', path: '/contact' }
]

// Close mobile menu when route changes
import { useRouter } from 'vue-router'
const router = useRouter()
router.afterEach(() => {
  isMenuOpen.value = false
})

// Add scroll spy to highlight active section in nav
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('nav a')
  
  let current = ''
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('text-blue-400', 'bg-white/10')
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('text-blue-400', 'bg-white/10')
    }
  })
}
</script>

<style>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem; /* Adjust for fixed header */
}

/* Remove these styles to enable scrolling */
body {
  overflow-y: auto;
  min-height: 100vh;
}

main {
  min-height: calc(100vh - 4rem);
}

/* Hide scrollbar but keep functionality */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

/* For Firefox */
* {
  scrollbar-width: none;
}

/* For IE and Edge */
* {
  -ms-overflow-style: none;
}
</style>
