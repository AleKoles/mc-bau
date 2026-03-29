import { typography, colors, fontFamily, platformFonts } from '../tokens';

const PLATFORM_LABELS = {
  macos:   '🍎 macOS — San Francisco',
  windows: '🪟 Windows — Segoe UI',
  android: '🤖 Android — Roboto',
};

const sampleText = 'Donec et odio pellentesque diam volutpat commodo.';
const sampleParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac. Posuere enim, mi pharetra neque proin dictum amet.';

export default {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
  },
  argTypes: {
    platform: {
      name: 'Platform (ui-sans-serif)',
      description: 'Simulates how ui-sans-serif resolves on each OS. Not a production font switch — for design preview only.',
      control: { type: 'radio' },
      options: ['macos', 'windows', 'android'],
      mapping: {
        macos:   'macos',
        windows: 'windows',
        android: 'android',
      },
      labels: {
        macos:   '🍎 macOS',
        windows: '🪟 Windows',
        android: '🤖 Android',
      },
    },
  },
  args: {
    platform: 'macos',
  },
};

// ── Internal components ────────────────────────────────────────────────────

const PlatformBadge = ({ platform }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 14px',
      background: colors.neutral.n200,
      borderRadius: '20px',
      fontFamily: fontFamily.ui,
      fontSize: '13px',
      color: colors.neutral.n600,
      marginBottom: '32px',
    }}
  >
    <span style={{ fontWeight: 600, color: colors.neutral.n800 }}>ui-sans-serif →</span>
    {PLATFORM_LABELS[platform]}
    <span
      style={{
        marginLeft: '6px',
        fontSize: '11px',
        background: colors.primary.blue1,
        color: '#fff',
        borderRadius: '4px',
        padding: '1px 6px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
    >
      {platform === 'macos' || platform === 'windows' ? 'simulated on your OS' : 'loaded'}
    </span>
  </div>
);

const SectionTitle = ({ children, font }) => (
  <h2
    style={{
      fontFamily: font,
      fontSize: '22px',
      fontWeight: 700,
      color: colors.primary.blue3,
      margin: '48px 0 8px',
      borderBottom: `2px solid ${colors.primary.blue1}`,
      paddingBottom: '12px',
    }}
  >
    {children}
  </h2>
);

const TypeRow = ({ label, size, style, font, text, isLast }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: '32px',
      alignItems: 'baseline',
      padding: '20px 0',
      borderBottom: isLast ? 'none' : `1px solid ${colors.oldGrays.gray300}`,
    }}
  >
    <div>
      <div
        style={{
          fontFamily: fontFamily.ui,
          fontSize: '13px',
          fontWeight: 700,
          color: colors.neutral.n800,
          marginBottom: '4px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: fontFamily.ui,
          fontSize: '12px',
          color: colors.primary.blue1,
        }}
      >
        {size}
      </div>
    </div>
    <div style={{ ...style, fontFamily: font, color: colors.primary.gray4 }}>
      {text || sampleText}
    </div>
  </div>
);

// ── Stories ────────────────────────────────────────────────────────────────

export const Desktop = ({ platform }) => {
  const font = platformFonts[platform];
  return (
    <div style={{ maxWidth: '960px' }}>
      <PlatformBadge platform={platform} />
      <SectionTitle font={font}>Desktop Typography</SectionTitle>
      <TypeRow label="Heading H1"            size="48px · weight 400" style={typography.desktop.h1}        font={font} />
      <TypeRow label="Heading H2"            size="34px · weight 400" style={typography.desktop.h2}        font={font} />
      <TypeRow label="Heading H3"            size="29px · weight 400" style={typography.desktop.h3}        font={font} />
      <TypeRow label="Heading H4"            size="24px · weight 400" style={typography.desktop.h4}        font={font} />
      <TypeRow label="Heading H5"            size="22px · weight 400" style={typography.desktop.h5}        font={font} />
      <TypeRow label="Subtitle & Card Title" size="22px · lh 26px"    style={typography.desktop.subtitle}  font={font} text={sampleParagraph} />
      <TypeRow label="Paragraph"             size="17px · lh 28px"    style={typography.desktop.paragraph} font={font} text={sampleParagraph} />
      <TypeRow label="Tags & Descriptions"   size="14px"              style={typography.desktop.tags}      font={font} text={sampleParagraph} isLast />
    </div>
  );
};

