const express = require('express');
const {addPost, getPost, updatePost, deletePost, getPostByOwner, getPostByTrip} = require('../controllers/postController');

const router = express.Router();


router.post('/livepost',addPost);
router.get('/livepost/:id',getPost);
router.get('/livepostsByUserID/:user_id',getPostByOwner);
router.get('/livepostsByTripID/:trip_id',getPostByTrip);
router.put('/livepost/:id', updatePost);
router.delete('/livepost/:id', deletePost);
module.exports = {
    routes: router
}