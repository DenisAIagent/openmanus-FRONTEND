import React from 'react';

const ChatModule = () => {
  const chatMessages = [
    {
      id: 1,
      type: 'system',
      content: 'Bienvenue dans MDMC Neura Orkestra. Comment puis-je vous aider aujourd\'hui?',
      timestamp: '14:32'
    },
    {
      id: 2,
      type: 'user',
      content: 'Quelles sont les tendances marketing pour les artistes émergents ce mois-ci?',
      timestamp: '14:33'
    },
    {
      id: 3,
      type: 'assistant',
      content: 'Selon nos analyses, les tendances marketing les plus efficaces pour les artistes émergents ce mois-ci sont:\n\n1. Collaborations avec créateurs de contenu sur TikTok\n2. Formats verticaux immersifs sur Instagram\n3. Playlists contextuelles sur Spotify\n4. Contenus "behind the scenes" authentiques\n\nSouhaitez-vous un rapport détaillé sur l\'une de ces tendances?',
      timestamp: '14:33'
    }
  ];

  return (
    <div className="card chat-module">
      <div className="chat-header">
        <h3 className="chat-title">
          <i className="icon-message-circle"></i>
          MDMC Neura Orkestra
        </h3>
        <div className="chat-actions">
          <button className="chat-action-btn">
            <i className="icon-maximize-2"></i>
          </button>
          <button className="chat-action-btn">
            <i className="icon-more-vertical"></i>
          </button>
        </div>
      </div>
      
      <div className="chat-messages">
        {chatMessages.map((message) => (
          <div key={message.id} className={`chat-message ${message.type}`}>
            {message.type === 'user' ? (
              <div className="user-avatar">
                <img src="/placeholder-avatar.jpg" alt="User" />
              </div>
            ) : message.type === 'assistant' ? (
              <div className="assistant-avatar">
                <div className="assistant-icon">
                  <i className="icon-cpu"></i>
                </div>
              </div>
            ) : null}
            
            <div className="message-content">
              <div className="message-bubble">
                {message.content}
              </div>
              <div className="message-meta">
                <span className="message-time">{message.timestamp}</span>
                {message.type === 'assistant' && (
                  <div className="message-actions">
                    <button className="message-action-btn">
                      <i className="icon-copy"></i>
                    </button>
                    <button className="message-action-btn">
                      <i className="icon-thumbs-up"></i>
                    </button>
                    <button className="message-action-btn">
                      <i className="icon-thumbs-down"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="chat-input">
        <div className="input-container">
          <input 
            type="text" 
            className="chat-input-field" 
            placeholder="Posez une question à MDMC Neura Orkestra..." 
          />
          <div className="input-actions">
            <button className="input-action-btn">
              <i className="icon-paperclip"></i>
            </button>
            <button className="input-action-btn send-btn">
              <i className="icon-send"></i>
            </button>
          </div>
        </div>
        <div className="input-suggestions">
          <button className="suggestion-chip">Analyser ma dernière campagne</button>
          <button className="suggestion-chip">Tendances marketing</button>
          <button className="suggestion-chip">Optimiser mon budget</button>
        </div>
      </div>
    </div>
  );
};

export default ChatModule;
