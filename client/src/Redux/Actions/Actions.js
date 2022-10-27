import axios from "axios";
import {
  GET_USERS,
  USER_LOGGED,
  GET_POSTS,
  POST_POSTS,
  SEARCH_BY_ID,
  CLEAR_STATE,
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
    console.log('entre al back')
    try {
      let result = await axios.get(`http://localhost:3001/posts/${id}`);
      console.log('sali del back')
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
  }
}
