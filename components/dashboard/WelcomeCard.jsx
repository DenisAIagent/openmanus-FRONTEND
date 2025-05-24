import React from 'react';

const WelcomeCard = () => {
  return (
    <div className="card welcome-card">
      <div className="welcome-content">
        <h2 className="welcome-title">Bonjour Denis, prêt à booster votre prochaine campagne ?</h2>
        <p className="welcome-message">
          Votre dernière campagne a généré <span className="text-red">+27%</span> d'engagement. 
          Découvrez comment optimiser davantage avec nos recommandations IA.
        </p>
        <button className="btn btn-primary">
          <i className="icon-rocket"></i>
          Lancer une orchestration IA
        </button>
      </div>
      <div className="welcome-illustration">
        <div className="illustration-placeholder">
          {/* Placeholder for illustration */}
          <div className="pulse-animation"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
