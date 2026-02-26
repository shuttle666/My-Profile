import { assets } from "@/assets";
import type { Internship } from "@/types/domain";

export const internshipData: Internship = {
  company: "Soon Meta",
  logo: assets.soon_logo,
  position: "Software Engineer Intern",
  duration: "November 2024 - February 2025",
  workType: "Remote",
  responsibilities: [
    {
      id: "architecture",
      text: "Architected a robust full-stack blog system using TypeScript(Nextjs) and Nodejs, implementing a modular Controller-Service-Repository pattern and DTO-based validation to ensure 100% type safety.",
    },
    {
      id: "query-optimization",
      text: "Optimized complex database query performance by 60% (reducing response time to 150ms) using Prisma and concurrent processing, ensuring efficient data retrieval for scalable systems.",
    },
    {
      id: "migration-stability",
      text: "Managed reliable database schema evolution via Prisma Migrate, maintaining synchronization across development, staging, and production environments with 0% online migration failures.",
    },
    {
      id: "agile-collaboration",
      text: "Collaborated in an Agile environment following Git Flow best practices, achieving a 95% PR approval rate and resolving 8+ complex merge conflicts to maintain version control integrity.",
    },
  ],
  description:
    "This internship provided me with hands-on experience in large-scale commercial project development. Most importantly, I gained valuable insights into the software development workflow in a corporate environment and developed essential soft skills for effective communication with colleagues and management.",
  technologies: [
    { id: "typescript", icon: assets.typescript, name: "TypeScript" },
    { id: "vue", icon: assets.vue, name: "Vue.js" },
    { id: "nextjs", icon: assets.nextjs, name: "Next.js" },
    { id: "nestjs", icon: assets.nestjs, name: "NestJS" },
    { id: "prisma", icon: assets.prisma, name: "Prisma" },
  ],
};
