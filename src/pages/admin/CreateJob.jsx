import React, { useState, useEffect } from 'react';

const CreateJob = () => {
    const[company,setCompany]=useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('postedJobs')) || [];
    setJobs(storedJobs);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      company,
      title,
      description,
    };

    const updatedJobs = [...jobs, newJob];
    localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
    setCompany('');
    setTitle('');
    setDescription('');
    alert('Job created successfully!');
  };

  const handleDelete = (jobId) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Create Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-3">📋 Posted Jobs</h3>
        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs posted yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <li key={job.id} className="py-4">
               <p className="font-bold text-lg">{job.company}</p>
                <p className="font-bold text-lg">{job.title}</p>
                <p className="text-sm text-gray-700">{job.description}</p>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="mt-2 text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreateJob;
