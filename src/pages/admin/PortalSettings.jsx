import React, { useState } from 'react';

const PortalSettings = () => {
  const [settings, setSettings] = useState({
    siteTitle: 'My Job Portal',
    themeColor: '#4f46e5',
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    // Here you would typically send this data to the backend
    alert('Settings saved!');
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Portal Settings</h1>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Site Title</label>
        <input
          type="text"
          name="siteTitle"
          value={settings.siteTitle}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Theme Color</label>
        <input
          type="color"
          name="themeColor"
          value={settings.themeColor}
          onChange={handleChange}
          className="w-16 h-10 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="maintenanceMode"
            checked={settings.maintenanceMode}
            onChange={handleChange}
            className="mr-2"
          />
          Enable Maintenance Mode
        </label>
      </div>

      <button
        onClick={handleSave}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Save Settings
      </button>
    </div>
  );
};

export default PortalSettings;
