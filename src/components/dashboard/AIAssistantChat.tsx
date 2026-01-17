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
          "👋 Hello! I'm ZK FAM, your decentralized storage assistant. Ask me your mind"
        );
      }, 300);
    }
  }, [messages.length]);

  const addBotMessage = (text) => {
    setMessages((prev) => [...prev, { type: 'bot', text, timestamp: Date.now() }]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { type: 'user', text, timestamp: Date.now() }]);
  };

  // ✅ FULL LOGIC FROM CHATBOT #1
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

 // === PLATFORM OVERVIEW ===
if (message.includes('what is zk ledger') || message.includes('about zk ledger')) {
  return "ZK Ledger is a decentralized platform for issuing, managing, and verifying tamper-proof academic credentials using blockchain and Soulbound Tokens.";
}

if (message.includes('zk ledger overview')) {
  return "ZK Ledger enables secure, verifiable, and non-transferable academic credentials on blockchain.";
}

if (message.includes('problem zk ledger solves')) {
  return "ZK Ledger solves credential fraud, forgery, and unverifiable academic records.";
}

// === STUDENTS ===
if (message.includes('student access')) {
  return "Students connect their wallet to view all issued academic credentials.";
}

if (message.includes('student free')) {
  return "Students get free unlimited access forever.";
}

if (message.includes('student dashboard')) {
  return "The student dashboard displays all credentials, access history, and sharing options.";
}

if (message.includes('credential showcase')) {
  return "ZK Ledger provides a 3D interactive credential showcase with Grid, Stack, and Focus views.";
}

if (message.includes('share credential')) {
  return "Students can share credentials via QR codes or time-limited links.";
}

if (message.includes('audit log student')) {
  return "Students can view complete audit logs of credential access.";
}

// === INSTITUTIONS ===
if (message.includes('institution issue')) {
  return "Authorized institutions can issue blockchain-verified credentials to students.";
}

if (message.includes('institution dashboard')) {
  return "Institutions manage issued credentials and registered students via a dashboard.";
}

if (message.includes('institution revoke')) {
  return "Institutions can revoke credentials, and revocation is recorded on-chain.";
}

if (message.includes('institution subscription')) {
  return "Institutions require a paid subscription to issue credentials.";
}

if (message.includes('institution authorization')) {
  return "Institutions must be authorized by an admin before issuing credentials.";
}

// === EMPLOYERS / VERIFIERS ===
if (message.includes('verify credential')) {
  return "Employers can instantly verify credentials using a token ID or QR code.";
}

if (message.includes('employer free')) {
  return "Employers get 3 free verifications before requiring a subscription.";
}

if (message.includes('verification proof')) {
  return "Verification includes blockchain proof and credential history.";
}

if (message.includes('verifier access')) {
  return "Verification does not require authentication.";
}

// === ADMIN ===
if (message.includes('admin role')) {
  return "Admins authorize institutions, manage subscriptions, and monitor system health.";
}

if (message.includes('approve institution')) {
  return "Admins review and approve institution authorization requests.";
}

if (message.includes('promo codes')) {
  return "Admins manage promo codes and subscription discounts.";
}

if (message.includes('system health')) {
  return "Admins monitor blockchain, IPFS, database, and contract status.";
}

// === BLOCKCHAIN ===
if (message.includes('blockchain')) {
  return "ZK Ledger uses Ethereum blockchain for immutable credential records.";
}

if (message.includes('ethereum')) {
  return "Ethereum Sepolia Testnet is used for credential minting and verification.";
}

if (message.includes('sepolia')) {
  return "Sepolia is an Ethereum testnet with free test ETH for development.";
}

if (message.includes('chain id')) {
  return "Sepolia Chain ID is 11155111.";
}

// === SMART CONTRACT ===
if (message.includes('smart contract')) {
  return "AcademicCredentials.sol handles credential issuance, revocation, and authorization.";
}

if (message.includes('soulbound')) {
  return "Soulbound Tokens are non-transferable NFTs bound permanently to a student wallet.";
}

if (message.includes('erc 721')) {
  return "Credentials are implemented using ERC-721 with transfer restrictions.";
}

if (message.includes('revoke credential')) {
  return "Revoked credentials remain visible but marked invalid on-chain.";
}

// === IPFS ===
if (message.includes('ipfs')) {
  return "IPFS stores credential documents in a decentralized and tamper-proof manner.";
}

