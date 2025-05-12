// export const saveAuthToken = (token) => {
//   localStorage.setItem('authToken', token);
// };

// export const logout = () => {
//   localStorage.removeItem('authToken');
// };

// export const isAuthenticated = () => {
//   return !!localStorage.getItem('authToken');
// };
// src/utils/auth.js

// export const login = (role) => {
//   localStorage.setItem('auth', 'true');
//   localStorage.setItem('role', role); // 'user' or 'admin'
// };

// export const logout = () => {
//   localStorage.clear();
// };

// export const isAuthenticated = () => {
//   return localStorage.getItem('auth') === 'true';
// };

// export const getRole = () => {
//   return localStorage.getItem('role');
// };

// utils/auth.js

export const register = (role, name, email, password) => {
  const key = role === 'admin' ? 'admins' : 'users';
  const users = JSON.parse(localStorage.getItem(key)) || [];

  // Check if user already exists in the role
  const exists = users.find(user => user.email === email);
  if (exists) return false;

  // Create a new user object
  const newUser = { name, email, password, resume: '', appliedJobs: [] };
  users.push(newUser);
  localStorage.setItem(key, JSON.stringify(users));
  return true;
};

export const login = (role, email, password) => {
  const key = role === 'admin' ? 'admins' : 'users';
  const users = JSON.parse(localStorage.getItem(key)) || [];

  // Dummy credentials for admin
  const dummyAdmin = {
    email: 'admin@jobportal.com',
    password: 'admin123'
  };

  // Check for admin login using dummy credentials
  if (role === 'admin') {
    if (email === dummyAdmin.email && password === dummyAdmin.password) {
      // Simulate admin login
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', 'admin');
      localStorage.setItem('email', email);
      return true;
    }
  }

  // Check for user login
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    localStorage.setItem('auth', 'true');
    localStorage.setItem('role', role);
    localStorage.setItem('email', email);
    return true;
  }

  return false;
};

export const getCurrentUser = () => {
  const role = localStorage.getItem('role');
  const email = localStorage.getItem('email');
  if (!role || !email) return null;

  const users = JSON.parse(localStorage.getItem(role === 'admin' ? 'admins' : 'users')) || [];
  return users.find(user => user.email === email) || null;
};

export const logout = () => {
  localStorage.removeItem('auth');
  localStorage.removeItem('role');
  localStorage.removeItem('email');
};

export const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

export const getRole = () => {
  return localStorage.getItem('role');
};

