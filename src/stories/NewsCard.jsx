import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from './Button';

const placeholder = '/placeholder.jpg';
const f = "'Roboto', ui-sans-serif, sans-serif";
const clamp = (n) => ({ display: '-webkit-box', WebkitLineClamp: n, WebkitBoxOrient: 'vertical', overflow: 'hidden' });

export const NewsCard = ({ badge = 'Global News', title = 'MC-Bauchemie Australia opens new production facility', body = 'On 19 April 2026, MC-Bauchemie Australia officially opened its new production facility in Adelaide, South Australia.', date = '13 May 2026', image = placeholder, href = '#' }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', backgroundColor: '#f7f7f7', cursor: 'pointer', height: '100%' }}>
      <div style={{ aspectRatio: '3 / 2', overflow: 'hidden', flexShrink: 0 }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 500ms ease-in-out' }} />
      </div>
      <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        {badge && <span style={{ fontFamily: f, fontSize: '14px', color: '#005d9a' }}>{badge}</span>}
        <p style={{ fontFamily: f, fontSize: '20px', color: '#282828', lineHeight: '26px', margin: 0, ...clamp(3) }}>{title}</p>
        <p style={{ fontFamily: f, fontSize: '15px', color: '#4c4c4c', lineHeight: '24px', margin: 0, flex: 1, ...clamp(4) }}>{body}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto', paddingTop: '8px' }}>
          <Calendar size={16} color="#005D9A" strokeWidth={1.5} />
          <span style={{ fontFamily: f, fontSize: '13px', color: '#9c9c9c' }}>{date}</span>
        </div>
      </div>
    </a>
  );
};

export const ContactCard = ({ heading = 'Press inquiries', lines = ['Am Kruppwald 1-8', '46238 Bottrop', 'Germany', 'Phone Number +49 2041 101 0', 'Fax +49 2041 6 40 17'], email = 'press@mc-bauchemie.com', buttonLabel = 'Contact Us', href = '#' }) => (
  <div style={{ backgroundColor: '#f7f7f7', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px', height: '100%', boxSizing: 'border-box' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <p style={{ fontFamily: f, fontSize: '17px', fontWeight: 700, color: '#282828', lineHeight: '26px', margin: '0 0 10px' }}>{heading}</p>
      {lines.map((line) => <p key={line} style={{ fontFamily: f, fontSize: '14px', color: '#9c9c9c', lineHeight: '22px', margin: 0 }}>{line}</p>)}
      <a href={`mailto:${email}`} style={{ fontFamily: f, fontSize: '14px', color: '#005d9a', lineHeight: '22px', marginTop: '4px' }}>{email}</a>
    </div>
    <Button variant="ghost" label={buttonLabel} href={href} />
  </div>
);
