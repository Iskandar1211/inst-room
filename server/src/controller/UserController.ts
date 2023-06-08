import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export default class userController {
    static getAllUsers() {
        return async (req: Request, res:Response) => {
            try {
                const list = await UserModel.getUsers()
                return res.json(list)
            } catch (error) {
                return res.status(401).json(error)
            }
        }
    }

    static onCreateUser() {
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
        return async (req:any, res:any) => {
            try {
                if (!req.body.login || !req.body.password) 
                    throw new Error("No user Information")
                    const login = req.body.login?.trim()
                    const password = req.body.password?.trim()
                    if(!login || !password) throw new Error("need both parameters")
                    const result = await UserModel.login(login, password)
                    return res.json(result)
                }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }

}
