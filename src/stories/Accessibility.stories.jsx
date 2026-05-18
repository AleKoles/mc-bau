import { colors } from '../tokens';

// ── WCAG contrast utilities ───────────────────────────────────────────────

function hexToLinear(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  const toLinear = (c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return {
    r: toLinear((n >> 16) & 0xff),
    g: toLinear((n >> 8) & 0xff),
    b: toLinear(n & 0xff),
  };
}

function luminance(hex) {
  const { r, g, b } = hexToLinear(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(hex1, hex2) {
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function wcagGrade(ratio) {
  if (ratio >= 7)   return { normal: 'AAA', large: 'AAA', ui: 'AAA' };
  if (ratio >= 4.5) return { normal: 'AA',  large: 'AAA', ui: 'AAA' };
  if (ratio >= 3)   return { normal: 'Fail', large: 'AA', ui: 'AA'  };
  return               { normal: 'Fail', large: 'Fail', ui: 'Fail' };
}

const GRADE_COLOR = { AAA: '#006e3c', AA: '#1a6ea8', Fail: '#c0392b' };
const GRADE_BG    = { AAA: '#e6f4ed', AA: '#e3f0fa', Fail: '#fdecea' };

// ── Pairs to evaluate ─────────────────────────────────────────────────────
// [label, textHex, bgHex, usage note]
const PAIRS = [
  // White on blues
  ['White / Blue 3',   colors.primary.white,  colors.primary.blue3,  'Buttons, nav, headers'],
  ['White / Blue 2',   colors.primary.white,  colors.primary.blue2,  'Secondary buttons, links'],
  ['White / Blue 1',   colors.primary.white,  colors.primary.blue1,  'Hover states, accents'],
  // Dark on light
  ['Blue 3 / White',   colors.primary.blue3,  colors.primary.white,  'Body text, headings'],
  ['Blue 3 / Gray 1',  colors.primary.blue3,  colors.primary.gray1,  'Text on card/panel bg'],
  ['Blue 2 / White',   colors.primary.blue2,  colors.primary.white,  'Links, badge text'],
  ['Blue 2 / Gray 1',  colors.primary.blue2,  colors.primary.gray1,  'Badge text on cards'],
  ['Blue 1 / White',   colors.primary.blue1,  colors.primary.white,  'Interactive labels'],
  // Grays
  ['Gray 4 / White',   colors.primary.gray4,  colors.primary.white,  'Secondary text'],
  ['Gray 4 / Gray 1',  colors.primary.gray4,  colors.primary.gray1,  'Captions on panels'],
  ['Gray 3 / White',   colors.primary.gray3,  colors.primary.white,  'Location text, hints'],
  ['Gray 3 / Gray 1',  colors.primary.gray3,  colors.primary.gray1,  'Placeholder text'],
  // Orange
  ['White / Orange',   colors.primary.white,  colors.primary.orange, 'Orange CTAs'],
  ['Orange / White',   colors.primary.orange, colors.primary.white,  'Orange on light bg'],
  ['Black / Orange',   colors.primary.black,  colors.primary.orange, 'Black text on orange'],
  // Black & white
  ['Black / White',    colors.primary.black,  colors.primary.white,  'Default body text'],
  ['Black / Gray 1',   colors.primary.black,  colors.primary.gray1,  'Text on page bg'],
  ['White / Black',    colors.primary.white,  colors.primary.black,  'Reversed text'],
];

// ── Swatch component ──────────────────────────────────────────────────────
const Swatch = ({ label, textHex, bgHex, usage }) => {
  const ratio = contrastRatio(textHex, bgHex);
  const grade = wcagGrade(ratio);
  const ratioStr = ratio.toFixed(1) + ':1';

  const Badge = ({ level, grade: g }) => (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px',
      padding: '2px 6px',
      borderRadius: '3px',
      fontSize: '11px',
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
      backgroundColor: GRADE_BG[g],
      color: GRADE_COLOR[g],
    }}>
      {level}: {g}
    </span>
  );

  return (
    <div style={{
      border: '1px solid #e3e3e3',
      borderRadius: '4px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Colour preview */}
      <div style={{
        backgroundColor: bgHex,
        padding: '24px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '80px',
      }}>
        <span style={{
          color: textHex,
          fontSize: '32px',
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          lineHeight: 1,
        }}>
          Aa
        </span>
        <span style={{
          color: textHex,
          fontSize: '13px',
          fontFamily: "'Roboto', sans-serif",
          opacity: 0.85,
          textAlign: 'right',
          lineHeight: '1.4',
        }}>
          {textHex}<br />{bgHex}
        </span>
      </div>

      {/* Info */}
      <div style={{
        padding: '12px 16px',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            color: '#282828',
          }}>
            {label}
          </span>
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: '14px',
            fontWeight: 700,
            color: GRADE_COLOR[grade.normal === 'Fail' ? (grade.large === 'Fail' ? 'Fail' : 'AA') : grade.normal],
          }}>
            {ratioStr}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          <Badge level="Normal" grade={grade.normal} />
          <Badge level="Large" grade={grade.large} />
          <Badge level="UI" grade={grade.ui} />
        </div>

        <div style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: '11px',
          color: '#9c9c9c',
        }}>
          {usage}
        </div>
      </div>
    </div>
  );
};

// ── Legend ────────────────────────────────────────────────────────────────
const Legend = () => (
  <div style={{
    padding: '16px 24px',
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #e3e3e3',
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '12px',
    color: '#4c4c4c',
  }}>
    {[
      { label: 'AAA', desc: '7:1+ — all text sizes', bg: GRADE_BG.AAA, color: GRADE_COLOR.AAA },
      { label: 'AA',  desc: '4.5:1+ normal · 3:1+ large/UI', bg: GRADE_BG.AA,  color: GRADE_COLOR.AA  },
      { label: 'Fail', desc: 'Below AA threshold', bg: GRADE_BG.Fail, color: GRADE_COLOR.Fail },
    ].map(({ label, desc, bg, color }) => (
      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ padding: '2px 6px', borderRadius: '3px', fontWeight: 700, fontSize: '11px', backgroundColor: bg, color }}>
          {label}
        </span>
        <span>{desc}</span>
      </div>
    ))}
    <div style={{ marginLeft: 'auto', color: '#9c9c9c' }}>
      WCAG 2.1 · Large text ≥ 18pt or 14pt bold
    </div>
  </div>
);

// ── Story ─────────────────────────────────────────────────────────────────
export default {
  title: 'Design System/Accessibility',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
};

export const ContrastRatios = {
  name: 'Colour Contrast',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <Legend />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '16px',
        padding: '24px',
      }}>
        {PAIRS.map(([label, textHex, bgHex, usage]) => (
          <Swatch
            key={label}
            label={label}
            textHex={textHex}
            bgHex={bgHex}
            usage={usage}
          />
        ))}
      </div>
    </div>
  ),
};
