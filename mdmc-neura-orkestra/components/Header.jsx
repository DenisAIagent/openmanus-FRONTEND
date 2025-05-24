import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-tagline">
          <h2>Conducting the Future of Music Marketing Intelligence</h2>
        </div>
        
        <div className="header-actions">
          <div className="language-selector">
            <select className="language-select">
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          
          <div className="notifications">
            <button className="notification-btn">
              <i className="icon-bell"></i>
              <span className="notification-badge">3</span>
            </button>
          </div>
          
          <div className="user-profile">
            <div className="user-avatar">
              <img src="/placeholder-avatar.jpg" alt="User Avatar" />
            </div>
            <div className="user-dropdown">
              <i className="icon-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
