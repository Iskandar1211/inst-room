import { Request, Response } from "express";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import { IDelivery, IPayment, IProduct } from "../../../client/src/types/Model";
import { UserModel } from "../models/UserModel";

export default class userController {
    static getAllUsers() {
        return async (req: Request, res: Response) => {
            try {
                const users = await UserModel.getUsers()
                return res.json(users)
            } catch (error) {
                return res.status(401).json(error)
            }
        }
    }
    static onCreateUser() {
        return async (req: Request, res: Response) => {
            try {
                if (!req.body) {
                    throw new Error("No user Information")
                } else {
                    const result = await UserModel.createUser(req)
                    return res.json(result)
                }
            } catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onLogin() {
        return async (req: Request, res: Response) => {
            try {
                if (!req.body)
                    throw new Error("No user Information")
                const result = await UserModel.login(req)
                return res.json(result)
            }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onLoginConfirm() {
        return async (req: any, res: any) => {
            try {
                if (!req.body)
                    throw new Error("No user Information")
                const result = await UserModel.loginConfirm(req)
                return res.json(result)
            }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onDeleteUser() {
        return async (req: any, res: any) => {
            try {
                if (!req.body)
                    throw new Error("No user Information")
                const result = await UserModel.login(req)
                return res.json(result)
            }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onCreateOrder() {
        return async (req: Request, res: Response) => {
            try {
                if (!req.body) {
                    throw new Error("No message Information")
                } else {
                    const result = await UserModel.сreateOrder(req, res);
                    return res.send(result);
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onGetOrders() {
        return async (req: any, res: any) => {
            return async (req: Request, res: Response) => {
                try {
                    const result = await UserModel.getOrders()
                    return res.json(result)
                } catch (error) {
                    return res.status(401).json(error)
                }
            }
        }
    }
    static onCreateDeliveryInfo() {
        return async (req: any, res: any) => {
            try {
                if (!req.body) {
                    throw new Error("No message Information")
                } else {
                    const result = await UserModel.createDeliveryInfo(req, res);
                    return res.send(result);
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onGetDeliveryInfo() {
        return async (req: any, res: any) => {
            return async (req: Request, res: Response) => {
                try {
                    const result = await UserModel.getDeliveryInfo()
                    return res.json(result)
                } catch (error) {
                    return res.status(401).json(error)
                }
            }
        }
    }
    static onCreatePayment() {
        return async (req: any, res: any) => {
            try {
                if (!req.body) {
                    throw new Error("No message Information")
                } else {
                    const result = await UserModel.createPayment(req, res);
                    return res.send(result);
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onGetPayments() {
        return async (req: any, res: any) => {
            return async (req: Request, res: Response) => {
                try {
                    const result = await UserModel.getPayments()
                    return res.json(result)
                } catch (error) {
                    return res.status(401).json(error)
                }
            }
        }
    }
    static onCreateProductFromCart() {
        return async (req: any, res: any) => {
            try {
                if (!req.body) {
                    throw new Error("No message Information")
                } else {
                    const result = await UserModel.createProductFromCart(req, res);
                    return res.send(result);
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onGetProductFromCart() {
        return async (req: any, res: any) => {
            return async (req: Request, res: Response) => {
                try {
                    const result = await UserModel.getProductsFromCard()
                    return res.json(result)
                } catch (error) {
                    return res.status(401).json(error)
                }
            }
        }
    }
    static onGetHistoryOfOrders() {
        return async (req: any, res: any) => {
            return async (req: Request, res: Response) => {
                try {
                    const orders = await UserModel.getOrders()
                    const productsFromCart: IProduct[] = await UserModel.getProductsFromCard()
                    const deliveryInfo: IDelivery[] = await UserModel.getDeliveryInfo()
                    const payments: IPayment[] = await UserModel.getPayments()

                    const historyOfOrders = [];
                    const history = {
                        id: uuidv4(),
                        orderNumber: historyOfOrders.length + 1,
                        created: moment().subtract(10, "days").calendar(),
                        received: moment().subtract(10, "days").calendar(),
                        purchases: [...productsFromCart],
                        orders: [...orders],
                        deliveryInfo: [...deliveryInfo],
                        payments: [...payments]
                    }
                    historyOfOrders.push(history)

                    return res.json(historyOfOrders)
                } catch (error) {
                    return res.status(401).json(error)
                }
            }
        }
    }
}
