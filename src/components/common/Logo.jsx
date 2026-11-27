export default function Logo({ onClick }) {
  return (
    <a
      href="#home"
      className="pixora-logo"
      onClick={onClick}
      aria-label="PIXORA Home"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.3rem',
        letterSpacing: '0.08em',
        color: 'var(--text-primary)',
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="8"
          fill="#191920"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1.5"
        />
        <path
          d="M10 22V10H16.5C19.5376 10 22 12.0147 22 14.5C22 16.9853 19.5376 19 16.5 19H13.5"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="21" cy="21" r="2.75" fill="#B8FF3B" />
      </svg>
      <span>
        PIX<span style={{ color: 'var(--accent)' }}>ORA</span>
      </span>
    </a>
  );
}
