const express = require('express');
const {addUser, getUser, updateUser, deleteUser, getAuth, recoverPass} = require('../controllers/userController');

const router = express.Router();

router.put('/authUser/',getAuth);
router.post('/user',addUser);
router.get('/user/:id',getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.put('/user/recoverUser',recoverPass);
module.exports = {
    routes: router
}