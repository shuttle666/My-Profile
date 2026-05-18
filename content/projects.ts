import { assets } from '@/assets'
import type { ProjectItem } from '@/types/domain'

export const workData: ProjectItem[] = [
  {
    id: 'opsflow',
    title: 'OpsFlow',
    description:
      'A multi-tenant field service operations platform with dispatch workflows, RBAC, audit logs, and AI-assisted planning.',
    bgImage: '/projects/opsflow-cover.svg',
    technologies: [
      { id: 'nextjs', icon: assets.nextjs, name: 'Next.js' },
      { id: 'typescript', icon: assets.typescript, name: 'TypeScript' },
      { id: 'postgresql', icon: assets.postgresql, name: 'PostgreSQL' },
    ],
    link: 'https://opsflow.aboutwenduo.wang',
  },
  {
    id: 'login-register',
    title: 'Login and Register',
    description: 'JWT-based login system with video streaming - Node.js, PostgreSQL, Docker.',
    bgImage: '/projects/loginRegister.png',
    link: 'https://login-register-nine-beta.vercel.app/',
  },
  {
    id: 'recipes-book',
    title: 'Recipes Book',
    description:
      'A React recipe manager focused on component composition, state updates, and editable nested form data.',
    bgImage: '/projects/recipesBook.png',
    technologies: [{ id: 'react', icon: assets.react, name: 'React' }],
    link: 'https://recipes-one-azure.vercel.app/',
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
