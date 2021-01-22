import { createSelector } from 'reselect';
import { createUser, getAllAnimals } from './ApiCalls/apiCalls';


export const selectAllUsers = state => state?.reducer?.users || [];

export const selectAllAnimals = state => state?.reducer?.animals || [];

export const selectSingle = state => state?.reducer?.single || '';

export const selectUserById = createSelector(
    selectAllUsers,
    selectSingle,
    (users, single) => users.filter((user) => user.user_id === single)
)

export const selectAnimalById = (state, animalId) => state?.reducer?.individualAnimal || [];

export const selectOrderBy = state => state?.reducer?.order || '';

export const selectOrderDir = state => state?.reducer?.direction || '';

export const selectQueryText = state => state?.reducer?.queryText || '';


