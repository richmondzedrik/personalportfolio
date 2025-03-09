<template>
  <footer class="bg-gray-900 text-white py-12 mt-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold mb-4">Richmond Zedrik</h3>
          <p class="text-gray-400 mb-4">
            Full Stack Developer specializing in modern web applications and user experiences.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a 
                href="mailto:richmond.aspacio@gmail.com"
                class="hover:text-white transition-colors"
              >
                richmond.aspacio@gmail.com
              </a>
            </li>
            <li>Bangued, Abra, Philippines</li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>© {{ new Date().getFullYear() }} Richmond Zedrik. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
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

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
]
</script>
