import React, { useState } from 'react';
import '../styles/Chatbot.css';
import axios from 'axios';




const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Bonjour! Comment puis-je vous aider ?' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Merci pour votre message.' }]);
    }, 600);
  };

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chat-window">
          <div className="chat-header">Chat Crédit Habitat</div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Écrivez un message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Envoyer</button>
          </div>
        </div>
      )}

      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;
