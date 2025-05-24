import React from 'react';

const StatsWidget = () => {
  const stats = [
    { label: 'Campagnes actives', value: '4', trend: '+2', icon: 'activity' },
    { label: 'ROAS moyen', value: '3.7x', trend: '+0.5', icon: 'trending-up' },
    { label: 'Engagement', value: '24.8%', trend: '+3.2%', icon: 'users' },
    { label: 'Conversion', value: '8.3%', trend: '+1.1%', icon: 'shopping-cart' }
  ];

  return (
    <div className="card stats-widget">
      <div className="stats-header">
        <h3 className="stats-title">Performance globale</h3>
        <div className="stats-period-selector">
          <select className="period-select">
            <option value="7d">7 derniers jours</option>
            <option value="30d" selected>30 derniers jours</option>
            <option value="90d">90 derniers jours</option>
          </select>
        </div>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">
              <i className={`icon-${stat.icon}`}></i>
            </div>
            <div className="stat-info">
              <span className="stat-label">{stat.label}</span>
              <div className="stat-value-container">
                <span className="stat-value">{stat.value}</span>
                <span className={`stat-trend ${parseFloat(stat.trend) >= 0 ? 'positive' : 'negative'}`}>
                  {stat.trend.startsWith('+') ? stat.trend : stat.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsWidget;
