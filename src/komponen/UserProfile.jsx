import React from 'react';
import { connect } from 'react-redux';

const UserProfile = ({ user, logout }) => (
  <div className="mb-4">
    {user ? (
      <>
        <p className="mb-2">Logged in as: {user.username}</p>
        <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </>
    ) : (
      <p>You are not logged in.</p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: 'LOGOUT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
