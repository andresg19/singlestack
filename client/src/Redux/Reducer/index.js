import {
    GET_USERS
} from "../Actions/ActionTypes";

const initialState = {
    users : [],
}


export default function rootReducer(state= initialState, {type, payload}) {
    switch(type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
            }
        default:
            return state
    }
}

