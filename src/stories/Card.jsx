import { useState } from 'react';
import { Button } from './Button';

const placeholder = '/placeholder.jpg';
const f = "'Roboto', ui-sans-serif, sans-serif";
const clamp = (n) => ({ display: '-webkit-box', WebkitLineClamp: n, WebkitBoxOrient: 'vertical', overflow: 'hidden' });

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#9c9c9c" />
  </svg>
);

export const Card = ({ badge = false, badgeText = 'Pressemitteilungen', title = 'Die erste klimafreundliche Reaktivabdichtung', body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae.', location = false, locationText = 'Frankfurt', image = placeholder }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ width: '100%', aspectRatio: '53 / 60', display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer' }}>
      <div style={{ flex: 1, minHeight: 0, backgroundColor: '#000', overflow: 'hidden' }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 500ms ease-in-out' }} />
      </div>
      <div style={{ flex: 1, minHeight: 0, backgroundColor: '#f8f8f8', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden' }}>
        {badge && <div style={{ fontFamily: f, fontSize: '14px', color: '#005d9a', flexShrink: 0 }}>{badgeText}</div>}
        <div style={{ fontFamily: f, fontSize: '22px', color: '#282828', lineHeight: '26px', ...clamp(3) }}>{title}</div>
        <div style={{ fontFamily: f, fontSize: '17px', color: '#000', lineHeight: '28px', ...clamp(3) }}>{body}</div>
        {location && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto', flexShrink: 0 }}>
            <LocationIcon />
            <span style={{ fontFamily: f, fontSize: '17px', color: '#9c9c9c', lineHeight: '28px' }}>{locationText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const CardWithButton = ({ badge = false, badgeText = 'Global News', title = 'MC-Bauchemie Australia opens new production facility', body = 'On 19 April 2026, MC-Bauchemie Australia officially opened its new production facility in Adelaide, South Australia.', image = placeholder, buttonLabel = 'More', href = '#' }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ width: '100%', aspectRatio: '53 / 60', display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none', cursor: 'pointer' }}>
      <div style={{ flex: 1, minHeight: 0, backgroundColor: '#000', overflow: 'hidden' }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 500ms ease-in-out' }} />
      </div>
      <div style={{ flex: 1, minHeight: 0, backgroundColor: '#f8f8f8', padding: '24px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
          {badge && <div style={{ fontFamily: f, fontSize: '14px', color: '#005d9a', flexShrink: 0 }}>{badgeText}</div>}
          <div style={{ fontFamily: f, fontSize: '22px', color: '#282828', lineHeight: '26px', ...clamp(3) }}>{title}</div>
          <div style={{ fontFamily: f, fontSize: '17px', color: '#000', lineHeight: '28px', ...clamp(3) }}>{body}</div>
        </div>
        <div style={{ paddingTop: '16px', flexShrink: 0 }}>
          <Button label={buttonLabel} hovered={hovered} />
        </div>
      </div>
    </a>
  );
};
