import express from 'express'
import userController from '../controller/UserController';
const router = express.Router()

router.get('/', userController.getAllUsers());
router.post('/registration', userController.onRegister());
router.post('/login', userController.onLogin());

export = router;