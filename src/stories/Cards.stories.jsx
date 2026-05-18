import { Card, CardWithButton } from './Card';
import { ImageCard } from './ImageCard';
import { NewsCard, ContactCard } from './NewsCard';

const placeholder = '/placeholder.jpg';
const autoGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', padding: '32px' };

export default {
  title: 'Components/Cards',
  parameters: { layout: 'fullscreen', backgrounds: { default: 'light' } },
};

export const Default = {
  name: 'Content Cards',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={autoGrid}>
      <Card badge badgeText="Pressemitteilungen" title="Die erste klimafreundliche Reaktivabdichtung" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing." />
      <Card title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing." />
      <Card title="Die erste klimafreundliche Reaktivabdichtung" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae." location locationText="Frankfurt" />
      <CardWithButton badge badgeText="Global News" title="A new production facility" body="MC-Bauchemie Australia officially opened its new production facility in Adelaide." buttonLabel="More" />
    </div>
  ),
};

const newsGridStyle = `
  .news-grid { display: grid; grid-template-columns: 1fr; gap: 16px; padding: 32px; }
  @media (min-width: 640px)  { .news-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .news-grid { grid-template-columns: repeat(4, 1fr); } }
`;

export const NewsGrid = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <style>{newsGridStyle}</style>
      <div className="news-grid">
        <NewsCard badge="Global News" title="New production facility" body="On 19 April 2026, MC-Bauchemie Australia officially opened its new production..." date="13 May 2026" />
        <NewsCard badge="Global News" title="MC-Bauchemie Portugal expands management with Ricardo Gaio" body="Effective 1 April 2026, Ricardo Gaio assumed the position of Managing Director Sales & Marketing at MC-Bauchemie Portugal." date="11 May 2026" />
        <NewsCard badge="Special Feature" title="Specialised systems for tunnelling and mining" body="Tunnelling and mining are complex due to difficult geology, water pressure, and wear. MC Underground provides solutions for TBM tunnelling and mining." date="6 May 2026" />
        <ContactCard />
        <NewsCard badge="Product News" title="New waterproofing solutions for underground construction" body="MC-Bauchemie introduces a new range of crystalline waterproofing systems for tunnels and underground structures." date="2 May 2026" />
        <NewsCard badge="Global News" title="MC-Bauchemie celebrates 60 years of innovation" body="Founded in 1961 in Bottrop, Germany, MC-Bauchemie marks six decades of developing high-performance construction chemicals." date="28 Apr 2026" />
        <NewsCard badge="Pressemitteilungen" title="Die erste klimafreundliche Reaktivabdichtung" body="MC-Bauchemie präsentiert eine neue Generation von Reaktivabdichtungen mit deutlich reduziertem CO₂-Fußabdruck." date="24 Apr 2026" />
        <NewsCard badge="Special Feature" title="Concrete repair with MC-RIM injection systems" body="The MC-RIM system offers a fast, reliable solution for sealing cracks and voids in concrete structures under water pressure." date="18 Apr 2026" />
      </div>
    </>
  ),
};

export const ImageOnly = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...autoGrid, gap: '16px' }}>
      <ImageCard label="MC FOR" title="Concrete Industry" image={placeholder} />
      <ImageCard label="MC FOR" title="Infrastructure & Industry" image={placeholder} />
      <ImageCard label="MC FOR" title="Buildings" image={placeholder} />
      <ImageCard label="MC FOR" title="Tunneling" image={placeholder} />
      <ImageCard label="MC FOR" title="Marine & Offshore" image={placeholder} />
      <ImageCard label="MC FOR" title="Restoration & Renovation" image={placeholder} />
    </div>
  ),
};