if (message.includes('pinata')) {
  return "Pinata is used as the IPFS pinning provider.";
}

if (message.includes('document storage')) {
  return "Documents are stored off-chain on IPFS, not on blockchain.";
}

if (message.includes('ipfs hash')) {
  return "Each document is identified by an immutable IPFS hash.";
}

// === SHARING ===
if (message.includes('share link')) {
  return "Share links can be time-limited from 1 hour to 30 days.";
}

if (message.includes('qr code')) {
  return "QR codes allow instant offline and online credential verification.";
}

if (message.includes('access logs')) {
  return "All access attempts are logged and auditable.";
}

if (message.includes('revoke share')) {
  return "Share links can be revoked at any time.";
}

// === DATABASE ===
if (message.includes('supabase')) {
  return "Supabase provides PostgreSQL database with Row Level Security.";
}

if (message.includes('row level security')) {
  return "RLS ensures users can only access permitted records.";
}

if (message.includes('credentials table')) {
  return "The credentials table stores token IDs, student addresses, and metadata.";
}

// === SECURITY ===
if (message.includes('security')) {
  return "Security is enforced via blockchain immutability, RLS, and wallet authentication.";
}

if (message.includes('reentrancy')) {
  return "Smart contracts include reentrancy protection.";
}

if (message.includes('tamper proof')) {
  return "Credentials cannot be altered once issued.";
}

// === WALLET ===
if (message.includes('wallet')) {
  return "Wallets are used for identity, ownership, and access control.";
}

if (message.includes('metamask')) {
  return "MetaMask is used to connect wallets and sign transactions.";
}

if (message.includes('private key')) {
  return "Private keys must be kept secure. Loss is irreversible.";
}

// === SUBSCRIPTIONS ===
if (message.includes('pricing')) {
  return "Institutions have Basic, Pro, and Enterprise subscription plans.";
}

if (message.includes('basic plan')) {
  return "Basic plan allows 100 credentials per month.";
}

if (message.includes('pro plan')) {
  return "Pro plan allows 500 credentials per month with advanced analytics.";
}

if (message.includes('enterprise plan')) {
  return "Enterprise plan offers unlimited credentials and custom integrations.";
}

// === DEPLOYMENT ===
if (message.includes('contract address')) {
  return "The smart contract is deployed on Ethereum Sepolia Testnet.";
}

if (message.includes('etherscan')) {
  return "Credentials can be viewed on Etherscan via the contract address.";
}

// === TROUBLESHOOTING ===
if (message.includes('metamask not connecting')) {
  return "Ensure MetaMask is unlocked and set to Sepolia Testnet.";
}

if (message.includes('transaction failed')) {
  return "Check ETH balance, gas limit, and institution authorization.";
}

if (message.includes('ipfs upload failed')) {
  return "Verify file size, internet connection, and Pinata credentials.";
}

// === ROADMAP ===
if (message.includes('roadmap')) {
  return "Roadmap includes multi-chain support, APIs, mobile app, and analytics.";
}

if (message.includes('future features')) {
  return "Future plans include AI fraud detection and SIS integrations.";
}

// === DEFAULT ===
return "Ask about ZK Ledger, credentials, verification, Soulbound Tokens, IPFS, blockchain, or subscriptions.";

  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      addBotMessage(response);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    addUserMessage(question);
    setIsTyping(true);
    setTimeout(() => {
      const response = getAIResponse(question);
      addBotMessage(response);
      setIsTyping(false);
    }, 700);
  };

  const quickQuestions = [
    'What is STORIUM?',
    'Why decentralized storage?',
    'How does IPFS work?',
    'How does access control work?',
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
            <p className="header-subtitle">Decentralized storage assistant</p>
          </div>
        </div>
      </div>

      <div className="ai-chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message-wrapper ${msg.type}`}>
            <div className={`message-bubble ${msg.type}`}>
              {msg.type === 'bot' && (
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <Sparkles size={16} style={{ color: '#22c55e', marginRight: '8px' }} />
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>STORIUM AI</span>
                </div>
              )}
              {msg.text}
              <span className="message-timestamp">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message-wrapper assistant">
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        )}

        {messages.length === 1 && !isTyping && (
          <div className="quick-questions-container">
            {quickQuestions.map((q, i) => (
              <button key={i} className="quick-question-button" onClick={() => handleQuickQuestion(q)}>
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
            placeholder="Ask about decentralized storage, IPFS, or Ethereum…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
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
