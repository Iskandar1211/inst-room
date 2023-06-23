import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export default class userController {
    static getAllUsers() {
        return async (req: Request, res: Response) => {
            try {
                const list = await UserModel.getUsers()
                return res.json(list)
            } catch (error) {
                return res.status(401).json(error)
            }
        }
    }

    static onRegister() {
        return async (req: any, res: any) => {
            try {
                if (!req.body) {
                    throw new Error("No user Information")
                } else {
                    const result = await UserModel.createUser(req.body)
                    return res.json(result)
                }
            } catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }

    static onLogin() {
        return async (req: any, res: any) => {
            try {
                if (!req.body.login || !req.body.password)
                    throw new Error("No user Information")
                const login = req.body.login?.trim()
                const password = req.body.password?.trim()
                if (!login || !password) throw new Error("need both parameters")
                const result = await UserModel.login(login, password)
                return res.json(result)
            }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onCreateOrder() {
        return async (req: any, res: any) => {
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
    static onCreateHistoryOfOrder() {
        return async (req: any, res: any) => {
            return async (req: Request, res: Response) => {
                try {
                    const result = await UserModel.createHistoryOfOrder(req, res)
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
                    const result = await UserModel.getHistoryOfOrder()
                    return res.json(result)
                } catch (error) {
                    return res.status(401).json(error)
                }
            }
        }
    }


}
