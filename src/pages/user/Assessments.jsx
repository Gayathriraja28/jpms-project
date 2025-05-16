import React, { useState } from 'react';

const Assessments = () => {
  const mockAssessments = [
    {
      title: 'React Basics',
      date: '2025-05-01',
      scores: {
      
        mcqs: 90,
        programming: 85,
      },
    },
    {
      title: 'JavaScript Advanced',
      date: '2025-04-28',
      scores: {
       
        mcqs: 95,
        programming: 88,
      },
    },
    {
      title: 'HTML & CSS Fundamentals',
      date: '2025-04-20',
      scores: {
        
        mcqs: 75,
        programming: 72,
      },
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Assessments</h2>
      <ul className="space-y-4">
        {mockAssessments.map((a, index) => (
          <li key={index} className="border p-4 rounded shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-lg font-semibold">{a.title}</p>
                <p className="text-sm text-gray-600">Date: {a.date}</p>
              </div>
              <button
                onClick={() => toggleDetails(index)}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {expandedIndex === index ? 'Hide Score' : 'View Score'}
              </button>
            </div>

            {expandedIndex === index && (
              <div className="mt-4 space-y-3">
                {Object.entries(a.scores).map(([section, score]) => (
                  <div key={section}>
                    <p className="text-sm font-medium capitalize mb-1">{section}:</p>
                    <div className="w-full bg-gray-200 rounded h-4">
                      <div
                        className="h-4 rounded bg-green-500 text-xs text-white text-center"
                        style={{ width: `${score}%` }}
                      >
                        {score}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assessments;
