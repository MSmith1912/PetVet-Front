import {
    CREATE_USER,
    LOAD_SINGLE_USER,
    LOAD_ALL_USERS,
  } from './actionTypes';
  
  const initialState = {
    users: [],           // To store all our trades
    animals: [],
    individualUser: {},
    individualAnimal: {}
  }
  // action refers to:
  // - type of action i.e. create, save, delete etc.
  // - payload which is the trade from the back
  export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_USER: {
        const { user } = payload;
        return {
          ...state,                    // makes a copy of the state, must always make a copy when using redux.
          users: state?.users?.data?.concat(user.data),  // then adds the new trade to the copy
        }
      }
      case LOAD_SINGLE_USER: {
        const { singleUser } = payload;
        return {
          ...state,
          individualUser: singleUser
        }
      }
      case LOAD_ALL_USERS: {
        const { allUsers } = payload;
        return {
          ...state,
          users: allUsers
        }
      }
      default:
        return state;
    }
  }