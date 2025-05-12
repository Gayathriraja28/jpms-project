import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRole } from '../../utils/auth';

const Navbar = ({ onLogout }) => {
  const location = useLocation();
  const role = getRole();

  const adminLinks = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/create-job', label: 'Create Job' },
    { path: '/admin/applicants', label: 'View Applicants' },
    { path: '/admin/companies', label: 'Companies' },
    { path: '/admin/test-schedule', label: 'Test Schedule' },
    { path: '/admin/settings', label: 'Admin Settings' },
  ];

  const userLinks = [
    { path: '/user/home', label: 'Home' },
    { path: '/user/dashboard', label: 'Dashboard' },
    { path: '/user/update-profile', label: 'Profile' },
    {path: '/user/company-reviews',label:'Company Reviews'},
  ];

  const linksToRender = role === 'admin' ? adminLinks : userLinks;

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo & Links */}
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold text-blue-600">Job Portal</span>
        <div className="flex gap-12 text-gray-700">
          {linksToRender.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-blue-600 font-medium ${
                location.pathname === link.path
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
