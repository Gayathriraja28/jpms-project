// import { useState } from 'react'

// import './App.css'
// import LoginAdmin from './pages/auth/LoginAdmin'
// import AdminDashboard from './pages/admin/Dashboard'
// import LoginUser from './pages/auth/LoginUser'
// import RegisterUser from './pages/auth/RegisterUser'
// import UserDashboard from './pages/user/Dashboard'
// import JobList from './pages/user/JobList'
// import ApplyJob from './pages/user/ApplyJob'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <LoginAdmin/>
//     <LoginUser/>
//     <RegisterUser/>
//       <AdminDashboard/>
//       <UserDashboard/>
    
       
//     </>
//   )
// }

// export default App


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import JobList from './pages/user/JobList';
// import UserDashboard from './pages/user/Dashboard';
// import ApplyJob from './pages/user/ApplyJob';


// import AdminDashboard from './pages/admin/Dashboard';
// import AuthPage from './pages/auth/AuthPage';

// const App = () => {
//   return (
//     <Router>
//       <nav className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white py-4 shadow-md">
//         <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 justify-center sm:justify-start">
            
//           <Link to="/" className="hover:underline font-semibold">Jobs</Link>
//           <Link to="/user/dashboard" className="hover:underline font-semibold">User Dashboard</Link>
        
       
        
//         </div>
//       </nav>
//       <main className="bg-gray-50 min-h-screen py-6">
//         <Routes>
//           <Route path="/login-user" element={<AuthPage />} />
// <Route path="/register" element={<AuthPage />} />
// <Route path="/login-admin" element={<AuthPage />} />
          
//           <Route path="/" element={<JobList />} />
//           <Route path="/user/dashboard" element={<UserDashboard />} />
//           <Route path="/apply/:jobId" element={<ApplyJob />} />
          
         
        
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// };

// export default App;
// 
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import AdminNavbar from './pages/user/Navbar';
import Footer from './components/Footer';
import { isAuthenticated, getRole } from './utils/auth';

// Auth Pages
import AuthPage from './pages/auth/AuthPage';

// User Pages
import Home from './pages/user/Home';
import UserDashboard from './pages/user/Dashboard';
import ApplyJob from './pages/user/ApplyJob';
import UpdateProfile from './pages/user/UpdateProfile';
import CompanyReviews from './pages/user/CompanyReviews';
// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import CreateJob from './pages/admin/CreateJob';
import ViewApplicants from './pages/admin/ViewApplicants';
import CompaniesList from './pages/admin/CompaniesList';
import TestSchedule from './pages/admin/TestSchedule';
import PortalSettings from './pages/admin/PortalSettings';
import Navbar from './pages/admin/Navbar';
// Protected Route Wrapper
const PrivateRoute = ({ auth, allowedRoles, children }) => {
  const role = getRole();
  if (!auth || !allowedRoles.includes(role)) {
    return <Navigate to="/auth" />;
  }
  return children;
};

// App Routes
const AppRoutes = ({ auth, onAuthChange }) => (
  <Routes>
    <Route path="/" element={<Navigate to="/auth" />} />
    <Route path="/auth" element={<AuthPage onAuthChange={onAuthChange} />} />

    {/* User Routes */}
    <Route
      path="/user/home"
      element={
        <PrivateRoute auth={auth} allowedRoles={['user']}>
          <Home />
        </PrivateRoute>
      }
    />
    <Route
      path="/user/dashboard"
      element={
        <PrivateRoute auth={auth} allowedRoles={['user']}>
          <UserDashboard />
        </PrivateRoute>
      }
    />
    <Route
      path="/user/update-profile"
      element={
        <PrivateRoute auth={auth} allowedRoles={['user']}>
          <UpdateProfile />
        </PrivateRoute>
      }
    />
    
    <Route
    path="/user/company-reviews" element={ <CompanyReviews />} />
    <Route
      path="/apply/:jobId"
      element={
        <PrivateRoute auth={auth} allowedRoles={['user']}>
          <ApplyJob />
        </PrivateRoute>
      }
    />

    {/* Admin Routes */}
    <Route
      path="/admin/dashboard"
      element={
        <PrivateRoute auth={auth} allowedRoles={['admin']}>
          <AdminDashboard />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin/create-job"
      element={
        <PrivateRoute auth={auth} allowedRoles={['admin']}>
          <CreateJob />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin/applicants"
      element={
        <PrivateRoute auth={auth} allowedRoles={['admin']}>
          <ViewApplicants />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin/companies"
      element={
        <PrivateRoute auth={auth} allowedRoles={['admin']}>
          <CompaniesList />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin/test-schedule"
      element={
        <PrivateRoute auth={auth} allowedRoles={['admin']}>
          <TestSchedule />
        </PrivateRoute>
      }
    />
    <Route
      path="/admin/settings"
      element={
        <PrivateRoute auth={auth} allowedRoles={['admin']}>
          <PortalSettings />
        </PrivateRoute>
      }
    />
  </Routes>
);

// Layout Wrapper
const AppWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(isAuthenticated());

  const hideLayoutPaths = ['/auth'];

  useEffect(() => {
    setAuth(isAuthenticated());
  }, [location]);

  const onAuthChange = (status) => {
    setAuth(status);
    if (status) {
      const role = getRole();
      if (role === 'admin') navigate('/admin/dashboard');
      else if (role === 'user') navigate('/user/home');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAuth(false);
    navigate('/auth');
  };

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout && auth && <Navbar onLogout={handleLogout} />}
      <main className="flex-grow bg-gray-50">
        <AppRoutes auth={auth} onAuthChange={onAuthChange} />
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

// Main App
const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
