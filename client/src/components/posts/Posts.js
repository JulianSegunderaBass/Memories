import React from 'react';
import Post from './post/Post';
import useStyles from './PostsStyle';
import { useSelector } from 'react-redux';

const Posts = () => {
    const classes = useStyles();
    
    // Callback function has access to global redux state
    // Returning the "posts" data of the state
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts;