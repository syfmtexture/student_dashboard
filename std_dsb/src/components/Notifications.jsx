import React from 'react';
import NotificationItem from './NotificationItem';


const Notifications = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      title: 'Interview Reminder',
      message: 'Wipro Technologies interview tomorrow at 2:00 PM',
      time: '2 hours ago',
      type: 'reminder',
    },
    {
      title: 'Application Update',
      message: "You've been shorlisted for Infosys Systems Engineer role",
      time: '1 day ago',
      type: 'update',
    },
    {
      title: 'New Opportunity',
      message: 'Microsoft Campus Drive registration is now open',
      time: '2 days ago',
      type: 'opportunity',
    },
  ];

  return (
    <>
            <div className="fixed inset-0 backdrop-contrast-60 z-50" onClick={onClose}></div>
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gray-50 shadow-lg z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
      
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>
                <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {notifications.map((notification, index) => (
            <NotificationItem key={index} {...notification} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;