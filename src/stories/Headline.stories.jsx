import { MainHeadline, SectionHeadline } from './Headline';

export default {
  title: 'Components/Headlines',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
  },
};

// ── Main Headline (H2) ────────────────────────────────────────────────────
export const H2Main = {
  name: 'H2 — Main Headline',
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <MainHeadline title="References" />
    </div>
  ),
};

export const H2MainWithText = {
  name: 'H2 — With body text',
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <MainHeadline
        title="Knowledge Hub"
        text="Discover our technical articles, whitepapers, and industry insights covering waterproofing, concrete repair, and construction chemistry."
      />
    </div>
  ),
};

// ── Section Headlines (H3–H5) ─────────────────────────────────────────────
export const H3 = {
  name: 'H3 — Section Headline',
  argTypes: {
    title:    { name: 'Title',    control: { type: 'text' } },
    subtitle: { name: 'Subtitle', control: { type: 'text' } },
    color:    { name: 'Color',    control: { type: 'select' }, options: ['dark', 'blue3', 'blue2', 'blue1', 'white'] },
    align:    { name: 'Align',    control: { type: 'radio' },  options: ['left', 'center', 'right'] },
  },
  args: {
    title: 'MC-Pedia – Your glossary for construction chemistry terms and technologies',
    subtitle: '',
    color: 'dark',
    align: 'left',
  },
  render: (args) => (
    <div style={{ maxWidth: '800px' }}>
      <SectionHeadline level="h3" {...args} />
    </div>
  ),
};

export const H4 = {
  name: 'H4',
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <SectionHeadline level="h4" title="Waterproofing systems for underground structures" />
    </div>
  ),
};

export const H5 = {
  name: 'H5',
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <SectionHeadline level="h5" title="Crystalline waterproofing technology" />
    </div>
  ),
};

// ── All levels side by side ───────────────────────────────────────────────
export const AllHeadlines = {
  name: 'All levels',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <MainHeadline title="References" />
      <MainHeadline
        title="Knowledge Hub"
        text="Discover our technical articles, whitepapers, and industry insights."
      />
      <SectionHeadline level="h3" title="MC-Pedia – Your glossary for construction chemistry terms and technologies" />
      <SectionHeadline level="h4" title="Waterproofing systems for underground structures" />
      <SectionHeadline level="h5" title="Crystalline waterproofing technology" />
      <SectionHeadline level="h3" title="Two-line heading example" subtitle="with a second line of context" />
      <div style={{ backgroundColor: '#002D5A', padding: '24px' }}>
        <SectionHeadline level="h3" title="White headline on dark background" color="white" />
      </div>
    </div>
  ),
};
