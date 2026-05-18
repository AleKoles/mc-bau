import { AlternatingContentBlock, AlternatingContentSection } from './AlternatingContent';

export default {
  title: 'Components/AlternatingContent',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
};

const placeholder = '/placeholder.jpg';

// ── Single block with controls ────────────────────────────────────────────
export const Default = {
  argTypes: {
    variant:     { name: 'Variant',  control: { type: 'radio' }, options: ['light', 'blue'] },
    idx:         { name: 'Index (0=image right, 1=image left)', control: { type: 'number' } },
    eyebrow:     { name: 'Eyebrow',  control: { type: 'text' } },
    heading:     { name: 'Heading',  control: { type: 'text' } },
    body:        { name: 'Body',     control: { type: 'text' } },
    buttonLabel: { name: 'Button label', control: { type: 'text' } },
  },
  args: {
    variant: 'light',
    idx: 0,
    eyebrow: '',
    heading: 'Our values',
    body: '"A company is only as good as its employees." This quote from our company founder Heinrich-W. Müller still remains a guiding principle today in our management and development of employees. Our people take care of their responsibilities and their personal freedom and work hands-on and close together in teams.',
    buttonLabel: 'View the list of job offers',
    image: placeholder,
  },
  render: (args) => <AlternatingContentBlock {...args} />,
};

// ── Light variant — 3 alternating blocks (gray1 / grayBlue / gray1) ───────
export const LightVariant = {
  name: 'Light — Alternating',
  parameters: { controls: { disable: true } },
  render: () => (
    <AlternatingContentSection
      blocks={[
        {
          variant: 'light',
          image: placeholder,
          heading: 'Our values',
          body: '"A company is only as good as its employees." This quote from our company founder Heinrich-W. Müller still remains a guiding principle today in our management and development of employees. Our people take care of their responsibilities and their personal freedom and work hands-on and close together in teams.\n\nWe are open-minded, expert and customer-orientated people who take great care of each and every project and provide our customers as well as our colleagues with individual advice to find the best solution.',
        },
        {
          variant: 'light',
          image: placeholder,
          heading: 'What we offer',
          body: 'We combine the best of a family managed business with the best of a professional global group and offer trainees, graduates and professionals good opportunities for their entry and their career development. We offer a wide range of activities allowing a great deal of personal scope combined with an appropriate level of responsibility.',
        },
        {
          variant: 'light',
          image: placeholder,
          heading: 'Who are we looking for?',
          body: 'We always warmly welcome employees with good professional and personal skills as well as the right motivation, good heart and mind into all areas of our company – from administration, R&D and production to product management, business development and sales.',
          buttonLabel: 'View the list of job offers',
        },
      ]}
    />
  ),
};

// ── Blue variant ──────────────────────────────────────────────────────────
export const BlueVariant = {
  name: 'Blue — Dark Background',
  parameters: { controls: { disable: true } },
  render: () => (
    <AlternatingContentSection
      blocks={[
        {
          variant: 'blue',
          image: placeholder,
          heading: 'MC for Concrete Industry',
          body: 'We develop and manufacture high-quality construction chemical products and technologies for the concrete industry. Our solutions are used in precast concrete, cast-in-place concrete, and industrial flooring applications worldwide.',
          buttonLabel: 'Learn more',
        },
        {
          variant: 'blue',
          image: placeholder,
          heading: 'MC for Infrastructure & Industry',
          body: 'From bridges and tunnels to industrial plants — MC-Bauchemie provides reliable solutions for the protection and repair of concrete structures. Our products meet the most demanding requirements in infrastructure projects globally.',
          buttonLabel: 'Discover solutions',
        },
      ]}
    />
  ),
};


