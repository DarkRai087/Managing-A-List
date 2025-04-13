import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserDetails from './UserDetails';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all 
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/users');
      setUsers(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete 
  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`/api/user/${id}`);
        fetchUsers();
        setSelectedUser(null);
      } catch (err) {
        setError('Failed to delete user');
        console.error(err);
      }
    }
  };

  // Handle add new 
  const handleAddUser = () => {
    setSelectedUser(null);
    setIsEditing(false);
    setIsAdding(true);
  };

  // Handle edit 
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsAdding(false);
    setIsEditing(true);
  };

  // Handle view 
  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsAdding(false);
    setIsEditing(false);
  };

  // Handle form submission 
  const handleFormSubmit = async (userData) => {
    try {
      if (isEditing) {
        await axios.put(`/api/user/${selectedUser.id}`, userData);
      } else {
        await axios.post('/api/user', userData);
      }
      fetchUsers();
      setIsAdding(false);
      setIsEditing(false);
      setSelectedUser(null);
    } catch (err) {
      setError(isEditing ? 'Failed to update user' : 'Failed to create user');
      console.error(err);
    }
  };

  // Load users when 
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">User Management System</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddUser}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User List */}
        <div className="md:col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          
          {loading ? (
            <p>Loading users...</p>
          ) : users.length === 0 ? (
            <p>No users found</p>
          ) : (
            <ul>
              {users.map(user => (
                <li key={user.id} className="border-b py-2 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleViewUser(user)}
                      className="text-left hover:text-blue-500"
                    >
                      {user.firstName} {user.lastName}
                    </button>
                    <div>
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-blue-500 hover:text-blue-700 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* User Form or Details */}
        <div className="md:col-span-2 bg-white p-4 rounded shadow">
          {isAdding || isEditing ? (
            <UserForm
              user={selectedUser}
              isEditing={isEditing}
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setIsAdding(false);
                setIsEditing(false);
              }}
            />
          ) : selectedUser ? (
            <UserDetails user={selectedUser} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>Select a user to view details or click "Add New User" to create one</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;