import { createSelector } from 'reselect';


export const selectAllUsers = state => state?.reducer?.users || [];