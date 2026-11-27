import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/agencyData';
import Logo from '../common/Logo';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for sticky glass backdrop, active link, and top progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 24);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);

      const scrollMarker = scrollTop + 140;
      for (let i = NAV_LINKS.length - 1; i >= 0; i -= 1) {
        const id = NAV_LINKS[i].href.replace('#', '');
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMarker) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape or resize to desktop
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div
        className="navbar__progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      <div className="container navbar__inner">
        <Logo onClick={handleNavClick} />

        <nav className="navbar__nav" aria-label="Primary Navigation">
          <ul className="navbar__list">
            {NAV_LINKS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn--primary btn--sm navbar__cta">
            Get Started
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="navbar__mobile-list">
            {NAV_LINKS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                    onClick={handleNavClick}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="btn btn--primary navbar__mobile-cta"
            onClick={handleNavClick}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Get Started
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
