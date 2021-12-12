'use strict'

const db = require('../db');
const firebase = require('../db');
const Post = require('../models/post');
const firestore = firebase.firestore();


const addPost = async(req,res,next) => {
    try{
        const data = req.body;
        await firestore.collection('Posts').doc().set(data);
        res.status(200).send('post has been saved');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const getPost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const post = await firestore.collection('Posts').doc(id);
        const data = await post.get();
        if(!data.exists) {
            res.status(404).send('post with the given ID not found');
        }else {
            res.send(data.data());
        }   
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updatePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const post =  await firestore.collection('Posts').doc(id);
        await post.update(data);
        res.send('post record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deletePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Posts').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    addPost,
    getPost,
    updatePost,
    deletePost
}