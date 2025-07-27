import React from 'react';

const NotificationItem = ({ title, message, time, type }) => {
  const getHighlightColor = (type) => {
    switch (type) {
      case 'reminder':
        return 'bg-sky-500';
      case 'update':
        return 'bg-green-500';
      case 'opportunity':
        return 'bg-blue-600';
      default:
        return 'bg-gray-500';
    }
  };

  const getIconContent = (type) => {
    switch (type) {
      case 'reminder':
        return 'WIP';  // Wipro icon
      case 'update':
        return 'INF';  // Infosys icon
      case 'opportunity':
        return 'TCS';  // TCS icon
      default:
        return '';
    }
  };

  const getIconBgColor = (type) => {
    switch (type) {
      case 'reminder':
        return 'bg-sky-500';
      case 'update':
        return 'bg-green-500';
      case 'opportunity':
        return 'bg-blue-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-white rounded-lg p-4 relative mb-4">
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${getHighlightColor(type)}`}></div>
      <div className={`flex-shrink-0 w-12 h-12 ${getIconBgColor(type)} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
        {getIconContent(type)}
      </div>
      <div className="flex-grow">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{message}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
};

export default NotificationItem;