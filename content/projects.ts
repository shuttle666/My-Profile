import { assets } from '@/assets'
import type { ProjectItem } from '@/types/domain'

export const workData: ProjectItem[] = [
  {
    id: 'login-register',
    title: 'Login and Register',
    description: 'JWT-based login system with video streaming - Node.js, PostgreSQL, Docker.',
    bgImage: '/projects/loginRegister.png',
    link: 'https://login-and-register-frontend-4pihla-a9a1c4-13-54-49-177.traefik.me/',
  },
  {
    id: 'recipes-book',
    title: 'Recipes Book',
    description: 'A React-based recipe management app with real-time editing and modern UI design.',
    bgImage: '/projects/recipesBook.png',
    technologies: [{ id: 'react', icon: assets.react, name: 'React' }],
    link: 'https://recipes-one-azure.vercel.app/',
  },
  {
    id: 'taxpal',
    title: 'Taxpal',
    description: 'A responsive TaxPal website clone built with Next.js and React.',
    bgImage: '/projects/taxpal.png',
    technologies: [{ id: 'react', icon: assets.react, name: 'React' }],
    link: 'https://taxpal-app-ewa8l4-b515fe-13-54-49-177.traefik.me/',
  },
  {
    id: 'threejs-demo',
    title: 'Three.js Demo',
    description:
      'Interactive 3D viewer built with Three.js featuring orbit controls and GUI panel.',
    bgImage: '/projects/threejs.png',
    link: 'https://threejs-one-dun.vercel.app/',
  },
]
