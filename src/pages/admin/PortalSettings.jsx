import React, { useState } from 'react';

const PortalSettings = () => {
  const [settings, setSettings] = useState({
    siteTitle: 'My Job Portal',
    themeColor: '#4f46e5',
    maintenanceMode: false,
    adminEmail: 'admin@example.com',
    adminPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (settings.adminPassword && settings.adminPassword !== settings.confirmPassword) {
      newErrors.password = 'Passwords do not match';
    }
    if (!settings.adminEmail.includes('@')) {
      newErrors.email = 'Invalid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    // Typically, send settings to backend here
    alert('Admin settings updated successfully!');
    setSettings((prev) => ({ ...prev, adminPassword: '', confirmPassword: '' }));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

      {/* Site Title */}
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

      {/* Theme Color */}
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

      {/* Maintenance Mode */}
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

      <hr className="my-6" />

      {/* Admin Email */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Admin Email</label>
        <input
          type="email"
          name="adminEmail"
          value={settings.adminEmail}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Admin Password */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">New Password</label>
        <input
          type="password"
          name="adminPassword"
          value={settings.adminPassword}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={settings.confirmPassword}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
      >
        Save Settings
      </button>
    </div>
  );
};

export default PortalSettings;
