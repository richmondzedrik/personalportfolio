<template>
  <main class="min-h-screen bg-white py-20">
    <!-- Resume Hero -->
    <section class="container mx-auto px-4 mb-20">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 fade-in-scroll">
          Resume
        </h1>
        <p class="text-xl text-gray-600 mb-8 fade-in-scroll">
          My professional journey and expertise
        </p>
        <a 
          href="/resume.pdf" 
          download
          class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors fade-in-scroll"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="container mx-auto px-4 mb-20">
      <h2 class="text-3xl font-bold text-center mb-12 fade-in-scroll">Professional Experience</h2>
      <div class="max-w-4xl mx-auto">
        <div class="space-y-8">
          <div 
            v-for="job in experience" 
            :key="job.id"
            class="relative pl-8 pb-8 border-l-2 border-gray-200 fade-in-scroll"
          >
            <!-- Timeline Dot -->
            <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
            
            <div class="bg-white rounded-xl shadow-lg p-6 ml-6">
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                {{ job.period }}
              </span>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ job.title }}</h3>
              <p class="text-gray-600 mb-4">{{ job.company }}</p>
              <ul class="space-y-2">
                <li 
                  v-for="(achievement, index) in job.achievements" 
                  :key="index"
                  class="flex items-start gap-3 text-gray-600"
                >
                  <svg class="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="container mx-auto px-4 mb-20">
      <h2 class="text-3xl font-bold text-center mb-12 fade-in-scroll">Technical Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="category in skills" 
          :key="category.name"
          class="bg-white rounded-xl shadow-lg p-6 fade-in-scroll"
        >
          <h3 class="text-xl font-bold text-gray-900 mb-6">{{ category.name }}</h3>
          <div class="space-y-4">
            <div 
              v-for="skill in category.items" 
              :key="skill.name"
              class="space-y-2"
            >
              <div class="flex justify-between text-sm font-medium">
                <span>{{ skill.name }}</span>
                <span class="text-gray-500">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const experience = [
  {
    id: 1,
    period: '2023 - Present',
    title: 'IT Instructor',
    company: 'Data Center College of the Philippines',
    achievements: [
      'Teaching web development and programming courses to college students',
      'Developing and maintaining curriculum materials',
      'Mentoring students in their programming projects',
      'Conducting technical workshops and seminars'
    ]
  },
  {
    id: 2,
    period: '2022 - Present',
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    achievements: [
      'Developing custom web applications for clients',
      'Creating responsive and user-friendly interfaces',
      'Implementing modern web technologies and best practices',
      'Managing client relationships and project timelines'
    ]
  }
]

const skills = [
  {
    name: 'Frontend Development',
    items: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    name: 'Backend Development',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'REST APIs', level: 90 }
    ]
  },
  {
    name: 'Tools & Others',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'Agile', level: 85 }
    ]
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
