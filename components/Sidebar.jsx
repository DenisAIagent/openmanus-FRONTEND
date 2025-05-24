import React from 'react';

const Sidebar = ({ onLogout }) => {
  const menuItems = [
    { icon: 'layout-dashboard', label: 'Dashboard', active: true },
    { icon: 'rocket', label: 'Campagnes IA', active: false },
    { icon: 'file-text', label: 'Génération de contenu', active: false },
    { icon: 'bar-chart', label: 'Analyse & Rapports', active: false },
    { icon: 'settings', label: 'Paramètres', active: false },
    { icon: 'help-circle', label: 'Support', active: false },
  ];

  return (
    <aside className="sidebar bg-darker">
      <div className="sidebar-logo">
        <div className="logo-container">
          <div className="play-button">
            <div className="triangle"></div>
          </div>
          <span className="logo-text">MDMC</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <a href="#" className="nav-link">
                <span className="nav-icon">
                  <i className={`icon-${item.icon}`}></i>
                </span>
                <span className="nav-label">{item.label}</span>
                {item.active && <span className="active-indicator"></span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">
            <img src="/placeholder-avatar.jpg" alt="User Avatar" />
          </div>
          <div className="user-details">
            <span className="user-name">Denis</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          <i className="icon-log-out"></i>
          <span className="logout-text">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
