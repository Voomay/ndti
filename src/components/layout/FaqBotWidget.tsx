import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Phone, RotateCcw } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    id: 'services',
    question: 'What custom joinery services do you offer?',
    answer: 'At NDti, we specialize in high-end bespoke joinery: Designer Kitchens, Luxury Bedroom Cupboards & Walk-In Wardrobes, Bathroom Vanities, Studies & Home Offices, Wine Cellars & Residential Bars, and Commercial Office Fitouts.'
  },
  {
    id: 'process',
    question: 'How does the design & craft process work?',
    answer: 'Our workflow involves 3 precision steps: (1) Concept & 3D visualization tailored to your space; (2) Precision manufacturing in our Blackheath workshop using premium timber, Blum hardware, and durable finishes; (3) Seamless on-site installation by master craftsmen.'
  },
  {
    id: 'timeline',
    question: 'What is the typical project timeline?',
    answer: 'Timelines vary by scope: bespoke single rooms or vanities typically take 3–4 weeks from design sign-off, while complete designer kitchens or whole-home joinery packages take approximately 5–8 weeks.'
  },
  {
    id: 'location',
    question: 'Where is your workshop located?',
    answer: 'Our main manufacturing facility and design studio is at Unit 2, 15 Muscat Road, Saxenburg Park 1, Blackheath, Cape Town. We are open Monday to Friday from 08:00 to 17:00 (Saturdays by appointment).'
  },
  {
    id: 'ianart',
    question: 'What is IanArt & the art installations?',
    answer: 'IanArt is our exclusive artistic collaboration founded by sculptor Ian Albertyn. He creates bespoke textured solid-wood block installations exploring human connection, balance, and architectural geometry, integrated directly into custom interiors.'
  },
  {
    id: 'quote',
    question: 'How do I request a quote or consultation?',
    answer: 'You can click the "Get A Quote" button in the menu, submit our contact form, or connect with us directly on WhatsApp/Phone at 083 800 8834. We provide free initial conceptual assessments.'
  }
];

interface FaqBotWidgetProps {
  onOpenQuoteModal?: () => void;
}

export const FaqBotWidget: React.FC<FaqBotWidgetProps> = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! Welcome to NDti. I am your architectural joinery virtual assistant. Feel free to select any question below or type your inquiry.',
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleFaqClick = (faq: FaqItem) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: faq.question, time },
      { sender: 'bot', text: faq.answer, time }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userText = inputText.trim();
    setInputText('');

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: userText, time }
    ]);

    setTimeout(() => {
      // Find closest FAQ keyword match
      const lower = userText.toLowerCase();
      let reply = "Thank you for reaching out! For tailored measurements and architectural drawings, our master joiner can discuss your requirements directly. Would you like to request a quote or chat on WhatsApp?";

      if (lower.includes('kitchen')) {
        reply = "We craft custom luxury kitchens with ergonomic Blum hardware, quartz surfaces, and bespoke larder units. You can request a 3D concept render through our quote modal.";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
        reply = "Every joinery project is custom quoted based on dimensions, chosen timber, and finishes. Click 'Request Quote' above to get a personalized estimate.";
      } else if (lower.includes('where') || lower.includes('address') || lower.includes('visit')) {
        reply = "We are located at Unit 2, 15 Muscat Road, Saxenburg Park 1, Blackheath. We welcome visits Monday to Friday 08:00 - 17:00.";
      } else if (lower.includes('ian') || lower.includes('art')) {
        reply = "IanArt creates sculptural wooden block artworks and architectural feature walls in collaboration with NDti. Check the 'IanArt Installations' page to view past works!";
      }

      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: reply, time }
      ]);
    }, 500);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: 'How can I assist you with custom joinery or IanArt installations today?',
        time: 'Just now'
      }
    ]);
  };

  const whatsappUrl = `https://wa.me/27838008834?text=${encodeURIComponent(
    'Hi NDti team, I am inquiring about your bespoke joinery and architectural design services.'
  )}`;

  return (
    <div className="faq-bot-wrapper">
      {isOpen && (
        <div className="faq-bot-window">
          {/* Header */}
          <div className="faq-bot-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="faq-bot-avatar">
                <Bot size={20} color="#000" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', letterSpacing: '0.02em' }}>
                  NDti Assistant
                </div>
                <div style={{ fontSize: '0.75rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ width: '7px', height: '7px', background: '#22c55e', borderRadius: '50%', display: 'inline-block' }} />
                  <span>Online • Joinery & Art FAQ</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={handleReset}
                className="faq-bot-icon-btn"
                title="Reset conversation"
              >
                <RotateCcw size={15} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="faq-bot-icon-btn"
                aria-label="Close Assistant"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="faq-bot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`faq-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                <div className="faq-bubble-text">{msg.text}</div>
                <div className="faq-bubble-time">{msg.time}</div>
              </div>
            ))}

            {/* Interactive FAQs Pills */}
            <div style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>
                Frequently Asked Questions
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {FAQ_LIST.map(faq => (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => handleFaqClick(faq)}
                    className="faq-quick-btn"
                  >
                    <span>{faq.question}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Action Footer */}
          <div className="faq-bot-footer">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {onOpenQuoteModal && (
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); onOpenQuoteModal(); }}
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1, fontSize: '0.78rem', padding: '0.45rem 0.6rem' }}
                >
                  <Sparkles size={13} />
                  <span>Request Quote</span>
                </button>
              )}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ flex: 1, fontSize: '0.78rem', padding: '0.45rem 0.6rem', color: '#fff' }}
              >
                <Phone size={13} />
                <span>WhatsApp Live</span>
              </a>
            </div>

            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                className="faq-bot-input"
                placeholder="Ask about kitchens, materials, timelines..."
                value={inputText}
                onChange={e => setInputText(e.target.value)}
              />
              <button
                type="submit"
                className="faq-bot-send-btn"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        className="faq-bot-launcher"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open NDti Virtual Assistant"
        title="Open NDti Virtual Assistant"
      >
        {isOpen ? <X size={24} color="#000" /> : <Bot size={26} color="#000" />}
      </button>
    </div>
  );
};
