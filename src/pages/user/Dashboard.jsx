import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [appliedJobs, setAppliedJobs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('user')) || {};
    setUserData(savedProfile);

    const savedAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setAppliedJobs(savedAppliedJobs);
  }, [location]);

  const handleWithdraw = (jobIndex) => {
    if (window.confirm('Are you sure you want to withdraw this application?')) {
      const updatedJobs = [...appliedJobs];
      updatedJobs.splice(jobIndex, 1);
      setAppliedJobs(updatedJobs);
      localStorage.setItem('appliedJobs', JSON.stringify(updatedJobs));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 space-y-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h2>

      {/* Profile Section */}
      <section className="bg-white shadow rounded p-6 space-y-4">
        <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
        {Object.entries(userData).map(([key, value]) =>
          key !== 'resume' ? (
            <div key={key}>
              <p className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</p>
              <p className="text-gray-700">{value}</p>
            </div>
          ) : null
        )}

        {/* Resume in Profile */}
        <div>
          <p className="font-semibold">Resume (in Profile):</p>
          {userData.resume ? (
            <a
              href={userData.resume}
              download="profile_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Download Resume
            </a>
          ) : (
            <p className="text-gray-500">No resume uploaded</p>
          )}
        </div>
      </section>

      {/* Applied Jobs Section */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="text-xl font-semibold mb-4">Application Status</h3>
        {appliedJobs.length === 0 ? (
          <p className="text-gray-500">You haven’t applied to any jobs yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {appliedJobs.map((job, index) => (
              <li key={index} className="py-4">
                <p className="font-bold text-lg">{job.title}</p>
                <p className="text-sm text-gray-700">Company: {job.company}</p>

                <p
                  className={`text-sm font-semibold ${
                    job.status === 'Accepted'
                      ? 'text-green-600'
                      : job.status === 'Rejected'
                      ? 'text-red-600'
                      : job.status === 'Assessment'
                      ? 'text-indigo-600'
                      : job.status === 'Resume Shortlisted'
                      ? 'text-blue-600'
                      : 'text-yellow-500'
                  }`}
                >
                  Status: {job.status || 'Application Sent'}
                </p>

                {job.applicant?.coverLetter && (
                  <p className="text-sm mt-1 text-gray-500">Cover Letter: {job.applicant.coverLetter}</p>
                )}

                {/* Resume Used in Application */}
                <div className="mt-1">
                  <p className="font-semibold text-sm">Resume (used in application):</p>
                  {job.applicant?.resume ? (
                    <a
                      href={job.applicant.resume}
                      download="applied_resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      Download Applied Resume
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm">No resume used</p>
                  )}
                </div>

                <button
                  onClick={() => handleWithdraw(index)}
                  className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Withdraw Application
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
