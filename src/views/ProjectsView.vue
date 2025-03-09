<template>
  <main class="min-h-screen bg-white py-20">
    <!-- Projects Hero -->
    <section class="container mx-auto px-4 mb-20">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 fade-in-scroll">
          My Projects
        </h1>
        <p class="text-xl text-gray-600 mb-12 fade-in-scroll">
          A collection of my recent work and personal projects
        </p>
        
        <!-- Project Filters -->
        <div class="flex flex-wrap justify-center gap-4 mb-12 fade-in-scroll">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            :class="activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid with Infinite Scroll -->
    <section class="container mx-auto px-4 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <article
          v-for="project in displayedProjects"
          :key="project.id"
          class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl fade-in-scroll"
        >
          <!-- Project Image -->
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <div class="flex gap-4">
                  <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm hover:bg-white/30 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm hover:bg-white/30 transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Loading State -->
      <div
        v-if="isLoading"
        class="flex justify-center items-center py-8"
      >
        <div class="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <!-- Load More Trigger -->
      <div ref="loadMoreTrigger" class="h-10"></div>
    </section>

    <!-- Call to Action -->
    <section class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center py-12 fade-in-scroll">
        <h2 class="text-3xl font-bold mb-6 text-gray-900">Interested in collaborating?</h2>
        <p class="text-xl text-gray-600 mb-8">
          I'm always open to discussing new projects and creative ideas.
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          Let's Talk
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

const categories = ['All', 'Web', 'Mobile', 'UI/UX']
const activeCategory = ref('All')

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'Modern portfolio website built with Vue 3 and Tailwind CSS',
    image: 'https://via.placeholder.com/800x600',
    category: 'Web',
    technologies: ['Vue.js', 'Tailwind CSS', 'Vite'],
    demo: 'https://richmond-zedrik.com',
    github: 'https://github.com/richmondzedrik/portfolio'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with admin dashboard',
    image: 'https://via.placeholder.com/800x600',
    category: 'Web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demo: 'https://ecommerce-demo.com',
    github: 'https://github.com/richmondzedrik/ecommerce'
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Real-time weather application with location tracking',
    image: 'https://via.placeholder.com/800x600',
    category: 'Mobile',
    technologies: ['React Native', 'OpenWeather API', 'Redux'],
    demo: 'https://weather-app-demo.com',
    github: 'https://github.com/richmondzedrik/weather-app'
  }
  // Add more projects as needed
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const ITEMS_PER_PAGE = 6
const currentPage = ref(1)
const isLoading = ref(false)
const loadMoreTrigger = ref(null)

// Simulate loading more projects
const loadMoreProjects = async () => {
  if (isLoading.value) return
  
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 800)) // Simulate API delay
  currentPage.value++
  isLoading.value = false
}

// Intersection Observer for infinite scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isLoading.value && hasMoreProjects.value) {
        loadMoreProjects()
      }
    },
    { threshold: 0.1 }
  )

  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})

// Computed properties for pagination
const displayedProjects = computed(() => {
  return filteredProjects.value.slice(0, currentPage.value * ITEMS_PER_PAGE)
})

const hasMoreProjects = computed(() => {
  return displayedProjects.value.length < filteredProjects.value.length
})

// Intersection Observer for animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target) // Stop observing once visible
      }
    })
  }, { threshold: 0.2 })

  // Initial observation of elements
  const observeElements = () => {
    document.querySelectorAll('.fade-in-scroll:not(.visible)').forEach(el => {
      observer.observe(el)
    })
  }

  // Observe elements initially
  observeElements()

  // Re-observe elements when category changes
  watch(activeCategory, () => {
    // Small delay to allow DOM updates
    nextTick(() => {
      observeElements()
    })
  })

  // Cleanup
  onUnmounted(() => {
    observer.disconnect()
  })
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

/* Smooth category transitions */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Gradient text animation */
.bg-gradient-to-r {
  background-size: 200% auto;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
