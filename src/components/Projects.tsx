import { useState } from 'react'
import { projectCategories, projects } from '../data/portfolio'
import type { Project, ProjectCategory } from '../data/portfolio'
import { ExternalIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      <div className="visual-caption">
        <span>↳ ILLUSTRATIVE {kind === 'pipeline' ? 'PIPELINE' : 'WORKFLOW'}</span>
        <span>PY</span>
      </div>
      {kind === 'technical' && (
        <div className="workflow-preview">
          <span className="code-muted">market_data</span>
          <span className="workflow-line" />
          <span className="code-chip">compute_metrics()</span>
          <span className="workflow-line" />
          <span className="code-result">{'{ trend, levels, conflicts }'}</span>
        </div>
      )}
      {kind === 'fundamental' && (
        <div className="contract-preview">
          <span className="code-muted">fa-2.0.facts.json</span>
          <code>
            <span>{'{'}</span>
            <br />
            &nbsp; "metrics": <b>{'{ … }'}</b>,<br />
            &nbsp; "valuation": <b>{'{ … }'}</b>,<br />
            &nbsp; "models": <b>{'{ … }'}</b>
            <br />
            <span>{'}'}</span>
          </code>
        </div>
      )}
      {kind === 'digest' && (
        <div className="digest-preview">
          <span className="code-muted">weekly-ai-digest · run</span>
          <ol>
            <li>
              <b>✓</b> read sources
            </li>
            <li>
              <b>✓</b> summarize → items.json
            </li>
            <li>
              <b>✓</b> render → README, digest
            </li>
          </ol>
        </div>
      )}
      {kind === 'pipeline' && (
        <div className="pipeline-preview">
          <span>PDF</span>
          <i>→</i>
          <span>JSON</span>
          <i>→</i>
          <span>SQLite</span>
          <small>extract · validate · preserve provenance</small>
        </div>
      )}
    </div>
  )
}

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory>('All projects')
  const visibleProjects = projects.filter(
    (project) => category === 'All projects' || project.category === category,
  )
  return (
    <section id="projects" className="section shell">
      <div className="section-toprow">
        <SectionHeading number="04" label="SELECTED WORK" title="Built to be explored.">
          Public projects in AI-assisted analytics, agent workflows, and dependable data pipelines.
        </SectionHeading>
        <a className="text-link" href="https://github.com/hulkbai-beep?tab=repositories">
          All repositories
          <ExternalIcon className="size-4" />
        </a>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {projectCategories.map((item) => (
          <button
            key={item}
            aria-pressed={item === category}
            className={item === category ? 'active' : ''}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        Showing {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}
      </p>
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <ProjectVisual kind={project.visual} />
            <div className="project-body">
              <p className="project-type mono">{project.type}</p>
              <h3>
                <a href={project.repository}>
                  {project.name}
                  <ExternalIcon className="size-5 shrink-0" />
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.technologies.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-source text-link" href={project.repository}>
                Explore repository
                <ExternalIcon className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
