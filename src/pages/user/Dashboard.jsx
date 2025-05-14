import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    number: '+91-9005550055',
    resume: '',
    education: 'Bachelor of Technology in Computer Science',
    college: 'National Institute of Technology',
    address: '123, MG Road, Bangalore, India',
    languages: 'English, Tamil, Telugu',
    skills: 'React, Node.js, Java, Tailwind CSS, Git, JavaScript',
    socialLinks: 'https://linkedin.com/in/johndoe',
    awards: 'Best Student Developer 2023',
    projects: 'Job Portal App, E-Commerce Site, LMS System',
    courses: 'ReactJS, NodeJS, Data Structures',
    certifications: 'AWS Cloud Practitioner, Google UX Design',
    nationality: 'Indian',
  });

  const [appliedJobs, setAppliedJobs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('user'));
    if (savedProfile) setUserData(savedProfile);

    const savedAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setAppliedJobs(savedAppliedJobs);
  }, [location]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Application Sent':
        return 'text-blue-500';
      case 'Resume Shortlisted':
        return 'text-indigo-600';
      case 'Assessment':
        return 'text-purple-600';
      case 'Accepted':
        return 'text-green-600';
      case 'Rejected':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
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
      </section>

      {/* Application Tracking Section */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="text-xl font-semibold mb-4"> Application Tracking</h3>
        {appliedJobs.length === 0 ? (
          <p className="text-gray-500">You haven’t applied to any jobs yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {appliedJobs.map((job, index) => (
              <li key={index} className="py-4">
                <p className="font-bold text-lg">{job.title}</p>
                <p className="text-sm text-gray-700">Company: {job.company}</p>
                <p className={`text-sm font-semibold ${getStatusStyle(job.status || 'Application Sent')}`}>
                  Status: {job.status || 'Application Sent'}
                </p>
                {job.applicant?.coverLetter && (
                  <p className="text-sm mt-1 text-gray-500">Cover Letter: {job.applicant.coverLetter}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
