'use strict'

const db = require('../db');
const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();


const addUser = async(req,res,next) => {
    try{
        const { first_name, last_name, email, password, passRecoverAnswer, admin } = req.body;
        const doc = firestore.collection("Users").doc();
        let newUser = new User(
            doc.id,
            first_name,
            last_name,
            email,
            password,
            passRecoverAnswer,
            admin
        );
        newUser = JSON.parse(JSON.stringify(newUser));
        await doc.set(newUser);
        res.status(200).send(newUser);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
//get id of a user with a given email and password
const getAuth = async (req, res, next) => {
    try{
        const email = req.params.email;
        const password = req.params.password;
        // const users = await firestore.collection('Users');
        const emails =  await firestore.collection('Users').where('email','==', email).get();
        var user = -1;
        emails.forEach((doc) => {
            if(doc.data().password === password){
                user = doc;
            }
        });

        if(user === -1){
            res.status(404).send({message: 'email or password is wrong'});
        }
        else{
            res.status(200).send(user.data());
        }
    }
    catch(error){
        res.status(400).send(error.message);
    }
}
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
        res.status(200).send(user.id);        
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
    deleteUser,
    getAuth
}