// import React, { useEffect, useState } from 'react';

// const ViewApplicants = () => {
//   const [applicants, setApplicants] = useState([]);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);
//   const [status, setStatus] = useState({});

//   useEffect(() => {
//     // Replace with API call
//     const fetchedApplicants = [
//       {
//         id: 1,
//         name: 'John Doe',
//         // email: 'john@example.com',
//         jobTitle: 'Frontend Developer',
//         qualification: 'B.Tech in Computer Science',
//         experience: '2 years',
//         skills: 'React, HTML, CSS, JavaScript',
//       },
//       {
//         id: 2,
//         name: 'Jane Smith',
//         email: 'jane@example.com',
//         jobTitle: 'Backend Developer',
//         qualification: 'MCA',
//         experience: '3 years',
//         skills: 'Node.js, Express, MongoDB',
//       },
//     ];

//     setApplicants(fetchedApplicants);
//   }, []);

//   const handleViewDetails = (applicant) => {
//     setSelectedApplicant(applicant);
//   };

//   const handleCloseDetails = () => {
//     setSelectedApplicant(null);
//   };

//   const handleDecision = (id, decision) => {
//     setStatus({ ...status, [id]: decision });
//     handleCloseDetails();
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
//       <h2 className="text-xl font-bold mb-4">Applicants</h2>

//       {applicants.length === 0 ? (
//         <p>No applicants found.</p>
//       ) : (
//         <ul className="divide-y">
//           {applicants.map((applicant) => (
//             <li key={applicant.id} className="py-4 flex justify-between items-center">
//               <div>
//                 <strong>{applicant.name}</strong> applied for <em>{applicant.jobTitle}</em> — {applicant.email}
//                 {status[applicant.id] && (
//                   <span
//                     className={`ml-4 text-sm font-semibold ${
//                       status[applicant.id] === 'Accepted' ? 'text-green-600' : 'text-red-600'
//                     }`}
//                   >
//                     ({status[applicant.id]})
//                   </span>
//                 )}
//               </div>
//               <button
//                 onClick={() => handleViewDetails(applicant)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//               >
//                 View Details
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Details Modal */}
//       {selectedApplicant && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//             <h3 className="text-lg font-bold mb-4">Applicant Details</h3>
//             <p><strong>Name:</strong> {selectedApplicant.name}</p>
//             <p><strong>Email:</strong> {selectedApplicant.email}</p>
//             <p><strong>Job Title:</strong> {selectedApplicant.jobTitle}</p>
//             <p><strong>Qualification:</strong> {selectedApplicant.qualification}</p>
//             <p><strong>Experience:</strong> {selectedApplicant.experience}</p>
//             <p><strong>Skills:</strong> {selectedApplicant.skills}</p>

//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => handleDecision(selectedApplicant.id, 'Accepted')}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Accept
//               </button>
//               <button
//                 onClick={() => handleDecision(selectedApplicant.id, 'Rejected')}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               >
//                 Reject
//               </button>
//               <button
//                 onClick={handleCloseDetails}
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewApplicants;
import React, { useEffect, useState } from 'react';

const ViewApplicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  useEffect(() => {
    // Load applicants from localStorage (fallback to dummy data)
    const jobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setApplicants(jobs);
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updatedApplicants = [...applicants];
    updatedApplicants[index].status = newStatus;

    setApplicants(updatedApplicants);
    localStorage.setItem('appliedJobs', JSON.stringify(updatedApplicants));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6"> Applicants</h2>
      {applicants.length === 0 ? (
        <p>No applicants found.</p>
      ) : (
        <ul className="space-y-4">
          {applicants.map((applicant, index) => (
            <li key={index} className="border p-4 rounded shadow-sm">
              <p><strong>{applicant.applicant?.name}</strong> applied for <em>{applicant.title}</em> at {applicant.company}</p>
              <button
                onClick={() => setSelectedApplicant(index)}
                className="mt-2 text-sm text-blue-600 underline"
              >
                View Details
              </button>

              {selectedApplicant === index && (
                <div className="mt-4 bg-gray-50 p-4 rounded">
                  <p><strong>Email:</strong> {applicant.applicant?.email}</p>
                  <p><strong>Cover Letter:</strong> {applicant.applicant?.coverLetter}</p>

                  <div className="mt-4">
                    <label className="block font-medium mb-1">Update Status:</label>
                    <select
                      value={applicant.status || 'Application Sent'}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                      className="border rounded p-2 w-full"
                    >
                      <option>Application Received</option>
                      <option>Resume Shortlisted</option>
                    
                      <option>Accepted</option>
                      <option>Rejected</option>
                    </select>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewApplicants;
