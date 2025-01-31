<template>
  <main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] md:min-h-screen flex items-center justify-center px-4 py-8 md:py-0">
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div class="absolute w-full h-full bg-[radial-gradient(circle,rgba(120,119,198,0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      
      <div class="relative z-10 max-w-4xl mx-auto">
        <div class="flex flex-col items-center md:flex-row md:items-start gap-12">
          <!-- Profile Image -->
          <div class="relative w-48 h-48 md:w-64 md:h-64 animate-scale-in opacity-0">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl rotate-6"></div>
            <div class="absolute inset-0 bg-white rounded-3xl">
              <img 
                src="https://res.cloudinary.com/dmgivh17b/image/upload/q_auto,f_auto,w_400/v1738254858/portfolio/ws8xqsxsfvyyfjckuihb.jpg" 
                alt="Profile"
                class="w-full h-full object-cover rounded-3xl shadow-lg"
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
                fetchpriority="high"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'%3E%3Crect width=\'400\' height=\'400\' fill=\'%23f3f4f6\'/%3E%3C/svg%3E'"
              >
            </div>
          </div>

          <!-- Content -->
          <div class="text-center md:text-left space-y-8">
            <div class="space-y-3">
              <span class="inline-block text-sm uppercase tracking-wider text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full animate-fade-up opacity-0">
                Welcome, I am
              </span>
              <h1 class="text-4xl md:text-7xl font-bold text-gray-900 animate-fade-up opacity-0 delay-100 leading-tight">
                Richmond Zedrik
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-up opacity-0 delay-200">
                  S. Aspacio
                </span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-600 mt-4 animate-fade-up opacity-0 delay-300 max-w-2xl">
                Full Stack Developer crafting elegant digital experiences
              </p>
            </div>

            <!-- Button group with enhanced visibility -->
            <div class="flex flex-wrap gap-6 justify-center md:justify-start animate-fade-up opacity-0 delay-400">
              <router-link
                to="/projects"
                class="group px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg font-medium">
                <span class="flex items-center gap-3">
                  View Work
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </router-link>

              <router-link
                to="/contact"
                class="group px-8 py-4 border-2 border-gray-200 text-gray-800 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg font-medium">
                <span class="flex items-center gap-3">
                  Contact Me
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills & Introduction Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Brief Introduction -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Building Digital Experiences
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            With over 5 years of experience in full-stack development, I specialize in creating 
            modern web applications that combine beautiful design with efficient functionality. 
            My approach focuses on delivering scalable solutions that drive business growth.
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="skill in skills" :key="skill.name" 
               class="bg-white rounded-xl shadow-lg p-6 hover-lift">
            <div class="text-4xl mb-4 transform transition-transform hover:scale-110 duration-200">{{ skill.icon }}</div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ skill.name }}</h3>
            <p class="text-gray-600">{{ skill.description }}</p>
            <div class="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-700"
                   :style="{ width: '0%' }"
                   :data-width="skill.level"
                   ref="skillBar">
              </div>
            </div>
          </div>
        </div>

        <!-- Technologies -->
        <div class="mt-20 max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-center mb-8 text-gray-800">Technologies I Work With</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="tech in technologies" :key="tech.name"
                 class="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover-lift">
              <span class="text-2xl transform transition-transform group-hover:scale-110 duration-200">{{ tech.icon }}</span>
              <span class="text-gray-700">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <!-- Background decoration -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transform rotate-45"></div>
              <div class="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            
            <div class="relative z-10">
              <div class="flex flex-col md:flex-row items-center justify-between gap-8">
                <div class="text-center md:text-left">
                  <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Ready to Start a Project?
                  </h2>
                  <p class="text-gray-600 text-lg mb-0 md:max-w-xl">
                    Let's collaborate to bring your ideas to life with modern web technologies and creative solutions.
                  </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4">
                  <router-link
                    to="/contact"
                    class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <span class="relative flex items-center justify-center gap-2">
                      Get Started
                      <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </router-link>
                  <router-link
                    to="/projects"
                    class="group px-8 py-4 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                    <span class="flex items-center justify-center gap-2">
                      View Projects
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skills = ref([
  {
    name: 'Vue.js',
    icon: '⚡',
    level: 90,
    description: 'Building reactive web applications'
  },
  {
    name: 'JavaScript',
    icon: '🚀',
    level: 85,
    description: 'Modern ES6+ development'
  },
  {
    name: 'Node.js',
    icon: '🛠️',
    level: 80,
    description: 'Backend development & APIs'
  },
  {
    name: 'UI/UX',
    icon: '🎨',
    level: 75,
    description: 'Creating beautiful interfaces'
  }
])

const technologies = ref([
  { name: 'React', icon: '⚛️' },
  { name: 'Vue', icon: '💚' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐋' },
  { name: 'Git', icon: '📦' }
])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        requestAnimationFrame(() => {
          bar.style.width = `${width}%`;
        });
      }
    });
  }, { threshold: 0.5 });

  // Observe skill bars
  document.querySelectorAll('[data-width]').forEach(bar => {
    observer.observe(bar);
  });
})
</script>

<style scoped>
.skill-card {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
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

.animate-fade-up {
  animation: enhancedFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes enhancedFadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-scale-in {
  animation: scaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.animate-slide-right {
  animation: slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}

/* Smooth hover transitions */
.transform {
  transition-property: transform, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Gradient text animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

h1.text-transparent {
  background-size: 200% auto;
  animation: gradient 8s ease infinite;
}
</style>
