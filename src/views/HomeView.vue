<template>
  <main>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 fade-in-scroll">
            Hi, I'm Richmond Zedrik
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-12 fade-in-scroll">
            Full Stack Developer & IT Instructor
          </p>
          <div class="flex flex-wrap justify-center gap-4 mb-12 fade-in-scroll">
            <router-link
              to="/projects"
              class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
            >
              View My Work
            </router-link>
            <router-link
              to="/contact"
              class="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
            >
              Get in Touch
            </router-link>
          </div>
          <div class="flex justify-center gap-6 fade-in-scroll">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 fade-in-scroll">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <article
            v-for="project in featuredProjects"
            :key="project.id"
            class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl fade-in-scroll"
          >
            <div class="relative aspect-video overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex gap-4">
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-700 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </article>
        </div>
        <div class="text-center mt-12 fade-in-scroll">
          <router-link
            to="/projects"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            View All Projects
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills Overview -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 fade-in-scroll">My Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="skill in skills"
            :key="skill.title"
            class="bg-white p-6 rounded-xl shadow-lg fade-in-scroll"
          >
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <component :is="skill.icon" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ skill.title }}</h3>
            <p class="text-gray-600">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSeo } from '../composables/useSeo'

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/richmondzedrik',
    icon: 'GithubIcon'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/richmond-zedrik',
    icon: 'LinkedinIcon'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/richmond_zedrik',
    icon: 'TwitterIcon'
  }
]

const featuredProjects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'Modern portfolio website built with Vue 3 and Tailwind CSS',
    image: 'https://via.placeholder.com/800x600',
    technologies: ['Vue.js', 'Tailwind CSS', 'Vite'],
    demo: 'https://richmond-zedrik.com',
    github: 'https://github.com/richmondzedrik/portfolio'
  },
  // Add more featured projects
]

const skills = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks',
    icon: 'CodeIcon'
  },
  {
    title: 'Backend Development',
    description: 'Building scalable server-side applications and APIs',
    icon: 'ServerIcon'
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database structures for performance',
    icon: 'DatabaseIcon'
  }
]

// Use the composable with custom meta tags for this page
useSeo({
  title: 'Home',
  description: 'Welcome to my portfolio. I am a Full Stack Developer specializing in Vue.js, Node.js, and modern web technologies.',
  url: '/'
})

// Intersection Observer for animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el))

  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
.fade-in-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-in-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
