import React from 'react';
import UserDetails from '../components/UserDetails';
import { Link } from 'react-router-dom';

const ListUsersPage = ({ userList, setSingleId }) => {

    if(!userList) return <div>no users!</div>;
    return (<>
        <div className="listUsers">
            <h1>User List</h1>
            {userList.map((user) => (
                // <Link key={user.user_id} to={`/user/${user.user_id}`}>
                //     <h3>User ID: {user.user_id} Username: {user.username}</h3>
                // </Link>
            <Link key={user.user_id} to={`/user/${user.user_id}`} onClick={() => setSingleId(user.user_id)}>
                <h3>User ID: {user.user_id} Username: {user.username}</h3>
            </Link>
            ))}
            
        </div>
    </>)
}

export default ListUsersPage;