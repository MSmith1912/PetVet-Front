import React from 'react';

const UserDetails = ({ user }) => (
    <>
        <h3>{user.username}</h3>
        <p>{user.firstName}</p>
        <p>{user.LastName}</p>
    </>
)

export default UserDetails;