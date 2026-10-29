import { Link, NavLink } from 'react-router-dom'
import { projects } from '../data/projects'

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <header className="top">
        {/* <Link to="/" className="mark">
          Joey Peterson
        </Link> */}
        <div className="mark">
          Joey Peterson
        </div>
        <nav className="nav" aria-label="Projects">
          {projects.map((p, i) => (
            <NavLink
              key={p.slug}
              to={`/${p.slug}`}
              className={({ isActive }) => (isActive ? 'nav__link is-active' : 'nav__link')}
            >
              <span className="nav__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="nav__label">{shortTitle(p.title)}</span>
            </NavLink>
          ))}
        </nav>
        <a
          className="top__out"
          href="https://github.com/joeypeterson15"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </header>
      <main className="main">{children}</main>
    </div>
  )
}

function shortTitle(title: string) {
  if (title === 'Stream Processor Engine') return 'Stream Engine'
  if (title === 'Guitar Chord Detector') return 'Chord Detector'
  if (title === 'Dual Osc Synth') return 'Dual Osc'
  return title
}
