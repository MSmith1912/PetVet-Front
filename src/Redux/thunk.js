import { 
    createUserAction,
    loadSingleUserAction,
    loadAllUsersAction } from './actions'

import {
    createUser,
    getUserById,
    getAllUsers, 
    deleteUserById
} from './ApiCalls/apiCalls';

export const createUserRequest = body => dispatch => {
    try {
        createUser(body)
          .then(res => {
              dispatch(createUserAction(res));
              window.location = "/";
          });
    } catch (err) {
        dispatch(displayAlert(err));
    }
};

export const loadAllUsers = () => dispatch => {
    try {
        getAllUsers().then(res => {
            dispatch(loadAllUsersAction(res.data));
        });
    } catch (err) {
        dispatch(displayAlert(err));
    }
}

export const getSingleUser = (user_id) => async dispatch => {
    try {
        getUserById(user_id).then(res => {
            dispatch(loadSingleUserAction(res.data));
        })
    } catch (err) {
        dispatch(displayAlert(err));
    }
}

export const deleteUserByIdRequest = (user_id) => async dispatch => {
    try {
            deleteUserById(user_id)
            window.location = "/users";
    } catch (err) {
        dispatch(displayAlert(err));
    }
}

export const displayAlert = (text) => () => {
    alert(text);
  };