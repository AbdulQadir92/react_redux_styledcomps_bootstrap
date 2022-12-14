const initialState = {
    item: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                item: action.payload
            }

        case 'signup':
            return {
                ...state,
                item: action.payload
            }

        case 'logout':
            return {
                ...state,
                item: action.payload
            }

        default:
            return state
    }
}

export default authReducer