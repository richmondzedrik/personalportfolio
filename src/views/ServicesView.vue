<template>
  <section class="py-12 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Services & Offerings
          </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Professional solutions tailored to your needs
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="service in services" :key="service.title" 
             class="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl mb-4">{{ service.icon }}</div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">{{ service.title }}</h3>
          <p class="text-gray-600 mb-6">{{ service.description }}</p>
          <div class="space-y-2">
            <div v-for="feature in service.features" :key="feature" 
                 class="flex items-center gap-2 text-gray-600">
              <span class="text-green-500">✓</span>
              {{ feature }}
            </div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-100">
            <div class="text-2xl font-bold text-gray-800 mb-2">{{ service.pricing }}</div>
            <p class="text-sm text-gray-500">{{ service.pricingDetails }}</p>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="mt-20 text-center">
        <router-link 
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          Get Started
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    title: 'Web Development',
    icon: '💻',
    description: 'Custom web applications built with modern technologies',
    features: [
      'Responsive Design',
      'Frontend & Backend Development',
      'API Integration',
      'Performance Optimization',
      'SEO Optimization',
      'Maintenance & Support'
    ],
    pricing: 'Starting at ₱15,000',
    pricingDetails: 'Project-based pricing'
  },
  {
    title: 'Full Stack Development',
    icon: '⚡',
    description: 'End-to-end application development with modern tech stack',
    features: [
      'Frontend Development',
      'Backend Architecture',
      'Database Design',
      'API Development',
      'Cloud Deployment',
      'Security Implementation'
    ],
    pricing: 'Starting at ₱30,000',
    pricingDetails: 'Based on project scope'
  },
  {
    title: 'Programming Tutor',
    icon: '👨‍🏫',
    description: 'Personalized programming education and mentorship',
    features: [
      'One-on-One Sessions via Zoom',
      'Custom Learning Plans',
      'Practical Projects',
      'Code Reviews',
      'Interview Preparation',
      'Career Guidance'
    ],
    pricing: '₱300/hour',
    pricingDetails: 'Flexible scheduling options',
    tiers: [
      {
        name: 'Single Session',
        price: '₱500/hour',
        duration: 'As needed',
        included: ['One-on-One Instruction', 'Practice Exercises', 'Code Review']
      },
      {
        name: 'Monthly Package',
        price: '₱4,000/month',
        duration: 'Monthly',
        included: ['10 Hours/Month', 'Weekly Assignments', 'Project Mentoring', 'Email Support']
      }
    ]
  }
])
</script>

<style scoped>
.transform {
  transition-property: transform, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
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

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
