import React from 'react';
import UserDetails from '../components/UserDetails';

const UserPage = ({ userList }) => {

    if(userList === null) return <div>no users!</div>;

    return (<>
        <div>
            <h1>User Page</h1>
            {userList.map((user) => (
                <UserDetails key={user.userId} details={user}/>
            ))}
            
        </div>
    </>)
}

export default UserPage;