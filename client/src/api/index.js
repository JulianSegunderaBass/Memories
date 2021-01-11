import axios from 'axios';

// URL pointing to backend route
// This URL returns all our existing posts
const url = 'http://localhost5000/posts';

// Getting our posts
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);