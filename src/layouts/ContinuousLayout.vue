<template>
  <!-- Add main landmark and skip link -->
  <a 
    href="#main-content" 
    class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600"
  >
    Skip to main content
  </a>

  <div 
    class="continuous-scroll" 
    @keydown="handleKeyNav" 
    tabindex="0"
    role="region"
    aria-label="Portfolio sections"
  >
    <!-- Main Content -->
    <main id="main-content">
      <section 
        v-for="section in visibleSections" 
        :key="section.id"
        :id="section.id"
        :class="[
          'min-h-screen section fade-in-scroll',
          section.background,
          currentSection === section.id ? 'section-active' : 'section-inactive'
        ]"
        :ref="section.ref"
        :aria-labelledby="`${section.id}-heading`"
        role="region"
      >
        <h2 
          :id="`${section.id}-heading`" 
          class="sr-only"
        >
          {{ section.label }}
        </h2>
        <component :is="section.component" />
      </section>
    </main>

    <!-- Enhanced Navigation Dots -->
    <nav 
      class="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4 z-50"
      aria-label="Section navigation"
      role="navigation"
    >
      <!-- Progress Line -->
      <div class="absolute top-0 bottom-0 right-1.5 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div 
          class="w-full bg-blue-600 rounded-full transition-all duration-300"
          :style="{ height: `${scrollProgress}%` }"
        ></div>
      </div>

      <div
        v-for="section in visibleSections"
        :key="section.id"
        class="relative"
      >
        <!-- Section Label Tooltip -->
        <div 
          class="absolute right-full mr-2 top-1/2 -translate-y-1/2 pointer-events-none"
          :class="[
            'transition-all duration-300 transform',
            showTooltip === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          ]"
        >
          <span 
            class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 rounded-md text-sm font-medium shadow-lg whitespace-nowrap"
          >
            {{ section.label }}
          </span>
        </div>

        <!-- Navigation Dot -->
        <button
          @click="scrollToSection(section.id)"
          @mouseenter="showTooltip = section.id"
          @mouseleave="showTooltip = null"
          @touchstart="handleTouchStart(section.id)"
          @touchend="handleTouchEnd"
          class="group relative w-8 h-8 flex items-center justify-center"
          :aria-label="`Navigate to ${section.label} section`"
          :aria-current="currentSection === section.id"
        >
          <span 
            class="w-3 h-3 rounded-full transition-all duration-300 relative"
            :class="[
              currentSection === section.id 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-400 group-hover:bg-gray-600'
            ]"
          >
            <!-- Active section animation -->
            <span 
              v-if="currentSection === section.id"
              class="absolute -inset-1 animate-ping rounded-full bg-blue-400 opacity-75"
            ></span>
          </span>
        </button>
      </div>
    </nav>

    <!-- Keyboard Navigation Instructions -->
    <div 
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm"
      role="status"
      aria-live="polite"
      v-if="showKeyboardHints"
    >
      <p>
        Use arrow keys to navigate between sections. 
        Press <kbd class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">↑</kbd> 
        and <kbd class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">↓</kbd>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { throttle } from 'lodash-es'
import { useRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ServicesView from '../views/ServicesView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '../views/ContactView.vue'

const router = useRouter()

// Make sections reactive with metadata
const sections = ref([
  {
    id: 'home',
    label: 'Home',
    component: HomeView,
    ref: ref(null),
    background: 'bg-white dark:bg-gray-800',
    icon: 'HomeIcon'
  },
  {
    id: 'about',
    label: 'About Me',
    component: AboutView,
    ref: ref(null),
    background: 'bg-gray-50 dark:bg-gray-900',
    icon: 'UserIcon'
  },
  {
    id: 'projects',
    label: 'Projects',
    component: ProjectsView,
    ref: ref(null),
    background: 'bg-white dark:bg-gray-800',
    icon: 'CodeIcon'
  },
  {
    id: 'services',
    label: 'Services',
    component: ServicesView,
    ref: ref(null),
    background: 'bg-gray-50 dark:bg-gray-900',
    icon: 'BriefcaseIcon'
  },
  {
    id: 'resume',
    label: 'Resume',
    component: ResumeView,
    ref: ref(null),
    background: 'bg-white dark:bg-gray-800',
    icon: 'DocumentIcon'
  },
  {
    id: 'contact',
    label: 'Contact',
    component: ContactView,
    ref: ref(null),
    background: 'bg-gray-50 dark:bg-gray-900',
    icon: 'MailIcon'
  }
])

// Computed properties for section management
const visibleSections = computed(() => {
  return sections.value.filter(section => !section.hidden)
})

const currentSectionIndex = computed(() => {
  return visibleSections.value.findIndex(section => section.id === currentSection.value)
})

const nextSection = computed(() => {
  const nextIndex = currentSectionIndex.value + 1
  return nextIndex < visibleSections.value.length ? visibleSections.value[nextIndex] : null
})

const previousSection = computed(() => {
  const prevIndex = currentSectionIndex.value - 1
  return prevIndex >= 0 ? visibleSections.value[prevIndex] : null
})

const currentSection = ref('home')

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    router.push({ hash: `#${sectionId}` })
  }
}

const scrollProgress = ref(0)

// Add section transition state
const isTransitioning = ref(false)

