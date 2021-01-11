// Handlers/logic for our routes

// Importing the post model
import PostMessage from '../models/postMessage.js';

export const getPosts = async (request, response) => {
    // Try => success, catch => error
    try {
        // find takes time, so it is asynchronous
        const PostMessages = await PostMessage.find();
        console.log(PostMessages);
        // Returning an OK status with a JSON of all messages
        response.status(200).json(PostMessages);
    } catch (error) {
        response.status(404).json({message: error.message});
    }
}

export const createPost = async (request, response) => {
    // For post requests
    const post = request.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        response.status(201).json(newPost);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}