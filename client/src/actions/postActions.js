// Actions for posts

// Allows us to use "fetchPosts"
import * as api from '../api';

// action Creators
// Functions that return actions
// Extra arrow function for async data via redux thunk
export const getPosts = () => async (dispatch) => {
    try {
        // Posts Data is the response
        // Destructuring data from "response"
        const { data } = await api.fetchPosts();
        // Dispatching an action with our posts data as a payload
        // Note: We use dispatch instead of return because
        // dispatch is needed by Redux Thunk
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}