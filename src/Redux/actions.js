import {
    CREATE_USER,
    LOAD_SINGLE_USER,
    LOAD_SINGLE_ANIMAL,
    LOAD_ALL_USERS,
    LOAD_ALL_ANIMALS,
    CHANGE_STATE_ORDER,
    SEARCH_STATE_FOR,
    SET_STATE_SINGLE,
    SET_STATE_USER_ORDER,
    SET_STATE_ANIMAL_ORDER,
} from './actionTypes';


export const createUserAction = user => ({
    type: CREATE_USER,
    payload: { user },
  });
  
  export const loadSingleUserAction = individualUser => ({
    type: LOAD_SINGLE_USER,
    payload: { individualUser },
  });

  export const loadSingleAnimalAction = singleAnimal => ({
    type: LOAD_SINGLE_ANIMAL,
    payload: { singleAnimal },
  });
  
  export const loadAllUsersAction = allUsers => ({
    type: LOAD_ALL_USERS,
    payload: { allUsers },
  });

  export const loadAllAnimalsAction = allAnimals => ({
    type: LOAD_ALL_ANIMALS,
    payload: { allAnimals },
  });

  export const changeStateOrder = (order, direction) => ({
    type: CHANGE_STATE_ORDER,
    payload: { order, direction },
  });

  export const searchStateFor = (queryText) => ({
    type: SEARCH_STATE_FOR,
    payload: { queryText },
  });

  export const setStateForSingle = (user_id) => ({
    type: SET_STATE_SINGLE,
    payload: { user_id },
  });

  export const setStateForUserOrder = () => ({
    type: SET_STATE_USER_ORDER,
  });

  export const setStateForAnimalOrder = () => ({
    type: SET_STATE_ANIMAL_ORDER,
  })
