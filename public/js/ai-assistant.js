// Floating AI Concierge Widget for NDti & IanArt
(function() {
  'use strict';

  // Inject HTML structure if not already present
  if (document.getElementById('ai-assistant-widget')) return;

  var widgetHTML = `
    <div id="ai-assistant-widget">
      <!-- Launcher Button -->
      <button class="ai-launcher-btn" id="ai-launcher-btn" aria-label="Chat with NDti &amp; IanArt" title="Live Chat &amp; Assistance">
        <div class="ai-launcher-icon">
          <i class="fa-solid fa-comments"></i>
        </div>
      </button>

      <!-- Chat Window -->
      <div class="ai-chat-window" id="ai-chat-window">
        <!-- Header -->
        <div class="ai-chat-header">
          <div class="ai-header-info">
            <div class="ai-avatar">
              <i class="fa-solid fa-comments"></i>
            </div>
            <div>
              <h4 class="ai-title">Ian AI</h4>
              <span class="ai-status">
                <span class="ai-status-dot"></span> Online &amp; Ready
              </span>
            </div>
          </div>
          <button class="ai-close-btn" id="ai-close-btn" aria-label="Close Chat">&times;</button>
        </div>

        <!-- WhatsApp Direct Contact Bar -->
        <div class="ai-whatsapp-bar">
          <a href="https://wa.me/27838008834?text=Hi%20NDti%20%26%20IanArt!%20I'd%20love%20to%20chat%20about%20a%20custom%20bespoke%20joinery%20project." target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp" style="font-size: 16px;"></i>
            <span>Chat Directly on WhatsApp (+27 83 800 8834)</span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 11px;"></i>
          </a>
        </div>

        <!-- Messages Area -->
        <div class="ai-chat-messages" id="ai-chat-messages">
          <!-- Bot Greeting -->
          <div class="ai-msg bot">
            Hello! I am <strong>Ian AI</strong>. Welcome to <strong>NDti &amp; IanArt</strong> – <em>The place where joinery &amp; art meet</em>. Choose a question below or ask me anything about our bespoke joinery services:
          </div>

          <!-- 3 Quick Question Chips -->
          <div class="ai-chips-container" id="ai-chips-container">
            <button class="ai-chip-btn" data-q="1">
              <span>What bespoke joinery services do you offer?</span>
              <span class="ai-chip-arrow">&rarr;</span>
            </button>
            <button class="ai-chip-btn" data-q="2">
              <span>How does your 3D Render to Reality process work?</span>
              <span class="ai-chip-arrow">&rarr;</span>
            </button>
            <button class="ai-chip-btn" data-q="3">
              <span>How can I request a quote or design consultation?</span>
              <span class="ai-chip-arrow">&rarr;</span>
            </button>
          </div>
        </div>

        <!-- Input Bar -->
        <form class="ai-chat-input-bar" id="ai-chat-form">
          <input type="text" class="ai-chat-input" id="ai-chat-input" placeholder="Ask about kitchens, bedrooms, quotes..." autocomplete="off" />
          <button type="submit" class="ai-send-btn" aria-label="Send message">
            <i class="fa-solid fa-paper-plane" style="font-size: 13px;"></i>
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', widgetHTML);

  var launcher = document.getElementById('ai-launcher-btn');
  var chatWindow = document.getElementById('ai-chat-window');
  var closeBtn = document.getElementById('ai-close-btn');
  var messagesContainer = document.getElementById('ai-chat-messages');
  var chatForm = document.getElementById('ai-chat-form');
  var chatInput = document.getElementById('ai-chat-input');
  var chipsContainer = document.getElementById('ai-chips-container');

  var answers = {
    1: "We specialize in custom bespoke joinery for luxury spaces: <strong>Designer Kitchens</strong>, <strong>Bedroom Cupboards &amp; Walk-In Closets</strong>, <strong>Custom Bathroom Vanities</strong>, <strong>Living Spaces &amp; TV Units</strong>, <strong>Studies &amp; Home Offices</strong>, and <strong>Wine Cellars &amp; Bars</strong>. Explore our <a href='services-style-2.html' style='color:#d2a073;text-decoration:underline;'>Services Page</a> or our <a href='gallery.html' style='color:#d2a073;text-decoration:underline;'>Portfolio</a>.",
    2: "Our methodology follows 3 proven stages: <strong>1) Concept</strong> — Listening to your vision and collaborating with interior designers to create photorealistic 3D renderings; <strong>2) Design &amp; Craftsmanship</strong> — Precision manufacturing using premium materials and hardware; and <strong>3) Turnkey Installation</strong> — Seamless fitting by our experienced in-house artisans. Check out our <a href='index.html#projects-carousel' style='color:#d2a073;text-decoration:underline;'>Render vs Reality Portfolio Showcase</a>!",
    3: "You can easily request a consultation or free quotation! Call us at <a href='tel:+27838008834' style='color:#d2a073;font-weight:bold;'>083 800 8834</a>, email <a href='mailto:info@ianartndti.co.za' style='color:#d2a073;'>info@ianartndti.co.za</a>, or visit our <a href='contact.html' style='color:#d2a073;text-decoration:underline;'>Contact Page</a>. You can also message us right now on <a href='https://wa.me/27838008834?text=Hi%20NDti%20%26%20IanArt!%20I%20would%20like%20a%20consultation.' target='_blank' style='color:#25d366;font-weight:600;'>WhatsApp &rarr;</a>"
  };

  // Toggle Window
  launcher.addEventListener('click', function() {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      chatInput.focus();
    }
  });

  closeBtn.addEventListener('click', function() {
    chatWindow.classList.remove('open');
  });

  // Handle Question Chips
  chipsContainer.addEventListener('click', function(e) {
    var chip = e.target.closest('.ai-chip-btn');
    if (!chip) return;

    var qId = chip.getAttribute('data-q');
    var questionText = chip.querySelector('span:first-child').textContent;

    // Append User message
    appendMessage(questionText, 'user');

    // Remove chips once clicked
    chipsContainer.style.display = 'none';

    // Bot typing simulation
    showTypingAndRespond(answers[qId]);
  });

  // Handle Freeform Input
  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var query = chatInput.value.trim();
    if (!query) return;

    appendMessage(query, 'user');
    chatInput.value = '';

    if (chipsContainer) chipsContainer.style.display = 'none';

    var lower = query.toLowerCase();
    var response = '';

    if (lower.includes('kitchen') || lower.includes('cupboard') || lower.includes('bathroom') || lower.includes('bedroom') || lower.includes('vanit') || lower.includes('office') || lower.includes('study') || lower.includes('wine') || lower.includes('service')) {
      response = answers[1];
    } else if (lower.includes('process') || lower.includes('render') || lower.includes('reality') || lower.includes('step') || lower.includes('timeline') || lower.includes('how do you work')) {
      response = answers[2];
    } else if (lower.includes('quote') || lower.includes('price') || lower.includes('cost') || lower.includes('contact') || lower.includes('phone') || lower.includes('location') || lower.includes('address') || lower.includes('book')) {
      response = answers[3];
    } else if (lower.includes('where') || lower.includes('located') || lower.includes('address') || lower.includes('blackheath') || lower.includes('cape town')) {
      response = "Our workshop and offices are located at <strong>Unit 2, 15 Muscat Road, Saxenburg Park 1, Blackheath, Cape Town</strong>. We service clients across Cape Town, the Western Cape, and nationwide! You can reach us at <strong>083 800 8834</strong>.";
    } else if (lower.includes('whatsapp')) {
      response = "You can chat with our joinery specialists directly on WhatsApp here: <a href='https://wa.me/27838008834?text=Hi%20NDti%20%26%20IanArt!%20I%20have%20an%20inquiry.' target='_blank' style='color:#25d366;font-weight:bold;'>Open WhatsApp &rarr;</a>";
    } else {
      response = "Thank you for reaching out to NDti &amp; IanArt! For bespoke specifications, custom joinery designs, or quotation inquiries, our team is available at <a href='tel:+27838008834' style='color:#d2a073;'>083 800 8834</a> or via <a href='https://wa.me/27838008834?text=Hi%20NDti%20%26%20IanArt!' target='_blank' style='color:#25d366;font-weight:600;'>WhatsApp</a>. You can also view our <a href='gallery.html' style='color:#d2a073;'>Portfolio</a> or visit our <a href='contact.html' style='color:#d2a073;'>Contact Page</a>.";
    }

    showTypingAndRespond(response);
  });

  function appendMessage(html, type) {
    var msgDiv = document.createElement('div');
    msgDiv.className = 'ai-msg ' + type;
    msgDiv.innerHTML = html;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function showTypingAndRespond(responseHTML) {
    var typingDiv = document.createElement('div');
    typingDiv.className = 'ai-msg bot';
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.innerHTML = '<span style="opacity:0.7;font-style:italic;">Crafting response...</span>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(function() {
      var indicator = document.getElementById('ai-typing-indicator');
      if (indicator) indicator.remove();
      appendMessage(responseHTML, 'bot');
    }, 600);
  }

})();
