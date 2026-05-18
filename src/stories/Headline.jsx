import { typography } from '../tokens';

const f = "'Roboto', ui-sans-serif, sans-serif";

export const MainHeadline = ({ title = 'References', text = '' }) => (
  <div style={{ width: '100%', padding: '32px 0' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <span style={{ display: 'block', width: '21px', height: '2px', backgroundColor: '#4C4C4C', flexShrink: 0 }} />
      <h2 style={{ margin: 0, fontFamily: f, fontSize: typography.desktop.h2.fontSize, fontWeight: 400, lineHeight: '26px', textTransform: 'uppercase', color: '#4C4C4C', letterSpacing: '0.02em' }}>
        {title}
      </h2>
      {text && <div style={{ fontFamily: f, fontSize: typography.desktop.paragraph.fontSize, fontWeight: 400, lineHeight: typography.desktop.paragraph.lineHeight, color: '#4C4C4C', marginBottom: '4px' }}>{text}</div>}
      <span style={{ display: 'block', width: '58%', height: '1px', backgroundColor: '#E3E3E3', flexShrink: 0 }} />
    </div>
  </div>
);

const SIZE = { h3: typography.desktop.h3.fontSize, h4: typography.desktop.h4.fontSize, h5: typography.desktop.h5.fontSize };
const COLORS = { dark: '#4C4C4C', blue3: '#002D5A', blue2: '#005D9A', blue1: '#009EE3', white: '#ffffff' };
const ALIGN = { left: 'left', center: 'center', right: 'right' };

export const SectionHeadline = ({ level = 'h3', title = 'MC-Pedia – Your glossary for construction chemistry terms and technologies', subtitle = '', color = 'dark', align = 'left' }) => {
  const Tag = level;
  return (
    <div style={{ width: '100%', textAlign: ALIGN[align] ?? 'left' }}>
      <Tag style={{ margin: 0, fontFamily: f, fontSize: SIZE[level] ?? SIZE.h3, fontWeight: 400, lineHeight: 1.2, color: COLORS[color] ?? '#4C4C4C' }}>
        {title}
        {subtitle && <><br />{subtitle}</>}
      </Tag>
    </div>
  );
};
