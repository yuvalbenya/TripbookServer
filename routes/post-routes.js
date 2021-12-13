const express = require('express');
const {addPost, getPost, updatePost, deletePost, getPostByOwner} = require('../controllers/postController');

const router = express.Router();

router.post('/post',addPost);
router.get('/post/:id',getPost);
router.get('/postByUserID/:user_id',getPostByOwner);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);
module.exports = {
    routes: router
}