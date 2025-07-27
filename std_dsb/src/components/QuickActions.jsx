import React from 'react';

const ActionButton = ({ icon, text, bgColor, hoverBgColor }) => (
    <a href="#" className={`flex items-center justify-between px-3 py-3 sm:p-4 rounded-lg ${bgColor} ${hoverBgColor} transition-colors duration-200 w-full`}>
        <div className="flex items-center space-x-2 sm:space-x-3">
            {icon}
            <span className="font-medium text-xs sm:text-sm">{text}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
    </a>
);

const QuickActions = () => {
    const actions = [
        {
            text: 'Build Resume',
            bgColor: 'bg-blue-50',
            hoverBgColor: 'hover:bg-blue-100',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            text: 'Mock Interview',
            bgColor: 'bg-green-50',
            hoverBgColor: 'hover:bg-green-100',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            )
        },
        {
            text: 'Browse Jobs',
            bgColor: 'bg-purple-50',
            hoverBgColor: 'hover:bg-purple-100',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            text: 'AI Assistant',
            bgColor: 'bg-orange-50',
            hoverBgColor: 'hover:bg-orange-100',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        }
    ];
    return (
        <div className="bg-white px-4 py-4 sm:p-6 rounded-xl shadow-sm w-full">
            <h2 className="font-semibold text-base sm:text-lg mb-3">Quick Actions</h2>
            <div className="space-y-2 sm:space-y-3">
                {actions.map((action, index) => <ActionButton key={index} {...action} />)}
            </div>
        </div>
    );
};

export default QuickActions;