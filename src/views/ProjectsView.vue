<template>
  <section id="projects" class="py-12 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent rounded-full transform rotate-12 animate-pulse"></div>
      <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full transform -rotate-12 animate-pulse"></div>
    </div>
    
    <div class="container mx-auto px-4 relative">
      <h1 class="text-3xl md:text-6xl font-bold mb-8 md:mb-16 text-center">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          Featured Projects
        </span>
      </h1>
      <p class="text-base md:text-xl text-gray-600 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
        Here are some of my recent works that showcase my skills and passion for creating exceptional digital experiences.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div v-for="(project, index) in projects" 
             :key="project.id" 
             class="project-card"
             :style="{ animationDelay: index * 200 + 'ms' }">
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl group border border-gray-100">
            <div class="relative">
              <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 class="text-2xl font-semibold text-white mb-2">{{ project.title }}</h3>
                  <p class="text-gray-200 text-sm line-clamp-2">{{ project.description }}</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 rounded-full text-sm font-medium">
                  {{ tech }}
                </span>
              </div>
              <div class="flex justify-between items-center">
                <a :href="project.github" 
                   target="_blank"
                   class="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group/link">
                  <svg class="w-5 h-5 transition-transform duration-300 group-hover/link:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
                <a :href="project.demo" 
                   target="_blank"
                   class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
                  Live Demo
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Categories -->
      <div class="mt-16 md:mt-24">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Project Categories
          </span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8 max-w-6xl mx-auto">
          <div v-for="category in categories" 
               :key="category.name"
               class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div class="text-4xl mb-4">{{ category.icon }}</div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ category.name }}</h3>
            <p class="text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'AlertoAbra',
    description: 'A comprehensive disaster management application for Abra province providing real-time updates, emergency resources, and safety information during natural disasters.',
    image: 'https://via.placeholder.com/600x400',
    github: 'https://github.com/richmondzedrik/disaster_app',
    demo: 'https://alertoabra.netlify.app/',
    technologies: ['Vue.js', 'Tailwind CSS', 'Netlify']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A real-time task management application with team collaboration features. Includes drag-and-drop functionality and real-time updates.',
    image: 'https://via.placeholder.com/600x400',
    github: '#',
    demo: '#',
    technologies: ['React', 'Firebase', 'Tailwind']
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using state-of-the-art models. Features custom style transfer and advanced image manipulation.',
    image: 'https://via.placeholder.com/600x400',
    github: '#',
    demo: '#',
    technologies: ['Python', 'TensorFlow', 'FastAPI']
  }
])

const categories = ref([
  {
    name: 'Web Apps',
    icon: '🌐',
    description: 'Full-stack web applications with modern frameworks and responsive design'
  },
  {
    name: 'Mobile Apps',
    icon: '📱',
    description: 'Cross-platform mobile applications for iOS and Android'
  },
  {
    name: 'AI/ML Projects',
    icon: '🤖',
    description: 'Machine learning and artificial intelligence solutions'
  },
  {
    name: 'UI/UX Design',
    icon: '🎨',
    description: 'Beautiful and intuitive user interface designs'
  }
])
</script>

<style scoped>
.project-card {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient hover effect */
.project-card:hover .gradient-overlay {
  opacity: 1;
}

/* Line clamp for descriptions */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
