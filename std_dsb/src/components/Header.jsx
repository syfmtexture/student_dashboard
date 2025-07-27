import React, { useState, useEffect } from 'react';
import Notifications from './Notifications';

const Header = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

    const toggleNotifications = () => {
    setNotificationsOpen(!isNotificationsOpen);
  };

  useEffect(() => {
    if (isNotificationsOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }

    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [isNotificationsOpen]);

  return (
    <>
      <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, John! Track your placement journey</p>
      </div>
      <div className="flex items-center space-x-4">
                <div className="relative" onClick={toggleNotifications} style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">3</span>
        </div>
        <span className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">       
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </span>
      </div>
          </header>
      <Notifications isOpen={isNotificationsOpen} onClose={toggleNotifications} />
    </>
  );
};

export default Header;