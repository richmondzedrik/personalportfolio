<template>
  <main class="min-h-screen bg-white py-20">
    <!-- Blog Hero Section -->
    <section class="container mx-auto px-4 mb-20">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 fade-in-scroll">
          Blog & Insights
        </h1>
        <p class="text-xl text-gray-600 mb-12 fade-in-scroll">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>
    </section>

    <!-- Search and Filter -->
    <section class="container mx-auto px-4 mb-12">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row gap-6 items-center justify-between fade-in-scroll">
          <!-- Search -->
          <div class="w-full md:w-96">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="search"
                placeholder="Search articles..."
                class="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <svg 
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Categories -->
          <div class="flex flex-wrap gap-3">
            <button
              v-for="category in categories"
              :key="category"
              @click="toggleCategory(category)"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="selectedCategories.includes(category) 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="container mx-auto px-4 mb-20">
      <div class="max-w-6xl mx-auto">
        <div v-if="filteredPosts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in filteredPosts"
            :key="post.id"
            class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl fade-in-scroll"
          >
            <!-- Post Image -->
            <router-link :to="`/blog/${post.slug}`" class="block relative aspect-video overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </router-link>

            <!-- Post Content -->
            <div class="p-6">
              <!-- Categories -->
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  v-for="category in post.categories"
                  :key="category"
                  class="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                >
                  {{ category }}
                </span>
              </div>

              <!-- Title and Meta -->
              <router-link :to="`/blog/${post.slug}`">
                <h2 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {{ post.title }}
                </h2>
              </router-link>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ post.excerpt }}</p>

              <!-- Author and Date -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <img
                    :src="post.author.avatar"
                    :alt="post.author.name"
                    class="w-8 h-8 rounded-full"
                  />
                  <span class="text-sm text-gray-600">{{ post.author.name }}</span>
                </div>
                <time :datetime="post.date" class="text-sm text-gray-500">
                  {{ formatDate(post.date) }}
                </time>
              </div>
            </div>
          </article>
        </div>

        <!-- No Results -->
        <div 
          v-else 
          class="text-center py-12 fade-in-scroll"
        >
          <p class="text-gray-600 text-lg">No blog posts found matching your criteria.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const searchQuery = ref('')
const selectedCategories = ref([])

const categories = [
  'Web Development',
  'UI/UX Design',
  'Programming Tips',
  'Career Advice',
  'Tech News'
]

const posts = ref([
  {
    id: 1,
    title: 'Building a Modern Web Portfolio with Vue 3',
    slug: 'building-modern-web-portfolio-vue3',
    excerpt: 'Learn how to create a professional portfolio website using Vue 3, Tailwind CSS, and modern web development practices.',
    image: 'https://via.placeholder.com/800x600',
    categories: ['Web Development', 'Programming Tips'],
    date: '2024-03-15',
    author: {
      name: 'Richmond Zedrik',
      avatar: 'https://via.placeholder.com/100'
    }
  },
  {
    id: 2,
    title: 'Mastering CSS Grid Layout',
    slug: 'mastering-css-grid-layout',
    excerpt: 'A comprehensive guide to using CSS Grid Layout for creating complex web layouts with ease.',
    image: 'https://via.placeholder.com/800x600',
    categories: ['Web Development', 'UI/UX Design'],
    date: '2024-03-10',
    author: {
      name: 'Richmond Zedrik',
      avatar: 'https://via.placeholder.com/100'
    }
  },
  // Add more blog posts as needed
])

const toggleCategory = (category) => {
  const index = selectedCategories.value.indexOf(category)
  if (index === -1) {
    selectedCategories.value.push(category)
  } else {
    selectedCategories.value.splice(index, 1)
  }
}

const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    // Search filter
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    // Category filter
    const matchesCategories = selectedCategories.value.length === 0 ||
                            post.categories.some(cat => selectedCategories.value.includes(cat))
    
    return matchesSearch && matchesCategories
  })
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

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

/* Line clamp for excerpts */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Gradient animation */
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