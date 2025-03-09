<template>
  <main class="min-h-screen bg-white py-20">
    <!-- About Hero -->
    <section class="container mx-auto px-4 mb-20">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 fade-in-scroll">
              About Me
            </h1>
            <p class="text-xl text-gray-600 mb-8 fade-in-scroll">
              A passionate Full Stack Developer and IT Instructor based in Bangued, Abra, Philippines
            </p>
            <div class="space-y-4 text-gray-600 fade-in-scroll">
              <p>
                With over 2 years of experience in web development and teaching, I combine technical expertise with a passion for education to create impactful digital solutions and nurture the next generation of developers.
              </p>
              <p>
                Currently, I work as an IT Instructor at Data Center College of the Philippines while taking on freelance web development projects. This dual role allows me to stay at the forefront of technology while sharing my knowledge with others.
              </p>
            </div>
          </div>
          <div class="order-1 md:order-2 fade-in-scroll">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Richmond Zedrik"
              class="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Certifications -->
    <section class="container mx-auto px-4 mb-20">
      <h2 class="text-3xl font-bold text-center mb-12 fade-in-scroll">Education & Certifications</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-6 fade-in-scroll">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Education</h3>
          <div class="space-y-6">
            <div>
              <span class="text-sm text-blue-600 font-medium">2019 - 2023</span>
              <h4 class="text-lg font-semibold text-gray-900">Bachelor of Science in Information Technology</h4>
              <p class="text-gray-600">Data Center College of the Philippines</p>
            </div>
            <!-- Add more education items if needed -->
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-lg p-6 fade-in-scroll">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
          <div class="space-y-6">
            <div>
              <span class="text-sm text-blue-600 font-medium">2023</span>
              <h4 class="text-lg font-semibold text-gray-900">Full Stack Web Development</h4>
              <p class="text-gray-600">freeCodeCamp</p>
            </div>
            <!-- Add more certifications -->
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Interests -->
    <section class="container mx-auto px-4 mb-20">
      <h2 class="text-3xl font-bold text-center mb-12 fade-in-scroll">Beyond Coding</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="interest in interests" 
          :key="interest.title"
          class="bg-white rounded-xl shadow-lg p-6 fade-in-scroll"
        >
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <component :is="interest.icon" class="w-6 h-6 text-blue-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ interest.title }}</h3>
          <p class="text-gray-600">{{ interest.description }}</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center fade-in-scroll">
        <h2 class="text-3xl font-bold mb-6">Let's Work Together</h2>
        <p class="text-xl text-gray-600 mb-8">
          Interested in collaborating or have a project in mind?
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          Get in Touch
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const interests = [
  {
    title: 'Teaching',
    description: 'Sharing knowledge and mentoring aspiring developers',
    icon: 'BookOpenIcon'
  },
  {
    title: 'Open Source',
    description: 'Contributing to and learning from the developer community',
    icon: 'CodeBranchIcon'
  },
  {
    title: 'Technology',
    description: 'Exploring new technologies and staying up-to-date with trends',
    icon: 'ChipIcon'
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
