import { CardSlider } from './CardSlider';
import { Card, CardWithButton } from './Card';
import { ImageCard } from './ImageCard';

export default {
  title: 'Components/CardSlider',
  component: CardSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
};

const placeholder = '/placeholder.jpg';

// ── Image-only cards (MC FOR style) ───────────────────────────────────────
export const ImageCards = {
  render: () => (
    <div style={{ padding: '48px 32px' }}>
      <CardSlider
        cards={[
          <ImageCard label="MC FOR" title="Concrete Industry" image={placeholder} />,
          <ImageCard label="MC FOR" title="Infrastructure & Industry" image={placeholder} />,
          <ImageCard label="MC FOR" title="Buildings" image={placeholder} />,
          <ImageCard label="MC FOR" title="Tunneling" image={placeholder} />,
          <ImageCard label="MC FOR" title="Marine & Offshore" image={placeholder} />,
        ]}
      />
    </div>
  ),
};

// ── Mixed card types ───────────────────────────────────────────────────────
export const MixedCards = {
  render: () => (
    <div style={{ padding: '48px 32px' }}>
      <CardSlider
        cards={[
          <ImageCard label="MC FOR" title="Concrete Industry" image={placeholder} />,
          <Card badge badgeText="Pressemitteilungen" title="Die erste klimafreundliche Reaktivabdichtung" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae." />,
          <ImageCard label="MC FOR" title="Infrastructure & Industry" image={placeholder} />,
          <Card title="Lorem ipsum dolor sit amet" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." location locationText="Frankfurt" />,
          <ImageCard label="MC FOR" title="Buildings" image={placeholder} />,
        ]}
      />
    </div>
  ),
};

// ── Content cards ──────────────────────────────────────────────────────────
export const ContentCards = {
  render: () => (
    <div style={{ padding: '48px 32px' }}>
      <CardSlider
        cards={[
          <CardWithButton badge badgeText="Global News" title="New production facility" body="On 19 April 2026, MC-Bauchemie Australia opened its new production facility..." buttonLabel="More" />,
          <CardWithButton badge badgeText="Pressemitteilungen" title="Reaktivabdichtung" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae." buttonLabel="Mehr" />,
          <CardWithButton title="Lorem ipsum dolor sit amet, consectetur adipiscing" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae." buttonLabel="More" />,
          <CardWithButton badge badgeText="News" title="Neue Produktlinie für den Industriebau" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." buttonLabel="Mehr" />,
          <CardWithButton title="Innovative Lösungen für den Tiefbau" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae." buttonLabel="More" />,
        ]}
      />
    </div>
  ),
};


