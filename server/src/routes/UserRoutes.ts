import express, { Router } from 'express';
import userController from '../controller/UserController';

const userRoutes = Router();

userRoutes.get('/get-users', userController.getAllUsers());
userRoutes.post('/registration', userController.onCreateUser());
userRoutes.post('/login', userController.onLogin());
userRoutes.post('/login-confirm', userController.onLoginConfirm());
userRoutes.delete('/delete-user', userController.onLoginConfirm());
userRoutes.get('/history-of-orders', userController.onGetHistoryOfOrders());
userRoutes.post('/create-order', userController.onCreateOrder());
userRoutes.get('/get-orders', userController.onGetOrders());
userRoutes.get('/delivery-info', userController.onGetDeliveryInfo());
userRoutes.post('/create-delivery-info', userController.onCreateDeliveryInfo());
userRoutes.post('/create-payment', userController.onCreatePayment());
userRoutes.post('/create-product-from-cart', userController.onCreateProductFromCart());

export default userRoutes;
