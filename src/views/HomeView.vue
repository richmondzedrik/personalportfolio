<template>
  <main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center px-4">
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div class="absolute w-full h-full bg-[radial-gradient(circle,rgba(120,119,198,0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      
      <div class="relative z-10 max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Profile Image -->
          <div class="relative w-48 h-48 md:w-64 md:h-64 animate-scale-in opacity-0">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl rotate-6"></div>
            <div class="absolute inset-0 bg-white rounded-3xl">
              <img 
                src="https://via.placeholder.com/400x400?text=Your+Photo" 
                alt="Profile"
                class="w-full h-full object-cover rounded-3xl shadow-lg"
                onerror="this.src='https://via.placeholder.com/400x400?text=Your+Photo'"
              >
            </div>
          </div>

          <!-- Content -->
          <div class="text-center md:text-left space-y-6">
            <div class="space-y-2">
              <h2 class="text-sm uppercase tracking-wider text-gray-500 animate-fade-up opacity-0">Welcome, I am</h2>
              <h1 class="text-4xl md:text-6xl font-bold text-gray-900 animate-fade-up opacity-0 delay-100">
                Richmond Zedrik
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-up opacity-0 delay-200">
                  S. Aspacio
                </span>
              </h1>
              <p class="text-lg md:text-xl text-gray-600 mt-4 animate-fade-up opacity-0 delay-300">
                Full Stack Developer crafting elegant digital experiences
              </p>
            </div>

            <div class="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up opacity-0 delay-400">
              <router-link
                to="/projects"
                class="group px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span class="flex items-center gap-2">
                  View Work
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </router-link>

              <router-link
                to="/contact"
                class="group px-6 py-3 border border-gray-200 text-gray-600 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span class="flex items-center gap-2">
                  Contact Me
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </router-link>
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

    <!-- About Section -->
    <section id="about" class="py-12 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-16 text-center">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 md:px-8">
          <div class="space-y-6">
            <div class="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
              <h3 class="text-2xl font-semibold mb-4 text-gray-800">My Journey</h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                I'm a passionate developer with expertise in modern web technologies.
                I love creating elegant solutions to complex problems and bringing ideas to life through code.
              </p>
            </div>
            <div class="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
              <h3 class="text-2xl font-semibold mb-4 text-gray-800">My Approach</h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and creating intuitive user experiences.
                Every project is an opportunity to learn and innovate.
              </p>
            </div>
          </div>
          <div class="space-y-6">
            <div class="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
              <h3 class="text-2xl font-semibold mb-4 text-gray-800">Technologies</h3>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="tech in technologies" :key="tech.name" class="text-center">
                  <div class="text-4xl mb-2">{{ tech.icon }}</div>
                  <div class="text-sm text-gray-600">{{ tech.name }}</div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
              <h3 class="text-2xl font-semibold mb-4 text-gray-800">Interests</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Web Development
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  UI/UX Design
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Mobile Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-12 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-16 text-center">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Skills & Expertise
          </span>
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0">
          <div v-for="(skill, index) in skills" 
               :key="skill.name"
               class="skill-card"
               :style="{ animationDelay: index * 100 + 'ms' }">
            <div class="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
              <div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{{ skill.icon }}</div>
              <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ skill.name }}</h3>
              <div class="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transform origin-left transition-transform duration-1000"
                     :style="{ transform: `scaleX(${skill.level / 100})` }"></div>
              </div>
              <p class="text-gray-600">{{ skill.description }}</p>
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
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
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
  animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
