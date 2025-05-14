import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRole } from '../../utils/auth';

const Navbar = ({ onLogout }) => {
  const location = useLocation();
  const role = getRole();
  const [menuOpen, setMenuOpen] = useState(false);

  const adminLinks = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/create-job', label: 'Create Job' },
    { path: '/admin/applicants', label: 'View Applicants' },
    
    { path: '/admin/test-schedule', label: 'Schedule Assessment' },
    { path: '/admin/settings', label: 'Admin Settings' },
  ];

  const userLinks = [
    { path: '/user/home', label: 'Home' },
    { path: '/user/dashboard', label: 'Dashboard' },
    { path: '/user/update-profile', label: 'Profile' },
    { path: '/user/company-reviews', label: 'Company Reviews' },
    { path: '/user/assessments', label: 'Assessments' },     // ✅ NEW
    { path: '/user/settings', label: 'Settings' },           // ✅ NEW
    { path: '/user/feedback', label: 'Feedback' },           // ✅ NEW
  ];

  const linksToRender = role === 'admin' ? adminLinks : userLinks;

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <span className="text-2xl font-bold text-blue-600">
          Job <br className="block md:hidden" /> Portal
        </span>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 items-center text-gray-700">
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
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col px-6 py-4 md:hidden z-10">
          {linksToRender.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`py-2 font-medium transition-colors hover:text-blue-600 ${
                location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onLogout();
            }}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
