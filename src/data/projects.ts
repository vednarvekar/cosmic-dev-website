export type Project = {
  slug: string;
  label: string; // short name written on the floppy label
  name: string;
  color: string;
  tag: string;
  year: string;
  description: string;
  stack: string[];
  impact: string;
  preview: string; // terminal-style preview shown in the drawer
  githubUrl?: string;
};

// Newest and strongest first. Numbers come from Ved's resume; keep them in sync.
export const projects: Project[] = [
  {
    slug: 'jitmo',
    label: 'jitmo',
    name: 'Jitmo · on-device Windows assistant',
    color: '#d4ff3a',
    tag: 'on-device AI',
    year: '2026',
    description:
      'A hotkey command bar that runs requests on your PC ("open Spotify", "move these PDFs to Invoices") with a small on-device model. Nothing leaves the machine except lookup terms. Skills are signed YAML with declared capabilities; sends need a confirm and data changes get a 10-second Undo.',
    stack: ['Rust', 'Tauri', 'React', 'ONNX Runtime', 'SQLite'],
    impact:
      'Request router (frozen int8 MiniLM + trained classifier, 50+ task classes) scores 91.8% exact match on a held-out set at ~10 ms per request on CPU. 50+ skills and 10 connectors.',
    preview: '> move these PDFs to Invoices\n  router   files.move   0.97   9ms\n  skill    files.move ✓ (signed)\n  moved 12 files   [undo 10s]',
    githubUrl: 'https://github.com/vednarvekar/jitmo',
  },
  {
    slug: 'gateway',
    label: 'gateway',
    name: 'api-gateway',
    color: '#bfe0ff',
    tag: 'infra',
    year: '2025',
    description:
      'A high-performance reverse proxy with Redis sliding-window rate limiting, circuit breaking, response caching, JWT/RBAC, Prometheus metrics and dynamic routing from PostgreSQL.',
    stack: ['TypeScript', 'Fastify', 'Redis', 'PostgreSQL', 'Prometheus'],
    impact: 'Load-tested with autocannon to ~4,000 RPS at 250 concurrent users, about 4× a naive Express proxy.',
    preview: 'POST /v1/orders\n  jwt ✓   rbac: admin ✓\n  rate 98/100 (sliding window)\n  breaker: closed\n  200 OK · 38ms',
    githubUrl: 'https://github.com/vednarvekar/api-gateway',
  },
  {
    slug: 'resolv',
    label: 'resolv',
    name: 'resolv · AI GitHub issue resolver',
    color: '#ffc9d6',
    tag: 'AI agent',
    year: '2025',
    description:
      "A CLI agent that fetches a GitHub issue, fingerprints the repo's coding patterns with RAG (ts-morph extraction + embeddings) and generates a style-matched patch through an LLM tool-calling loop.",
    stack: ['TypeScript', 'Node.js', 'LLM APIs', 'RAG', 'ts-morph'],
    impact: 'Style-matched patches in under 60 seconds. One interface for 7 LLM providers (Anthropic, OpenAI, Gemini, Grok, OpenRouter, NVIDIA NIM, Ollama).',
    preview: '$ resolv fix #482\n→ fingerprinting repo style…\n→ retrieving 14 relevant files\n→ generating patch (tool loop)\n→ done in 41s ✓',
    githubUrl: 'https://github.com/vednarvekar/resolv-v2',
  },
  {
    slug: 'ml-quant',
    label: 'ml-quant',
    name: 'ml-quant · NSE trading research',
    color: '#ffe680',
    tag: 'ml · research',
    year: '2026',
    description:
      'A research and paper-trading platform for Indian equities, built on small ML models and the Upstox API. It places no real orders. Cost-aware backtesting, validation and a daily paper trader, with audit and holdout results published openly, including what does not work.',
    stack: ['Python', 'uv', 'pytest', 'pandas', 'Upstox API'],
    impact: 'Data pipeline with daily history from 2005 and 5-minute data from 2022, plus NSE bhavcopy, F&O and MTO loaders with cleaning and price adjustment.',
    preview: '$ uv run backtest --costs on\n  data     2005 → today (daily)\n  holdout  kept separate ✓\npaper trader: running\nreal orders: 0',
    githubUrl: 'https://github.com/vednarvekar/ml-quant',
  },
  {
    slug: 'pixel',
    label: 'pixel',
    name: 'pixel · AI media detection',
    color: '#c8f0d2',
    tag: 'computer vision',
    year: '2025',
    description:
      'A full-stack image and video scanner that fuses ResNet-18 inference, EXIF/XMP/IPTC and C2PA metadata checks, and web detection into one AI-probability score with a verdict and reasoning.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PyTorch', 'PostgreSQL', 'Supabase'],
    impact: 'Weighted score (85% model / 10% metadata / 5% web). Handles images up to 10 MB and videos up to 100 MB with 30-second analysis.',
    preview: 'image_0193.jpg\n  resnet18   0.91 synthetic\n  c2pa       missing\n  web        0 matches\nverdict: AI-generated (0.88)',
    githubUrl: 'https://github.com/vednarvekar/pixel-v2',
  },
];
