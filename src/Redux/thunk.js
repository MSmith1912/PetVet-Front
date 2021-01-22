import { 
    createUserAction,
    loadSingleUserAction,
    loadSingleAnimalAction,
    loadAllUsersAction,
    loadAllAnimalsAction,
    changeStateOrder,
    searchStateFor,
    setStateForSingle,
    setStateForUserOrder,
    setStateForAnimalOrder } from './actions'

import {
    createUser,
    getUserById,
    getAnimalById,
    getAllUsers,
    getAllAnimals, 
    deleteUserById,
    deleteAnimalById
} from './ApiCalls/apiCalls';

export const createUserRequest = body => dispatch => {
    try {
        console.log("From thunk" + body)
        createUser(body)
          .then(res => {
              dispatch(createUserAction(res));
              window.location = "/users";
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
};

export const loadAllAnimals = () => dispatch => {
    try {
        getAllAnimals().then(res => {
            dispatch(loadAllAnimalsAction(res.data));
        });
    } catch (err) {
        dispatch(displayAlert(err));
    }
};

export const getSingleUser = (individualUser) => async dispatch => {
    try {
        dispatch(loadSingleUserAction(individualUser));
    } catch (err) {
        dispatch(displayAlert(err));
    }
};

export const getSingleAnimal = (animalId) => async dispatch => {
    try {
        getAnimalById(animalId).then(res => {
            console.log(res.data)
            dispatch(loadSingleAnimalAction(res.data));
        })
    } catch (err) {
        dispatch(displayAlert(err));
    }
};

export const deleteUserByIdRequest = (user_id) => async dispatch => {
    try {
            deleteUserById(user_id)
            window.location = "/users";
    } catch (err) {
        dispatch(displayAlert(err));
    }
};

export const deleteAnimalByIdRequest = (animal_id) => async dispatch => {
    try {
            deleteAnimalById(animal_id)
            window.location = "/animals";
    } catch (err) {
        dispatch(displayAlert(err));
    }
};

export const changeOrder = (order, direction) => async dispatch => {
    try {
        //console.log("From thunk" + order + direction);
        dispatch(changeStateOrder(order, direction));
    } catch (err){
        dispatch(displayAlert(err));
    }
}

export const searchFor = (queryText) => async dispatch => {
    try {
        dispatch(searchStateFor(queryText));
    } catch (err) {
        dispatch(displayAlert(err))
    }
}

export const setSingleIdThunk = (user_id) => async dispatch => {
    try {
        dispatch(setStateForSingle(user_id));
    } catch (err) {
        dispatch(displayAlert(err));
    }
}

export const setUserOrderBy = () => async dispatch => {
    try {
        dispatch(setStateForUserOrder());
    } catch (err) {
        dispatch(displayAlert(err));
    }
}

export const setAnimalOrderBy = () => async dispatch => {
    try {
        dispatch(setStateForAnimalOrder());
    } catch (err) {
        dispatch(displayAlert(err));
    }
}



export const displayAlert = (text) => () => {
    alert(text);
  };