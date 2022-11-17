import {
  GET_USERS,
  USER_LOGGED,
  GET_POSTS,
  POST_POSTS,
  SEARCH_BY_ID,
  CLEAR_STATE,
  POST_COMMENT,
  SEARCH_TAG,
  AYUDA_COMMENT,
} from "../Actions/ActionTypes";

const initialState = {
  users: [],
  userLogged: [],
  posts: [],
  postDetail: [],
  commentsDetail: [],
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
        postDetail: payload[0],
        commentsDetail: payload[1],
      };
    case CLEAR_STATE:
      return {
        ...state,
        postDetail: [],
        commentsDetail: [],
      };
    case POST_COMMENT:
      return {
        ...state,
      };
    case SEARCH_TAG:
      return {
        ...state,
        posts: payload,
      };
    case AYUDA_COMMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
