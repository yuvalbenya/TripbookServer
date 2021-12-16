const express = require('express');
const {addTrip, getTrip, updateTrip, deleteTrip, getTripsByOwner, getIsWaiting, getByCategory} = require('../controllers/tripController');

const router = express.Router();

router.post('/trip',addTrip);
router.get('/tripID/:id',getTrip); //by id
router.get('/tripOwner/:user_id',getTripsByOwner);
router.get('/tripIsWaiting/',getIsWaiting);
router.post('/tripByCategory/',getByCategory);
router.put('/trip/:id', updateTrip);
router.delete('/trip/:id', deleteTrip);

module.exports = {
    routes: router
}