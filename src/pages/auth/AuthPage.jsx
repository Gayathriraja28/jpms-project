// import React, { useState } from 'react';

// const AuthPage = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const role = isAdmin ? 'Admin' : 'User';
//     const action = isRegister ? 'registered' : 'logged in';
//     alert(`${role} successfully ${action}`);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white mt-12 p-6 rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
//         {isRegister ? 'Register' : 'Login'} as {isAdmin ? 'Admin' : 'User'}
//       </h2>

//       <div className="flex justify-between mb-6">
//         <button
//           onClick={() => setIsAdmin(false)}
//           className={`px-4 py-2 w-full rounded-l ${!isAdmin ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
//         >
//           User
//         </button>
//         <button
//           onClick={() => setIsAdmin(true)}
//           className={`px-4 py-2 w-full rounded-r ${isAdmin ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
//         >
//           Admin
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {isRegister && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
//             required
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
//           required
//         />

//         <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition">
//           {isRegister ? 'Register' : 'Login'}
//         </button>
//       </form>

//       <div className="mt-4 text-center">
//         {isRegister ? 'Already have an account?' : "Don't have an account?"}
//         <button
//           onClick={() => setIsRegister(!isRegister)}
//           className="text-blue-600 hover:underline ml-2"
//         >
//           {isRegister ? 'Login' : 'Register'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../../utils/auth'; // Assuming you have a login function

// const AuthPage = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simulate login
//     login(isAdmin ? 'admin' : 'user');

//     // Redirect based on role
//     if (isAdmin) {
//       navigate('/admin/dashboard');
//     } else {
//       navigate('/user/dashboard');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white mt-12 p-6 rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
//         {isRegister ? 'Register' : 'Login'} as {isAdmin ? 'Admin' : 'User'}
//       </h2>

//       <div className="flex justify-between mb-6">
//         <button
//           onClick={() => setIsAdmin(false)}
//           className={`px-4 py-2 w-full rounded-l ${!isAdmin ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
//         >
//           User
//         </button>
//         <button
//           onClick={() => setIsAdmin(true)}
//           className={`px-4 py-2 w-full rounded-r ${isAdmin ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
//         >
//           Admin
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {isRegister && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full p-3 border rounded"
//             required
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-3 border rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 border rounded"
//           required
//         />

//         <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition">
//           {isRegister ? 'Register' : 'Login'}
//         </button>
//       </form>

//       <div className="mt-4 text-center">
//         {isRegister ? 'Already have an account?' : "Don't have an account?"}
//         <button
//           onClick={() => setIsRegister(!isRegister)}
//           className="text-blue-600 hover:underline ml-2"
//         >
//           {isRegister ? 'Login' : 'Register'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login, register } from '../../utils/auth';

// const AuthPage = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [role, setRole] = useState('user');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isRegister) {
//       const success = register(role, formData.name, formData.email, formData.password);
//       if (success) {
//         alert('Registration successful! Please log in.');
//         setIsRegister(false);
//       } else {
//         alert('User already exists.');
//       }
//     } else {
//       const success = login(role, formData.email, formData.password);
//       if (success) {
//         navigate(role === 'admin' ? '/admin/dashboard' : '/user/home');
//       } else {
//         alert('Invalid credentials.');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gry-500 via-blue-600 to-blue-700 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 drop-shadow-sm">
//           {isRegister ? 'Register' : 'Login'} as {role === 'admin' ? 'Admin' : 'User'}
//         </h2>

//         {/* Role Selection */}
//         <div className="flex bg-gray-100 rounded-lg overflow-hidden mb-6 shadow-inner">
//           <button
//             onClick={() => setRole('user')}
//             className={`w-1/2 py-2 font-semibold transition-all ${
//               role === 'user' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
//             }`}
//           >
//             User
//           </button>
//           <button
//             onClick={() => setRole('admin')}
//             className={`w-1/2 py-2 font-semibold transition-all ${
//               role === 'admin' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
//             }`}
//           >
//             Admin
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isRegister && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold transition shadow-md"
//           >
//             {isRegister ? 'Register' : 'Login'}
//           </button>
//         </form>

//         {/* Toggle Login/Register */}
//         <div className="mt-6 text-center text-sm">
//           {isRegister ? 'Already have an account?' : "Don't have an account?"}
//           <button
//             onClick={() => setIsRegister(!isRegister)}
//             className="text-blue-600 hover:underline ml-2 font-medium"
//           >
//             {isRegister ? 'Login' : 'Register'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../utils/auth';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
    workStatus: 'experienced' // default
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      if (formData.password !== formData.retypePassword) {
        alert('Passwords do not match.');
        return;
      }

      const success = register('user', formData.name, formData.email, formData.password, formData.workStatus);
      if (success) {
        alert('Registration successful! Please login.');
        setIsRegister(false);
      } else {
        alert('User already exists.');
      }
    } else {
      // Check if the user is an admin
      const isAdmin = login('admin', formData.email, formData.password);
      if (isAdmin) {
        navigate('/admin/dashboard');
        return;
      }

      // Check if the user is a regular user
      const isUser = login('user', formData.email, formData.password);
      if (isUser) {
        navigate('/user/home');
      } else {
        alert('Invalid credentials.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-600 via-gray-500 to-gray-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 drop-shadow-sm">
          {isRegister ? 'Register as User' : 'Login to Job Portal'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Work Status Selection */}
              <div className="space-y-1">
                <label className="block text-gray-700 font-medium">Work Status</label>
                <select
                  name="workStatus"
                  value={formData.workStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="experienced">I'm experienced – I have work experience (excluding internships)</option>
                  <option value="fresher">I'm a fresher – I am a student / Haven't worked after graduation</option>
                </select>
              </div>
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {isRegister && (
            <input
              type="password"
              name="retypePassword"
              placeholder="Re-type Password"
              value={formData.retypePassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold transition shadow-md"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 hover:underline ml-2 font-medium"
          >
            {isRegister ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
