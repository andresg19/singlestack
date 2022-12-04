import axios from "axios";
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
  DISLIKE_UP,
  DISLIKE_DOWN,
  ALL_DISLIKES,
} from "../Actions/ActionTypes";

export const getUsers = (payload) => {
  return async function (dispatch) {
    console.log("entre");
    try {
      let result = await axios.get("http://localhost:3001/users");
      return dispatch({
        type: GET_USERS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const login = (payload) => {
//   return async function () {
//     try {
//       console.log('entre')
//       let fnLogin = await axios.post('http://localhost:3001/users/login', payload);
//       return {
//         fnLogin,
//       }
//     } catch (error) {
//       alert(error);
//     }
//   }
// }

export const userLogged = (payload) => {
  return async function (dispatch) {
    return dispatch({
      type: USER_LOGGED,
      payload,
    });
  };
};

export const register = (payload) => {
  return async function () {
    console.log("entre");
    let data = axios.post("http://localhost:3001/users", payload);
    return {
      data,
    };
  };
};

export const getPosts = (payload) => {
  return async function (dispatch) {
    try {
      let result = await axios.get("http://localhost:3001/posts");
      return dispatch({
        type: GET_POSTS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postPost = (payload) => {
  return async function (dispatch) {
    try {
      let result = await axios.post("http://localhost:3001/posts", payload);

      return dispatch({
        type: POST_POSTS,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchPost = (id) => {
  return async function (dispatch) {
    try {
      let result = await axios.get(`http://localhost:3001/posts/${id}`);
      console.log("result.data", result.data);
      return dispatch({
        type: SEARCH_BY_ID,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearState = () => {
  return {
    type: CLEAR_STATE,
  };
};

export const postComment = (payload) => {
  return async function (dispatch) {
    try {
      let result = await axios.post(`http://localhost:3001/comments`, payload);

      return dispatch({
        type: POST_COMMENT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchByTag = (tag) => {
  return async function (dispatch) {
    try {
      let result = await axios.get(`http://localhost:3001/posts/ematch/${tag}`);
      return dispatch({
        type: SEARCH_TAG,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetLikes = () => {
  return async function (dispatch) {
    try {
      let result = await axios.get(`http://localhost:3001/likes`);
      return dispatch({
        type: ALL_LIKES,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetDislikes = () => {
  return async function (dispatch) {
    try {
      let result = await axios.get(`http://localhost:3001/dislikes`);
      return dispatch({
        type: ALL_DISLIKES,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const likeComment = (commentId, userId) => {
  return async function (dispatch) {
    try {
      console.log('entre al action')
      let result = await axios.put(
        'http://localhost:3001/likes/' + commentId,
        {
        userId,
        }
      );
      return dispatch({
        type: LIKE,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const dislikeComment = (commentId, userId) => {
  return async function (dispatch) {
    try {
      console.log('entre al dislike action')
      let result = await axios.put('http://localhost:3001/dislikes/' + commentId, {userId} );
      return dispatch({
        type: DISLIKE,
      })
    } catch (error) {
      console.log(error);
    }
  }
}
