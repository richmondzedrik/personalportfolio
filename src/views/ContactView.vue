<template>
  <section id="contact" class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 md:py-16 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent rounded-full transform rotate-12 animate-pulse"></div>
      <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full transform -rotate-12 animate-pulse"></div>
    </div>
    
    <div class="container mx-auto px-4 relative">
      <h1 class="text-3xl md:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-fade-in">
        Get in Touch
      </h1>
      <p class="text-lg md:text-xl text-gray-600 text-center mb-12 animate-fade-in-delay-1 px-4 md:px-0">
        Let's collaborate on your next project
      </p>
      
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <!-- Contact Form -->
        <div class="contact-card glass-card p-6 md:p-8">
          <form 
            action="https://formspree.io/f/xqaebpln"
            method="POST"
            class="space-y-4 md:space-y-6"
            @submit="handleSubmit"
          >
            <!-- Add honeypot field -->
            <div class="hidden">
              <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
            </div>
            
            <!-- Add CSRF token -->
            <input type="hidden" name="_csrf" :value="csrfToken">
            
            <div class="form-group">
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm"
                required
              ></textarea>
            </div>
            
            <!-- Add reCAPTCHA -->
            <div 
              class="g-recaptcha mb-4" 
              data-sitekey="6LfW-8gqAAAAAENUJBF0AG12_K9lfC_qZ-1OfR5k"
              data-theme="light"
            ></div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Contact Info & Social Links -->
        <div class="space-y-6">
          <!-- Social Links -->
          <div class="contact-card p-6 md:p-8">
            <h2 class="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Connect With Me
            </h2>
            <div class="space-y-4">
              <a href="mailto:your.email@example.com" 
                 class="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span class="text-2xl group-hover:scale-110 transition-transform">📧</span>
                <span class="group-hover:translate-x-1 transition-transform">richmondzedrik@gmail.com</span>
              </a>
              
              <a href="https://calendly.com/richmondzedrik/30min" 
                 target="_blank"
                 class="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span class="text-2xl group-hover:scale-110 transition-transform">📅</span>
                <span class="group-hover:translate-x-1 transition-transform">Schedule a Meeting</span>
              </a>
              
              <a href="www.linkedin.com/in/richmond-zedrik-aspacio-342163173" 
                 target="_blank"
                 class="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span class="text-2xl group-hover:scale-110 transition-transform">💼</span>
                <span class="group-hover:translate-x-1 transition-transform">LinkedIn</span>
              </a>
              
              <a href="https://github.com/richmondzedrik" 
                 target="_blank"
                 class="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span class="text-2xl group-hover:scale-110 transition-transform">🐱</span>
                <span class="group-hover:translate-x-1 transition-transform">GitHub</span>
              </a>
              
              <a href="https://twitter.com/richmondaspacio" 
                 target="_blank"
                 class="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span class="text-2xl group-hover:scale-110 transition-transform">🐦</span>
                <span class="group-hover:translate-x-1 transition-transform">Twitter</span>
              </a>
            </div>
          </div>

          <!-- Location -->
          <div class="contact-card p-6 md:p-8">
            <h2 class="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Location
            </h2>
            <p class="text-gray-600">
              Based in Bangued, Abra Philippines<br>
              Available for remote work worldwide<br>
              <span class="text-sm text-gray-500">UTC+8 (Pacific Time)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isSubmitting = ref(false)
const csrfToken = ref('')
const recaptchaVerified = ref(false)

// Generate CSRF token
function generateCSRFToken() {
  return Math.random().toString(36).substring(2, 15)
}

// Handle form submission
async function handleSubmit(e) {
  e.preventDefault()
  
  const recaptchaResponse = grecaptcha.getResponse()
  if (!recaptchaResponse) {
    alert('Please complete the reCAPTCHA')
    return
  }
  
  isSubmitting.value = true
  
  try {
    const form = e.target
    const formData = new FormData(form)
    formData.append('g-recaptcha-response', recaptchaResponse)
    
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      form.reset()
      alert('Message sent successfully!')
      grecaptcha.reset()
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    alert('Failed to send message. Please try again later.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // Generate CSRF token
  csrfToken.value = generateCSRFToken()
  
  // Load reCAPTCHA script
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js'
  script.async = true
  script.defer = true
  document.head.appendChild(script)
})
</script>

<style scoped>
.form-group {
  position: relative;
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay-1 {
  animation: fadeIn 0.8s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.contact-card {
  @apply bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300;
}

.submit-btn {
  @apply bg-blue-600 hover:bg-blue-700;
}
</style>
