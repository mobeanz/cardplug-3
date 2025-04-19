import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState(false);

  return (
    <div className="min-h-screen p-8 text-gray-900 bg-white">
      {!access ? (
        <div className="max-w-sm mx-auto">
          <h2 className="text-xl font-semibold mb-2">Enter Admin Password</h2>
          <input
            type="password"
            className="w-full p-2 border rounded mb-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setAccess(password === '123')} className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <p>View and manage buyer requests (coming soon).</p>
        </div>
      )}
    </div>
  );
}