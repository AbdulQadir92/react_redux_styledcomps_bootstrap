import fetchRequest from "../../requests/fetchRequest"

export const fetchPosts = () => {
    return (dispatch) => {
        fetchRequest('https://jsonplaceholder.typicode.com/posts', dispatch, 'fetch_posts');
    }
}