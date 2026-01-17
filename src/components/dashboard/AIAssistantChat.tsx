import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';
import './AIAssistantChat.css';

const AIAssistantChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "👋 Hello! I'm ZK FAM, your AI assistant. Ask me anything about ZK Ledger or web3."
        );
      }, 300);
    }
  }, [messages.length]);

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { type: 'bot', text, timestamp: Date.now() },
    ]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { type: 'user', text, timestamp: Date.now() },
    ]);
  };

  const getAIResponse = async (userMessage) => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    if (!API_KEY) {
      return 'AI service not configured. Missing API key.';
    }

    const API_ENDPOINT =
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `You are ZK FAM, an expert AI assistant for a decentralized academic credential platform called ZK Ledger.
Answer clearly and concisely.

User question: ${userMessage}`,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        console.error('Gemini API error:', err);
        return err?.error?.message || 'Gemini API error';
      }

      const data = await response.json();

      return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        'No response generated.'
      );
    } catch (err) {
      console.error('Fetch error:', err);
      return 'Connection error. Check console.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const message = inputValue.trim();
    addUserMessage(message);
    setInputValue('');
    setIsTyping(true);

    const reply = await getAIResponse(message);
    addBotMessage(reply);
    setIsTyping(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = async (question) => {
    addUserMessage(question);
    setIsTyping(true);
    const reply = await getAIResponse(question);
    addBotMessage(reply);
    setIsTyping(false);
  };

  const quickQuestions = [
    'What is ZK Ledger?',
    'How do Soulbound Tokens work?',
    'Explain IPFS in simple terms.',
    'What are the subscription plans?',
  ];

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-header">
        <div className="header-info">
          <div className="header-icon">
            <Bot size={20} color="white" />
          </div>
          <div>
            <h3 className="header-title">AI Assistant</h3>
            <p className="header-subtitle">Powered by Google Gemini</p>
          </div>
        </div>
      </div>

      <div className="ai-chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message-wrapper ${msg.type}`}>
            <div className={`message-bubble ${msg.type}`}>
              {msg.type === 'bot' && (
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <Sparkles size={16} style={{ color: '#22c55e', marginRight: 8 }} />
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
                    ZK FAM
                  </span>
                </div>
              )}
              {msg.text}
              <span className="message-timestamp">
                {new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message-wrapper assistant">
            <div className="typing-indicator">
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          </div>
        )}

        {messages.length === 1 && !isTyping && (
          <div className="quick-questions-container">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                className="quick-question-button"
                onClick={() => handleQuickQuestion(q)}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="ai-chat-input-area">
        <div className="input-wrapper">
          <textarea
            className="message-input"
            placeholder="Ask about ZK Ledger, web3, or IPFS..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            rows={1}
          />
          <button
            className="send-button"
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantChat;
