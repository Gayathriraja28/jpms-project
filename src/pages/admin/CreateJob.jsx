import React, { useState, useEffect } from 'react';

const CreateJob = () => {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [jobType, setJobType] = useState('');
  const [skills, setSkills] = useState('');
  const [qualification, setQualification] = useState('');
  const [shift, setShift] = useState('');
  const [editingJobId, setEditingJobId] = useState(null);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('postedJobs')) || [];
    setJobs(storedJobs);
  }, []);

  const clearForm = () => {
    setCompany('');
    setTitle('');
    setDescription('');
    setLocation('');
    setSalary('');
    setJobType('');
    setSkills('');
    setQualification('');
    setShift('');
    setEditingJobId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      id: editingJobId || Date.now(),
      company,
      title,
      description,
      location,
      salary,
      jobType,
      skills,
      qualification,
      shift,
    };

    let updatedJobs;
    if (editingJobId) {
      updatedJobs = jobs.map((job) => (job.id === editingJobId ? jobData : job));
    } else {
      updatedJobs = [...jobs, jobData];
    }

    localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
    clearForm();
    alert(`Job ${editingJobId ? 'updated' : 'created'} successfully!`);
  };

  const handleDelete = (jobId) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
    if (editingJobId === jobId) clearForm();
  };

  const handleEdit = (job) => {
    setEditingJobId(job.id);
    setCompany(job.company);
    setTitle(job.title);
    setDescription(job.description);
    setLocation(job.location);
    setSalary(job.salary);
    setJobType(job.jobType);
    setSkills(job.skills);
    setQualification(job.qualification);
    setShift(job.shift);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">
        {editingJobId ? 'Update Job' : 'Create Job'}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Job Type (e.g. Full-time, Part-time)"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Skills Required (comma-separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Educational Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">Select Shift</option>
          <option value="Day">Day</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
          <option value="Rotational">Rotational</option>
        </select>

        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="md:col-span-2 border px-4 py-2 rounded"
          required
        />
        <div className="md:col-span-2 flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingJobId ? 'Update Job' : 'Post Job'}
          </button>
          {editingJobId && (
            <button
              type="button"
              onClick={clearForm}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-3"> Posted Jobs</h3>
        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs posted yet.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="border p-4 rounded bg-gray-50">
                <p className="font-bold text-lg">{job.title} at {job.company}</p>
                <p className="text-sm text-gray-700">{job.description}</p>
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Type:</strong> {job.jobType}</p>
                  <p><strong>Skills:</strong> {job.skills}</p>
                  <p><strong>Qualification:</strong> {job.qualification}</p>
                  <p><strong>Shift:</strong> {job.shift}</p>
                </div>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => handleEdit(job)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreateJob;
