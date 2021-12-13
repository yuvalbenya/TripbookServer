const express = require('express');
const {addPost, getPost, updatePost, deletePost, getPostByOwner, getPostByTrip} = require('../controllers/postController');

const router = express.Router();


router.post('/post',addPost);
router.get('/post/:id',getPost);
router.get('/postByUserID/:user_id',getPostByOwner);
router.get('/postByTripID/:trip_id',getPostByTrip);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);
module.exports = {
    routes: router
}