'use strict'

const { json } = require('body-parser');
const db = require('../db');
const firebase = require('../db');
const Trip = require('../models/trip');
const firestore = firebase.firestore();


const addTrip = async(req,res,next) => {
    try{
        const { user_id, isWaiting, adminMessage, tripName, category,price,location} = req.body
        const doc = firestore.collection("Trips").doc();
        let newTrip = new Trip(
            user_id,
            isWaiting,
            adminMessage,
            tripName,
            category,
            price,
            location,
            doc.id
        );
        newTrip = JSON.parse(JSON.stringify(newTrip));
        await doc.set(newTrip);
        res.status(200).send(newTrip);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const getTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        const trip = await firestore.collection('Trips').doc(id).get();
        if(!trip.exists) {
            res.status(404).send('Trip with the given ID not found');
        }else {
            res.send(trip.data());
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
        res.send((await trip.get()).data());        
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
const getTripsByOwner =  async(req, res, next) => {
    try{
        const user_id = req.params.user_id;
        const trips =  await firestore.collection('Trips').where('user_id','==',user_id).get();
        var array = [];
        trips.forEach((doc) => {
            array.push(doc.data());
        });
        res.status(200).send(array);
    }
    catch(error){
        res.status(400).send(error.message);
    }
}
const getIsWaiting =  async (req, res, next) => {
    try{
        const trips = await firestore.collection('Trips').where('isWaiting','==',true).get();
        var array = [];
        trips.forEach((doc) => {
            array.push(doc.data());
        });
        res.status(200).send(array);
    }
    catch(error){
        res.status(400).send(error.message);
    }
}
const getByCategory = async (req, res, next) => {
    try{
            const json = req.body;
            const categories = req.body.category;
            var trips;
            if('location' in json && 'price' in json){
                 trips = await firestore.collection("Trips").where("price","<=",req.body.price).where("location","==",req.body.location).where("category", "array-contains-any", categories).where("isWaiting","==",false).get();
            }
            else if('location' in json){
                 trips = await firestore.collection("Trips").where("location","==",req.body.location).where("category", "array-contains-any", categories).where("isWaiting","==",false).get();
            }
            else if('price' in json){
                 trips = await firestore.collection("Trips").where("price","<=",req.body.price).where("category", "array-contains-any", categories).where("isWaiting","==",false).get();
            }
            else{
                 trips = await firestore.collection("Trips").where("category", "array-contains-any", categories).where("isWaiting","==",false).get();
            }
        const tripsArray = [];
        trips.forEach((doc) => {
            tripsArray.push(doc.data());
        });
        res.status(200).send(tripsArray);
    }
      
    catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addTrip,
    getTrip,
    updateTrip,
    deleteTrip,
    getTripsByOwner,
    getIsWaiting,
    getByCategory
}