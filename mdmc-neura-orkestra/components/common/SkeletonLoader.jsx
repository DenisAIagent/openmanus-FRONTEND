import React from 'react';

const SkeletonLoader = ({ type }) => {
  switch (type) {
    case 'card':
      return (
        <div className="skeleton-card">
          <div className="skeleton skeleton-header"></div>
          <div className="skeleton skeleton-content"></div>
          <div className="skeleton skeleton-content"></div>
          <div className="skeleton skeleton-footer"></div>
        </div>
      );
    
    case 'stats':
      return (
        <div className="skeleton-stats">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton-stats-grid">
            <div className="skeleton-stat-item">
              <div className="skeleton skeleton-icon"></div>
              <div className="skeleton skeleton-label"></div>
              <div className="skeleton skeleton-value"></div>
            </div>
            <div className="skeleton-stat-item">
              <div className="skeleton skeleton-icon"></div>
              <div className="skeleton skeleton-label"></div>
              <div className="skeleton skeleton-value"></div>
            </div>
            <div className="skeleton-stat-item">
              <div className="skeleton skeleton-icon"></div>
              <div className="skeleton skeleton-label"></div>
              <div className="skeleton skeleton-value"></div>
            </div>
            <div className="skeleton-stat-item">
              <div className="skeleton skeleton-icon"></div>
              <div className="skeleton skeleton-label"></div>
              <div className="skeleton skeleton-value"></div>
            </div>
          </div>
        </div>
      );
    
    case 'chart':
      return (
        <div className="skeleton-chart">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-controls"></div>
          <div className="skeleton skeleton-chart-area"></div>
          <div className="skeleton skeleton-legend"></div>
        </div>
      );
    
    case 'timeline':
      return (
        <div className="skeleton-timeline">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton-timeline-items">
            <div className="skeleton-timeline-item">
              <div className="skeleton skeleton-icon"></div>
              <div className="skeleton-item-content">
                <div className="skeleton skeleton-item-title"></div>
                <div className="skeleton skeleton-item-desc"></div>
              </div>
            </div>
            <div className="skeleton-timeline-item">
              <div className="skeleton skeleton-icon"></div>
              <div className="skeleton-item-content">
                <div className="skeleton skeleton-item-title"></div>
                <div className="skeleton skeleton-item-desc"></div>
              </div>
            </div>
            <div className="skeleton-timeline-item">
              <div className="skeleton skeleton-icon"></div>
              <div className="skeleton-item-content">
                <div className="skeleton skeleton-item-title"></div>
                <div className="skeleton skeleton-item-desc"></div>
              </div>
            </div>
          </div>
        </div>
      );
    
    default:
      return (
        <div className="skeleton"></div>
      );
  }
};

export default SkeletonLoader;
