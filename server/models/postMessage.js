// Model for the posts and Mongoose schema
// Model used for CRUD

import mongoose from 'mongoose';

// Creating a post schema
const PostSchema = mongoose.Schema({
    // Each post has to have the following...
    // Note: image will be converted to string
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Turning the schema into a model
const PostMessage = mongoose.model('PostMessage', PostSchema);

// Exporting a Mongoose model
export default PostMessage;