import express, { Router } from 'express';
import userController from '../controller/UserController';

const userRoutes = Router();

userRoutes.get('/get-users', userController.getAllUsers());
userRoutes.post('/registration', userController.onCreateUser());
userRoutes.post('/login', userController.onLogin());
userRoutes.post('/login-confirm', userController.onLoginConfirm());
userRoutes.delete('/delete-user', userController.onDeleteUser());
userRoutes.get('/history-of-orders', userController.onGetHistoryOfOrders());
userRoutes.post('/create-history-order', userController.onCreateOrder())

export default userRoutes;
