import express from 'express'
import userController from '../controller/UserController';
const router = express.Router()

router.get('/', userController.getAllUsers());
router.post('/create-user', userController.onCreateUser());
router.post('/login', userController.onLogin());

export = router;