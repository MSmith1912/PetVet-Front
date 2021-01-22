import React from 'react';
import UserDetails from '../components/UserDetails';
import { FaTimes } from 'react-icons/fa';

const SingleUserPage = ({ individualUser, deleteUserById }) => {

    if(!individualUser) return <div>no users!</div>;
    console.log(individualUser);
    return (
    <>
        <div className="single">
            <h1>User Page</h1>
            
            <UserDetails key={individualUser[0].user_id} individualUser={individualUser}/>
            <button onClick={() => deleteUserById(individualUser[0].user_id)}>
                <FaTimes /> Delete User
            </button>
        </div>
    </>)
}

export default SingleUserPage;