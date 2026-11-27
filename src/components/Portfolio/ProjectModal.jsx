import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal__backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close project preview"
        >
          <X size={20} />
        </button>

        <div className="project-modal__image-wrap">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-modal__image"
          />
        </div>

        <div className="project-modal__body">
          <div className="project-modal__meta">
            <span className="project-card__category">{project.category}</span>
            <span className="project-modal__client">
              {project.client} &bull; {project.year}
            </span>
          </div>

          <h3 id="project-modal-title" className="project-modal__title">
            {project.title}
          </h3>
          <p className="project-modal__summary">{project.summary}</p>

          <div className="project-modal__deliverables">
            {project.deliverables.map((item) => (
              <span key={item} className="service-card__tag">
                {item}
              </span>
            ))}
          </div>

          <a href="#contact" className="btn btn--primary btn--sm" onClick={onClose}>
            Start a Similar Project
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
