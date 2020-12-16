import React from 'react';
import { connect } from 'react-redux';
import { CreateUser } from '../Pages/CreateUser';
import { createUserRequest } from '../Redux/thunk';

const CreateUserContainer = ({ onCreateUserPressed }) => {
    <CreateUser onCreateUserPressed={onCreateUserPressed}/>
}

const mapStateToProps = state => ({

});

const mapDispacthToProps = dispatch => ({
    onCreateUserPressed: body => dispatch(createUserRequest(body))
});

export default connect(mapStateToProps, mapDispacthToProps)(CreateUserContainer);