import React from 'react';

const ProfileCompletion = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Profile Completion</h2>
        <span className="font-semibold text-blue-600">75% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M20 6 9 17l-5-5"></path></svg>
          </div>
          <span>Resume Uploaded</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M20 6 9 17l-5-5"></path></svg>
          </div>
          <span>Academic Details</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-100 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="6" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <span className="text-gray-500">Skills Assessment</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;