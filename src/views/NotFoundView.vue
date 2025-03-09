<template>
  <main class="min-h-screen bg-white py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-9xl font-bold text-gray-200 mb-8">404</h1>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p class="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <router-link
          to="/"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
// No additional logic needed
</script> 