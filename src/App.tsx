import { Header } from './components/Header'
import { ArrowIcon, ExternalIcon, GitHubIcon, MailIcon } from './components/Icons'
import { Projects } from './components/Projects'
import { SectionHeading } from './components/SectionHeading'
import { SystemDiagram } from './components/SystemDiagram'
import { experience, focusAreas, profile, skillGroups } from './data/portfolio'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section id="top" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="small-cross" aria-hidden="true">
                  ✳
                </span>{' '}
                TIANYANG BAI / AI ENGINEER
              </p>
              <h1 id="hero-title">
                Turning data
                <br />
                into useful
                <br />
                <span>intelligence.</span>
              </h1>
              <p className="hero-introduction">{profile.introduction}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work
                  <ArrowIcon className="size-5" />
                </a>
                <a className="button button-quiet" href={`mailto:${profile.email}`}>
                  Let’s connect
                  <ExternalIcon className="size-5" />
                </a>
              </div>
            </div>
            <SystemDiagram />
          </div>
          <div className="focus-strip">
            {focusAreas.map((area, index) => (
              <div className="focus-item" key={area.title}>
                <span className="mono focus-number">0{index + 1}</span>
                <div>
                  <h2>{area.title}</h2>
                  <p>{area.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="about" className="section shell about-grid">
          <SectionHeading
            number="01"
            label="ABOUT ME"
            title="Curiosity, with an engineering mindset."
          />
          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a href={profile.github} className="text-link">
              Follow the work on GitHub
              <ExternalIcon className="size-4" />
            </a>
          </div>
        </section>
        <section id="skills" className="section shell">
          <SectionHeading number="02" label="TECHNICAL SKILLS" title="The tools behind the work.">
            Technologies and practices demonstrated in my public projects.
          </SectionHeading>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-glyph mono" aria-hidden="true">
                  {['{ / }', '[ ≡ ]', '< + >'][index]}
                </span>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="section shell experience-grid">
          <SectionHeading
            number="03"
            label="PROFESSIONAL EXPERIENCE"
            title="The story behind the work."
          />
          <div className="experience-content">
            {experience.length ? (
              experience.map((item) => (
                <article className="experience-entry" key={`${item.company}-${item.role}`}>
                  <p className="mono">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  <p>{item.description}</p>
                  <a className="text-link" href={item.source}>
                    Background
                    <ExternalIcon className="size-4" />
                  </a>
                </article>
              ))
            ) : (
              <>
                <span className="subtle-label">RÉSUMÉ COMING SOON</span>
                <h3>A fuller picture, soon.</h3>
                <p>
                  I’ll be adding my résumé here. For now, my public projects offer a look at how I
                  approach AI and data engineering.
                </p>
                <a className="text-link" href="#projects">
                  Explore the projects
                  <ArrowIcon className="size-4" />
                </a>
              </>
            )}
          </div>
        </section>
        <Projects />
        <section id="contact" className="section shell contact-section">
          <p className="eyebrow">
            <span>05</span> / GET IN TOUCH
          </p>
          <div className="contact-grid">
            <div>
              <h2>
                Good systems start
                <br />
                with a <span>conversation.</span>
              </h2>
              <p>
                Have an AI engineering opportunity or a project in mind?
                <br className="desktop-break" /> I’d love to hear about it.
              </p>
            </div>
            <a
              className="contact-arrow"
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
            >
              <ExternalIcon />
            </a>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <MailIcon className="size-5" />
              {profile.email}
              <ExternalIcon className="size-4" />
            </a>
            <a href={profile.github}>
              <GitHubIcon className="size-5" />
              GitHub
              <ExternalIcon className="size-4" />
            </a>
          </div>
        </section>
      </main>
      <footer className="shell site-footer">
        <a href="#top" className="brand-mark" aria-label="Back to top">
          tb<span>.</span>
        </a>
        <p>© {profile.name}</p>
        <span className="footer-note">Built with intention. Shared in the open.</span>
        <a href="#top" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </>
  )
}
