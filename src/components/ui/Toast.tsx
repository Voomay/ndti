import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <CheckCircle2 size={18} style={{ color: 'var(--color-champagne)', flexShrink: 0 }} />
        <span>{message}</span>
        <button
          type="button"
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', marginLeft: 'auto' }}
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
