import React from 'react';

const StatCard = ({ icon, value, label, bgColor }) => {
  return (
    <div className="bg-white px-4 py-4 sm:px-5 sm:py-5 rounded-xl shadow-sm flex items-center space-x-3 sm:space-x-4 w-full">
      <div className={`${bgColor} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-bold">{value}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{label}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  const statItems = [
    {
      value: '12',
      label: 'Applications',
      bgColor: 'bg-blue-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      value: '5',
      label: 'Shortlisted',
      bgColor: 'bg-green-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: '3',
      label: 'Interviews',
      bgColor: 'bg-purple-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      value: '85',
      label: 'AI Score',
      bgColor: 'bg-orange-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {statItems.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Stats;