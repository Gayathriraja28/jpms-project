import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
    education: '',
    college: '',
    address: '',
    languages: '',
    socialLinks: '',
    awards: '',
    projects: '',
    certifications: '',
    nationality: '',
    skill:'',
  
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {
      name: 'John Doe',
      email: 'john.doe@example.com',
      contact: '9876543210',
      education: 'B.Tech in Computer Science',
      college: 'ABC University',
      address: '123 Main Street, City, Country',
      languages: 'English, Hindi',
      socialLinks: 'https://linkedin.com/in/johndoe',
      awards: 'Best Intern 2023',
      projects: 'Job Portal, E-commerce Website',
      certifications: 'React Developer Certificate',
      nationality: 'Indian',
      skill: 'C,Java',
    };
    setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/user/dashboard');
  };

  const fields = [
    { name: 'name', label: 'Full Name' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'contact', label: 'Contact Number' },
    { name: 'education', label: 'Education' },
    { name: 'college', label: 'College / University' },
    { name: 'address', label: 'Address' },
    { name: 'languages', label: 'Languages Known' },
    { name: 'socialLinks', label: 'Social Links' },
    { name: 'awards', label: 'Awards / Achievements' },
    { name: 'projects', label: 'Projects' },
    { name: 'certifications', label: ' Certifications' },
    { name: 'nationality', label: 'Nationality' },
    { name: 'skill', label: 'Skills' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

      {fields.map(({ name, label, type = 'text' }) => (
        <div key={name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
          <input
            type={type}
            name={name}
            value={user[name]}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder={label}
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
};

export default UpdateProfile;
