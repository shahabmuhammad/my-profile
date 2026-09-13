export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#deep-dive", label: "Deep-dive" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

export const heroStats = [
  { value: "7+", label: "years shipping", count: false },
  { value: 24, label: "production systems", count: true },
  { value: 570, label: "agent components shipped", count: true },
];

export const aboutFacts = [
  { label: "Experience", value: "7+ years" },
  { label: "Owns", value: "Frontend → backend → CI" },
  { label: "Growing into", value: "RAG & agentic AI systems", accent: true },
  { label: "Timezone", value: "UTC+5 · distributed teams" },
];

export type SkillGroup = {
  title: string;
  index: string;
  daily: string[];
  familiar: string[];
  note?: string;
  notePosition?: "before" | "after";
  highlight?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Core Frontend",
    index: "01",
    daily: [
      "React 18–19",
      "Angular 18–20",
      "Next.js 15",
      "TypeScript 5.4 (strict)",
      "JavaScript (ES6+)",
    ],
    familiar: ["HTML5", "CSS3/SCSS", "Responsive Design", "PWA"],
  },
  {
    title: "Architecture & State",
    index: "02",
    daily: [
      "Zustand (~20 domain stores)",
      "RxJS 7",
      "React Flow (@xyflow/react) + elkjs",
      "Multi-tenant architecture",
      "RBAC",
    ],
    familiar: ["Redux", "React Context", "BFF patterns"],
  },
  {
    title: "Backend & APIs",
    index: "03",
    daily: ["NestJS", "REST APIs", "Node.js"],
    familiar: [".NET 10", "Express.js", "GraphQL", "PostgreSQL", "Firebase"],
    note: "Full NestJS backend implementations including caching layers and scalability patterns.",
    notePosition: "after",
  },
  {
    title: "Real-Time Systems",
    index: "04",
    daily: [
      "SignalR",
      "Server-Sent Events (+ polling fallback)",
      "TanStack Query",
      "Axios (custom retry/backoff)",
    ],
    familiar: ["WebSockets"],
  },
  {
    title: "Quality & Tooling",
    index: "05",
    daily: [
      "Jest 30 + React Testing Library",
      "Playwright",
      "ESLint / Prettier / Stylelint",
      "Azure Pipelines CI/CD",
    ],
    familiar: ["Karma/Jasmine", "Biome", "Docker / Cloud Run"],
  },
  {
    title: "Data Viz & Rich Content",
    index: "06",
    daily: [
      "ag-grid",
      "recharts",
      "Highcharts",
      "react-markdown / KaTeX / Mermaid",
    ],
    familiar: ["react-force-graph", "D3.js", "pdfjs-dist / react-pdf"],
  },
  {
    title: "AI & Agentic Systems",
    index: "07",
    highlight: true,
    note: "Built a production multi-tenant agent-orchestration platform: drag-and-drop workflow canvas, GraphRAG, governed orchestrator agent, human-in-the-loop approvals, usage-based billing.",
    notePosition: "before",
    daily: ["Agent orchestration (production)", "AI-assisted development (Copilot)"],
    familiar: ["RAG", "Agentic RAG", "Agentic AI architectures"],
  },
];

export type Project = {
  caseStudy: string;
  title: string;
  flagship?: boolean;
  metric: { value: number; label: string };
  what: string;
  stack?: string;
  ownership?: { fe: string; be: string };
  highlights: string[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    caseStudy: "Case study 01",
    title: "AI Agent Orchestrator Platform",
    flagship: true,
    metric: { value: 570, label: "components" },
    what: "A multi-tenant, billable enterprise platform for teams building and shipping production LLM agents: a drag-and-drop canvas for composing agents and pipelines out of ~570 pre-built components (LLMs, vector stores, tools, loaders, agents), deployable as an API or MCP server.",
    stack:
      "React 18.3, TypeScript 5.4 (strict), Vite 5.4 (SWC plugin, bundle visualizer, compression), Zustand (~20 domain stores) + React Context, TanStack Query + Axios (custom retry/backoff abstraction), React Router v6 (fully lazy-loaded route tree), Tailwind CSS + Radix UI + an internal component kit, Framer Motion, cmdk, React Flow (@xyflow/react) + elkjs, ag-grid, recharts, react-force-graph, react-markdown/KaTeX/MathJax/Mermaid + DOMPurify, pdfjs-dist/react-pdf, html2pdf.js, JSONForms + Zod, react-virtuoso/react-window, i18next, Jest 30 + RTL + Playwright, Biome.",
    highlights: [
      "Governed orchestrator agent with human-in-the-loop approvals.",
      "GraphRAG knowledge bases over proprietary data.",
      "A natural-language-to-flow compiler, voice agents, team collaboration, and usage-based billing.",
    ],
    link: { href: "#deep-dive", label: "Read the engineering deep-dive ↓" },
  },
  {
    caseStudy: "Case study 02",
    title: "Real-Time Prayer & Signage Platform",
    metric: { value: 620, label: "commits" },
    what: "A digital signage network for mosques — live prayer/Iqamah timing screens, Hijri calendar, Ramadan and Jumah schedules, live announcements.",
    ownership: {
      fe: "Angular 18, RxJS 7, SignalR real-time, SCSS, moment-hijri, PWA/Service Worker",
      be: "NestJS and .NET, multi-env CI/CD via Azure Pipelines",
    },
    highlights: [
      "SignalR real-time integration with legacy-browser fixes.",
      "Hijri date and RTL/LTR localization.",
      "New Salah listing, message carousel, and orientation service.",
    ],
  },
  {
    caseStudy: "Case study 03",
    title: "Admin & Payments Control Panel",
    metric: { value: 419, label: "commits" },
    what: "An operations dashboard for event/message management and payments, with mobile-app handoff.",
    ownership: {
      fe: "Angular 20 (upgraded from 17), Angular CDK, Firebase, Stripe.js, RxJS",
      be: "NestJS and .NET services powering the panel, Azure Pipelines CI",
    },
    highlights: [
      "Built the event-management module end-to-end: creation, listing, pagination, validation, image upload.",
      "Implemented the Stripe web payment flow and mobile-app redirect/token handling.",
      "Led the Angular 17→20 and CI upgrade.",
    ],
  },
  {
    caseStudy: "Case study 04",
    title: "Multi-Tenant B2B Marketplace",
    metric: { value: 192, label: "commits" },
    what: "A directory and marketplace platform for organizations and product/service listings, with search and admin approval workflows across Danish/English locales.",
    ownership: {
      fe: "Next.js 15 (App Router, Turbopack), React 19, TypeScript, NextAuth v5, Tailwind CSS 4, TanStack Query, React Hook Form + Zod, next-intl",
      be: "NestJS and .NET services backing search, listings, and workflow state",
    },
    highlights: [
      "AI-assisted search with URL-scraping auto-populate for listings.",
      "Suggestion/approval admin workflow, plus notification and activity-log system.",
      "GDPR-compliant auth flows: password reset, social login.",
    ],
  },
];

