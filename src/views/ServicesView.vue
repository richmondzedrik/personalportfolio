<template>
  <main class="min-h-screen bg-white py-20">
    <!-- Services Hero -->
    <section class="container mx-auto px-4 mb-20">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 fade-in-scroll">
          My Services
        </h1>
        <p class="text-xl text-gray-600 mb-12 fade-in-scroll">
          Professional web development solutions tailored to your needs
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="container mx-auto px-4 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 fade-in-scroll"
        >
          <div class="mb-6 text-blue-600 w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <component :is="service.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
          <p class="text-gray-600 mb-6">{{ service.description }}</p>
          <ul class="space-y-3 mb-6">
            <li 
              v-for="feature in service.features" 
              :key="feature"
              class="flex items-center text-gray-600"
            >
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
          <div class="pt-6 border-t border-gray-100">
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-gray-900">${{ service.price }}</span>
              <span class="text-gray-500">{{ service.duration }}</span>
            </div>
            <router-link
              :to="{ path: '/contact', query: { service: service.title }}"
              class="block w-full py-3 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container mx-auto px-4 mb-20">
      <h2 class="text-3xl font-bold text-center mb-12 fade-in-scroll">Client Testimonials</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="bg-white rounded-xl shadow-lg p-8 fade-in-scroll"
        >
          <div class="flex items-center gap-4 mb-6">
            <img 
              :src="testimonial.avatar" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 class="font-bold text-gray-900">{{ testimonial.name }}</h3>
              <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
          <p class="text-gray-600 italic">{{ testimonial.comment }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    price: '2999',
    duration: 'per project',
    icon: 'CodeIcon',
    features: [
      'Custom Design & Development',
      'Responsive Layout',
      'Performance Optimization',
      'SEO Best Practices',
      'Cross-browser Compatibility'
    ]
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'User-centered design solutions for digital products',
    price: '1499',
    duration: 'per project',
    icon: 'PaletteIcon',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Design System Creation'
    ]
  },
  {
    id: 3,
    title: 'Technical Consultation',
    description: 'Expert advice on your technical projects',
    price: '99',
    duration: 'per hour',
    icon: 'ChatIcon',
    features: [
      'Architecture Planning',
      'Code Review',
      'Performance Audit',
      'Security Assessment',
      'Technical Documentation'
    ]
  }
]

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO at TechStart',
    avatar: 'https://via.placeholder.com/150',
    comment: 'Richmond delivered our project on time and exceeded our expectations. His attention to detail and technical expertise made our vision come to life.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    avatar: 'https://via.placeholder.com/150',
    comment: 'Working with Richmond was a great experience. He understood our requirements perfectly and provided valuable suggestions throughout the development process.'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Startup Founder',
    avatar: 'https://via.placeholder.com/150',
    comment: 'The website Richmond built for us has significantly improved our online presence. His technical skills and professionalism are outstanding.'
  }
]

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
