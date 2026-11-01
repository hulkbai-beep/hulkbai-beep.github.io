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

export const projectCategories = ['All projects', 'AI & analytics', 'Data pipelines'] as const
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
  visual: 'technical' | 'fundamental' | 'pipeline'
}

export const projects: Project[] = [
  {
    id: 'fmp-technical-analysis',
    name: 'FMP Technical Analysis',
    repository: 'https://github.com/hulkbai-beep/fmp-technical-analysis',
    category: 'AI & analytics',
    type: 'CLAUDE SKILL / MARKET ANALYTICS',
    description:
      'From market data to technical insight. A Claude skill combining deterministic Python metrics, interactive charts, and AI-assisted interpretation.',
    highlights: [
      'Separates numerical computation from AI interpretation',
      'Versioned JSON contracts for downstream tools',
      'Offline tests for analysis workflows',
    ],
    technologies: ['Python', 'pandas', 'NumPy', 'JSON Schema'],
    source:
      'https://github.com/hulkbai-beep/fmp-technical-analysis/blob/145a174dff1525828a816ffbebe87de83a91d16e/README.md',
    visual: 'technical',
  },
  {
    id: 'fmp-fundamental-analysis',
    name: 'FMP Fundamental Analysis',
    repository: 'https://github.com/hulkbai-beep/fmp-fundamental-analysis',
    category: 'AI & analytics',
    type: 'PYTHON TOOLKIT / FINANCIAL ANALYTICS',
    description:
      'A toolkit for US stock fundamentals, valuation, and macro context. Available as a Claude skill, command line workflow, and bilingual local interface.',
    highlights: [
      'DCF and reverse DCF valuation workflows',
      'Cached API client with rate limiting',
      'Structured outputs and offline tests',
    ],
    technologies: ['Python', 'REST APIs', 'JSON Schema', 'unittest'],
    source:
      'https://github.com/hulkbai-beep/fmp-fundamental-analysis/blob/aa273a74a6c5c37561d3f736661bc11f400bf327/README.en.md',
    visual: 'fundamental',
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
