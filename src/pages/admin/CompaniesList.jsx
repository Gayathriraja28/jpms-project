import React, { useState, useEffect } from 'react';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState('');

  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem('companies')) || ['OpenAI', 'Google', 'Microsoft'];
    setCompanies(storedCompanies);
  }, []);

  const handleAddCompany = () => {
    const trimmed = newCompany.trim();
    if (trimmed && !companies.includes(trimmed)) {
      const updated = [...companies, trimmed];
      setCompanies(updated);
      localStorage.setItem('companies', JSON.stringify(updated));
      setNewCompany('');
    }
  };

  const handleDeleteCompany = (name) => {
    const updated = companies.filter((company) => company !== name);
    setCompanies(updated);
    localStorage.setItem('companies', JSON.stringify(updated));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Companies</h2>
      {companies.length === 0 ? (
        <p className="text-gray-500 mb-4">No companies listed.</p>
      ) : (
        <ul className="space-y-2 mb-4">
          {companies.map((company, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span>{company}</span>
              <button
                onClick={() => handleDeleteCompany(company)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
          placeholder="Add a company"
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={handleAddCompany}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CompaniesList;
