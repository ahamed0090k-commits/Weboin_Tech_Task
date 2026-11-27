import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { HERO_STATS } from '../../data/agencyData';
import './Hero.css';

function StatCounter({ target, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return undefined;
    }

    let frameId;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return (
    <div className="hero__stat">
      <div className="hero__stat-value">
        <span>{count}</span>
        <span className="hero__stat-suffix">{suffix}</span>
      </div>
      <div className="hero__stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    setParallax({
      x: Math.round(relX * 22 * 10) / 10,
      y: Math.round(relY * 22 * 10) / 10,
    });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Atmospheric Abstract Background & Geometric Elements */}
      <div className="hero__backdrop" aria-hidden="true">
        <div
          className="hero__glow hero__glow--primary"
          style={{ transform: `translate3d(${parallax.x * -0.8}px, ${parallax.y * -0.8}px, 0)` }}
        />
        <div
          className="hero__glow hero__glow--secondary"
          style={{ transform: `translate3d(${parallax.x * 0.6}px, ${parallax.y * 0.6}px, 0)` }}
        />
        <div className="hero__grid" />
        <div
          className="hero__orbit-wrap"
          style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
        >
          <div className="hero__orbit">
            <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="220"
                cy="220"
                r="204"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeDasharray="6 10"
              />
              <circle cx="220" cy="220" r="144" stroke="rgba(184, 255, 59, 0.22)" />
              <circle cx="220" cy="16" r="5" fill="#B8FF3B" />
              <circle cx="220" cy="16" r="11" stroke="rgba(184, 255, 59, 0.35)" />
              <rect
                x="185"
                y="185"
                width="70"
                height="70"
                rx="16"
                stroke="rgba(255, 255, 255, 0.14)"
                transform="rotate(45 220 220)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__label-row hero__stagger hero__stagger--1">
            <span className="hero__label">
              <Sparkles size={14} className="hero__label-icon" aria-hidden="true" />
              CREATIVE DIGITAL AGENCY
            </span>
            <span className="hero__tagline-pill">
              We Create Digital Experiences That Inspire.
            </span>
          </div>

          <h1 className="hero__heading hero__stagger hero__stagger--2">
            WE BUILD DIGITAL{' '}
            <span className="hero__heading-accent">
              EXPERIENCES
              <svg
                className="hero__heading-underline"
                viewBox="0 0 280 14"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 10.5C72 3.5 198 2.5 277 9.5"
                  stroke="#B8FF3B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            THAT MATTER.
          </h1>

          <p className="hero__description hero__stagger hero__stagger--3">
            We transform bold ideas into meaningful digital experiences that help businesses
            stand out and grow.
          </p>

          <div className="hero__actions hero__stagger hero__stagger--4">
            <a href="#portfolio" className="btn btn--primary">
              Explore Our Work
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--secondary">
              Let&apos;s Talk
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__bottom-row">
          <div className="hero__stats hero__stagger hero__stagger--5" aria-label="Agency Statistics">
            {HERO_STATS.map((stat) => (
              <StatCounter
                key={stat.id}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>

          <a href="#services" className="hero__scroll-cue" aria-label="Scroll to Services">
            <span className="hero__scroll-track" aria-hidden="true">
              <span className="hero__scroll-dot" />
            </span>
            <span className="hero__scroll-text">Scroll</span>
          </a>
        </div>
      </div>
    </section>
  );
}
