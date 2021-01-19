// Reducer for our posts

// Initial value for posts state is an empty array
// First parameter is the state, second is the action
export default (posts = [], action) => {
    // Logic based on action type
    // Returns state changed by action
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}