import React, { useEffect, useState } from 'react';

const ViewApplicants = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Replace with your API call
    setApplicants([
      { id: 1, name: 'John Doe', email: 'john@example.com', jobTitle: 'Frontend Developer' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', jobTitle: 'Backend Developer' },
    ]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Applicants</h2>
      {applicants.length === 0 ? (
        <p>No applicants found.</p>
      ) : (
        <ul className="divide-y">
          {applicants.map((applicant) => (
            <li key={applicant.id} className="py-2">
              <strong>{applicant.name}</strong> applied for <em>{applicant.jobTitle}</em> — {applicant.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewApplicants;
