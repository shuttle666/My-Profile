import { assets } from '@/assets'
import type { InfoItem, ServiceItem, SkillItem } from '@/types/domain'

export const serviceData: ServiceItem[] = [
  {
    id: 'web-design',
    icon: assets.web_icon,
    title: 'Web design',
    description: 'Web development is the process of building, programming...',
    link: '',
  },
  {
    id: 'mobile-app',
    icon: assets.mobile_icon,
    title: 'Mobile app',
    description: 'Mobile app development involves creating software for mobile devices...',
    link: '',
  },
  {
    id: 'ui-ux-design',
    icon: assets.ui_icon,
    title: 'UI/UX design',
    description: 'UI/UX design focuses on creating a seamless user experience...',
    link: '',
  },
  {
    id: 'graphics-design',
    icon: assets.graphics_icon,
    title: 'Graphics design',
    description: 'Creative design solutions to enhance visual communication...',
    link: '',
  },
]

export const infoList: InfoItem[] = [
  {
    id: 'technical-skills',
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Technical Skills',
    description: 'React, Node.js, Django, Next.js, Prisma and more.',
  },
  {
    id: 'projects',
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built more than 5 projects.',
  },
  {
    id: 'education',
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'Master of Computing, University of Adelaide.',
  },
]

export const frontendSkillsData: SkillItem[] = [
  { id: 'react', icon: assets.react, title: 'React' },
  { id: 'nextjs', icon: assets.nextjs, title: 'Next.js' },
  { id: 'tailwindcss', icon: assets.tailwindcss, title: 'Tailwind CSS' },
  { id: 'vite', icon: assets.vitejs, title: 'Vite' },
  { id: 'html', icon: assets.html, title: 'HTML' },
  { id: 'css', icon: assets.css, title: 'CSS' },
  { id: 'javascript', icon: assets.javascript, title: 'JavaScript' },
  { id: 'typescript', icon: assets.typescript, title: 'TypeScript' },
  { id: 'python', icon: assets.python, title: 'Python' },
  { id: 'threejs', icon: assets.threejs, title: 'Three.js' },
]

export const backendSkillsData: SkillItem[] = [
  { id: 'nodejs', icon: assets.nodejs, title: 'Node.js' },
  { id: 'express', icon: assets.express, title: 'Express' },
  { id: 'nestjs', icon: assets.nestjs, title: 'NestJS' },
  { id: 'django', icon: assets.django, title: 'Django' },
  { id: 'prisma', icon: assets.prisma, title: 'Prisma' },
  { id: 'postgresql', icon: assets.postgresql, title: 'PostgreSQL' },
  { id: 'mongodb', icon: assets.mongodb, title: 'MongoDB' },
  { id: 'mysql', icon: assets.mysql, title: 'MySQL' },
]

export const toolsSkillsData: SkillItem[] = [
  { id: 'git', icon: assets.git, title: 'Git' },
  { id: 'github', icon: assets.github, title: 'GitHub' },
  { id: 'vscode', icon: assets.vscode, title: 'VSCode' },
  { id: 'figma', icon: assets.figma, title: 'Figma' },
  { id: 'pnpm', icon: assets.pnpm, title: 'pnpm' },
  { id: 'postman', icon: assets.postman, title: 'Postman' },
  { id: 'docker', icon: assets.docker, title: 'Docker' },
  { id: 'sealos', icon: assets.sealos, title: 'Sealos' },
  { id: 'aws-ec2', icon: assets.aws, title: 'AWS EC2' },
  { id: 'claude', icon: assets.claude, title: 'Claude' },
  { id: 'cursor', icon: assets.cursor, title: 'Cursor' },
]
