import { Card } from './Card';

export default {
  title: 'Components/Cards',
  component: Card,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
  },
  argTypes: {
    badge: {
      name: 'Badge',
      description: 'Show the blue category label above the title',
      control: { type: 'boolean' },
    },
    location: {
      name: 'Location',
      description: 'Show the gray location pin at the bottom',
      control: { type: 'boolean' },
    },
    badgeText: {
      name: 'Badge text',
      control: { type: 'text' },
      if: { arg: 'badge' },
    },
    title: {
      name: 'Title',
      control: { type: 'text' },
    },
    body: {
      name: 'Body text',
      control: { type: 'text' },
    },
    locationText: {
      name: 'Location text',
      control: { type: 'text' },
      if: { arg: 'location' },
    },
  },
  args: {
    badge: true,
    badgeText: 'Pressemitteilungen',
    title: 'Die erste klimafreundliche Reaktivabdichtung',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    location: false,
    locationText: 'Frankfurt',
  },
};

// Single card with full controls
export const Default = {};

// Three variants side by side, matching the Figma layout
export const AllVariants = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
      <Card
        badge
        badgeText="Pressemitteilungen"
        title="Die erste klimafreundliche Reaktivabdichtung"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        location={false}
      />
      <Card
        badge={false}
        title="Lorem ipsum dolor sit amet, consectetur adipiscing"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        location={false}
      />
      <Card
        badge={false}
        title="Die erste klimafreundliche Reaktivabdichtung"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        location
        locationText="Frankfurt"
      />
    </div>
  ),
};
