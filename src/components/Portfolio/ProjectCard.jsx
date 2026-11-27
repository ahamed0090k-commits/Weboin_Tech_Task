import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onSelect, isVisible = true, delayMs = 0 }) {
  const { title, category, year, image } = project;

  return (
    <article
      className={`project-card reveal ${isVisible ? 'reveal--visible' : ''}`}
      style={{ '--reveal-delay': `${delayMs}ms` }}
    >
      <button
        type="button"
        className="project-card__trigger"
        onClick={() => onSelect(project)}
        aria-label={`View details for ${title} (${category})`}
      >
        <div className="project-card__media">
          <img
            src={image}
            alt={`${title} — ${category} showcase`}
            className="project-card__image"
            loading="lazy"
          />
          <div className="project-card__overlay" aria-hidden="true">
            <span className="project-card__view-pill">
              View Case Study
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>

        <div className="project-card__content">
          <div className="project-card__meta">
            <span className="project-card__category">{category}</span>
            <span className="project-card__year">{year}</span>
          </div>
          <div className="project-card__title-row">
            <h3 className="project-card__title">{title}</h3>
            <span className="project-card__arrow" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
