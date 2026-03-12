import { assets } from '@/assets'
import type { Internship } from '@/types/domain'

export const workExperienceData: Internship[] = [
  {
    company: 'MediaJira',
    logo: assets.mediajira_logo,
    position: 'Full Stack Developer',
    duration: 'January 2026 - March 2026',
    workType: 'Sydney',
    responsibilities: [
      {
        id: 'frontend',
        text: 'Built responsive user interfaces using React (TypeScript), integrating RESTful APIs to deliver seamless end-to-end functionality.',
      },
      {
        id: 'backend',
        text: 'Developed backend services using Python (Django), delivering production-ready features and improving system reliability.',
      },
      {
        id: 'database',
        text: 'Designed and optimised relational data models using Django ORM with PostgreSQL, enhancing query performance and data integrity.',
      },
      {
        id: 'cicd',
        text: 'Contributed to CI/CD workflows with Git-based pull requests, ensuring code quality through peer reviews and automated testing.',
      },
      {
        id: 'agile',
        text: 'Resolved production issues and improved system stability within an Agile development environment using Jira and structured workflows.',
      },
    ],
    description:
      'Marketing campaign management and ad operations platform covering ad delivery, marketing automation, and task/approval and asset management.',
    technologies: [
      { id: 'react', icon: assets.react, name: 'React' },
      { id: 'typescript', icon: assets.typescript, name: 'TypeScript' },
      { id: 'python', icon: assets.python, name: 'Python' },
      { id: 'django', icon: assets.django, name: 'Django' },
      { id: 'postgresql', icon: assets.postgresql, name: 'PostgreSQL' },
    ],
  },
  {
    company: 'Soon Meta',
    logo: assets.soon_logo,
    position: 'Software Engineer Intern',
    duration: 'November 2024 - February 2025',
    workType: 'Melbourne',
    responsibilities: [
      {
        id: 'frontend',
        text: 'Developed responsive web applications using TypeScript and React, improving usability and code maintainability.',
      },
      {
        id: 'backend',
        text: 'Implemented back end RESTful APIs with Node.js and Express, ensured scalable content delivery and system reliability.',
      },
      {
        id: 'database',
        text: 'Implemented backend data operations using Prisma with MySQL, supporting efficient data modeling and query management.',
      },
      {
        id: 'cicd',
        text: 'Facilitated CI/CD workflows using GitHub Actions and Docker, automated testing and deployment.',
      },
      {
        id: 'testing',
        text: 'Contributed to maintaining unit tests and ensured automated test execution within CI/CD pipelines during pull request reviews.',
      },
    ],
    description: 'Full-stack recruitment platform supporting employer and candidate workflows.',
    technologies: [
      { id: 'typescript', icon: assets.typescript, name: 'TypeScript' },
      { id: 'react', icon: assets.react, name: 'React' },
      { id: 'nodejs', icon: assets.nodejs, name: 'Node.js' },
      { id: 'express', icon: assets.express, name: 'Express' },
      { id: 'prisma', icon: assets.prisma, name: 'Prisma' },
      { id: 'mysql', icon: assets.mysql, name: 'MySQL' },
      { id: 'docker', icon: assets.docker, name: 'Docker' },
    ],
  },
  {
    company: 'Xunyou Media',
    logo: assets.xunyou_logo,
    position: 'Web Developer',
    duration: 'April 2022 - May 2023',
    workType: 'Qingdao, China',
    responsibilities: [
      {
        id: 'spa',
        text: 'Developed SPA using React and JavaScript, creating cross-device responsive UI following best practices and accessibility compliance.',
      },
      {
        id: 'backend',
        text: 'Built backend API endpoints using Node.js to support core business functionalities and efficient data operations.',
      },
      {
        id: 'ui',
        text: 'Integrated Ant Design components to develop internal management interfaces, accelerating feature delivery and ensuring UI consistency.',
      },
      {
        id: 'api-modules',
        text: 'Abstracted API request logic into reusable modules, standardizing frontend-backend communication and reducing code duplication.',
      },
      {
        id: 'deployment',
        text: 'Deployed and maintained web applications on AWS EC2, supporting stable production hosting and system monitoring.',
      },
    ],
    description:
      'Custom enterprise software solutions for clients across multiple industries, delivering tailored system development and digital transformation services.',
    technologies: [
      { id: 'react', icon: assets.react, name: 'React' },
      { id: 'javascript', icon: assets.javascript, name: 'JavaScript' },
      { id: 'nodejs', icon: assets.nodejs, name: 'Node.js' },
      { id: 'aws', icon: assets.aws, name: 'AWS' },
    ],
  },
]
