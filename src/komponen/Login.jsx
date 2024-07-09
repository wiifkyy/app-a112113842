import React, { useState } from 'react';
import { connect } from 'react-redux';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-400 px-3 py-2 mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (username) => dispatch({ type: 'LOGIN', payload: { username } })
});

export default connect(null, mapDispatchToProps)(Login);
