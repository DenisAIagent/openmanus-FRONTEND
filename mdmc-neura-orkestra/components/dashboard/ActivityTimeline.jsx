import React from 'react';

const ActivityTimeline = () => {
  const activities = [
    {
      id: 1,
      type: 'orchestration',
      title: 'Orchestration IA lancée',
      description: 'Campagne "Summer Vibes 2025" - Génération de recommandations',
      time: 'Il y a 35 minutes',
      status: 'completed',
      icon: 'zap'
    },
    {
      id: 2,
      type: 'analysis',
      title: 'Analyse de performance terminée',
      description: 'Rapport détaillé disponible pour "Spring Release 2025"',
      time: 'Il y a 2 heures',
      status: 'completed',
      icon: 'bar-chart'
    },
    {
      id: 3,
      type: 'content',
      title: 'Contenu généré',
      description: '12 visuels et 8 textes créés pour Instagram et TikTok',
      time: 'Il y a 4 heures',
      status: 'completed',
      icon: 'image'
    },
    {
      id: 4,
      type: 'import',
      title: 'Import de données',
      description: 'Données Spotify et Apple Music synchronisées',
      time: 'Aujourd\'hui, 10:24',
      status: 'completed',
      icon: 'download'
    },
    {
      id: 5,
      type: 'scheduled',
      title: 'Analyse programmée',
      description: 'Comparaison des performances cross-plateformes',
      time: 'Demain, 09:00',
      status: 'scheduled',
      icon: 'clock'
    }
  ];

  return (
    <div className="card activity-timeline">
      <div className="timeline-header">
        <h3 className="timeline-title">Activités récentes</h3>
        <button className="btn btn-outline btn-sm">
          <i className="icon-filter"></i>
          Filtrer
        </button>
      </div>
      
      <div className="timeline-content">
        {activities.map((activity) => (
          <div key={activity.id} className={`timeline-item ${activity.status}`}>
            <div className="timeline-icon">
              <i className={`icon-${activity.icon}`}></i>
            </div>
            <div className="timeline-details">
              <div className="timeline-info">
                <h4 className="timeline-title">{activity.title}</h4>
                <p className="timeline-description">{activity.description}</p>
              </div>
              <div className="timeline-meta">
                <span className="timeline-time">{activity.time}</span>
                {activity.status === 'scheduled' && (
                  <span className="timeline-badge">Programmé</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="timeline-footer">
        <button className="btn btn-text">
          Voir toutes les activités
          <i className="icon-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ActivityTimeline;
