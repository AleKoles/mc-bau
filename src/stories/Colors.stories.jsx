import { colors, fontFamily } from '../tokens';

export default {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
  },
};

const isDark = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
};

const SWATCH_WIDTH = 160;

const Swatch = ({ name, hex }) => (
  <div
    style={{
      width: SWATCH_WIDTH,
      flexShrink: 0,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(20,20,43,0.08)',
      background: '#fff',
    }}
  >
    <div
      style={{
        backgroundColor: hex,
        height: '100px',
        border: hex.toUpperCase() === '#FFFFFF' ? '1px solid #E9E9E9' : 'none',
        borderBottom: 'none',
      }}
    />
    <div style={{ padding: '10px 14px' }}>
      <div
        style={{
          fontFamily: fontFamily.ui,
          fontSize: '13px',
          fontWeight: 700,
          color: colors.neutral.n800,
          marginBottom: '2px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily: fontFamily.ui,
          fontSize: '11px',
          fontWeight: 500,
          color: colors.neutral.n600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {hex.toUpperCase()}
      </div>
    </div>
  </div>
);

const SwatchGroup = ({ title, swatches }) => (
  <div style={{ marginBottom: '48px' }}>
    <h2
      style={{
        fontFamily: fontFamily.ui,
        fontSize: '22px',
        fontWeight: 700,
        color: colors.neutral.n800,
        marginBottom: '20px',
        paddingBottom: '10px',
        borderBottom: `2px solid ${colors.primary.blue1}`,
      }}
    >
      {title}
    </h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {swatches.map(({ name, hex }) => (
        <Swatch key={name} name={name} hex={hex} />
      ))}
    </div>
  </div>
);

export const NewColors = () => (
  <div style={{ maxWidth: '1000px' }}>
    <SwatchGroup
      title="New Colors"
      swatches={[
        { name: 'Blue 1',   hex: '#009EE3' },
        { name: 'Blue 2',   hex: '#005D9A' },
        { name: 'Blue 3',   hex: '#002D5A' },
        { name: 'Orange',   hex: '#EE7100' },
        { name: 'Gray 1',   hex: '#F7F7F7' },
        { name: 'Gray 2',   hex: '#E3E3E3' },
        { name: 'Gray 3',   hex: '#9C9C9C' },
        { name: 'Gray 4',   hex: '#4C4C4C' },
        { name: 'GrayBlue', hex: '#E9EFEF' },
        { name: 'Black',    hex: '#000000' },
        { name: 'White',    hex: '#FFFFFF' },
      ]}
    />
  </div>
);

export const OldBlues = () => (
  <div style={{ maxWidth: '1000px' }}>
    <SwatchGroup
      title="Old Blues"
      swatches={[
        { name: 'Blue 100', hex: '#06AEEF' },
        { name: 'Blue 200', hex: '#009EE3' },
        { name: 'Blue 300', hex: '#019EE3' },
        { name: 'Blue 400', hex: '#3A9DDD' },
        { name: 'Blue 500', hex: '#005E9A' },
        { name: 'Blue 600', hex: '#002D5A' },
        { name: 'Blue 700', hex: '#012D5A' },
        { name: 'Blue 800', hex: '#012B56' },
      ]}
    />
  </div>
);

export const OldGrays = () => (
  <div style={{ maxWidth: '1000px' }}>
    <SwatchGroup
      title="Old Grays"
      swatches={[
        { name: 'Gray 100', hex: '#F7F7F7' },
        { name: 'Gray 200', hex: '#F0F0F0' },
        { name: 'Gray 300', hex: '#E9E9E9' },
        { name: 'Gray 400', hex: '#DCDCDC' },
        { name: 'Gray 500', hex: '#9C9C9C' },
        { name: 'Gray 600', hex: '#97999C' },
        { name: 'GrayBlue', hex: '#E9EFEF' },
      ]}
    />
  </div>
);
