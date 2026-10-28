import { Navigate, Route, Routes } from 'react-router-dom'
import { projects } from './data/projects'
import { ProjectPage } from './pages/ProjectPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${projects[0].slug}`} replace />} />
      <Route path="/:slug" element={<ProjectPage />} />
      <Route path="*" element={<Navigate to={`/${projects[0].slug}`} replace />} />
    </Routes>
  )
}
