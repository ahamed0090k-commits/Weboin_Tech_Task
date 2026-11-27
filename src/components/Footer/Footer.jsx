import { ArrowUp, Dribbble, Github, Instagram, Linkedin } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '../../data/agencyData';
import Logo from '../common/Logo';
import './Footer.css';

const SOCIAL_LINKS = [
  { label: 'Dribbble', href: '#portfolio', icon: Dribbble },
  { label: 'LinkedIn', href: '#contact', icon: Linkedin },
  { label: 'GitHub', href: '#portfolio', icon: Github },
  { label: 'Instagram', href: '#home', icon: Instagram },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p className="footer__tagline">We Create Digital Experiences That Inspire.</p>
            <p className="footer__bio">
              PIXORA is a creative digital agency crafting high-impact interfaces, brand
              systems, and web platforms for ambitious teams.
            </p>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Navigation</h3>
            <ul className="footer__list">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Services</h3>
            <ul className="footer__list">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="footer__link">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Connect</h3>
            <div className="footer__socials">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-btn"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a href="#home" className="footer__back-top">
              Back to top
              <ArrowUp size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} PIXORA Creative Digital Agency. All rights reserved.
          </p>
          <p className="footer__credit">Crafted with React.js &amp; Vite</p>
        </div>
      </div>
    </footer>
  );
}
