// decides what happens to state based on action
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

//our reducer is just a function. takes in state and action
//when we dispatch object to reducer it has a type and possibly a payload
//want to evaluate the type here.
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case CLEAR_USERS: //clear users from app level state
      return { ...state, users: [], loading: false };
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
