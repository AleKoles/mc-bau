const imgUrl = 'https://www.figma.com/api/mcp/asset/b8e30795-d06a-4f10-b1ad-cd83bbcedd5f';

const BODY_MAX_CHARS = 215;

const truncate = (text) =>
  text.length > BODY_MAX_CHARS ? text.slice(0, BODY_MAX_CHARS).trimEnd() + '...' : text;

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
      fill="#9c9c9c"
    />
  </svg>
);

export const Card = ({
  badge = false,
  badgeText = 'Pressemitteilungen',
  title = 'Die erste klimafreundliche Reaktivabdichtung',
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  location = false,
  locationText = 'Frankfurt',
  image = imgUrl,
}) => (
  <div
    style={{
      width: '530px',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      overflow: 'hidden',
    }}
  >
    {/* Image */}
    <div
      style={{
        height: '300px',
        flexShrink: 0,
        backgroundColor: '#000',
        overflow: 'hidden',
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>

    {/* Content */}
    <div
      style={{
        height: '300px',
        flexShrink: 0,
        backgroundColor: '#f8f8f8',
        padding: '24px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '23px',
        overflow: 'hidden',
      }}
    >
      {badge && (
        <div
          style={{
            fontFamily: "'Roboto', ui-sans-serif, sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: '#005d9a',
            lineHeight: 'normal',
            flexShrink: 0,
          }}
        >
          {badgeText}
        </div>
      )}

      <div
        style={{
          fontFamily: "'Roboto', ui-sans-serif, sans-serif",
          fontSize: '22px',
          fontWeight: 400,
          color: '#282828',
          lineHeight: '26px',
          flexShrink: 0,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontFamily: "'Roboto', ui-sans-serif, sans-serif",
          fontSize: '17px',
          fontWeight: 400,
          color: '#000000',
          lineHeight: '28px',
          flexShrink: 0,
        }}
      >
        {truncate(body)}
      </div>

      {location && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
          }}
        >
          <LocationIcon />
          <span
            style={{
              fontFamily: "'Roboto', ui-sans-serif, sans-serif",
              fontSize: '17px',
              fontWeight: 400,
              color: '#9c9c9c',
              lineHeight: '28px',
            }}
          >
            {locationText}
          </span>
        </div>
      )}
    </div>
  </div>
);
