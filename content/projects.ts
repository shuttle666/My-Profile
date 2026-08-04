import { assets } from '@/assets'
import type { ProjectItem } from '@/types/domain'

export const opsflowProject: ProjectItem = {
  id: 'opsflow',
  title: 'OpsFlow',
  description:
    'A multi-tenant field-operations workspace that turns customer requests into scheduled, evidence-backed jobs, with human approval before any AI-proposed change.',
  bgImage: '/projects/opsflow-cover.svg',
  technologies: [
    { id: 'nextjs', icon: assets.nextjs, name: 'Next.js' },
    { id: 'typescript', icon: assets.typescript, name: 'TypeScript' },
    { id: 'postgresql', icon: assets.postgresql, name: 'PostgreSQL' },
  ],
  link: 'https://opsflow.aboutwenduo.wang',
  details: {
    role: 'Product owner & full-stack engineer',
    result:
      'Shipped a live, CI-gated demo with three-role dispatch workflows, tenant-boundary verification, and proposal-first AI writes.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS'],
    caseStudyHref: '/work/opsflow',
  },
}

export const workData: ProjectItem[] = [
  opsflowProject,
  {
    id: 'login-register',
    title: 'Login and Register',
    description: 'JWT-based login system with video streaming - Node.js, PostgreSQL, Docker.',
    bgImage: '/projects/loginRegister.png',
    link: 'https://login-register-nine-beta.vercel.app/',
    details: {
      role: 'Full-stack build',
      result:
        'Authentication, protected flows, PostgreSQL persistence, and Vercel services deployment.',
      stack: ['Node.js', 'PostgreSQL', 'Docker', 'JWT'],
    },
  },
  {
    id: 'recipes-book',
    title: 'Recipes Book',
    description:
      'A React recipe manager focused on component composition, state updates, and editable nested form data.',
    bgImage: '/projects/recipesBook.png',
    technologies: [{ id: 'react', icon: assets.react, name: 'React' }],
    link: 'https://recipes-one-azure.vercel.app/',
    details: {
      role: 'React fundamentals',
      result:
        'Component-based recipe manager with add, edit, delete, selection state, and nested ingredient/instruction updates.',
      stack: ['React', 'Component state', 'Props', 'Sass'],
    },
  },
  {
    id: 'threejs-demo',
    title: 'Three.js Demo',
    description:
      'Interactive 3D viewer built with Three.js featuring orbit controls and GUI panel.',
    bgImage: '/projects/threejs.png',
    link: 'https://threejs-one-dun.vercel.app/',
    details: {
      role: 'Interactive prototype',
      result:
        '3D viewer with orbit controls and a GUI panel for experimenting with scene settings.',
      stack: ['Three.js', 'Controls', 'Canvas'],
    },
  },
]
