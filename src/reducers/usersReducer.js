import { FETCH_USERS_SUCCESS } from '../actions/usersAction';

const initialState = {
  usersListStore : [],
  favoritesUsersListStore : []
}

export default (state=initialState, action={}) => {
  // console.log('action payload', action.payload)
  const { payload } = action;
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      return  {
        ...state,
        usersListStore : payload 
      
      }
    }
    default:
      return state;
  }
}
