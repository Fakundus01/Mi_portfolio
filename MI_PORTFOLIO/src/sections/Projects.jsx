import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../components/common/SectionTitle'
import Section from '../components/layout/Section'
import ProjectsFilter from '../components/projects/ProjectsFilter'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import projectsData from '../data/projects.json'

export default function Projects() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const featured = useMemo(
    () =>
      projectsData.featuredIds
        .map((id) => projectsData.projects.find((project) => project.id === id))
        .filter(Boolean)
        .slice(0, 3),
    [],
  )

  const featuredIds = useMemo(() => new Set(featured.map((project) => project.id)), [featured])

  const allProjects = useMemo(
    () => projectsData.projects.filter((project) => !featuredIds.has(project.id)),
    [featuredIds],
  )

  const categories = useMemo(
    () => [...new Set(projectsData.projects.map((project) => project.category))],
    [],
  )

  const filteredProjects =
    activeCategory === 'all' ? allProjects : allProjects.filter((project) => project.category === activeCategory)

  return (
    <Section id="projects">
      <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />

      <h3 className="mb-4 text-xl font-semibold">{t('projects.featured')}</h3>
      <ProjectsGrid projects={featured} />

      <div className="mt-12">
        <h3 className="mb-4 text-xl font-semibold">{t('projects.all')}</h3>
        <ProjectsFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
        <ProjectsGrid projects={filteredProjects} />
      </div>
    </Section>
  )
}