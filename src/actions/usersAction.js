export const FETCH_USERS_REQUEST  = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS  = 'FETCH_USERS_SUCCESS';

export function fetchUsers() {
  return {
      type : FETCH_USERS_REQUEST,
  };
}
export function fetchUsersSuccess(payload) {
  return {
      type : FETCH_USERS_SUCCESS,
      payload
  };
}