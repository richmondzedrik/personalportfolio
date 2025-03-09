<template>
  <main class="min-h-screen bg-white py-20">
    <!-- Contact Hero Section -->
    <section class="container mx-auto px-4 mb-20">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 fade-in-scroll">
          Get In Touch
        </h1>
        <p class="text-xl text-gray-600 mb-12 fade-in-scroll">
          Have a project in mind? Let's create something amazing together.
        </p>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="container mx-auto px-4 mb-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8 fade-in-scroll">
            <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-blue-100 rounded-lg">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                    <a href="mailto:richmond.aspacio@gmail.com" class="text-blue-600 hover:text-blue-700 transition-colors">
                      richmond.aspacio@gmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="p-3 bg-blue-100 rounded-lg">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900">Location</h3>
                    <p class="text-gray-600">Bangued, Abra, Philippines</p>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
                <div class="flex gap-4">
                  <a 
                    v-for="social in socialLinks" 
                    :key="social.name"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    :aria-label="`Visit my ${social.name} profile`"
                  >
                    <component :is="social.icon" class="w-6 h-6 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Availability Status -->
            <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 class="text-lg font-semibold text-gray-900">Currently Available for Freelance</h3>
              </div>
              <p class="mt-2 text-gray-600">
                I'm open to discussing new projects and opportunities.
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="fade-in-scroll">
            <form 
              @submit.prevent="handleSubmit"
              class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div class="space-y-6">
                <div class="form-group">
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    :disabled="isSubmitting"
                  />
                </div>

                <div class="form-group">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    :disabled="isSubmitting"
                  />
                </div>

                <div class="form-group">
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    v-model="formData.subject"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    :disabled="isSubmitting"
                  />
                </div>

                <div class="form-group">
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    :disabled="isSubmitting"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                  <span v-else>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Success/Error Messages -->
    <div 
      v-if="showNotification"
      class="fixed bottom-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-300 transform"
      :class="[
        notificationSuccess ? 'bg-green-500' : 'bg-red-500',
        showNotification ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      ]"
    >
      <p class="text-white">{{ notificationMessage }}</p>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showNotification = ref(false)
const notificationSuccess = ref(true)
const notificationMessage = ref('')

const socialLinks = [
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

const showNotificationWithTimeout = (message, success = true) => {
  notificationMessage.value = message
  notificationSuccess.value = success
  showNotification.value = true
  setTimeout(() => {
    showNotification.value = false
  }, 5000)
}

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    
    // Replace with your actual form submission logic
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    showNotificationWithTimeout('Message sent successfully! I\'ll get back to you soon.')
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    showNotificationWithTimeout('Failed to send message. Please try again.', false)
  } finally {
    isSubmitting.value = false
  }
}

// Intersection Observer for animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
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

/* Form focus states */
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
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

/* Notification animation */
.transform {
  transition-property: transform, opacity;
}
</style>
