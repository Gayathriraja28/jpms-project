import React, { useState } from 'react';

const Feedback = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setMessage('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Send Us Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
        <textarea
          rows="4"
          placeholder="Your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
