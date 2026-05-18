import { useState } from 'react';
import { Calendar } from 'lucide-react';

const placeholder = '/placeholder.jpg';
const f = "'Roboto', ui-sans-serif, sans-serif";

const PdfIcon = ({ size = 47 }) => (
  <svg width={size} viewBox="0 0 47 44.9" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
    <style>{`.pi1{fill:none;stroke:#FFF;stroke-width:2;stroke-miterlimit:10;}.pi2{fill:none;stroke:#4DBEEC;stroke-width:2;stroke-miterlimit:10;}.pi3{fill:#FFF;}`}</style>
    <polyline points="40.6,19.5 40.6,8.8 33.4,2 7.2,2 7.2,19.7" className="pi1" />
    <polyline points="7.2,37.2 7.2,43.9 40.6,43.9 40.6,37.1" className="pi1" />
    <polyline points="34,2 34,9 41,9" className="pi1" />
    <rect x="1.3" y="19.6" width="44.7" height="17.5" className="pi2" />
    <text transform="matrix(1 0 0 1 12.4785 32.002)" style={{ fill: '#fff', fontFamily: 'sans-serif', fontWeight: 700, fontSize: '12px' }}>PDF</text>
  </svg>
);

export const MagazineDownloadCard = ({ title = 'MC aktiv 1/2026', description = 'Focus: Specialised systems for tunneling and mining – Proven, safe, economical', date = 'Apr 13, 2026', image = placeholder, href = '#' }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'row', width: '100%', minHeight: '200px', textDecoration: 'none' }}>
      <div style={{ width: '33.333%', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,93,154,0.82)', opacity: hovered ? 1 : 0, transition: 'opacity 200ms ease-in-out' }}>
          <div style={{ transform: hovered ? 'scale(1)' : 'scale(1.25)', transition: 'transform 200ms ease-in-out' }}>
            <PdfIcon size={47} />
          </div>
        </div>
      </div>
      <div style={{ width: '66.666%', backgroundColor: '#f7f7f7', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
        <span style={{ fontFamily: f, fontSize: '14px', color: '#005D9A' }}>{title}</span>
        <p style={{ margin: 0, fontFamily: f, fontSize: '20px', color: '#4c4c4c', lineHeight: '28px' }}>{description}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={16} color="#005D9A" strokeWidth={1.5} />
          <span style={{ fontFamily: f, fontSize: '13px', color: '#9c9c9c' }}>{date}</span>
        </div>
      </div>
    </a>
  );
};

export const DocumentDownloadRow = ({ type = 'Brochure', title = 'Brochure Intensive Compactor', href = '#' }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} download target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', textDecoration: 'none', overflow: 'hidden', backgroundColor: '#005D9A' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', color: '#ffffff' }}>
        <PdfIcon size={50} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontFamily: f, fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>{type}</span>
          <span style={{ fontFamily: f, fontSize: '15px', color: '#ffffff' }}>{title}</span>
        </div>
      </div>
      <div style={{ width: '80px', alignSelf: 'stretch', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', backgroundColor: hovered ? '#002D5A' : 'rgba(0,45,90,0.5)', transition: 'background-color 250ms ease-in-out' }}>
        <svg width="14" viewBox="0 0 14.1 13.3" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', transform: hovered ? 'translateY(4px)' : 'translateY(0)', transition: 'transform 300ms ease-in-out' }}>
          <path d="M14,6h-4V0H4v6H0l7,7L14,6z" fill="#FFFFFF" />
        </svg>
        <span style={{ display: 'block', width: '16px', height: '2px', backgroundColor: '#ffffff' }} />
      </div>
    </a>
  );
};
