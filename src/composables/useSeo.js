import { useHead } from '@vueuse/head'

export function useSeo({
  title = '',
  description = '',
  image = '',
  url = '',
  type = 'website'
} = {}) {
  const defaultTitle = 'Richmond Zedrik - Full Stack Developer'
  const defaultDescription = 'Full Stack Developer and IT Instructor specializing in modern web technologies.'
  const defaultImage = '/og-image.jpg' // You'll need to add this image to your public folder
  const siteUrl = 'https://richmondaspacio.vercel.app/' // Replace with your actual domain

  useHead({
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    meta: [
      // Basic meta tags
      {
        name: 'description',
        content: description || defaultDescription
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: type
      },
      {
        property: 'og:title',
        content: title || defaultTitle
      },
      {
        property: 'og:description',
        content: description || defaultDescription
      },
      {
        property: 'og:image',
        content: image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`
      },
      {
        property: 'og:url',
        content: url ? `${siteUrl}${url}` : siteUrl
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: title || defaultTitle
      },
      {
        name: 'twitter:description',
        content: description || defaultDescription
      },
      {
        name: 'twitter:image',
        content: image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: url ? `${siteUrl}${url}` : siteUrl
      }
    ]
  })
} 