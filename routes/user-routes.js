const express = require('express');
const {addUser, getUser, updateUser, deleteUser, getAuth} = require('../controllers/userController');

const router = express.Router();

router.post('/user',addUser);
router.get('/user',getAuth);
router.get('/user/:id',getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
module.exports = {
    routes: router
}