export const opsflowLinks = {
  live: 'https://opsflow.aboutwenduo.wang',
  source: 'https://github.com/shuttle666/opsflow',
  caseStudy: 'https://github.com/shuttle666/opsflow/blob/main/docs/engineering/case-study.md',
  architecture: 'https://github.com/shuttle666/opsflow/blob/main/docs/engineering/architecture.md',
} as const

export const opsflowLifecycle = [
  'New',
  'Scheduled',
  'In progress',
  'Pending review',
  'Completed',
] as const

export const opsflowArchitecture = [
  {
    label: 'Product UI',
    title: 'Next.js App Router',
    detail: 'React, TypeScript, Tailwind CSS, Zustand, TanStack Query, and Zod.',
  },
  {
    label: 'Application API',
    title: 'Express 5 modular monolith',
    detail: 'Tenant-aware middleware, RBAC, JWT sessions, and domain services.',
  },
  {
    label: 'Persistence',
    title: 'Prisma + PostgreSQL',
    detail: 'Tenant-scoped operational data, audit activity, and persisted AI proposals.',
  },
  {
    label: 'Delivery',
    title: 'Docker on AWS',
    detail: 'Nginx and HTTPS on EC2, Amazon RDS, plus GitHub Actions CI and deployment.',
  },
] as const

export const opsflowDecisions = [
  {
    number: '01',
    title: 'Modular monolith before microservices',
    decision:
      'Keep the web app and API modular, but deploy them as one product while the domain and traffic are still evolving.',
    tradeoff:
      'This simplifies transactions, local development, testing, and delivery; modules still scale and deploy together.',
  },
  {
    number: '02',
    title: 'Tenant context on every business operation',
    decision:
      'Business entities carry a tenant ID, while service queries combine tenant filtering with role checks.',
    tradeoff:
      'The invariant must be preserved in every new query, so PostgreSQL integration and security tests exercise cross-tenant denial.',
  },
  {
    number: '03',
    title: 'AI proposes; authorised people decide',
    decision:
      'AI-generated changes are stored as pending proposals instead of writing directly to operational records.',
    tradeoff:
      'Confirmation adds a step, but it creates a review boundary where tenant, role, state, and domain rules are checked again.',
  },
] as const

export const opsflowEvidence = [
  {
    title: 'Tenant boundaries',
    detail:
      'PostgreSQL-backed integration and security tests cover tenant filtering and cross-tenant denial paths.',
  },
  {
    title: 'Role hand-off',
    detail:
      'A Playwright journey follows Owner creation, Staff execution, and Manager review through the job lifecycle.',
  },
  {
    title: 'AI safety path',
    detail:
      'Proposal end-to-end tests and deterministic evaluation cases cover routing, conflicts, and confirmation safety.',
  },
  {
    title: 'Release path',
    detail:
      'The public demo is delivered through a CI-gated GitHub Actions workflow to a deployed EC2 and RDS topology.',
  },
] as const

export const opsflowOwnership = [
  'Product scope and workflow design',
  'System architecture and data model',
  'Frontend and backend implementation',
  'AI safety boundaries and review flow',
  'Testing, deployment, and engineering documentation',
] as const
