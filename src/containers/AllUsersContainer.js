import React, { useEffect }from 'react';
import { connect } from "react-redux";
import { selectAllUsers } from '../Redux/selector';
import { loadAllUsers } from "../Redux/thunk";
import ListUsersPage from '../Pages/ListUsersPage';
import { CreateUser } from '../Pages/CreateUser';

const AllUsersContainer = ({retrieveAllUsers, users}) => {
    
    useEffect(() => {
        retrieveAllUsers();
      }, []);

    return (
        <>
            <CreateUser />
            <ListUsersPage userList={users}/>
        </>
    )
};

const mapStateToProps = state => ({
    users: selectAllUsers(state)
});

const mapDispacthToProps = dispatch => ({
    retrieveAllUsers: () => dispatch(loadAllUsers())
});

export default connect(mapStateToProps, mapDispacthToProps)(AllUsersContainer);