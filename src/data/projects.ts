export type Project = {
  slug: string;
  label: string; // short name written on the floppy label
  name: string;
  color: string;
  tag: string;
  year: string;
  description: string;
  stack: string[];
  impact: string; // TODO(ved): replace placeholders with real numbers
  preview: string; // terminal-style preview shown in the drawer
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'resolv',
    label: 'resolv',
    name: 'resolv-cli-agent',
    color: '#d4ff3a',
    tag: 'AI agent',
    year: '2026',
    description:
      'A CLI agent that reads a GitHub issue, finds the relevant files with a RAG pipeline, writes a fix and opens the pull request itself.',
    stack: ['TypeScript', 'Ollama', 'ts-morph', 'LLM APIs', 'Chalk.js'],
    impact: 'Add a real result here, e.g. issues fixed or PRs merged.',
    preview: '$ resolv fix #482\n→ retrieving 14 relevant files…\n→ generating patch\n→ running tests ✓\n→ PR #483 opened',
    githubUrl: 'https://github.com/vednarvekar/resolv-v2',
  },
  {
    slug: 'gateway',
    label: 'gateway',
    name: 'api-gateway',
    color: '#bfe0ff',
    tag: 'infra',
    year: '2025',
    description:
      'Production-grade API gateway with JWT validation, RBAC, dynamic rate limiting, job queues and full observability.',
    stack: ['TypeScript', 'Fastify', 'Redis', 'BullMQ', 'Docker'],
    impact: 'Add a real result here, e.g. p99 latency under load.',
    preview: 'POST /v1/orders\n  jwt ✓   rbac: admin ✓\n  rate 98/100\n  → queued (bullmq)\n  200 OK · 38ms',
    githubUrl: 'https://github.com/vednarvekar/api-gateway',
  },
  {
    slug: 'pixel',
    label: 'pixel',
    name: 'pixel · AI media detection',
    color: '#ffc9d6',
    tag: 'computer vision',
    year: '2025',
    description:
      'Detects AI-generated images and video by combining ResNet-18 inference, EXIF/C2PA metadata forensics and visual search.',
    stack: ['Python', 'PyTorch', 'Node.js', 'Supabase', 'ResNet-18'],
    impact: 'Add a real result here, e.g. accuracy on the test set.',
    preview: 'image_0193.jpg\n  resnet18   0.91 synthetic\n  c2pa       missing\n  reverse    0 matches\nverdict: AI-generated',
    githubUrl: 'https://github.com/vednarvekar/pixel-v2',
  },
  {
    slug: 'ml-quant',
    label: 'ml-quant',
    name: 'ml-quant',
    color: '#ffe680',
    tag: 'ml · finance',
    year: '2025',
    description:
      'Trading pipeline: a CNN for chart patterns, XGBoost for technicals and NLP for news sentiment, combined into live trades with entry, stop-loss and target.',
    stack: ['Python', 'PyTorch', 'XGBoost', 'Pandas', 'Upstox API'],
    impact: 'Add a real result here, e.g. backtest returns.',
    preview: 'NIFTY  cnn: bullish\n       xgb: 0.72\n       news: +0.4\nentry 22410  sl 22290  tgt 22650',
  },
  {
    slug: 'search',
    label: 'search',
    name: 'vector-search-engine',
    color: '#c8f0d2',
    tag: 'search',
    year: '2024',
    description:
      "Semantic search over large codebases: hybrid BM25 + dense vector retrieval with re-ranking and citations. Powers resolv's RAG layer.",
    stack: ['Node.js', 'Qdrant', 'pgvector', 'TypeScript'],
    impact: 'Add a real result here, e.g. recall@10.',
    preview: 'q: "where is auth handled?"\n  bm25 + dense → rerank\n1. src/mw/jwt.ts      0.94\n2. src/auth/rbac.ts   0.88',
  },
  {
    slug: 'evals',
    label: 'evals',
    name: 'llm-eval-suite',
    color: '#e2d4ff',
    tag: 'llm evals',
    year: '2024',
    description:
      'Automated evaluation for LLM pipelines: RAGAS metrics, LLM-as-judge scoring and prompt regression tests with promptfoo, wired into CI.',
    stack: ['TypeScript', 'RAGAS', 'promptfoo', 'Node.js'],
    impact: 'Add a real result here, e.g. regressions caught before deploy.',
    preview: 'faithfulness   0.87 ▲\nrelevancy      0.91 ▲\nregressions    0\nci: passed ✓',
  },
];

export const links = {
  github: 'https://github.com/vednarvekar',
  linkedin: 'https://www.linkedin.com/in/ved-narvekar/',
  x: 'https://x.com/VedNarvekar',
  resume: '/resume.pdf',
  email: '', // TODO(ved): add your email
};
