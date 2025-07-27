import React from 'react';

const DriveItem = ({ title, description, date, time, location, registered }) => (
  <div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {registered ? (
        <span className="text-green-600 text-sm font-semibold">Registered</span>
      ) : (
        <a href="#" className="text-blue-600 text-sm font-semibold">Register</a>
      )}
    </div>
    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
      <div className="flex items-center space-x-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <span>{date}</span>
      </div>
      <div className="flex items-center space-x-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>{time}</span>
      </div>
      <div className="flex items-center space-x-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>{location}</span>
      </div>
    </div>
  </div>
);

const UpcomingDrives = () => {
  const drives = [
    { title: 'Microsoft Campus Drive', description: 'Software Development Engineer roles', date: 'March 15, 2024', time: '9:00 AM', location: 'Main Auditorium', registered: false },
    { title: 'Amazon Recruitment', description: 'SDE-1 & Business Analyst positions', date: 'March 20, 2024', time: '10:00 AM', location: 'Virtual', registered: true }
  ];

  return (
    <div className="bg-white px-4 py-4 sm:p-6 rounded-xl shadow-sm w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="font-semibold text-base sm:text-lg">Upcoming Placement Drives</h2>
        <a href="#" className="text-blue-600 text-sm font-medium">View Calendar</a>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {drives.map((drive, index) => <DriveItem key={index} {...drive} />)}
      </div>
    </div>
  );
};

export default UpcomingDrives;