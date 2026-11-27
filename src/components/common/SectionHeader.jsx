import './SectionHeader.css';

export default function SectionHeader({ label, heading, description, align = 'left' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      <span className="section-header__label">
        <span className="section-header__dot" aria-hidden="true" />
        {label}
      </span>
      <h2 className="section-header__heading">{heading}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </header>
  );
}
