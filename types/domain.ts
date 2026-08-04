import type { StaticImageData } from 'next/image'

export type ImageSource = StaticImageData | string

export interface ProjectTechnology {
  id: string
  icon: ImageSource
  name: string
}

export interface ProjectDetails {
  role: string
  result: string
  stack: string[]
  caseStudyHref?: string
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  bgImage: string
  link: string
  details: ProjectDetails
  technologies?: ProjectTechnology[]
}

export interface InfoItem {
  id: string
  icon: ImageSource
  iconDark: ImageSource
  title: string
  description: string
}

export interface SkillItem {
  id: string
  icon: ImageSource
  title: string
}

export interface InternshipTechnology {
  id: string
  icon: ImageSource
  name: string
}

export interface InternshipResponsibility {
  id: string
  text: string
}

export interface Internship {
  company: string
  logo: ImageSource
  position: string
  duration: string
  workType: string
  responsibilities: InternshipResponsibility[]
  description: string
  technologies: InternshipTechnology[]
}
