import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulation d'une connexion
    setTimeout(() => {
      setIsLoading(false);
      // Redirection vers le dashboard en cas de succès
      // window.location.href = '/dashboard';
      
      // Pour la démo, on simule une erreur
      setError('Fonctionnalité en cours de développement. Veuillez réessayer plus tard.');
    }, 1500);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo-container">
          <div className="play-button">
            <div className="triangle"></div>
          </div>
          <span className="logo-text">MDMC</span>
        </div>
        
        <h1 className="login-title">Neura Orkestra</h1>
        <h2 className="login-subtitle">Conducting the Future of Music Marketing Intelligence</h2>
        
        {error && (
          <div className="login-error">
            <i className="icon-alert-circle"></i>
            <span>{error}</span>
          </div>
        )}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password" className="input-label">Mot de passe</label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="login-options">
            <div className="remember-me">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Se souvenir de moi</label>
            </div>
            <a href="#" className="forgot-password">Mot de passe oublié?</a>
          </div>
          
          <button
            type="submit"
            className={`btn btn-primary login-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              'Se connecter'
            )}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Vous n'avez pas de compte? <a href="#" className="signup-link">Contactez-nous</a></p>
          <p className="copyright">© 2025 MDMC. Tous droits réservés.</p>
        </div>
      </div>
      
      <div className="login-background">
        <div className="login-illustration">
          {/* Illustration ou image de fond */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
