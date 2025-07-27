import React from 'react';
import NotificationItem from './NotificationItem';

const notifications = [
  {
    title: 'Interview Scheduled',
    message: 'Wipro Technologies - March 18, 2:00 PM',
    time: '2 hours ago',
    type: 'reminder',
  },
  {
    title: 'Application Shortlisted',
    message: 'Infosys Limited - Systems Engineer',
    time: '1 day ago',
    type: 'update',
  },
  {
    title: 'New Drive Alert',
    message: 'Microsoft Campus Drive - Registration Open',
    time: '2 days ago',
    type: 'opportunity',
  },
];

const RecentNotifications = () => (
  <div className="bg-white px-4 py-4 sm:p-6 rounded-xl shadow-sm w-full">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
      <h2 className="font-semibold text-base sm:text-lg">Recent Notifications</h2>
      <a href="#" className="text-blue-600 text-sm font-medium">View All</a>
    </div>
    <div className="space-y-3 sm:space-y-4">
      {notifications.map((notification, idx) => (
        <NotificationItem key={idx} {...notification} />
      ))}
    </div>
  </div>
);

export default RecentNotifications;
