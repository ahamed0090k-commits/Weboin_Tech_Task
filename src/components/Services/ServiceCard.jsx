import { useState } from 'react';
import { Code2, Layers, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';

const ICON_MAP = {
  Layers,
  Code2,
  Sparkles,
  TrendingUp,
};

export default function ServiceCard({
  number,
  title,
  description,
  icon,
  highlights,
  isVisible = true,
  delayMs = 0,
}) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const IconComponent = ICON_MAP[icon] || Sparkles;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: Math.round(event.clientX - rect.left),
      y: Math.round(event.clientY - rect.top),
    });
  };

  return (
    <article
      className={`service-card reveal ${isVisible ? 'reveal--visible' : ''}`}
      onMouseMove={handleMouseMove}
      style={{
        '--reveal-delay': `${delayMs}ms`,
        '--spot-x': `${spotlight.x}px`,
        '--spot-y': `${spotlight.y}px`,
      }}
    >
      <div className="service-card__spotlight" aria-hidden="true" />

      <div className="service-card__top">
        <div className="service-card__icon-wrap" aria-hidden="true">
          <IconComponent size={24} strokeWidth={1.9} />
        </div>
        <span className="service-card__index">{number}</span>
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
      </div>

      <div className="service-card__footer">
        <ul className="service-card__tags" aria-label={`${title} capabilities`}>
          {highlights.map((tag) => (
            <li key={tag} className="service-card__tag">
              {tag}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="service-card__link"
          aria-label={`Inquire about ${title}`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}