// Update scroll handler to manage transitions
const handleScroll = throttle(() => {
  if (isTransitioning.value) return

  requestAnimationFrame(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2
    const documentHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    
    // Calculate scroll progress more efficiently
    scrollProgress.value = Math.min(
      (window.scrollY / (documentHeight - windowHeight)) * 100,
      100
    )

    // Use a more efficient way to find current section
    const currentPos = window.scrollY + window.innerHeight / 3
    let newSection = sections[0].id

    for (const section of sections) {
      const element = document.getElementById(section.id)
      if (!element) continue

      const { offsetTop, offsetHeight } = element
      if (currentPos >= offsetTop && currentPos < offsetTop + offsetHeight) {
        newSection = section.id
        break
      }
    }

    if (currentSection.value !== newSection) {
      currentSection.value = newSection
      router.push({ hash: `#${newSection}` }, { replace: true })
    }

    // Update section transition state
    isTransitioning.value = true
    setTimeout(() => {
      isTransitioning.value = false
    }, 800) // Match this with transition duration
  })
}, 100, { leading: true, trailing: true })

// Add scroll-end detection for smoother updates
let scrollTimeout
const handleScrollEnd = () => {
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    handleScroll()
  }, 150)
}

// Add Intersection Observer for fade-in animations
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

  // Add both scroll and scrollend listeners
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('scrollend', handleScrollEnd, { passive: true })

  // Initial scroll position check
  handleScroll()

  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('scrollend', handleScrollEnd)
    clearTimeout(scrollTimeout)
  })
})

// Navigation methods
const scrollToNextSection = () => {
  if (nextSection.value) {
    scrollToSection(nextSection.value.id)
  }
}

const scrollToPreviousSection = () => {
  if (previousSection.value) {
    scrollToSection(previousSection.value.id)
  }
}

// Keyboard navigation
const handleKeyNav = (e) => {
  switch (e.key) {
    case 'ArrowDown':
    case 'PageDown':
      e.preventDefault()
      scrollToNextSection()
      break
    case 'ArrowUp':
    case 'PageUp':
      e.preventDefault()
      scrollToPreviousSection()
      break
    case 'Home':
      e.preventDefault()
      scrollToSection(visibleSections.value[0].id)
      break
    case 'End':
      e.preventDefault()
      scrollToSection(visibleSections.value[visibleSections.value.length - 1].id)
      break
  }
}

// Add to existing script
const showTooltip = ref(null)
let touchTimeout

// Touch handling for mobile devices
const handleTouchStart = (sectionId) => {
  touchTimeout = setTimeout(() => {
    showTooltip.value = sectionId
  }, 500) // Show tooltip after long press
}

const handleTouchEnd = () => {
  clearTimeout(touchTimeout)
  showTooltip.value = null
}

// Cleanup
onUnmounted(() => {
  clearTimeout(touchTimeout)
})

// Add to existing script
const showKeyboardHints = ref(false)

// Show keyboard hints on first keyboard interaction
const handleFirstKeyPress = (e) => {
  if (e.key.startsWith('Arrow')) {
    showKeyboardHints.value = true
    setTimeout(() => {
      showKeyboardHints.value = false
    }, 5000)
    window.removeEventListener('keydown', handleFirstKeyPress)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleFirstKeyPress)
})
</script>

<style scoped>
.continuous-scroll {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.section {
  scroll-margin-top: 80px;
  transition: background-color 0.3s ease;
  will-change: transform;
  contain: content;
  content-visibility: auto;
  contain-intrinsic-size: 1px 5000px;
  transform: translateZ(0);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  overflow: hidden;
}

/* Fade in animation styles */
.fade-in-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: opacity, transform;
}

.fade-in-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth transitions */
.group-hover\:block {
  transition: opacity 0.2s ease-in-out;
}

/* Prevent layout shifts */
.group {
  min-height: 1.5rem;
}

/* Enhanced section transitions */
.section-active {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.section-inactive {
  opacity: 0.7;
  transform: scale(0.98);
}

/* Add parallax background effect */
.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 45%, rgba(var(--primary-rgb), 0.03) 100%);
  transform: translateY(var(--parallax-offset, 0));
  transition: transform 0.3s ease-out;
  pointer-events: none;
}

/* Gradient overlays between sections */
.section::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;
}

.section:not(:last-child)::after {
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(var(--bg-rgb), 0.1));
}

.section:not(:first-child)::before {
  top: 0;
  background: linear-gradient(to top, transparent, rgba(var(--bg-rgb), 0.1));
}

/* Optimize animations */
.section > * {
  will-change: transform, opacity;
  backface-visibility: hidden;
}

/* Add CSS variables for colors */
:root {
  --primary-rgb: 37, 99, 235;  /* blue-600 */
  --bg-rgb: 243, 244, 246;     /* gray-100 */
}

.dark {
  --bg-rgb: 17, 24, 39;        /* gray-900 */
}

/* Smooth tooltip transitions */
[class*="tooltip"] {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Touch feedback */
@media (hover: none) {
  .group:active .w-3 {
    transform: scale(0.9);
  }
}

/* Prevent text selection during touch */
.group {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

/* Add subtle hover animation */
@keyframes pulse-subtle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.group:hover .w-3 {
  animation: pulse-subtle 2s infinite;
}

/* Add focus styles */
:focus-visible {
  outline: 2px solid theme('colors.blue.500');
  outline-offset: 2px;
}

/* Ensure sufficient color contrast */
.text-gray-600 {
  color: #4B5563; /* WCAG AA compliant */
}

/* Improve motion safety */
@media (prefers-reduced-motion: reduce) {
  .section,
  .fade-in-scroll,
  .transition-all {
    transition: none !important;
    animation: none !important;
  }
}
</style> 