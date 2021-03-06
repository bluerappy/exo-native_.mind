import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  usersList: usersReducer
})

export default rootReducer;
