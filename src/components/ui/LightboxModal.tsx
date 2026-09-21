import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxMedia {
  id: string;
  title: string;
  imageUrl: string;
  category?: string;
  description?: string;
}

interface LightboxModalProps {
  items: LightboxMedia[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div 
      className="lightbox-backdrop" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-content">
        <button 
          type="button" 
          className="lightbox-close-btn" 
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>

        {items.length > 1 && (
          <>
            <button 
              type="button" 
              className="lightbox-nav-btn prev" 
              onClick={handlePrev}
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              type="button" 
              className="lightbox-nav-btn next" 
              onClick={handleNext}
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        <div className="lightbox-image-wrap">
          <img 
            src={currentItem.imageUrl} 
            alt={currentItem.title} 
            className="lightbox-image"
          />
        </div>

        <div className="lightbox-meta">
          {currentItem.category && (
            <div style={{ marginBottom: '0.4rem' }}>
              <span className="portfolio-badge">{currentItem.category}</span>
            </div>
          )}
          <h3 className="lightbox-title">{currentItem.title}</h3>
          {currentItem.description && (
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
              {currentItem.description}
            </p>
          )}
          <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Image {currentIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
