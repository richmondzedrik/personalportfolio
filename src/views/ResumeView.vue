<template>
  <section class="py-12 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Resume & Experience
          </span>
        </h1>
        <p class="text-lg text-gray-600 mb-8">My professional journey and achievements</p>
        <a  
          href="/assets/resume.pdf" 
          target="_blank"
          download="Richmond_Zedrik_Resume.pdf"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <span>Download Resume</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>

      <!-- Work Experience -->
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-8 text-gray-800">Work Experience</h2>
        <div class="space-y-8">
          <div v-for="job in workExperience" :key="job.title" 
               class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold text-gray-800">{{ job.title }}</h3>
                <p class="text-gray-600">{{ job.company }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ job.period }}</span>
            </div>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li v-for="achievement in job.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="max-w-4xl mx-auto mt-16">
        <h2 class="text-2xl font-bold mb-8 text-gray-800">Education</h2>
        <div class="space-y-8">
          <div v-for="edu in education" :key="edu.degree" 
               class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold text-gray-800">{{ edu.degree }}</h3>
                <p class="text-gray-600">{{ edu.school }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ edu.period }}</span>
            </div>
            <p class="text-gray-600">{{ edu.description }}</p>
          </div>
        </div>
      </div>

      <!-- Skills & Certifications -->
      <div class="max-w-4xl mx-auto mt-16">
        <h2 class="text-2xl font-bold mb-8 text-gray-800">Skills & Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Technical Skills</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in skills" :key="skill"
                    class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Certifications</h3>
            <ul class="space-y-3">
              <li v-for="cert in certifications" :key="cert.name"
                  class="flex justify-between items-center">
                <span class="text-gray-700">{{ cert.name }}</span>
                <span class="text-sm text-gray-500">{{ cert.year }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const workExperience = ref([
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2020 - Present',
    achievements: [
      'Led development of cloud-based enterprise application',
      'Managed team of 5 developers',
      'Improved system performance by 40%'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2018 - 2020',
    achievements: [
      'Developed and maintained multiple client websites',
      'Implemented CI/CD pipeline',
      'Reduced loading time by 60%'
    ]
  }
])

const education = ref([
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    period: '2014 - 2018',
    description: 'Focus on Software Engineering and Web Technologies'
  }
])

const skills = ref([
  'JavaScript', 'Vue.js', 'React', 'Node.js', 'Python',
  'AWS', 'Docker', 'MongoDB', 'SQL', 'Git'
])

const certifications = ref([
  { name: 'AWS Certified Developer', year: '2023' },
  { name: 'Vue.js Advanced Certification', year: '2022' },
  { name: 'MongoDB Developer Certification', year: '2021' }
])
</script>
