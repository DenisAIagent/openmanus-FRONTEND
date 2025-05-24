import React from 'react';

const Layout = ({ onLogout }) => {
  return (
    <div className="app-layout">
      <Sidebar onLogout={onLogout} />
      <div className="main-content">
        <Header onLogout={onLogout} />
        <main className="content-area">
          <Dashboard />
        </main>
        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-branding">
              <span className="footer-logo">MDMC</span>
              <span className="footer-powered">Powered by AI</span>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Mentions légales</a>
              <a href="#" className="footer-link">Confidentialité</a>
              <a href="#" className="footer-link">CGU</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
