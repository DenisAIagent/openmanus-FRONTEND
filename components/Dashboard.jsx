import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import WelcomeCard from './dashboard/WelcomeCard';
import StatsWidget from './dashboard/StatsWidget';
import ActivityTimeline from './dashboard/ActivityTimeline';
import PerformanceChart from './dashboard/PerformanceChart';
import ChatModule from './dashboard/ChatModule';
import QuickActions from './dashboard/QuickActions';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        {/* Top Row */}
        <div className="welcome-section">
          <WelcomeCard />
        </div>
        
        <div className="stats-section">
          <StatsWidget />
        </div>
        
        {/* Middle Row */}
        <div className="charts-section">
          <PerformanceChart />
        </div>
        
        <div className="activity-section">
          <ActivityTimeline />
        </div>
        
        {/* Bottom Row */}
        <div className="chat-section">
          <ChatModule />
        </div>
        
        <div className="actions-section">
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
