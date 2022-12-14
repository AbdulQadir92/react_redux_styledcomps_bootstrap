import postRequest from "../../requests/postRequest"

export const login = (loginData) => {
    return (dispatch) => {
        postRequest(`https://jsonplaceholder.typicode.com/users`, dispatch, loginData);
    }
}

export const signup = (signupData) => {
    return (dispatch) => {
        postRequest(`https://jsonplaceholder.typicode.com/users`, dispatch, signupData);
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: 'logout',
            payload: {}
        })
    }
}