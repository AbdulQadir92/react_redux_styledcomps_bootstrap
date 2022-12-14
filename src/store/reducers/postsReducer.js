const initialState = {
    items: [],
    item: {}
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch_posts':
            return {
                ...state,
                items: action.payload
            }

        default:
            return state
    }
}

export default postsReducer