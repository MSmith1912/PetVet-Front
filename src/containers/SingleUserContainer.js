import React from 'react';
import { connect } from "react-redux";
import { selectUserById } from '../Redux/selector';
import { deleteUserByIdRequest } from "../Redux/thunk";
import SingleUserPage from '../Pages/SingleUserPage';
import { useParams } from 'react-router-dom';

const SingleUserContainer = ({ individualUser, deleteUserById }) => {

    const { user_id } = useParams();

    if(!individualUser) {
        return <div>User with ID:{user_id} not found</div>;
    }
    console.log(individualUser);
    return (
        <SingleUserPage 
            individualUser={individualUser}
            deleteUserById={deleteUserById}/>
    )
};

const mapStateToProps = state => ({
    individualUser: selectUserById(state),
});

const mapDispacthToProps = dispatch => ({
    deleteUserById: user_id => dispatch(deleteUserByIdRequest(user_id))
});

export default connect(mapStateToProps, mapDispacthToProps)(SingleUserContainer);