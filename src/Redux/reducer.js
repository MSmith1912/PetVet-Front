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
    SET_STATE_ANIMAL_ORDER
  } from './actionTypes';
  
  const initialState = {
    users: [],          
    animals: [],
    individualUser: {},
    individualAnimal: {},
    single: '',
    order: '',
    direction: 'asc',
    queryText: '',
  }

  export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_USER: {
        const { user } = payload;
        return {
          ...state,                 
          users: state?.users?.data?.concat(user.data),
        }
      }
      case LOAD_SINGLE_USER: {
        const { individualUser } = payload;
        return {
          ...state,
          individualUser: individualUser
        }
      }
      case LOAD_SINGLE_ANIMAL: {
        const { singleAnimal } = payload;
        return {
          ...state,
          individualAnimal: singleAnimal
        }
      }
      case LOAD_ALL_USERS: {
        const { allUsers } = payload;
        return {
          ...state,
          users: allUsers
        }
      }
      case LOAD_ALL_ANIMALS: {
        const { allAnimals} = payload;
        return {
          ...state,
          animals: allAnimals
        }
      }
      case CHANGE_STATE_ORDER: {
        const { order, direction} = payload;
        return {
          ...state,
          order: order,
          direction: direction
        }
      }
      case SEARCH_STATE_FOR: {
        const { queryText } = payload;
        return {
          ...state,
          queryText: queryText
        }
      }
      case SET_STATE_SINGLE: {
        const { user_id } = payload;
        return {
          ...state,
          single: user_id,
        }
      }
      case SET_STATE_USER_ORDER: {
        return {
          ...state,
          order: 'username'
        }
      }
      case SET_STATE_ANIMAL_ORDER: {
        return {
          ...state,
          order: 'name'
        }
      }
      default:
        return state;
    }
  }