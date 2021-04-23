import { combineReducers } from 'redux';
import { userReducer } from './User/user_reducer';

export interface RootReducerProps {}

export const allReducers = combineReducers({ user: userReducer });
