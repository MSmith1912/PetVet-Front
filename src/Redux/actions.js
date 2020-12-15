import {
    CREATE_USER,
    LOAD_SINGLE_USER,
    LOAD_ALL_USERS,
} from './actionTypes';


export const createUserAction = user => ({
    type: CREATE_USER,
    payload: { user },
  });
  
  export const loadSingleUserAction = singleUser => ({
    type: LOAD_SINGLE_USER,
    payload: { singleUser },
  });
  
  export const loadAllUsersAction = allUsers => ({
    type: LOAD_ALL_USERS,
    payload: { allUsers },
  });
