'use strict'

const db = require('../db');
const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();


const addUser = async(req,res,next) => {
    try{
        const data = req.body;
        await firestore.collection('Users').doc().set(data);
        res.status(200).send('user has been saved');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
// 
const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('Users').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('User with the given ID not found');
        }else {
            res.send(data.data());
        }   
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('Users').doc(id);
        await user.update(data);
        res.send('User record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
//
const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Users').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}