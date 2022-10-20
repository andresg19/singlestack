import {
    GET_USERS, USER_LOGGED
} from "../Actions/ActionTypes";

const initialState = {
    users : [],
    userLogged: [],
}


export default function rootReducer(state= initialState, {type, payload}) {
    switch(type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
            }
        case USER_LOGGED:
            localStorage.setItem('currentUser', JSON.stringify(payload));
            return {
                ...state,
                userLogged: payload,
            }
        default:
            return state
    }
}

