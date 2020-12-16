import React from 'react';
import UserDetails from '../components/UserDetails';
import { FaTimes } from 'react-icons/fa';

const SingleUserPage = ({ individualUser }) => {

    if(!individualUser) return <div>no users!</div>;

    return (
    <>
            <h1>User Page</h1>
            <UserDetails key={individualUser.user_id} individualUser={individualUser}/>
            <button onClick={() => this.props.deleteUser(individualUser.user_id)}>
                <FaTimes /> Delete User
            </button>
    </>)
}

export default SingleUserPage;