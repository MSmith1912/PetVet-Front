import React from 'react';

const UserDetails = ({ individualUser }) => {

    if(!individualUser) return <div>No user</div>
    console.log(individualUser);

    return (
        <>
            <div className="details">
                <h3 className="headings">{individualUser[0].username}</h3>
                <p>{individualUser[0].firstName}</p>
                <p>{individualUser[0].lastName}</p>
                <p>{individualUser[0].dob}</p>
                <p>{individualUser[0].access}</p>
            </div>
        </>
    )
}

export default UserDetails;