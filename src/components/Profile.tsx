import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {user.fullname}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Add more user details and options to change them */}
    </div>
  );
};

export default Profile;