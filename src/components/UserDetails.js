import React from 'react';

const UserDetails = ({ user }) => {

    if(!user) return <div>No user</div>

    return (
        <>
            <h3>{user.username}</h3>
            <p>{user.firstName}</p>
            <p>{user.LastName}</p>
        </>
    )
}

export default UserDetails;