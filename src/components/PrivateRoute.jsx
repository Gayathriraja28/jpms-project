// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getRole } from '../utils/auth';

const PrivateRoute = ({ children, allowedRoles }) => {
  if (!isAuthenticated()) return <Navigate to="/auth" />;

  const role = getRole();
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" />; // or a NotAuthorized page
  }

  return children;
};

export default PrivateRoute;
