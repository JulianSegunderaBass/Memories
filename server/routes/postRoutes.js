// Routes for our post cards

import express from 'express';
// Importing logic
import { getPosts, createPost } from '../controllers/postHandlers.js';

const router = express.Router();

// Routes
// http://localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;