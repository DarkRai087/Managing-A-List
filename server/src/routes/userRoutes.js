import express from 'express';
import * as userController from '../controllers/userController.js';
import { logger } from '../middleware/logger.js';

const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/user', logger, userController.createUser);
router.put('/user/:id', logger, userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;