const express = require('express');
const {addLivePost, getLivePost, updateLivePost, deleteLivePost, getLivePostByOwner, getLivePostByTrip} = require('../controllers/livepostController');

const router = express.Router();


router.post('/livepost',addLivePost);
router.get('/livepost/:id',getLivePost);
router.get('/livepostsByUserID/:user_id',getLivePostByOwner);
router.get('/livepostsByTripID/:trip_id',getLivePostByTrip);
router.put('/livepost/:id', updateLivePost);
router.delete('/livepost/:id', deleteLivePost);
module.exports = {
    routes: router
}