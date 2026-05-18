const placeholder = '/placeholder.jpg';

export const ImageCard = ({ label = 'MC FOR', title = 'Concrete Industry', image = placeholder, href = '#' }) => {
  return (
    <a
      href={href}
      style={{ display: 'block', position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', textDecoration: 'none' }}
      className="group"
    >
      <img
        src={image} alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transition: 'transform 500ms ease-in-out' }}
        className="group-hover:scale-[1.04]"
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, padding: '32px', color: '#ffffff' }}>
        <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '14px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', opacity: 0.9 }}>{label}</div>
        <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.15, letterSpacing: '0.02em' }}>{title}</div>
      </div>
    </a>
  );
};
