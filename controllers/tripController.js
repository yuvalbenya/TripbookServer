'use strict'

const db = require('../db');
const firebase = require('../db');
const Trip = require('../models/trip');
const firestore = firebase.firestore();


const addTrip = async(req,res,next) => {
    try{
        const data = req.body;
        await firestore.collection('Trips').doc().set(data);
        res.status(200).send('trip has been saved');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const getTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        const trip = await firestore.collection('Trips').doc(id);
        const data = await trip.get();
        if(!data.exists) {
            res.status(404).send('Trip with the given ID not found');
        }else {
            res.send(data.data());
        }   
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const trip =  await firestore.collection('Trips').doc(id);
        await trip.update(data);
        res.send('Trip record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Trips').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    addTrip,
    getTrip,
    updateTrip,
    deleteTrip
}