export const Mobile = ({ platform }) => {
  const font = platformFonts[platform];
  return (
    <div style={{ maxWidth: '960px' }}>
      <PlatformBadge platform={platform} />
      <SectionTitle font={font}>Mobile Typography</SectionTitle>
      <TypeRow label="Heading H1"            size="30px · weight 400" style={typography.mobile.h1}        font={font} />
      <TypeRow label="Heading H2"            size="26px · weight 400" style={typography.mobile.h2}        font={font} />
      <TypeRow label="Heading H3"            size="24px · weight 400" style={typography.mobile.h3}        font={font} />
      <TypeRow label="Heading H4"            size="22px · weight 400" style={typography.mobile.h4}        font={font} />
      <TypeRow label="Heading H5"            size="20px · weight 400" style={typography.mobile.h5}        font={font} />
      <TypeRow label="Subtitle & Card Title" size="20px · lh 24px"    style={typography.mobile.subtitle}  font={font} text={sampleParagraph} />
      <TypeRow label="Paragraph"             size="16px · lh 22px"    style={typography.mobile.paragraph} font={font} text={sampleParagraph} />
      <TypeRow label="Tags & Descriptions"   size="14px"              style={typography.mobile.tags}      font={font} text={sampleParagraph} isLast />
    </div>
  );
};

export const AllStyles = ({ platform }) => {
  const font = platformFonts[platform];
  return (
    <div style={{ maxWidth: '960px' }}>
      <PlatformBadge platform={platform} />
      <SectionTitle font={font}>Desktop Typography</SectionTitle>
      <TypeRow label="Heading H1"            size="48px · weight 400" style={typography.desktop.h1}        font={font} />
      <TypeRow label="Heading H2"            size="34px · weight 400" style={typography.desktop.h2}        font={font} />
      <TypeRow label="Heading H3"            size="29px · weight 400" style={typography.desktop.h3}        font={font} />
      <TypeRow label="Heading H4"            size="24px · weight 400" style={typography.desktop.h4}        font={font} />
      <TypeRow label="Heading H5"            size="22px · weight 400" style={typography.desktop.h5}        font={font} />
      <TypeRow label="Subtitle & Card Title" size="22px · lh 26px"    style={typography.desktop.subtitle}  font={font} text={sampleParagraph} />
      <TypeRow label="Paragraph"             size="17px · lh 28px"    style={typography.desktop.paragraph} font={font} text={sampleParagraph} />
      <TypeRow label="Tags & Descriptions"   size="14px"              style={typography.desktop.tags}      font={font} text={sampleParagraph} isLast />

      <SectionTitle font={font} style={{ marginTop: '64px' }}>Mobile Typography</SectionTitle>
      <TypeRow label="Heading H1"            size="30px · weight 400" style={typography.mobile.h1}        font={font} />
      <TypeRow label="Heading H2"            size="26px · weight 400" style={typography.mobile.h2}        font={font} />
      <TypeRow label="Heading H3"            size="24px · weight 400" style={typography.mobile.h3}        font={font} />
      <TypeRow label="Heading H4"            size="22px · weight 400" style={typography.mobile.h4}        font={font} />
      <TypeRow label="Heading H5"            size="20px · weight 400" style={typography.mobile.h5}        font={font} />
      <TypeRow label="Subtitle & Card Title" size="20px · lh 24px"    style={typography.mobile.subtitle}  font={font} text={sampleParagraph} />
      <TypeRow label="Paragraph"             size="16px · lh 22px"    style={typography.mobile.paragraph} font={font} text={sampleParagraph} />
      <TypeRow label="Tags & Descriptions"   size="14px"              style={typography.mobile.tags}      font={font} text={sampleParagraph} isLast />
    </div>
  );
};
