import React, { useState } from 'react';

const Settings = () => {
  const [email, setEmail] = useState('user@example.com');
  const [notifications, setNotifications] = useState(true);

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters.');
      return;
    }

    console.log('Password changed!');
    setPasswordError('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    alert('Password updated successfully!');
    setShowPasswordForm(false);
  };

  return (
    <div className="p-4 space-y-8">
      {/* Account Settings Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Account Settings</h2>
        <form className="space-y-4 bg-white p-4 rounded shadow">
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="mr-2"
            />
            <label>Enable Notifications</label>
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Change Password Link */}
      <div className="text-center">
        <p
          onClick={() => setShowPasswordForm(!showPasswordForm)}
          className="text-indigo-600 hover:underline cursor-pointer"
        >
          {showPasswordForm ? 'Hide Password Change' : 'Change Password'}
        </p>
      </div>

      {/* Change Password Form */}
      {showPasswordForm && (
        <div>
          <h2 className="text-xl font-bold mb-4">Change Password</h2>
          <form className="space-y-4 bg-white p-4 rounded shadow">
            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
            <button
              type="button"
              onClick={handlePasswordChange}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Update Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Settings;
