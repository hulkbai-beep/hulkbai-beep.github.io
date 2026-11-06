// Edit portfolio copy here. Public evidence is recorded in docs/SOURCES.md.
export const profile = {
  name: 'Tianyang Bai',
  initials: 'TB',
  title: 'AI Engineering | Agentic Systems | Data Engineering',
  email: 'hulkbai@gmail.com',
  github: 'https://github.com/hulkbai-beep',
  siteUrl: 'https://hulkbai-beep.github.io/',
  description:
    'Tianyang Bai builds AI-assisted financial analysis tools and data pipelines. Explore public projects in agentic systems, Python, and data engineering.',
  introduction:
    'I’m Tianyang Bai. I build AI-assisted analysis tools and data pipelines, connecting structured data with useful AI workflows.',
  about: [
    'My work sits at the intersection of AI engineering, financial analytics, and data engineering. I’m interested in how language models can work with well-defined tools and reliable data.',
    'In my public projects, Python handles the calculations, schemas define the outputs, and AI helps interpret the results. I also build document pipelines that keep extracted data traceable to its source.',
  ],
}

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export const focusAreas = [
  { title: 'Agentic systems', detail: 'AI skills, tools & structured outputs' },
  { title: 'Data engineering', detail: 'Extraction, validation & provenance' },
  { title: 'Financial analytics', detail: 'Deterministic metrics & interpretation' },
]

export const skillGroups = [
  {
    title: 'AI tools & skills',
    skills: ['Claude Skills', 'Codex Skills', 'Tool integration', 'JSON Schema'],
  },
  {
    title: 'Data & analytics',
    skills: ['Python', 'pandas', 'NumPy', 'SQLite', 'Pydantic', 'PDF / OCR'],
  },
  {
    title: 'Engineering practices',
    skills: ['REST APIs', 'Caching & rate limiting', 'Data provenance', 'pytest', 'unittest'],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  source: string
}

// Add roles only after confirming a public résumé or other public source.
export const experience: Experience[] = []

export const projectCategories = [
  'All projects',
  'AI & analytics',
  'Agent workflows',
  'Data pipelines',
] as const
export type ProjectCategory = (typeof projectCategories)[number]

export type Project = {
  id: string
  name: string
  repository: string
  category: Exclude<ProjectCategory, 'All projects'>
  type: string
  description: string
  highlights: string[]
  technologies: string[]
  source: string
  visual: 'technical' | 'fundamental' | 'digest' | 'pipeline'
}

export const projects: Project[] = [
  {
    id: 'fmp-technical-analysis',
    name: 'FMP Technical Analysis',
    repository: 'https://github.com/hulkbai-beep/fmp-technical-analysis',
    category: 'AI & analytics',
    type: 'CLAUDE SKILL / MARKET ANALYTICS',
    description:
      'Technical analysis of a US stock or ETF from daily market data. Python computes every number; Claude describes each reading and where the readings disagree, with no scores or ratings.',
    highlights: [
      'Separates numerical computation from AI interpretation',
      'NYSE trading calendar, ex-dividend gaps, and scheduled macro events',
      'Versioned JSON contract and offline pytest suite',
    ],
    technologies: ['Python', 'pandas', 'NumPy', 'JSON Schema', 'pytest'],
    source:
      'https://github.com/hulkbai-beep/fmp-technical-analysis/blob/a7dc79e50a0346308966ef51436d285de0dc92b3/README.md',
    visual: 'technical',
  },
  {
    id: 'fmp-fundamental-analysis',
    name: 'FMP Fundamental Analysis',
    repository: 'https://github.com/hulkbai-beep/fmp-fundamental-analysis',
    category: 'AI & analytics',
    type: 'PYTHON TOOLKIT / FINANCIAL ANALYTICS',
    description:
      'US stock fundamentals, standard valuation models, and macro context, presented as facts rather than verdicts. Available as a Claude skill, command line workflow, and bilingual local interface.',
    highlights: [
      'DCF and reverse DCF with the discount rate tied to Treasury yields',
      'One facts-only JSON document for downstream tools',
      'Cached, rate-limited API client with offline tests',
    ],
    technologies: ['Python', 'REST APIs', 'JSON Schema', 'unittest'],
    source:
      'https://github.com/hulkbai-beep/fmp-fundamental-analysis/blob/5dea2fc583449a7e4302292749b50ac123d04ea7/README.en.md',
    visual: 'fundamental',
  },
  {
    id: 'ai-engineer-enhance',
    name: 'AI Engineer Resource Tracker',
    repository: 'https://github.com/hulkbai-beep/ai-engineer-enhance',
    category: 'Agent workflows',
    type: 'CLAUDE SKILL / AGENT WORKFLOW',
    description:
      'A weekly agent workflow that reads curated LLM and agent sources, writes categorized summaries to a validated JSON store, and publishes a resource table and weekly digest.',
    highlights: [
      'Per-source read windows with overlap and deduplication',
      'Relevance rubric anchored to real examples',
      'Monthly snapshot of skills named in AI engineer job postings',
    ],
    technologies: ['Claude Skills', 'Python', 'JSON', 'unittest'],
    source:
      'https://github.com/hulkbai-beep/ai-engineer-enhance/blob/c8535ccae63cfa21977f96eaaeaaf4a0dc50e699/.claude/skills/weekly-ai-digest/SKILL.md',
    visual: 'digest',
  },
  {
    id: 'factset-earnings-insight-pdf-extractor',
    name: 'Earnings Report Extractor',
    repository: 'https://github.com/hulkbai-beep/factset-earnings-insight-pdf-extractor',
    category: 'Data pipelines',
    type: 'DOCUMENT PIPELINE / DATA ENGINEERING',
    description:
      'A pipeline that converts local earnings reports into validated JSON snapshots and normalized SQLite data, with field-level source provenance.',
    highlights: [
      'PDF extraction with OCR support',
      'Schema validation and source references',
      'Explicit handling of missing or ambiguous values',
    ],
    technologies: ['Python', 'SQLite', 'Pydantic', 'PDF / OCR'],
    source:
      'https://github.com/hulkbai-beep/factset-earnings-insight-pdf-extractor/blob/35ebc3d35b111c4655d2a58a0c5b762d3f89bfd3/README.md',
    visual: 'pipeline',
  },
]
