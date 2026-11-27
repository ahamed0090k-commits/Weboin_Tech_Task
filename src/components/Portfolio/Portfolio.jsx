import { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../../data/agencyData';
import useScrollReveal from '../../hooks/useScrollReveal';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Portfolio.css';

const FILTER_CATEGORIES = [
  'All',
  ...PORTFOLIO_PROJECTS.map((project) => project.category),
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sectionRef, isVisible] = useScrollReveal();

  const visibleProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section" ref={sectionRef}>
      <div className="container">
        <div className={`portfolio__top reveal ${isVisible ? 'reveal--visible' : ''}`}>
          <SectionHeader
            label="OUR SELECTED WORK"
            heading="TURNING IDEAS INTO DIGITAL REALITY."
            description="Explore some of our creative projects and digital experiences."
          />

          <div className="portfolio__filters" role="group" aria-label="Filter projects by category">
            {FILTER_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  className={`portfolio__filter-btn ${
                    isActive ? 'portfolio__filter-btn--active' : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="portfolio-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              isVisible={isVisible}
              delayMs={index * 95}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
