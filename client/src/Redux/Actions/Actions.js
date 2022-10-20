import axios from 'axios';
import {GET_USERS, USER_LOGGED} from "../Actions/ActionTypes";



export const getUsers = (payload) => {
    return async function(dispatch) {
        console.log('entre')
        try {
            let result = await axios.get('http://localhost:3001/users');
            return dispatch({
                type: GET_USERS,
                payload: result.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const userLogged = (payload) => {
    return async function (dispatch) {
        return dispatch({
            type: USER_LOGGED,
            payload,
        })
    }
}

export const register = (payload) => {
    return async function() {
        console.log('entre')
        let data = axios.post('http://localhost:3001/users', payload);
        return {
            data
        };
    }
}

