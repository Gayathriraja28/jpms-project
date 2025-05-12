// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ name: '', email: '', resume: '' });
//   const [appliedJobs, setAppliedJobs] = useState([]);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user')) || {
//       name: 'John Doe',
//       email: 'john@example.com',
//       resume: 'resume.pdf',
//     };
//     const storedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
//     setUser(storedUser);
//     setAppliedJobs(storedJobs);
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-6">
//       <div>
//         <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Resume:</strong> {user.resume}</p>

//         <button
//           onClick={() => navigate('/user/update-profile')}
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Update Profile
//         </button>
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold mb-2">Applied Jobs</h3>
//         {appliedJobs.length === 0 ? (
//           <p className="text-gray-600">No jobs applied yet.</p>
//         ) : (
//           <ul className="list-disc pl-5 space-y-1">
//             {appliedJobs.map((job, index) => (
//               <li key={index}>
//                 <strong>{job.title}</strong> at {job.company} – <em>{job.status}</em>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
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
    skills: ['React', 'Node.js', 'Java', 'Tailwind CSS', 'Git', 'JavaScript'],
    socialLinks: 'https://linkedin.com/in/johndoe',
    awards: 'Best Student Developer 2023',
    projects: 'Job Portal App, E-Commerce Site, LMS System',
    courses: 'ReactJS, NodeJS, Data Structures',
    certifications: 'AWS Cloud Practitioner, Google UX Design',
    nationality: 'Indian',
    speciallyAbled: 'No',
  });

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    password: '',
    confirmPassword: '',
    notifications: true,
    preference: 'email',
  });
  const location =useLocation();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) setUserData(savedProfile);
    
     const savedAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setAppliedJobs(savedAppliedJobs);

    // const savedSettings = JSON.parse(localStorage.getItem('userSettings'));
    // if (savedSettings) setSettings(savedSettings);
  }, [location]);

  const handleSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const saveSettings = () => {
    if (settings.password !== settings.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    localStorage.setItem('userSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
    setShowSettings(false); // close settings on save
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 space-y-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h2>

      {/* Profile Section */}
      <section className="bg-white shadow rounded p-6 space-y-4">
        <h3 className="text-xl font-semibold mb-4">👤 Profile Information</h3>
        {Object.entries(userData).map(([key, value]) =>
          key !== 'resume' ? (
            <div key={key}>
              <p className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</p>
              <p className="text-gray-700">{value}</p>
            </div>
          ) : null
        )}
        <div>
            <section className="bg-white shadow rounded p-6">
  <h3 className="text-xl font-semibold mb-4"> Skills</h3>
  {userData.skills && userData.skills.length > 0 ? (
    <div className="flex flex-wrap gap-2">
      {userData.skills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  ) : (
    <p className="text-gray-500">No skills added yet.</p>
  )}
</section>
          {/* <p className="font-semibold">Resume:</p>
          {userData.resume ? (
            <a href={userData.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Download Resume
            </a>
          ) : (
            <p className="text-gray-500">No resume uploaded</p>
          )} */}
        </div>
      </section>

      {/* Applied Jobs */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="text-xl font-semibold mb-4">📄 Applied Jobs</h3>
        {appliedJobs.length === 0 ? (
          <p className="text-gray-500">You haven’t applied to any jobs yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {appliedJobs.map((job, index) => (
              <li key={index} className="py-4">
                <p className="font-bold text-lg">{job.title}</p>
                <p className="text-sm text-gray-700">Company: {job.company}</p>
                <p className="text-sm text-green-600">Status: {job.status}</p>
                <p className="text-sm mt-1 text-gray-500">Cover Letter: {job.applicant.coverLetter}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Settings Toggle Button */}
      <section className="bg-white shadow rounded p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">⚙️ Settings</h3>
          <button
            onClick={() => setShowSettings((prev) => !prev)}
            className="px-4 py-1 bg-blue-600 text-white rounded"
          >
            {showSettings ? 'Close' : 'Open Settings'}
          </button>
        </div>

        {/* Conditionally Render Settings Form */}
        {showSettings && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="block font-medium">New Password</label>
              <input
                type="password"
                name="password"
                value={settings.password}
                onChange={handleSettingsChange}
                className="w-full border px-3 py-2 rounded mt-1"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={settings.confirmPassword}
                onChange={handleSettingsChange}
                className="w-full border px-3 py-2 rounded mt-1"
                placeholder="Confirm password"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleSettingsChange}
                className="accent-blue-600"
              />
              <label className="font-medium">Enable Email Notifications</label>
            </div>
            <div>
              <label className="block font-medium">Preferred Contact</label>
              <select
                name="preference"
                value={settings.preference}
                onChange={handleSettingsChange}
                className="w-full border px-3 py-2 rounded mt-1"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="sms">SMS</option>
              </select>
            </div>
            <button onClick={saveSettings} className="px-4 py-2 bg-green-600 text-white rounded">
              Save Settings
            </button>
          </div>
        )}
      </section>

      {/* Feedback */}
      <section className="bg-white shadow rounded p-6">
        <h3 className="text-xl font-semibold mb-4">📝 Feedback</h3>
        <textarea
          rows="4"
          className="w-full border rounded p-2 mt-2"
          placeholder="Write your feedback here..."
        ></textarea>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Submit Feedback</button>
      </section>

      {/* Assessments */}
      <section className="bg-white shadow rounded p-6">
        <h3 className="text-xl font-semibold mb-4"> Assessments</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>JavaScript Coding Test - Not Attempted</li>
          <li>Soft Skills Assessment - Completed</li>
          <li>React Practical Round - Scheduled</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
