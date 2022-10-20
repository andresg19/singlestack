import axios from 'axios';
import {} from "../Actions/ActionTypes";



export const register = (payload) => {
    return async function() {
        console.log('entre')
        let data = axios.post('http://localhost:3001/users', payload);
        return {
            data
        };
    }
}

