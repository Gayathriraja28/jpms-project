
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const dummyJobs = [
//   { id: 1, title: 'Frontend Developer', city: 'Chennai', stream: 'IT', Company: 'Zoho' },
//   { id: 2, title: 'Marketing Manager', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra' },
//   { id: 3, title: 'Backend Developer', city: 'Bangalore', stream: 'IT', Company: 'Accenture' },
//   { id: 4, title: 'Accountant', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro' },
//   { id: 5, title: 'HR Executive', city: 'Chennai', stream: 'HR', Company: 'TCS' },
//   { id: 6, title: 'UI/UX Designer', city: 'Bangalore', stream: 'IT', Company: 'Infosys' },
//   { id: 7, title: 'Sales Executive', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra' },
//   { id: 8, title: 'Financial Analyst', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro' },
//   { id: 9, title: 'Recruiter', city: 'Chennai', stream: 'HR', Company: 'TCS' },
//   { id: 10, title: 'Cloud Engineer', city: 'Pune', stream: 'IT', Company: 'Cognizant' },
//   { id: 11, title: 'Digital Marketing Specialist', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra' },
//   { id: 12, title: 'Tax Consultant', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro' },
//   { id: 13, title: 'Technical Support', city: 'Chennai', stream: 'IT', Company: 'TCS' },
//   { id: 14, title: 'Brand Manager', city: 'Bangalore', stream: 'Marketing', Company: 'Infosys' },
//   { id: 15, title: 'Payroll Officer', city: 'Noida', stream: 'HR', Company: 'Zoho' },
// ];

// const cities = ['Chennai', 'Coimbatore', 'Bangalore', 'Hyderabad','Noida','pune'];
// const streams = ['IT', 'Marketing', 'Finance', 'HR'];
// const Company = ['TCS', 'Tech Mahindra', 'Infosys', 'Wipro','Cognizant','Zoho','Accenture'];

// const Home = () => {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedStream, setSelectedStream] = useState('');
//   const [selectedCompany, setSelectedCompany] = useState('');

//   const filteredJobs = dummyJobs.filter((job) => {
//     return (
//       job.title.toLowerCase().includes(search.toLowerCase()) &&
//       (selectedCity ? job.city === selectedCity : true) &&
//       (selectedStream ? job.stream === selectedStream : true)&&
//       (selectedCompany ? job.Company === selectedCompany: true)
//     );
//   });

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-6 bg-white-300">
//       <h1 className="text-2xl font-bold mb-6">Find Your Next Job</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6  bg-white-300">
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
//         {/* <select
//           className="p-2 border rounded"
//           value={Company}
//           onChange={(e) => setSelectedStream(e.target.value)}
//         >
//           <option value="">Company Name:</option>
//           {Company.map((Company) => (
//             <option key={Company}>{Company}</option>
//           ))}
//         </select> */}
//       </div>

//       <div className="grid gap-4">
//         {filteredJobs.map((job) => (
//           <div key={job.id} className="border p-4 rounded shadow-sm">
//             <h3 className="font-semibold text-lg text-cyan-600">{job.title}| {job.Company}</h3>
//             <p className="text-sm text-white-600">{job.city} | {job.stream} </p>
//             <button
//               className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
//               onClick={() => navigate(`/apply/${job.id}`)}
//             >
//               Apply
//             </button>
//           </div>
//         ))}
//         {filteredJobs.length === 0 && <p>No jobs found.</p>}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase } from 'lucide-react'; // Icons
import FeaturedCompanies from './FeaturedCompanies';


const dummyJobs = [
  { id: 1, title: 'Frontend Developer', city: 'Chennai', stream: 'IT', Company: 'Zoho', salary: '₹25,000 - ₹40,000', shift: 'Morning', experience: '1 year', jobType: 'Permanent' },
  { id: 2, title: 'Marketing Manager', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra', salary: '₹30,000 - ₹50,000', shift: 'Day', experience: '3+ years', jobType: 'Permanent' },
  { id: 3, title: 'Backend Developer', city: 'Bangalore', stream: 'IT', Company: 'Accenture', salary: '₹35,000 - ₹60,000', shift: 'Night', experience: '2 years', jobType: 'Full-time' },
  { id: 4, title: 'Accountant', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro', salary: '₹22,000 - ₹35,000', shift: 'Morning', experience: '1-2 years', jobType: 'Part-time' },
  { id: 5, title: 'HR Executive', city: 'Chennai', stream: 'HR', Company: 'TCS', salary: '₹20,000 - ₹30,000', shift: 'Day', experience: '0-1 year', jobType: 'Contract' },
  { id: 6, title: 'UI/UX Designer', city: 'Bangalore', stream: 'IT', Company: 'Infosys', salary: '₹28,000 - ₹45,000', shift: 'Morning', experience: '1-3 years', jobType: 'Freelance' },
  { id: 7, title: 'Sales Executive', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra', salary: '₹18,000 - ₹28,000', shift: 'Evening', experience: '1 year', jobType: 'Full-time' },
  { id: 8, title: 'Financial Analyst', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro', salary: '₹32,000 - ₹48,000', shift: 'Morning', experience: '2-4 years', jobType: 'Permanent' },
  { id: 9, title: 'Recruiter', city: 'Chennai', stream: 'HR', Company: 'TCS', salary: '₹21,000 - ₹33,000', shift: 'Day', experience: 'Fresher', jobType: 'Internship' },
  { id: 10, title: 'Cloud Engineer', city: 'Pune', stream: 'IT', Company: 'Cognizant', salary: '₹40,000 - ₹60,000', shift: 'Night', experience: '3+ years', jobType: 'Remote' },
  { id: 11, title: 'Digital Marketing Specialist', city: 'Coimbatore', stream: 'Marketing', Company: 'Tech Mahindra', salary: '₹26,000 - ₹40,000', shift: 'Flexible', experience: '2 years', jobType: 'Full-time' },
  { id: 12, title: 'Tax Consultant', city: 'Hyderabad', stream: 'Finance', Company: 'Wipro', salary: '₹34,000 - ₹55,000', shift: 'Morning', experience: '4+ years', jobType: 'Part-time' },
  { id: 13, title: 'Technical Support', city: 'Chennai', stream: 'IT', Company: 'TCS', salary: '₹20,000 - ₹30,000', shift: 'Rotational', experience: 'Fresher', jobType: 'Contract' },
  { id: 14, title: 'Brand Manager', city: 'Bangalore', stream: 'Marketing', Company: 'Infosys', salary: '₹38,000 - ₹60,000', shift: 'Morning', experience: '5 years', jobType: 'Full-time' },
  { id: 15, title: 'Payroll Officer', city: 'Noida', stream: 'HR', Company: 'Zoho', salary: '₹24,000 - ₹36,000', shift: 'Day', experience: '1-2 years', jobType: 'Permanent' },
];


const cities = ['Chennai', 'Coimbatore', 'Bangalore', 'Hyderabad', 'Noida', 'Pune'];
const streams = ['IT', 'Marketing', 'Finance', 'HR'];
const companies = ['TCS', 'Tech Mahindra', 'Infosys', 'Wipro', 'Cognizant', 'Zoho', 'Accenture'];

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const filteredJobs = dummyJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    (!selectedCity || job.city === selectedCity) &&
    (!selectedStream || job.stream === selectedStream) &&
    (!selectedCompany || job.Company === selectedCompany)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Search Panel */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white-100 p-4 rounded-xl shadow">
        <div className="flex-1 flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by Skills, Company or Job Title"
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
          <MapPin className="text-gray-500" />
          <select className="w-full outline-none" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">Location</option>
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
          <Briefcase className="text-gray-500" />
          <select className="w-full outline-none" value={selectedStream} onChange={(e) => setSelectedStream(e.target.value)}>
            <option value="">Stream</option>
            {streams.map((stream) => (
              <option key={stream}>{stream}</option>
            ))}
          </select>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-purple-700 transition">
          Search
        </button>
      </div>

      {/* Featured Section */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Find Your Next Job</h1>
        <FeaturedCompanies />
      </div>

      {/* Job Cards */}
      <div className="mt-10 grid gap-6 ">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-300 p-4 rounded-xl shadow hover:shadow-md transition bg-white-100 flex flex-col gap-2"
          >
            <span className="text-sm text-red-800 bg-green-300 px-2 py-0.5 rounded-full w-max font-medium">Urgently hiring</span>

            <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
            <p className="text-sm text-gray-700 font-medium">{job.Company}</p>
            <p className="text-sm text-gray-600">{job.city}</p>

         <div className="flex flex-wrap gap-2 mt-2">
  <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full font-medium text-gray-700">{job.salary} a month</span>
  <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full font-medium text-gray-700">{job.shift} shift</span>
  {/* <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full font-medium text-gray-700">Exp: {job.experience}</span>
  <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full font-medium text-gray-700">{job.jobType}</span> */}
</div>



            <p className="text-sm text-blue-600 mt-2 flex items-center gap-1">
              <span>➤</span> Easily apply
            </p>

            <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
              <li>Job Types: {job.jobType}</li>
              <li>Experience: {job.experience}</li>
            </ul>

            <div className="mt-4">
              <button
                onClick={() => navigate(`/apply/${job.id}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
              >
                Apply now
              </button>
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-600">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
