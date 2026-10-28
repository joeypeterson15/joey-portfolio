import type { Project } from '../data/projects'

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`visual visual--${project.visual}`}
      style={{ ['--accent' as string]: project.accent }}
      aria-hidden
    >
      {project.visual === 'grid' && (
        <svg className="visual__svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 12 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                className="visual__cell"
                x={40 + c * 60}
                y={40 + r * 55}
                width={48}
                height={42}
                rx={4}
                style={{ animationDelay: `${(r * 12 + c) * 0.04}s` }}
              />
            )),
          )}
        </svg>
      )}

      {project.visual === 'stream' && (
        <svg className="visual__svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              className="visual__stream"
              d={`M -40 ${90 + i * 70} C 160 ${40 + i * 70}, 320 ${160 + i * 50}, 480 ${80 + i * 70} S 720 ${140 + i * 40}, 860 ${100 + i * 60}`}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          ))}
          {[180, 400, 620].map((x, i) => (
            <circle key={x} className="visual__node" cx={x} cy={160 + i * 70} r={14} />
          ))}
        </svg>
      )}

      {project.visual === 'wave' && (
        <svg className="visual__svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              className="visual__wave"
              d={wavePath(i)}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      )}

      {project.visual === 'fret' && (
        <svg className="visual__svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`s-${i}`}
              className="visual__string"
              x1={80}
              y1={90 + i * 55}
              x2={720}
              y2={90 + i * 55}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`f-${i}`}
              className="visual__fret"
              x1={120 + i * 80}
              y1={70}
              x2={120 + i * 80}
              y2={400}
            />
          ))}
          {[
            [200, 145],
            [280, 200],
            [360, 255],
            [440, 200],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              className="visual__finger"
              cx={cx}
              cy={cy}
              r={18}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </svg>
      )}
    </div>
  )
}

function wavePath(seed: number) {
  const amp = 48 - seed * 8
  const mid = 220 + seed * 40
  let d = `M 0 ${mid}`
  for (let x = 0; x <= 800; x += 40) {
    const y = mid + Math.sin((x / 80 + seed) * Math.PI) * amp
    d += ` L ${x} ${y}`
  }
  return d
}
