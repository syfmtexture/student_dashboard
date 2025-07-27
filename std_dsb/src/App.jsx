import React from 'react';
import Header from './components/Header';
import ProfileCompletion from './components/ProfileCompletion';
import Stats from './components/Stats';
import RecentApplications from './components/RecentApplications';
import UpcomingDrives from './components/UpcomingDrives';
import AiResumeScore from './components/AiResumeScore';
import QuickActions from './components/QuickActions';
import RecentNotifications from './components/RecentNotifications';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="px-2 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 max-w-7xl mx-auto animate-fadeIn w-full">
        <Header />
        <main className="space-y-4 mt-4">
          <ProfileCompletion />
          <Stats />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6">
            <div className="xl:col-span-2 space-y-4 xl:space-y-6">
              <RecentApplications />
              <UpcomingDrives />
            </div>
            <div className="space-y-4 xl:space-y-6">
              <AiResumeScore />
              <QuickActions />
              <RecentNotifications />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
