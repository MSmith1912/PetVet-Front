import React, { useEffect }from 'react';
import { connect } from "react-redux";
import { selectAllUsers } from '../Redux/selector';
import { loadAllUsers } from "../Redux/thunk";
import UserPage from '../Pages/UserPage';

const AllUsersContainer = ({retrieveAllUsers, users}) => {
    
    useEffect(() => {
        retrieveAllUsers();
      }, []);

    return (
        <UserPage userList={users}/>
    )
};

const mapStateToProps = state => ({
    users: selectAllUsers(state)
});

const mapDispacthToProps = dispatch => ({
    retrieveAllUsers: () => dispatch(loadAllUsers())
});

export default connect(mapStateToProps, mapDispacthToProps)(AllUsersContainer);