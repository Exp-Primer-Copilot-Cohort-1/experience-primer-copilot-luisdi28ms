// Create web server

const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment.controller');

// Handle requests for comments
router.get('/', CommentController.getComments);
router.get('/:id', CommentController.getCommentById);
router.post('/', CommentController.createComment);
router.put('/:id', CommentController.updateComment);
router.delete('/:id', CommentController.deleteComment);

module.exports = router;