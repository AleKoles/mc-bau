import { useState } from 'react';

export const Badge = ({ label = 'Concrete surfaces', selected = false, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', height: '26px', padding: '0 16px',
        borderRadius: '20px', fontSize: '12px', lineHeight: '26px',
        fontFamily: "'Roboto', ui-sans-serif, sans-serif", fontWeight: 400,
        whiteSpace: 'nowrap', userSelect: 'none',
        cursor: onClick ? 'pointer' : 'default',
        backgroundColor: selected || hovered ? '#009EE3' : '#002D5A',
        color: '#ffffff',
        transition: 'background-color 300ms ease-in-out',
      }}
    >
      {label}
    </span>
  );
};
