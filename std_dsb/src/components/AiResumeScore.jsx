import React from 'react';

const AiResumeScore = () => {
  const score = 85;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">AI Resume Score</h2>
        <a href="#" className="text-blue-600 text-sm font-medium">Improve</a>
      </div>
      <div className="flex justify-center items-center my-6">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle className="text-gray-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
            <circle
              className="text-blue-600"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-800">{score}</span>
        </div>
      </div>
      <p className="text-center text-gray-600 text-sm mb-6">Your resume scores well! Consider adding more projects.</p>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">ATS Compatibility</span>
          <span className="font-semibold text-green-600">Excellent</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Skills Match</span>
          <span className="font-semibold text-green-600">Good</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Experience</span>
          <span className="font-semibold text-orange-500">Average</span>
        </div>
      </div>
    </div>
  );
};

export default AiResumeScore;