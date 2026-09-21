import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Workshop Fabrication',
  afterLabel = 'Finished Masterpiece',
  title = 'From Raw Craftsmanship to Luxury Reality'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="before-after-wrapper">
      {title && (
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge-tag">Interactive Transformation</span>
          <h3 style={{ fontSize: '1.8rem', color: '#fff', marginTop: '0.4rem' }}>{title}</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Drag the slider horizontally to reveal the precision workshop fabrication versus the completed luxury installation.
          </p>
        </div>
      )}

      <div
        ref={containerRef}
        className="before-after-container"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ touchAction: 'pan-y' }}
      >
        {/* AFTER IMAGE (Bottom/Full Layer) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="before-after-img"
          draggable={false}
        />
        <div className="before-after-label after">{afterLabel}</div>

        {/* BEFORE IMAGE (Clipped Layer on Top) */}
        <div
          className="before-after-clipped"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="before-after-img"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            draggable={false}
          />
          <div className="before-after-label before">{beforeLabel}</div>
        </div>

        {/* SLIDER DIVIDER HANDLE */}
        <div
          className="before-after-handle"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="before-after-line" />
          <div className="before-after-button">
            <ChevronsLeftRight size={18} color="#000" />
          </div>
        </div>
      </div>
    </div>
  );
};
