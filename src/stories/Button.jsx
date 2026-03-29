import { useState, useRef } from 'react';
import { Users, Settings, Headphones } from 'lucide-react';

const ICONS = {
  none: null,
  users: Users,
  settings: Settings,
  headphones: Headphones,
};

// Ghost button: border only, fills blue3 on hover
const GhostButton = ({ label, icon, href }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = ICONS[icon];

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '16px 32px',
        border: '1px solid #002D5A',
        fontSize: '14px',
        fontFamily: "'Roboto', ui-sans-serif, sans-serif",
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        backgroundColor: hovered ? '#002D5A' : 'transparent',
        color: hovered ? '#F7F7F7' : '#002D5A',
        transition: 'background-color 300ms, color 300ms',
      }}
    >
      {Icon && <Icon size={16} style={{ flexShrink: 0 }} />}
      {label}
    </a>
  );
};

// Solid button: blue3 bg, blue1 overlay slides in from top on hover
const SolidButton = ({ label, icon, href }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = ICONS[icon];

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '16px 32px',
        fontSize: '14px',
        fontFamily: "'Roboto', ui-sans-serif, sans-serif",
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        backgroundColor: '#002D5A',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Sliding overlay */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#009EE3',
          zIndex: 10,
          transform: hovered ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 300ms ease-in-out',
        }}
      />
      {/* Content above overlay */}
      <span
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {Icon && <Icon size={16} style={{ flexShrink: 0 }} />}
        {label}
      </span>
    </a>
  );
};

export const Button = ({ variant = 'solid', label = 'More', icon = 'none', href = '#' }) => {
  if (variant === 'ghost') {
    return <GhostButton label={label} icon={icon} href={href} />;
  }
  return <SolidButton label={label} icon={icon} href={href} />;
};
