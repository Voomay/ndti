import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/27838008834?text=${encodeURIComponent(
    'Hi NDti team, I am interested in your bespoke joinery and custom design services.'
  )}`;

  return (
    <div className="whatsapp-floating">
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="whatsapp-popup-header">
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Support Team</div>
              <div style={{ fontSize: '0.78rem', opacity: 0.9 }}>Typically replies within minutes</div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '4px'
              }}
              aria-label="Close WhatsApp chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="whatsapp-popup-body">
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Hi there! Chat with one of our joinery & design specialists directly on WhatsApp.
            </div>

            <div className="whatsapp-agent-card">
              <div className="whatsapp-avatar">
                <span>ND</span>
                <span className="whatsapp-status-dot" />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#fff' }}>
                  NDti Consultant
                </div>
                <div style={{ fontSize: '0.78rem', color: '#10b981' }}>
                  Online • Ready to assist
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                width: '100%',
                marginTop: '1rem',
                backgroundColor: '#03cc0b',
                borderColor: '#03cc0b',
                color: '#fff'
              }}
            >
              <Send size={15} />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className="whatsapp-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp conversation"
        title="Chat with our team on WhatsApp"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};
