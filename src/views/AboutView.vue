<template>
  <section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-up opacity-0">
        <h1 class="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          About Me
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Passionate developer crafting digital experiences with modern technologies
        </p>
      </div>

      <!-- Main Content -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Left Column: Bio & Background -->
        <div class="space-y-8">
          <div class="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 animate-fade-up opacity-0 delay-100">
            <h2 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              My Journey
            </h2>
            <p class="text-gray-600 leading-relaxed">
              With over 5 years of experience in web development, I've cultivated a deep passion for creating intuitive and impactful digital solutions. My journey began with simple HTML websites and has evolved into building complex full-stack applications.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 animate-fade-up opacity-0 delay-200">
            <h2 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Education & Certifications
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <span class="text-2xl">🎓</span>
                <div>
                  <h3 class="font-semibold text-gray-800">Bachelor of Science in Information Technology</h3>
                  <p class="text-gray-600">Data Center College of the Philippines, 2018-2022</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="text-2xl">📜</span>
                <div>
                  <h3 class="font-semibold text-gray-800">AWS Certified Developer</h3>
                  <p class="text-gray-600">Amazon Web Services, 2023</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column: Skills & Interests -->
        <div class="space-y-8">
          <div class="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 animate-fade-up opacity-0 delay-300">
            <h2 class="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Technical Skills
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="skill in skills" :key="skill.name" 
                   class="p-4 bg-gray-50 rounded-xl fade-in-scroll">
                <div class="text-2xl mb-2">{{ skill.icon }}</div>
                <h3 class="font-semibold text-gray-800">{{ skill.name }}</h3>
                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div class="skill-bar bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                       :style="{ width: '0%' }"
                       :data-width="skill.level"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 animate-fade-up opacity-0 delay-400">
            <h2 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Interests & Hobbies
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="interest in interests" :key="interest.name" 
                   class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span class="text-2xl">{{ interest.icon }}</span>
                <span class="text-gray-800">{{ interest.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skills = ref([
  { name: 'Frontend Development', icon: '🎨', level: 90 },
  { name: 'Backend Development', icon: '⚙️', level: 85 },
  { name: 'Database Design', icon: '🗄️', level: 80 },
  { name: 'Cloud Services', icon: '☁️', level: 75 }
])

const interests = ref([
  { name: 'Open Source', icon: '🌟' },
  { name: 'Tech Writing', icon: '✍️' },
  { name: 'Photography', icon: '📸' },
  { name: 'Travel', icon: '✈️' }
])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.hasAttribute('data-width')) {
          // Handle skill bars
          const width = entry.target.getAttribute('data-width');
          requestAnimationFrame(() => {
            entry.target.style.width = `${width}%`;
          });
        } else {
          // Handle scroll animations
          entry.target.classList.add('visible');
        }
      }
    });
  }, { threshold: 0.2 });

  // Observe skill bars
  document.querySelectorAll('[data-width]').forEach(bar => {
    observer.observe(bar);
  });

  // Observe scroll animation elements
  document.querySelectorAll('.fade-in-scroll').forEach(element => {
    observer.observe(element);
  });
})
</script>

<style scoped>
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

.skill-bar {
  transition: width 1s ease-out;
}

.skill-bar.visible {
  width: var(--width) !important;
}

.fade-in-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

h2 {
  animation: enhancedFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

p {
  animation: enhancedFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
  opacity: 0;
}
</style>
