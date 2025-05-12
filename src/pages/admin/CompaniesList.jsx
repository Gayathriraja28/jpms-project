import React, { useState } from 'react';

const CompaniesList = () => {
  const [companies, setCompanies] = useState(['OpenAI', 'Google', 'Microsoft']);
  const [newCompany, setNewCompany] = useState('');

  const handleAddCompany = () => {
    if (newCompany.trim()) {
      setCompanies([...companies, newCompany.trim()]);
      setNewCompany('');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Companies</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        {companies.map((company, idx) => (
          <li key={idx}>{company}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
          placeholder="Add a company"
          className="border p-2 flex-1 rounded"
        />
        <button onClick={handleAddCompany} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
    </div>
  );
};

export default CompaniesList;
