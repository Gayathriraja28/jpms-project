import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ApplyJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const handleApply = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const coverLetter = formData.get('coverLetter');
    const resumeFile = formData.get('resume');

    const resumeBase64 = await toBase64(resumeFile);

    const newApplication = {
      jobId,
      title: `Frontend Developer`, // Example title
      company: 'OpenAI', // Example company
      status: 'Pending',
      applicant: {
        name: fullName,
        email,
        coverLetter,
        resume: resumeBase64,
      },
    };

    const existingApplications = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    existingApplications.push(newApplication);
    localStorage.setItem('appliedJobs', JSON.stringify(existingApplications));

    alert(`Successfully applied to ${newApplication.title}`);
    navigate('/user/dashboard');
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-8 mt-10 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Apply to Job</h2>
      <form onSubmit={handleApply} className="space-y-5">
        <input name="fullName" type="text" placeholder="Full Name" className="border w-full p-3 rounded" required />
        <input name="email" type="email" placeholder="Email" className="border w-full p-3 rounded" required />
        <textarea name="coverLetter" placeholder="Cover Letter" className="border w-full p-3 rounded" rows="4" required></textarea>
        <label>Resume:</label>
        <input name="resume" type="file" accept=".pdf,.doc,.docx" className="w-full" required />
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded w-full">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
