import React, { useEffect }from 'react';
import { connect } from "react-redux";
import { selectAllUsers , selectOrderBy, selectOrderDir, selectQueryText } from '../Redux/selector'
import { loadAllUsers, changeOrder, searchFor, setUserOrderBy, setSingleIdThunk } from "../Redux/thunk";
import ListUsersPage from '../Pages/ListUsersPage';
import CreateUserContainer from './CreateUserContainer';
import  toggleForm from '../App'
import formDisplay from '../App'
import SearchPage from '../Pages/SearchPage';

const AllUsersContainer = ({retrieveAllUsers,  setOrderForUser, users, orderBy, orderDir, orderChanged, search, queryText, setSingleIdComp }) => {
    
    useEffect(() => {
        retrieveAllUsers();
        setOrderForUser();
      }, []);

      const target = 'users';

      let order;
      let filteredUsers = users;
      if(orderDir === 'asc') {
          order = 1;
      } else {
          order = -1;
      }
      filteredUsers = filteredUsers.sort((a, b) => {
          if(a[orderBy].toLowerCase() <
            b[orderBy].toLowerCase()
        ) {
            return -1 * order;
        } else {
            return 1 * order;
        }
      }).filter(eachItem => {
          return (
              eachItem['username']
              .toLowerCase()
              .includes(queryText.toLowerCase())
          )
      });

    return (
        <>
            <div id="container">
                <SearchPage 
                    orderBy={orderBy} 
                    orderDir={orderDir}
                    changeOrder={orderChanged}
                    search={search}
                    target={target}/>
                <CreateUserContainer toggleForm={toggleForm} formDisplay={formDisplay}/>
                <ListUsersPage userList={filteredUsers} setSingleId={setSingleIdComp}/>
            </div>
        </>
    )
};

const mapStateToProps = state => ({
    users: selectAllUsers(state),
    orderBy: selectOrderBy(state),
    orderDir: selectOrderDir(state),
    queryText: selectQueryText(state)
});

const mapDispacthToProps = dispatch => ({
    retrieveAllUsers: () => dispatch(loadAllUsers()),
    setOrderForUser: () => dispatch(setUserOrderBy()),
    orderChanged: (order, direction) => dispatch(changeOrder(order, direction)),
    search: (queryText) => dispatch(searchFor(queryText)),
    setSingleIdComp: (user_id) => dispatch(setSingleIdThunk(user_id))
});

export default connect(mapStateToProps, mapDispacthToProps)(AllUsersContainer);