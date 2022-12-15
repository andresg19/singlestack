import {
  GET_USERS,
  USER_LOGGED,
  GET_POSTS,
  POST_POSTS,
  SEARCH_BY_ID,
  CLEAR_STATE,
  POST_COMMENT,
  SEARCH_TAG,
  LIKE,
  DISLIKE,
  ALL_LIKES,
  ALL_DISLIKES,
  DISLIKE_UP,
  DISLIKE_DOWN,
  GET_FEEDPOSTS,
  POST_FEEDCOMMENTS,
} from "../Actions/ActionTypes";

const initialState = {
  users: [],
  userLogged: [],
  posts: [],
  postDetail: [],
  commentsDetail: [],
  likes: [],
  dislikes: [],
  feedPosts: [],
  feedComments: [],
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
    case LIKE:
      return {
        ...state,
      };
    case DISLIKE:
      return {
        ...state,
      };
    case ALL_LIKES:
      return {
        ...state,
        likes: payload,
      };
    case ALL_DISLIKES:
      return {
        ...state,
        dislikes: payload,
      };
    case DISLIKE_UP:
      return {
        ...state,
      };
    case DISLIKE_DOWN:
      return {
        ...state,
      };
    case GET_FEEDPOSTS:
      return {
        ...state,
        feedPosts: payload,
      };
    case POST_FEEDCOMMENTS:
      return {
        ...state,
        feedComments: payload,
      };
    default:
      return state;
  }
}
