// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
//       <p className="mb-6 text-gray-600">Welcome, Admin! Here you can manage job listings, view applicants, and handle portal settings.</p>
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-2">Post a New Job</h2>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => navigate('/admin/create-job')}
//           >
//             Create Job
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-2">Manage Applications</h2>
//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             onClick={() => navigate('/admin/applicants')}
//           >
//             View Applicants
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-2">Portal Settings</h2>
//           <button
//             className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//             onClick={() => navigate('/admin/settings')}
//           >
//             Manage Settings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import CompaniesList from './CompaniesList';
// import MembershipDetails from './MembershiDetails';
// import TestSchedule from './TestSchedule';

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
//       <p className="mb-6 text-gray-600">
//         Welcome, Admin! Here you can manage job listings, view applicants, and handle portal settings.
//       </p>

//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 mb-10">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-2">Post a New Job</h2>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => navigate('/admin/create-job')}
//           >
//             Create Job
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-2">Manage Applications</h2>
//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             onClick={() => navigate('/admin/applicants')}
//           >
//             View Applicants
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-2">Portal Settings</h2>
//           <button
//             className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//             onClick={() => navigate('/admin/settings')}
//           >
//             Manage Settings
//           </button>
//         </div>
//       </div>

//       {/* Embedded Management Sections */}
//       <div className="space-y-12">
//         <section>
//           <h2 className="text-2xl font-bold mb-4">Companies</h2>
//           <CompaniesList />
//         </section>

//         <section>
//           <h2 className="text-2xl font-bold mb-4">Memberships</h2>
//           <MembershipDetails />
//         </section>

//         <section>
//           <h2 className="text-2xl font-bold mb-4">Test Schedule</h2>
//           <TestSchedule />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6 text-gray-600 ">
        Welcome, Admin! Here you can manage job listings, view applicants, and handle portal settings.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Post a New Job</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => navigate('/admin/create-job')}
          >
            Create Job
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Applications Enrolled</h2>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => navigate('/admin/applicants')}
          >
            View Applicants
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Portal Settings</h2>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            onClick={() => navigate('/admin/settings')}
          >
            Manage Settings
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Companies</h2>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            onClick={() => navigate('/admin/companies')}
          >
            View Companies
          </button>
        </div>

        {/* <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Memberships</h2>
          <button
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
            onClick={() => navigate('/admin/memberships')}
          >
            Manage Memberships
          </button>
        </div> */}

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Test Schedule</h2>
          <button
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
            onClick={() => navigate('/admin/test-schedule')}
          >
            View Schedule
          </button>
        </div>
      </div>
      
    </div>
  
  );
};

export default AdminDashboard;
