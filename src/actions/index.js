import axios from 'axios'

export const SHOW_USERS = 'SHOW_USERS'

export function showUsers() {
    
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((response) => {
                dispatch( { type: SHOW_USERS, payload: response.data } ) 
            }) 
    }
    
} 

