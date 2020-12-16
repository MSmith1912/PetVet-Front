import React, { useEffect }from 'react';
import { connect } from "react-redux";
import { selectUserById } from '../Redux/selector';
import { getSingleUser, deleteUser } from "../Redux/thunk";
import SingleUserPage from '../Pages/SingleUserPage';
import { useParams } from 'react-router-dom';

const SingleUserContainer = ({ getUserById, individualUser, deleteUser }) => {

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
            deleteUser={deleteUser}/>
    )
};

const mapStateToProps = state => ({
    individualUser: selectUserById(state),
});

const mapDispacthToProps = dispatch => ({
    getUserById: id => dispatch(getSingleUser(id)),
    deleteUser: id => dispatch(deleteUser(id))
});

export default connect(mapStateToProps, mapDispacthToProps)(SingleUserContainer);