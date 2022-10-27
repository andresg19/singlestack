import {
  GET_USERS,
  USER_LOGGED,
  GET_POSTS,
  POST_POSTS,
  SEARCH_BY_ID,
  CLEAR_STATE,
} from "../Actions/ActionTypes";

const initialState = {
  users: [],
  userLogged: [],
  posts: [],
  postDetail: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case USER_LOGGED:
      localStorage.setItem("currentUser", JSON.stringify(payload));
      return {
        ...state,
        userLogged: payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case POST_POSTS:
      return {
        ...state,
      };
    case SEARCH_BY_ID:
      return {
        ...state,
        postDetail: payload,
      };
    case CLEAR_STATE:
      return { 
        ...state,
        postDetail: [],
      }
    default:
      return state;
  }
}
