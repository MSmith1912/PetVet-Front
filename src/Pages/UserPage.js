import React from 'react';
import UserDetails from '../components/UserDetails';

const UserPage = ({ userList }) => {

    if(!userList) return <div>no users!</div>;
    console.log(userList);
    return (<>
        <div>
            <h1>User Page</h1>
            {userList.map((user) => (
                <UserDetails key={user.user_id} user={user}/>
            ))}
            
        </div>
    </>)
}

export default UserPage;