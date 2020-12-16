import React, { useEffect }from 'react';
import { connect } from "react-redux";
import { selectUserById } from '../Redux/selector';
import { getSingleUser, deleteUserByIdRequest } from "../Redux/thunk";
import SingleUserPage from '../Pages/SingleUserPage';
import { useParams } from 'react-router-dom';

const SingleUserContainer = ({ getUserById, individualUser, deleteUserById }) => {

    const { user_id } = useParams()

    useEffect(() => {
        getUserById(user_id);
    }, []);

    if(!individualUser) {
        return <div>User with ID:{user_id} not found</div>;
    }
   
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
    getUserById: id => dispatch(getSingleUser(id)),
    deleteUserById: id => dispatch(deleteUserByIdRequest(id))
});

export default connect(mapStateToProps, mapDispacthToProps)(SingleUserContainer);