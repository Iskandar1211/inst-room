import express from 'express';
import userController from '../controller/UserController';

const userRouter = express.Router();

userRouter.get('/get-users', userController.getAllUsers);
userRouter.post('/registration', userController.onRegister);
userRouter.post('/login', userController.onLogin);
userRouter.get('/history-of-orders', userController.onGetHistoryOfOrders);
userRouter.post('/create-history-of-orders', userController.onCreateHistoryOfOrder);
userRouter.post('/create-order', userController.onCreateOrder);
userRouter.get('/delivery-info', userController.onGetDeliveryInfo);
userRouter.post('/create-delivery-info', userController.onCreateDeliveryInfo);
userRouter.post('/create-payment', userController.onCreatePayment);
userRouter.post('/create-product-from-cart', userController.onCreateProductFromCart);

export default userRouter;
