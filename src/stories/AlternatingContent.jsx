import { useState } from 'react';
import { Button } from './Button';

const placeholder = '/placeholder.jpg';
const f = "'Roboto', ui-sans-serif, sans-serif";

const responsiveCSS = `
  .alt-block { display: flex; flex-direction: column; }
  .alt-block__image { width: 100%; aspect-ratio: 4/3; overflow: hidden; }
  .alt-block__image img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .alt-block__body { padding: 40px 24px; }

  @media (min-width: 1024px) {
    .alt-block { position: relative; min-height: 40vw; flex-direction: column; }
    .alt-block__image {
      position: absolute; top: 0; width: 41.666%; height: 100%;
      aspect-ratio: unset;
    }
    .alt-block__image--right { right: 0; border-left: 16px solid #ffffff; }
    .alt-block__image--left  { left: 0;  border-right: 16px solid #ffffff; }
    .alt-block__body {
      max-width: 1280px; margin: 0 auto; padding: 48px 32px;
      min-height: 40vw; display: flex; flex-direction: column; justify-content: center;
    }
    .alt-block__text--right { width: 50%; margin-right: auto; padding-right: 48px; }
    .alt-block__text--left  { width: 50%; margin-left: auto;  padding-left: 48px;  }
  }
`;

const getBg = (variant, idx) => {
  if (variant === 'blue') return { bg: '#002D5A', subtext: 'rgba(255,255,255,0.8)', headingColor: '#ffffff' };
  return { bg: idx % 2 === 0 ? '#F7F7F7' : '#E9EFEF', subtext: '#4c4c4c', headingColor: '#005D9A' };
};

let cssInjected = false;
const ensureCSS = () => {
  if (cssInjected) return;
  const style = document.createElement('style');
  style.textContent = responsiveCSS;
  document.head.appendChild(style);
  cssInjected = true;
};

export const AlternatingContentBlock = ({
  idx = 0,
  variant = 'light',
  image = placeholder,
  eyebrow = '',
  heading = 'Our values',
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  buttonLabel = '',
  buttonHref = '#',
}) => {
  useState(() => { ensureCSS(); });
  const [hovered, setHovered] = useState(false);
  const imageRight = idx % 2 === 0;
  const { bg, subtext, headingColor } = getBg(variant, idx);

  return (
    <div
      className="alt-block"
      style={{
        width: '100%',
        backgroundColor: bg,
        borderBottom: '16px solid #ffffff',
        ...(idx === 0 ? { borderTop: '16px solid #ffffff' } : {}),
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <div className={`alt-block__image ${imageRight ? 'alt-block__image--right' : 'alt-block__image--left'}`}>
        <img src={image} alt="" />
      </div>

      {/* Text */}
      <div className="alt-block__body">
        <div className={imageRight ? 'alt-block__text--right' : 'alt-block__text--left'}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {eyebrow && (
            <p style={{ margin: 0, fontFamily: f, fontSize: '14px', color: subtext, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {eyebrow}
            </p>
          )}
          <h3 style={{ margin: 0, fontFamily: f, fontSize: '29px', fontWeight: 400, lineHeight: 1.2, color: headingColor }}>
            {heading}
          </h3>
          <p style={{ margin: 0, fontFamily: f, fontSize: '17px', lineHeight: '28px', color: subtext }}>
            {body}
          </p>
          {buttonLabel && variant !== 'blue' && (
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ marginTop: '8px' }}>
              <Button variant="solid" label={buttonLabel} href={buttonHref} hovered={hovered} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const AlternatingContentSection = ({ blocks = [] }) => (
  <div style={{ width: '100%' }}>
    {blocks.map((block, i) => (
      <AlternatingContentBlock key={i} idx={i} {...block} />
    ))}
  </div>
);
