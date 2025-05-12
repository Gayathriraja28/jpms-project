import React, { useState } from 'react';

const TestSchedule = () => {
  const [tests, setTests] = useState([]);
  const [formData, setFormData] = useState({ title: '', date: '', time: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTest = () => {
    if (formData.title && formData.date && formData.time) {
      setTests([...tests, formData]);
      setFormData({ title: '', date: '', time: '' });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Test Schedule</h2>
      <div className="space-y-3 mb-4">
          <input
        type='text'
        name='companyname'
        placeholder='Company Name'
        value={formData.companyname}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        />
        <input
          type="text"
          name="title"
          placeholder="Test Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button onClick={handleAddTest} className="w-full bg-green-600 text-white py-2 rounded">
          Add Test
        </button>
      </div>
      <ul className="space-y-2">
        {tests.map((test, idx) => (
          <li key={idx} className="border p-3 rounded bg-gray-50">
           <strong>{test.companyname}  </strong> scheduled <strong>{test.title}</strong> assesment on {test.date} at {test.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestSchedule;
