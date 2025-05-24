import React from 'react';

const PerformanceChart = () => {
  // Données fictives pour le graphique
  const chartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        name: 'ROAS',
        data: [2.1, 2.4, 2.8, 3.2, 3.5, 3.7]
      },
      {
        name: 'Engagement',
        data: [15.2, 17.8, 19.3, 21.5, 23.2, 24.8]
      },
      {
        name: 'Conversion',
        data: [4.5, 5.2, 6.1, 6.8, 7.5, 8.3]
      }
    ]
  };

  return (
    <div className="card performance-chart">
      <div className="chart-header">
        <h3 className="chart-title">Performance marketing</h3>
        <div className="chart-controls">
          <div className="chart-metrics">
            <button className="metric-btn active">ROAS</button>
            <button className="metric-btn">Engagement</button>
            <button className="metric-btn">Conversion</button>
          </div>
          <div className="chart-period">
            <button className="period-btn">1M</button>
            <button className="period-btn active">6M</button>
            <button className="period-btn">1A</button>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        {/* Placeholder pour le graphique - dans une implémentation réelle, 
            on utiliserait une bibliothèque comme Chart.js, Recharts ou D3 */}
        <div className="chart-placeholder">
          <div className="chart-axes">
            <div className="y-axis">
              {[0, 1, 2, 3, 4].map((val, i) => (
                <div key={i} className="axis-label">{val * 10}%</div>
              ))}
            </div>
            <div className="chart-area">
              {/* Simulation visuelle du graphique */}
              <div className="chart-line roas-line"></div>
              <div className="chart-line engagement-line"></div>
              <div className="chart-line conversion-line"></div>
              
              <div className="x-axis">
                {chartData.labels.map((month, i) => (
                  <div key={i} className="axis-label">{month}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color roas-color"></div>
          <span className="legend-label">ROAS</span>
          <span className="legend-value">3.7x</span>
        </div>
        <div className="legend-item">
          <div className="legend-color engagement-color"></div>
          <span className="legend-label">Engagement</span>
          <span className="legend-value">24.8%</span>
        </div>
        <div className="legend-item">
          <div className="legend-color conversion-color"></div>
          <span className="legend-label">Conversion</span>
          <span className="legend-value">8.3%</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
