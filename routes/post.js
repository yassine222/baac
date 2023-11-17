// post.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController'); 

// Create a new post
router.post('/', postController.createPost);

// Update a post by ID
router.put('/:postId', postController.updatePost);

// Delete a post by ID
router.delete('/:postId', postController.deletePost);

// Get all posts
router.get('/', postController.getAllPosts);

// Get a post by ID
router.get('/:postId', postController.getPostById);

module.exports = router;
