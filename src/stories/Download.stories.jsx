import { MagazineDownloadCard, DocumentDownloadRow } from './Download';

export default {
  title: 'Components/Downloads',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
  },
};

const placeholder = '/placeholder.jpg';

// ── Magazine Download Card ─────────────────────────────────────────────────
export const MagazineCard = {
  name: 'Magazine Download Card',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
      <MagazineDownloadCard
        title="MC aktiv 1/2026"
        description="Focus: Specialised systems for tunneling and mining – Proven, safe, economical"
        date="Apr 13, 2026"
        image={placeholder}
      />
      <MagazineDownloadCard
        title="MC aktiv 3/2025"
        description="Focus: Rethinking multi-storey car parks"
        date="Dec 16, 2025"
        image={placeholder}
      />
    </div>
  ),
};

// ── Document Download Row ─────────────────────────────────────────────────
export const DocumentRow = {
  name: 'Document Download Row',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '600px' }}>
      <DocumentDownloadRow
        type="Brochure"
        title="Brochure Concrete-Goods"
      />
      <DocumentDownloadRow
        type="Brochure"
        title="Brochure Intensive Compactor"
      />
      <DocumentDownloadRow
        type="Data Sheet"
        title="MC-Injekt 2-K-PU-F Technical Data Sheet"
      />
      <DocumentDownloadRow
        type="Safety Data Sheet"
        title="MC-DUR 1264 SDS EN"
      />
    </div>
  ),
};

// ── Both together ──────────────────────────────────────────────────────────
export const AllDownloads = {
  name: 'All Download Components',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '800px' }}>
      <div>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: '12px', color: '#9c9c9c', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Magazine Cards
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <MagazineDownloadCard
            title="MC aktiv 1/2026"
            description="Focus: Specialised systems for tunneling and mining – Proven, safe, economical"
            date="Apr 13, 2026"
            image={placeholder}
          />
          <MagazineDownloadCard
            title="MC aktiv 3/2025"
            description="Focus: Rethinking multi-storey car parks"
            date="Dec 16, 2025"
            image={placeholder}
          />
        </div>
      </div>

      <div>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: '12px', color: '#9c9c9c', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Document Rows
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <DocumentDownloadRow type="Brochure" title="Brochure Concrete-Goods" />
          <DocumentDownloadRow type="Brochure" title="Brochure Intensive Compactor" />
          <DocumentDownloadRow type="Data Sheet" title="MC-Injekt 2-K-PU-F Technical Data Sheet" />
        </div>
      </div>
    </div>
  ),
};
