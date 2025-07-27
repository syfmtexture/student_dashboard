import React from 'react';

const ApplicationItem = ({ logo, title, company, status, time, statusColor }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Shortlisted':
        return 'bg-green-100 text-green-800';
      case 'Interview Scheduled':
        return 'bg-sky-100 text-sky-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLogoClasses = (color) => {
    switch (color) {
      case 'blue-600':
        return 'bg-blue-600';
      case 'blue-500':
        return 'bg-blue-500';
      case 'purple-600':
        return 'bg-purple-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
      <div className="flex items-center space-x-4">
        <div className={`${getLogoClasses(logo.color)} text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm`}>{logo.text}</div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
      <div className="text-right">
        <span className={`inline-flex items-center justify-center whitespace-nowrap ${getStatusClasses(status)} text-xs font-semibold px-2.5 py-1 rounded-full min-w-[90px]`}>{status}</span>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
};

const RecentApplications = () => {
  const applications = [
    { logo: { text: 'TCS', color: 'blue-600' }, title: 'Software Engineer', company: 'Tata Consultancy Services', status: 'Under Review', time: 'Applied 2 days ago' },
    { logo: { text: 'INF', color: 'blue-500' }, title: 'Systems Engineer', company: 'Infosys Limited', status: 'Shortlisted', time: 'Applied 5 days ago' },
    { logo: { text: 'WIP', color: 'purple-600' }, title: 'Associate Consultant', company: 'Wipro Technologies', status: 'Interview Scheduled', time: 'Applied 1 week ago' }
  ];

  return (
    <div className="bg-white px-4 py-4 sm:p-6 rounded-xl shadow-sm w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="font-semibold text-base sm:text-lg">Recent Applications</h2>
        <a href="#" className="text-blue-600 text-sm font-medium">View All</a>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {applications.map((app, index) => <ApplicationItem key={index} {...app} />)}
      </div>
    </div>
  );
};

export default RecentApplications;