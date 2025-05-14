import React from 'react';

const Assessments = () => {
  const mockAssessments = [
    { title: 'React Basics', date: '2025-05-01', score: '85%' },
    { title: 'JavaScript Advanced', date: '2025-04-28', score: '90%' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Assessments</h2>
      <ul className="space-y-3">
        {mockAssessments.map((a, index) => (
          <li key={index} className="border p-3 rounded shadow-sm bg-white">
            <p className="font-medium">{a.title}</p>
            <p className="text-sm text-gray-600">Date: {a.date}</p>
            <p className="text-sm text-green-600">Score: {a.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assessments;
