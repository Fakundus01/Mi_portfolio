import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import projectsData from '../data/projects.json'
import Section from '../components/layout/Section'
import SectionTitle from '../components/common/SectionTitle'
import ProjectsFilter from '../components/projects/ProjectsFilter'
import ProjectsGrid from '../components/projects/ProjectsGrid'

export default function Projects() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(
    () => [...new Set(projectsData.projects.map((project) => project.category))],
    [],
  )

  const featured = projectsData.featuredIds
    .map((id) => projectsData.projects.find((project) => project.id === id))
    .filter(Boolean)

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData.projects
      : projectsData.projects.filter((project) => project.category === activeCategory)

  return (
    <Section id="projects">
      <SectionTitle>{t('projects.title')}</SectionTitle>
      <h3 className="mb-3 text-xl font-semibold">{t('projects.featured')}</h3>
      <ProjectsGrid projects={featured} />
      <h3 className="mb-3 mt-10 text-xl font-semibold">{t('projects.all')}</h3>
      <ProjectsFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
      <ProjectsGrid projects={filteredProjects} />
    </Section>
  )
}