import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [resumeName, setResumeName] = useState('');
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
    skill: '',
    resume: ''
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
      resume: ''
    };
    setUser(storedUser);
    if (storedUser.resume) {
      setResumeName('Resume Uploaded');
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, resume: reader.result });
        setResumeName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/user/dashboard');
  };

  const handleDeleteResume = () => {
    setUser((prev) => ({ ...prev, resume: '' }));
    setResumeName('');
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
    { name: 'certifications', label: 'Certifications' },
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

      {/* Resume Upload */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeUpload}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
        {resumeName && (
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-green-600">{resumeName}</span>
            <button
              type="button"
              onClick={handleDeleteResume}
              className="ml-4 text-red-500 hover:underline text-sm"
            >
              Delete Resume
            </button>
          </div>
        )}
      </div>

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
