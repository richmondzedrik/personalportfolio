<template>
  <nav class="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 text-white p-4 z-50 backdrop-blur-lg border-b border-white/10">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Portfolio
      </div>
      
      <!-- Navigation Links -->
      <div class="flex space-x-6">
        <router-link 
          v-for="item in navItems" 
          :key="item.id"
          :to="{ name: item.id }"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/15 relative group"
        >
          {{ item.label }}
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
</template>

<script setup>
import { ref } from 'vue'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
]

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
