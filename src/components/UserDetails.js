import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = ({ individualUser }) => {

    if(!individualUser) return <div>No user</div>

    return (
        <>
            <h3>{individualUser.username}</h3>
            <p>{individualUser.firstName}</p>
            <p>{individualUser.lastName}</p>
            <p>{individualUser.dob}</p>
            <p>{individualUser.access}</p>
        </>
    )
}

export default UserDetails;