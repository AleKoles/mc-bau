import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const ArrowSvg = ({ flipped }) => (
  <svg width="25" viewBox="0 0 65 45" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flipped ? 'rotate(180deg)' : 'none', display: 'block' }}>
    <polyline points="39.4,2.1 59.2,22 39.4,41.8" stroke="#fff" strokeWidth="6" strokeMiterlimit="10" fill="none" />
    <line x1="0" y1="22" x2="59.2" y2="22" stroke="#fff" strokeWidth="6" strokeMiterlimit="10" />
  </svg>
);

const NavButton = ({ direction, onClick, disabled }) => {
  const [hovered, setHovered] = useState(false);
  const isNext = direction === 'next';
  return (
    <button onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', width: '50px', height: '50px', backgroundColor: '#002D5A', border: 'none', cursor: disabled ? 'default' : 'pointer', overflow: 'hidden', opacity: disabled ? 0 : 1, transition: 'opacity 200ms', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, pointerEvents: disabled ? 'none' : 'auto' }}>
      <span style={{ position: 'absolute', inset: 0, backgroundColor: '#005D9A', transform: hovered ? 'translateX(0)' : isNext ? 'translateX(100%)' : 'translateX(-100%)', transition: 'transform 300ms ease-in-out', zIndex: 1 }} />
      <span style={{ position: 'relative', zIndex: 2, display: 'flex', transform: hovered ? `translateX(${isNext ? '4px' : '-4px'})` : 'translateX(0)', transition: 'transform 300ms ease-in-out' }}>
        <ArrowSvg flipped={!isNext} />
      </span>
    </button>
  );
};

const Dots = ({ count, selected }) => (
  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: i === selected ? '#009EE3' : '#003c78', transition: 'background-color 200ms' }} />
    ))}
  </div>
);

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);
  return width;
};

export const CardSlider = ({ cards = [] }) => {
  const windowWidth = useWindowWidth();
  const slideBasis = windowWidth >= 1024 ? 'calc(33.333% - 11px)' : windowWidth >= 768 ? 'calc(83% - 8px)' : 'calc(90% - 8px)';

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(cards.length);

  const updateOpacity = useCallback(() => {
    if (!emblaApi) return;
    const containerRect = emblaApi.containerNode().parentElement.getBoundingClientRect();
    emblaApi.slideNodes().forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const outside = rect.left < containerRect.left - 1 || rect.right > containerRect.right + 1;
      slide.style.opacity = outside ? '0.6' : '1';
      slide.style.transition = 'opacity 150ms ease-in-out';
    });
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    updateOpacity();
  }, [emblaApi, updateOpacity]);

  useEffect(() => {
    if (!emblaApi) return;
    setSlideCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('settle', updateOpacity);
    emblaApi.on('scroll', updateOpacity);
    emblaApi.on('resize', updateOpacity);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('settle', updateOpacity);
      emblaApi.off('scroll', updateOpacity);
      emblaApi.off('resize', updateOpacity);
    };
  }, [emblaApi, onSelect, updateOpacity]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const isMobile = windowWidth < 1024;

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div ref={emblaRef} style={{ overflow: 'hidden', width: '100%' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          {cards.map((card, i) => (
            <div key={i} style={{ flex: `0 0 ${slideBasis}`, minWidth: 0 }}>{card}</div>
          ))}
        </div>
      </div>
      {!isMobile && (
        <>
          <div style={{ position: 'absolute', top: '50%', left: '-25px', transform: 'translateY(-50%)', zIndex: 10 }}>
            <NavButton direction="prev" onClick={scrollPrev} disabled={prevDisabled} />
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '-25px', transform: 'translateY(-50%)', zIndex: 10 }}>
            <NavButton direction="next" onClick={scrollNext} disabled={nextDisabled} />
          </div>
        </>
      )}
      {isMobile && <Dots count={slideCount} selected={selectedIndex} />}
    </div>
  );
};
