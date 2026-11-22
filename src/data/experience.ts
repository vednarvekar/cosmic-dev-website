// Career log content. Newest first. Each entry renders as a "commit" in `git log --career`.
// Source: Ved's resume (public/resume.pdf). Keep the two in sync.

export type CareerEntry = {
  hash: string; // short fake commit hash, purely decorative
  type: 'feat' | 'edu' | 'docs';
  scope: string;
  title: string;
  org: string;
  when: string;
  where?: string;
  current?: boolean;
  points: { lead: string; rest: string }[]; // lead is highlighted
  tags?: string[];
};

export const career: CareerEntry[] = [
  {
    hash: 'a7f3c21',
    type: 'feat',
    scope: 'jdas',
    title: 'AI Automation & Business Applications Engineer',
    org: 'JDAS',
    when: 'Sep 2026 – Present',
    current: true,
    points: [
      {
        lead: 'Built Code-Shield',
        rest: ', a platform that analyses company codebases and pull requests. An Azure DevOps job runs Trivy, Gitleaks and Semgrep, then sends findings to AWS Bedrock for AI analysis.',
      },
      {
        lead: 'Built a Microsoft Teams agent',
        rest: ' that answers employee questions with live Wrike and Zendesk updates. RAG over the ADO wiki in S3 Vectors, on Lambda with Claude Haiku on Bedrock, Guardrails, per-user limits and CloudWatch logging.',
      },
      {
        lead: 'Automated client AWS onboarding',
        rest: ' with ADO pipelines: environments, security groups, databases and EC2 instances with the required software.',
      },
      {
        lead: 'Automated RDS backup snapshots',
        rest: ' with 30-day auto-cleanup, and production log archival: pull, encrypt and file logs into the right SharePoint folders.',
      },
    ],
    tags: ['AWS Bedrock', 'Lambda', 'S3 Vectors', 'Azure DevOps', 'RDS', 'EC2', 'CloudWatch'],
  },
  {
    hash: '3e91b0d',
    type: 'edu',
    scope: 'ucoe',
    title: 'B.E. Artificial Intelligence & Machine Learning',
    org: 'Universal College of Engineering · Mumbai University',
    when: 'Expected Apr 2028',
    where: 'Mumbai',
    points: [{ lead: 'Head', rest: ', Discipline & Anti-Ragging Committee.' }],
  },
  {
    hash: '0c4d8e2',
    type: 'docs',
    scope: 'certs',
    title: 'Certifications',
    org: 'Online',
    when: 'ongoing',
    points: [
      { lead: 'Node.js, Express, MongoDB', rest: ' Bootcamp' },
      { lead: 'The Ultimate React Course 2025', rest: '' },
      { lead: 'Data Science, ML, DL & NLP', rest: ' Bootcamp (in progress)' },
    ],
  },
];
