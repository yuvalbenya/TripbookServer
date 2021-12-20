'use strict'

const db = require('../db');
const firebase = require('../db');
const Post = require('../models/post');
const firestore = firebase.firestore();


const addPost = async (req, res, next) => {
    try{
        const { trip_id, user_id, title, description } = req.body;
        const doc = firestore.collection("Posts").doc();
        let newPost = new Post(
            trip_id,
            user_id,
            doc.id,
            title,
            description,
        );
        newPost = JSON.parse(JSON.stringify(newPost));
        await doc.set(newPost);
        res.status(200).send(newPost);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
const getPost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const post = firestore.collection('Posts').doc(id);
        const data = await post.get();
        if (!data.exists) {
            res.status(404).send('post with the given ID not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getPostByOwner = async (req, res, next) => {
    try {
        const user_id = req.params.user_id;
        // console.log(user_id)
        const posts = await firestore.collection('Posts').where('user_id', '==', user_id).get();
        var array = [];
        posts.forEach((doc) => {
            array.push(doc.data());
        });
        res.status(200).send(array);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getPostByTrip = async (req, res, next) => {
    try {
        const trip_id = req.params.trip_id;
        // console.log(user_id)
        const posts = await firestore.collection('Posts').where('trip_id', '==', trip_id).get();
        var array = [];
        posts.forEach((doc) => {
            array.push(doc.data());
        });
        res.status(200).send(array);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updatePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const post = firestore.collection('Posts').doc(id);
        await post.update(data);
        res.send(post.id);
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
    getPostByOwner,
    updatePost,
    deletePost,
    getPostByTrip
}