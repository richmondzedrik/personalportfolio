# Personal Portfolio

A modern, responsive personal portfolio built with Vue 3 and Tailwind CSS.

## Features

- Responsive design
- Modern UI with Tailwind CSS
- Contact form
- Project showcase
- Easy to customize

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization

1. Edit the content in the Vue components under `src/views/`
2. Modify styles in `src/assets/main.css`
3. Update your personal links in `ContactView.vue`
4. Add your projects in `ProjectsView.vue`

## Deployment

This portfolio is completely serverless and can be deployed to platforms like Netlify, Vercel, or GitHub Pages. 

1. For contact form functionality:
   - Sign up for a free account at [Formspree](https://formspree.io)
   - Create a new form and get your form ID
   - Replace `your-form-id` in ContactView.vue with your actual form ID

2. Deploy to Netlify/Vercel:
   - Connect your GitHub repository
   - Use the following build settings:
     - Build command: `npm run build`
     - Output directory: `dist`
     - Environment variables: None required

## Technologies Used

- Vue 3
- Vue Router
- Tailwind CSS
- Vite
