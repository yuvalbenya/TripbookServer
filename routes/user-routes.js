const express = require('express');
const {addUser, getUser, updateUser, deleteUser, getAuth, recoverPass} = require('../controllers/userController');

const router = express.Router();

router.get('/authUser/:email',getAuth);
router.post('/user',addUser);
router.get('/user/:id',getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user/recover/:email&:answer',recoverPass);
module.exports = {
    routes: router
}