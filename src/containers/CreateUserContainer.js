import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CreateUser } from '../Pages/CreateUser';
import { createUserRequest } from '../Redux/thunk';
import  formDisplay from '../App'
import { FaPlus } from 'react-icons/fa';

const CreateUserContainer = ({ onCreateUserPressed, toggleForm, formDisplay }) => {

    const [open, setOpen ] = useState(false); 

    return (
        <>
            <button onClick={() => {
                setOpen(!open);
            }}>Add User</button>

            {open === true ? (
                <CreateUser onCreateUserPressed={onCreateUserPressed} />
            ) : (
                <div>Would you like to add a user?</div>
            )}
        </>
    )
    
}

const mapStateToProps = state => ({

});

const mapDispacthToProps = dispatch => ({
    onCreateUserPressed: body => dispatch(createUserRequest(body))
});

export default connect(mapStateToProps, mapDispacthToProps)(CreateUserContainer);