export type DeepDiveItem = {
  title: string;
  body: string;
  tags: string[];
  budget?: { value: string; label: string }[];
};

export const deepDive: DeepDiveItem[] = [
  {
    title: "SSE-based real-time architecture — no WebSockets",
    body: "Separate EventSource subscriptions for inbox updates, usage metering, and streaming chat responses, including a usage-stream hook that auto-falls-back to polling on SSE error and self-cancels when the stream recovers.",
    tags: ["EventSource", "polling fallback", "streaming chat"],
  },
  {
    title: "Visual agent-builder canvas — 1,300+ lines of React Flow",
    body: "Node/edge diffing, graph validation, version-lock and read-only semantics for published flows, and vertex-by-vertex build orchestration.",
    tags: ["@xyflow/react", "elkjs auto-layout", "graph validation"],
  },
  {
    title: "Chat UI engineering with regression-test discipline",
    body: "A virtualized, paginated message list with dedicated test suites covering scroll-follow behavior and layout-jump edge cases — the classic failure modes that make streaming chat UIs hard to get right.",
    tags: ["react-virtuoso", "Jest 30 + RTL"],
  },
  {
    title: "Multi-tenant team architecture with strict context",
    body: "Team context reconciled against fetched team lists on login, with explicit cascaded cleanup of team state on logout to prevent cross-tenant data leakage.",
    tags: ["multi-tenancy", "state isolation"],
  },
  {
    title: "Layered route authorization guards in the router",
    body: "Authorization built into the router itself, including a deliberate no-auth public route for email-based human-in-the-loop actions.",
    tags: ["React Router v6", "HITL routes"],
  },
  {
    title: "Self-authored performance budget gate in CI",
    body: "A gate that reads the Vite build manifest and fails the build if compressed bundle size exceeds set thresholds, backed by its own unit tests, on top of 50+ lazy-loaded route chunks.",
    tags: [],
    budget: [
      { value: "300 KiB", label: "initial JS budget" },
      { value: "500 KiB", label: "per chunk" },
      { value: "50+", label: "lazy route chunks" },
    ],
  },
  {
    title: "Shared request-layer convention across 55+ API domains",
    body: "A wrapper over React Query that classifies retriable vs. non-retriable errors, applies backoff, and auto-invalidates related query caches on mutation settle.",
    tags: ["TanStack Query", "retry/backoff", "cache invalidation"],
  },
];

export const learning = [
  {
    title: "Retrieval-Augmented Generation",
    body: "Chunking, embeddings, and retrieval quality — making grounded answers reliable.",
  },
  {
    title: "Agentic RAG",
    body: "Retrieval as a tool an agent decides to use, not a fixed pipeline step.",
  },
  {
    title: "Agentic AI system design",
    body: "Building directly on the Agent Orchestrator work to own the backend side too.",
  },
];

export const contactLinks = [
  {
    href: "mailto:shahabmuhammad95@gmail.com",
    label: "shahabmuhammad95@gmail.com",
    kind: "Email",
  },
  {
    href: "https://linkedin.com/in/muhammad-shahab-766948193",
    label: "in/muhammad-shahab-766948193",
    kind: "LinkedIn",
  },
  {
    href: "https://github.com/shahabmuhammad",
    label: "github.com/shahabmuhammad",
    kind: "GitHub",
  },
];
