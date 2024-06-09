import express from 'express';
import { 
    updateUser, 
    deleteUser, 
    getSingleUser, 
    getAllUser,
    uploadFile
    } from '../controllers/userController.js';

const router = express.Router();

import {verifyUser,verifyAdmin} from '../utils/verifyToken.js'

//update user
router.put('/:id', verifyUser, updateUser)

//delete user
router.delete('/:id', verifyUser, deleteUser)

//get single user
router.get('/:id', verifyUser, getSingleUser)

//get all user
router.get('/', verifyAdmin, getAllUser)

// upload profile picture
router.put('/uploadProfilePhoto/:_id', uploadFile);

export default router; 