export type Project = {
  slug: string
  title: string
  brandLine: string
  summary: string
  role: string
  stack: string[]
  highlights: string[]
  github?: string
  accent: string
  visual: 'grid' | 'stream' | 'wave' | 'fret'
}

export const projects: Project[] = [
  {
    slug: 'task-distributor',
    title: 'Task Distributor',
    brandLine: 'Joey Peterson',
    summary:
      'A scheduler for parallel numerical work: region-aware task queues, WebSocket workers, and live heat-map visualization of distributed compute.',
    role: 'Systems · Distributed compute',
    stack: ['Python', 'NumPy', 'WebSockets', 'Matplotlib'],
    highlights: [
      'Dependency graph over a tiled simulation grid so regions only run when neighbors are ready',
      'Worker registration and task fan-out over WebSockets',
      'Client visualizer that stitches epochs into an animated heat field',
    ],
    github: 'https://github.com/joeypeterson15/distributed-task-manager',
    accent: '#0f6e56',
    visual: 'grid',
  },
  {
    slug: 'stream-processor',
    title: 'Stream Processor Engine',
    brandLine: 'Joey Peterson',
    summary:
      'Event-driven microservices that fan out click and order events to Dockerized handlers, write aggregated state to a shared store, and stream updates to a live dashboard.',
    role: 'Backend · Streaming systems',
    stack: ['Python', 'FastAPI', 'Docker', 'React', 'WebSockets'],
    highlights: [
      'Engine fans out typed events to isolated handler containers',
      'Supervisor reconciles missing or exited handler containers via Docker',
      'Handlers write keyed aggregates; a broadcaster pushes full state over WebSocket',
    ],
    github: 'https://github.com/joeypeterson15/stream-processor-engine',
    accent: '#1d4e89',
    visual: 'stream',
  },
  {
    slug: 'dual-osc-synth',
    title: 'Dual Osc Synth',
    brandLine: 'Joey Peterson',
    summary:
      'A two-oscillator Audio Unit / VST3 plugin for Logic and other DAWs — per-oscillator filters and ADSR, LFO modulation, and 16-voice polyphony built with JUCE.',
    role: 'Audio · Real-time DSP',
    stack: ['C++', 'JUCE', 'CMake', 'AU / VST3'],
    highlights: [
      'Triangle / saw oscillators with independent low-pass cutoffs',
      'Per-oscillator ADSR envelopes and bipolar / unipolar LFO routing',
      '16-voice polyphonic voice architecture for DAW use',
    ],
    accent: '#c45c26',
    visual: 'wave',
  },
  {
    slug: 'chord-detector',
    title: 'Guitar Chord Detector',
    brandLine: 'Joey Peterson',
    summary:
      'Computer vision for the fretboard: custom annotated chord photos, SSD / Faster R-CNN training, and detection of finger positions, chord shapes, and fretboard regions.',
    role: 'ML · Computer vision',
    stack: ['PyTorch', 'SSD', 'Faster R-CNN', 'Albumentations'],
    highlights: [
      'Custom dataset with finger, chord-shape, and fretboard boxes',
      'Multi-class chord recognition (Amin, Cmaj, Gmaj, Dmaj, Emaj, and more)',
      'Training and inference pipelines for SSD300-style detectors',
    ],
    github: 'https://github.com/joeypeterson15/ssd_chord_detector',
    accent: '#6b2d5c',
    visual: 'fret',
  },
]

export function projectIndex(slug: string) {
  return projects.findIndex((p) => p.slug === slug)
}

export function adjacent(slug: string) {
  const i = projectIndex(slug)
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  }
}
