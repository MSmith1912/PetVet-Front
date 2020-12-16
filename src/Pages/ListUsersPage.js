import React from 'react';
import UserDetails from '../components/UserDetails';
import { Link } from 'react-router-dom';

// ListUsersPage
const ListUsersPage = ({ userList }) => {

    if(!userList) return <div>no users!</div>;
    //console.log(userList);
    return (<>
        <div>
            <h1>User List Page</h1>
            {userList.map((user) => (
            <Link key={user.user_id} to={`/user/${user.user_id}`}>
                <h3>{user.username}</h3>
            </Link>
            ))}
            
        </div>
    </>)
}

export default ListUsersPage;