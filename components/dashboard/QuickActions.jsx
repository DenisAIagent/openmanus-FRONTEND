import React from 'react';

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: 'Importer un brief',
      description: 'Téléchargez un brief ou importez depuis Google Docs',
      icon: 'upload',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Générer une recommandation',
      description: 'Créez une stratégie marketing basée sur l\'IA',
      icon: 'zap',
      color: 'red'
    },
    {
      id: 3,
      title: 'Exporter un rapport',
      description: 'PDF, Excel ou présentation PowerPoint',
      icon: 'file-text',
      color: 'green'
    },
    {
      id: 4,
      title: 'Simuler une campagne',
      description: 'Testez différents scénarios et budgets',
      icon: 'trending-up',
      color: 'purple'
    }
  ];

  return (
    <div className="card quick-actions">
      <div className="actions-header">
        <h3 className="actions-title">Actions rapides</h3>
      </div>
      
      <div className="actions-grid">
        {actions.map((action) => (
          <div key={action.id} className={`action-card ${action.color}`}>
            <div className="action-icon">
              <i className={`icon-${action.icon}`}></i>
            </div>
            <div className="action-content">
              <h4 className="action-title">{action.title}</h4>
              <p className="action-description">{action.description}</p>
            </div>
            <div className="action-arrow">
              <i className="icon-chevron-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
