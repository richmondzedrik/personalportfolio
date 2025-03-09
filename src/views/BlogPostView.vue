<template>
  <main class="min-h-screen bg-white py-20">
    <article v-if="post" class="fade-in-scroll">
      <!-- Hero Section -->
      <header class="relative h-[60vh] min-h-[400px] mb-12">
        <!-- Featured Image -->
        <div class="absolute inset-0">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 to-black/30"></div>
        </div>
        
        <!-- Post Header Content -->
        <div class="container mx-auto px-4 h-full">
          <div class="relative h-full flex flex-col justify-end pb-12 max-w-4xl mx-auto text-white">
            <!-- Categories -->
            <div class="flex flex-wrap gap-3 mb-4">
              <span
                v-for="category in post.categories"
                :key="category"
                class="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {{ category }}
              </span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              {{ post.title }}
            </h1>
            
            <!-- Author and Date -->
            <div class="flex items-center gap-6">
              <div class="flex items-center gap-3">
                <img
                  :src="post.author.avatar"
                  :alt="post.author.name"
                  class="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div>
                  <div class="font-medium">{{ post.author.name }}</div>
                  <div class="text-sm text-white/80">{{ post.author.title }}</div>
                </div>
              </div>
              <time :datetime="post.date" class="text-white/80">
                {{ formatDate(post.date) }}
              </time>
            </div>
          </div>
        </div>
      </header>

      <!-- Article Content -->
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Article Body -->
          <div class="prose prose-lg max-w-none mb-12">
            <p class="lead text-xl text-gray-600 mb-8">
              {{ post.excerpt }}
            </p>
            <div v-html="post.content"></div>
          </div>

          <!-- Tags -->
          <div class="border-t border-gray-200 pt-8 mb-12">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Share Section -->
          <div class="flex items-center justify-between py-8 border-t border-gray-200">
            <div class="text-gray-600">Share this article:</div>
            <div class="flex gap-4">
              <button
                v-for="social in socialShares"
                :key="social.name"
                @click="sharePost(social.type)"
                class="p-2 rounded-full hover:bg-gray-100 transition-colors"
                :aria-label="`Share on ${social.name}`"
              >
                <component :is="social.icon" class="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <!-- Related Posts -->
        <div class="max-w-6xl mx-auto mt-20">
          <h2 class="text-3xl font-bold mb-8 text-center">Related Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article
              v-for="relatedPost in relatedPosts"
              :key="relatedPost.id"
              class="group bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <router-link :to="`/blog/${relatedPost.slug}`" class="block">
                <img
                  :src="relatedPost.image"
                  :alt="relatedPost.title"
                  class="w-full aspect-video object-cover"
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {{ relatedPost.title }}
                  </h3>
                  <p class="text-gray-600 line-clamp-2">{{ relatedPost.excerpt }}</p>
                </div>
              </router-link>
            </article>
          </div>
        </div>
      </div>
    </article>

    <!-- Loading State -->
    <div v-else class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto animate-pulse">
        <div class="h-96 bg-gray-200 rounded-xl mb-8"></div>
        <div class="space-y-4">
          <div class="h-8 bg-gray-200 rounded w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

// Simulated post data - In a real app, this would come from an API
const fetchPost = async (slug) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  post.value = {
    id: 1,
    title: 'Building a Modern Web Portfolio with Vue 3',
    slug: 'building-modern-web-portfolio-vue3',
    excerpt: 'Learn how to create a professional portfolio website using Vue 3, Tailwind CSS, and modern web development practices.',
    content: `
      <h2>Introduction</h2>
      <p>In this comprehensive guide, we'll walk through the process of building a modern web portfolio using Vue 3 and Tailwind CSS. We'll cover everything from setup to deployment, ensuring your portfolio stands out in today's competitive landscape.</p>
      
      <h2>Getting Started</h2>
      <p>First, let's set up our development environment and install the necessary dependencies...</p>
      
      <!-- Add more content sections -->
    `,
    image: 'https://via.placeholder.com/1200x800',
    categories: ['Web Development', 'Programming Tips'],
    tags: ['vue3', 'portfolio', 'webdev', 'tutorial'],
    date: '2024-03-15',
    author: {
      name: 'Richmond Zedrik',
      title: 'Full Stack Developer',
      avatar: 'https://via.placeholder.com/100'
    }
  }
}

// Format date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Social share options
const socialShares = [
  { name: 'Twitter', type: 'twitter', icon: 'TwitterIcon' },
  { name: 'LinkedIn', type: 'linkedin', icon: 'LinkedInIcon' },
  { name: 'Facebook', type: 'facebook', icon: 'FacebookIcon' }
]

// Share functionality
const sharePost = (type) => {
  const url = window.location.href
  const text = post.value.title
  
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  }
  
  window.open(shareUrls[type], '_blank', 'width=600,height=400')
}

// Related posts
const relatedPosts = computed(() => {
  // In a real app, this would be filtered based on categories/tags
  return [
    {
      id: 2,
      title: 'Mastering CSS Grid Layout',
      slug: 'mastering-css-grid-layout',
      excerpt: 'A comprehensive guide to using CSS Grid Layout for creating complex web layouts with ease.',
      image: 'https://via.placeholder.com/800x600'
    },
    // Add more related posts
  ]
})

// Fetch post data on mount
onMounted(async () => {
  await fetchPost(route.params.slug)
})
</script>

<style scoped>
.prose {
  max-width: 65ch;
}

.prose img {
  border-radius: 0.75rem;
}

.fade-in-scroll {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 