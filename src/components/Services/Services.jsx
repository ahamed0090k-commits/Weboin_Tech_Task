import { SERVICES } from '../../data/agencyData';
import useScrollReveal from '../../hooks/useScrollReveal';
import SectionHeader from '../common/SectionHeader';
import ServiceCard from './ServiceCard';
import './Services.css';

export default function Services() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="services" className="section section--alt" ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'reveal--visible' : ''}`}>
          <SectionHeader
            label="WHAT WE DO"
            heading="CREATIVE SOLUTIONS FOR MODERN BUSINESSES."
            description="We combine creativity, strategy, and technology to deliver digital solutions that make a difference."
          />
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
              highlights={service.highlights}
              isVisible={isVisible}
              delayMs={index * 95}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
