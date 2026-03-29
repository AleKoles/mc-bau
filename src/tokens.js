// Design tokens extracted from MC-Styleguide Figma file
// figma.com/design/VpWn6vGi2zfoqt3yit1clG/MC-Styleguide

export const colors = {
  // New Colors (Primary palette)
  primary: {
    blue1: '#009EE3',
    blue2: '#005D9A',
    blue3: '#002D5A',
    orange: '#EE7100',
    gray1: '#F7F7F7',
    gray2: '#E3E3E3',
    gray3: '#9C9C9C',
    gray4: '#4C4C4C',
    grayBlue: '#E9EFEF',
    black: '#000000',
    white: '#FFFFFF',
  },

  // Old Blues (Secondary palette)
  oldBlues: {
    blue100: '#06AEEF',
    blue200: '#009EE3',
    blue300: '#019EE3',
    blue400: '#3A9DDD',
    blue500: '#005E9A',
    blue600: '#002D5A',
    blue700: '#012D5A',
    blue800: '#012B56',
  },

  // Old Grays (System palette)
  oldGrays: {
    gray100: '#F7F7F7',
    gray200: '#F0F0F0',
    gray300: '#E9E9E9',
    gray400: '#DCDCDC',
    gray500: '#9C9C9C',
    gray600: '#97999C',
    grayBlue: '#E9EFEF',
  },

  // Neutral design tokens
  neutral: {
    n200: '#F7F7FC',
    n300: '#EFF0F6',
    n400: '#DCDDEB',
    n600: '#6E7191',
    n800: '#211F54',
    white: '#FFFFFF',
  },
};

// Font families — the project uses ui-sans-serif (system font).
// Each platform resolves to a different typeface at runtime.
export const fontFamily = {
  // Production: resolves to the OS system font (SF, Segoe UI, Roboto, etc.)
  system: 'ui-sans-serif, system-ui, sans-serif',
  // UI chrome font used only inside Storybook labels and meta — not part of the design system
  ui: "'Inter', ui-sans-serif, system-ui, sans-serif",
};

// Per-platform font stacks used to simulate ui-sans-serif in Storybook.
// These are NOT loaded in production — only used for design preview.
export const platformFonts = {
  macos:   "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
  windows: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  android: "'Roboto', sans-serif", // Roboto loaded via Google Fonts in preview-head.html
};

// Font weights
export const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const typography = {
  desktop: {
    h1: {
      fontFamily: fontFamily.heading,
      fontSize: '48px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    h2: {
      fontFamily: fontFamily.heading,
      fontSize: '34px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    h3: {
      fontFamily: fontFamily.heading,
      fontSize: '29px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    h4: {
      fontFamily: fontFamily.heading,
      fontSize: '24px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    h5: {
      fontFamily: fontFamily.heading,
      fontSize: '22px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    subtitle: {
      fontFamily: fontFamily.heading,
      fontSize: '22px',
      fontWeight: fontWeight.regular,
      lineHeight: '26px',
    },
    paragraph: {
      fontFamily: fontFamily.heading,
      fontSize: '17px',
      fontWeight: fontWeight.regular,
      lineHeight: '28px',
    },
    tags: {
      fontFamily: fontFamily.heading,
      fontSize: '14px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
  },

  mobile: {
    h1: {
      fontFamily: fontFamily.heading,
      fontSize: '30px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    h2: {
      fontFamily: fontFamily.heading,
      fontSize: '26px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    h3: {
      fontFamily: fontFamily.heading,
      fontSize: '24px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    h4: {
      fontFamily: fontFamily.heading,
      fontSize: '22px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    h5: {
      fontFamily: fontFamily.ui,
      fontSize: '20px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
    subtitle: {
      fontFamily: fontFamily.heading,
      fontSize: '20px',
      fontWeight: fontWeight.regular,
      lineHeight: '24px',
    },
    paragraph: {
      fontFamily: fontFamily.heading,
      fontSize: '16px',
      fontWeight: fontWeight.regular,
      lineHeight: '22px',
    },
    tags: {
      fontFamily: fontFamily.heading,
      fontSize: '14px',
      fontWeight: fontWeight.regular,
      lineHeight: '1',
    },
  },

  // Inter UI styles
  ui: {
    heading: {
      fontFamily: fontFamily.ui,
      fontSize: '38px',
      fontWeight: fontWeight.bold,
      lineHeight: '50px',
    },
    largeRegular: {
      fontFamily: fontFamily.ui,
      fontSize: '24px',
      fontWeight: fontWeight.regular,
      lineHeight: '26px',
    },
    largeMedium: {
      fontFamily: fontFamily.ui,
      fontSize: '24px',
      fontWeight: fontWeight.medium,
      lineHeight: '26px',
    },
    largeBold: {
      fontFamily: fontFamily.ui,
      fontSize: '24px',
      fontWeight: fontWeight.bold,
      lineHeight: '26px',
    },
    body: {
      fontFamily: fontFamily.ui,
      fontSize: '18px',
      fontWeight: fontWeight.regular,
      lineHeight: '30px',
    },
    small: {
      fontFamily: fontFamily.ui,
      fontSize: '18px',
      fontWeight: fontWeight.regular,
      lineHeight: '20px',
    },
  },
};
