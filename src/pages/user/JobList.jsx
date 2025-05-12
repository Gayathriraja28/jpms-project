// import React from 'react';
// import { Link } from 'react-router-dom';

// const JobList = () => {
//   const jobs = [
//     { id: 1, title: 'Frontend Developer' },
//     { id: 2, title: 'Backend Engineer' },
//     { id: 3, title: 'Fullstack Developer' },
//   ];

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Job Listings</h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {jobs.map((job) => (
//           <div key={job.id} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all border-t-4 border-blue-600">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">{job.title}</h3>
//             <Link
//               to={`/apply/${job.id}`}
//               className="inline-block mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transform transition-all"
//             >
//               Apply Now
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobList;

// src/pages/user/JobList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (isAuthenticated()) {
      setJobs([
        { id: 1, title: 'Frontend Developer', location: 'Remote', company: 'TechSoft' },
        { id: 2, title: 'Backend Engineer', location: 'New York', company: 'DataCorp' },
        { id: 3, title: 'Fullstack Developer', location: 'San Francisco', company: 'WebWorks' },
      ]);
    }
  }, []);

  if (!isAuthenticated()) {
    return (
      <div className="text-center text-gray-600 text-xl mt-20">
        Please <Link to="/auth" className="text-blue-600 underline">login or register</Link> to view available jobs.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Available Jobs</h2>
      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-gray-100 p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
            </div>
            <Link to={`/apply/${job.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Apply
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;

