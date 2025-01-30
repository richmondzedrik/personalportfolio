<template>
  <footer class="bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 text-white py-4 relative border-t border-white/10">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
        <!-- Branding & Copyright -->
        <div class="text-center md:text-left">
          <div class="flex items-center gap-2">
            <h3 class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <span class="text-sm text-gray-400">
              © {{ new Date().getFullYear() }} Richmond Zedrik S. Aspacio
            </span>
          </div>
        </div>

        <!-- Connect -->
        <div class="flex items-center gap-4">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url" 
            target="_blank"
            class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300 group"
          >
            <span class="text-lg group-hover:scale-110 transition-transform">{{ social.icon }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '💼' },
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐱' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧' }
]
</script>
