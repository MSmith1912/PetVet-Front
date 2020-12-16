import { createSelector } from 'reselect';


export const selectAllUsers = state => state?.reducer?.users || [];

export const selectUserById = (state, user_id) => state?.reducer?.individualUser || [];