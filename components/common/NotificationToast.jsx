import React from 'react';

const NotificationToast = ({ type, message, onClose }) => {
  const icons = {
    success: 'check-circle',
    error: 'alert-circle',
    warning: 'alert-triangle',
    info: 'info'
  };

  return (
    <div className={`notification-toast ${type}`}>
      <div className="toast-icon">
        <i className={`icon-${icons[type]}`}></i>
      </div>
      <div className="toast-content">
        <p className="toast-message">{message}</p>
      </div>
      <button className="toast-close" onClick={onClose}>
        <i className="icon-x"></i>
      </button>
    </div>
  );
};

export default NotificationToast;
