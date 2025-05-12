// // pages/user/Home.jsx
// import React, { useState } from 'react';

// const dummyJobs = [
//   { id: 1, title: 'Frontend Developer', city: 'New York', stream: 'IT' },
//   { id: 2, title: 'Marketing Manager', city: 'Los Angeles', stream: 'Marketing' },
//   { id: 3, title: 'Backend Developer', city: 'San Francisco', stream: 'IT' },
//   { id: 4, title: 'Accountant', city: 'Chicago', stream: 'Finance' },
// ];

// const cities = ['New York', 'Los Angeles', 'San Francisco', 'Chicago'];
// const streams = ['IT', 'Marketing', 'Finance', 'HR'];

// const Home = () => {
//   const [search, setSearch] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedStream, setSelectedStream] = useState('');

//   const filteredJobs = dummyJobs.filter((job) => {
//     return (
//       job.title.toLowerCase().includes(search.toLowerCase()) &&
//       (selectedCity ? job.city === selectedCity : true) &&
//       (selectedStream ? job.stream === selectedStream : true)
//     );
//   });

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-6">Find Your Next Job</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search jobs..."
//           className="p-2 border rounded"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="p-2 border rounded"
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//         >
//           <option value="">All Cities</option>
//           {cities.map((city) => (
//             <option key={city}>{city}</option>
//           ))}
//         </select>

//         <select
//           className="p-2 border rounded"
//           value={selectedStream}
//           onChange={(e) => setSelectedStream(e.target.value)}
//         >
//           <option value="">All Streams</option>
//           {streams.map((stream) => (
//             <option key={stream}>{stream}</option>
//           ))}
//         </select>
//       </div>

//       <div className="grid gap-4">
//         {filteredJobs.map((job) => (
//           <div key={job.id} className="border p-4 rounded shadow-sm">
//             <h3 className="font-semibold text-lg">{job.title}</h3>
//             <p className="text-sm text-gray-600">{job.city} | {job.stream}</p>
//           </div>
//         ))}
//         {filteredJobs.length === 0 && <p>No jobs found.</p>}
//       </div>
//     </div>
//   );
// };

// export default Home;

// pages/user/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dummyJobs = [
  { id: 1, title: 'Frontend Developer', city: 'Chennai', stream: 'IT', Company: 'Zoho' },
  { id: 2, title: 'Marketing Manager', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra' },
  { id: 3, title: 'Backend Developer', city: 'Bangalore', stream: 'IT', Company: 'Accenture' },
  { id: 4, title: 'Accountant', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro' },
  { id: 5, title: 'HR Executive', city: 'Chennai', stream: 'HR', Company: 'TCS' },
  { id: 6, title: 'UI/UX Designer', city: 'Bangalore', stream: 'IT', Company: 'Infosys' },
  { id: 7, title: 'Sales Executive', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra' },
  { id: 8, title: 'Financial Analyst', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro' },
  { id: 9, title: 'Recruiter', city: 'Chennai', stream: 'HR', Company: 'TCS' },
  { id: 10, title: 'Cloud Engineer', city: 'Pune', stream: 'IT', Company: 'Cognizant' },
  { id: 11, title: 'Digital Marketing Specialist', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra' },
  { id: 12, title: 'Tax Consultant', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro' },
  { id: 13, title: 'Technical Support', city: 'Chennai', stream: 'IT', Company: 'TCS' },
  { id: 14, title: 'Brand Manager', city: 'Bangalore', stream: 'Marketing', Company: 'Infosys' },
  { id: 15, title: 'Payroll Officer', city: 'Noida', stream: 'HR', Company: 'Zoho' },
];

const cities = ['Chennai', 'Coimbatore', 'Bangalore', 'Hyderabad','Noida','pune'];
const streams = ['IT', 'Marketing', 'Finance', 'HR'];
const Company = ['TCS', 'Tech Mahindra', 'Infosys', 'Wipro','Cognizant','Zoho','Accenture'];

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const filteredJobs = dummyJobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCity ? job.city === selectedCity : true) &&
      (selectedStream ? job.stream === selectedStream : true)&&
      (selectedCompany ? job.Company === selectedCompany: true)
    );
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 bg-white-600">
      <h1 className="text-2xl font-bold mb-6">Find Your Next Job</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6  bg-white-600">
        <input
          type="text"
          placeholder="Search jobs..."
          className="p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border rounded"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={selectedStream}
          onChange={(e) => setSelectedStream(e.target.value)}
        >
          <option value="">All Streams</option>
          {streams.map((stream) => (
            <option key={stream}>{stream}</option>
          ))}
        </select>
        {/* <select
          className="p-2 border rounded"
          value={Company}
          onChange={(e) => setSelectedStream(e.target.value)}
        >
          <option value="">Company Name:</option>
          {Company.map((Company) => (
            <option key={Company}>{Company}</option>
          ))}
        </select> */}
      </div>

      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="border p-4 rounded shadow-sm">
            <h3 className="font-semibold text-lg text-cyan-600">{job.title}| {job.Company}</h3>
            <p className="text-sm text-white-600">{job.city} | {job.stream} </p>
            <button
              className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              onClick={() => navigate(`/apply/${job.id}`)}
            >
              Apply
            </button>
          </div>
        ))}
        {filteredJobs.length === 0 && <p>No jobs found.</p>}
      </div>
    </div>
  );
};

export default Home;
