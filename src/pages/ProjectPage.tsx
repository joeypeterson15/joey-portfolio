import { Link, useParams, Navigate } from 'react-router-dom'
import { adjacent, projects } from '../data/projects'
import { ProjectVisual } from '../components/ProjectVisual'
import { Shell } from '../components/Shell'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <Navigate to={`/${projects[0].slug}`} replace />

  const { prev, next } = adjacent(project.slug)
  const index = projects.findIndex((p) => p.slug === project.slug)

  return (
    <Shell>
      <article
        className="project"
        style={{ ['--accent' as string]: project.accent }}
        key={project.slug}
      >
        <div className="project__stage">
          <ProjectVisual project={project} />
          <div className="project__copy">
            {/* <p className="project__brand">{project.brandLine}</p> */}
            <h1 className="project__title">{project.title}</h1>
            <p className="project__summary">{project.summary}</p>
            <div className="project__meta">
              <span className="project__role">{project.role}</span>
              <span className="project__count">
                {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
            </div>
            <div className="project__actions">
              {project.github ? (
                <a className="btn" href={project.github} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              ) : (
                <span className="btn btn--ghost">Private / local project</span>
              )}
              <Link className="btn btn--ghost" to={`/${next.slug}`}>
                Next project
              </Link>
            </div>
          </div>
        </div>

        <section className="project__detail">
          <div>
            <h2 className="project__h">What it does</h2>
            <ul className="project__list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="project__h">Stack</h2>
            <ul className="project__stack">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="project__pager">
          <Link className="pager" to={`/${prev.slug}`}>
            <span className="pager__dir">Previous</span>
            <span className="pager__title">{prev.title}</span>
          </Link>
          <Link className="pager pager--next" to={`/${next.slug}`}>
            <span className="pager__dir">Next</span>
            <span className="pager__title">{next.title}</span>
          </Link>
        </footer>
      </article>
    </Shell>
  )
}
