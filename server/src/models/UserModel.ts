import { IHistoryOfOrderForServer } from './../../../client/src/types/Model';
import { Request, Response } from "express";
import { IDelivery, IHistoryOfOrder, IOrder, IPayment, IProduct, IRegistration } from "../../../client/src/types/Model";
const db = require('../db')

export class UserModel {
    static async getUsers(): Promise<IProduct[]> {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    }
    static async createUser(req: Request): Promise<IRegistration[]> {
        const { id, lastName, name, phone, email, password, confirmPassword, role, code } = req.body;
        const user = await db.query('INSERT INTO users (id, "lastName", name, phone, email, password, "confirmPassword", role, code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [id, lastName, name, phone, email, password, confirmPassword, role, code]);
        return user.rows;
    }
    static async login(req: any): Promise<any> {
        const { newPhone } = req.body;
        const result = await db.query('SELECT * FROM users WHERE phone = $1', [newPhone]);
        return result.rows;
    }
    static async loginConfirm(req: any): Promise<any> {
        const { testingCode } = req.body;
        const result = await db.query('SELECT * FROM users WHERE code = $1', [testingCode]);
        return result.rows;
    }
    static async deleteUser(req: any): Promise<any> {
        const { id } = req.body;
        const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
        return result.rows;
    }

    static async createOrder(req: Request): Promise<IHistoryOfOrder[]> {
        const { id, orderNumber, created, received, purchases, orders, deliveryInfo, payments } = req.body;
        const purchasesJson = JSON.stringify(purchases);
        const ordersJson = JSON.stringify(orders);
        const deliveryInfoJson = JSON.stringify(deliveryInfo);
        const paymentsJson = JSON.stringify(payments);

        const result = await db.query('INSERT INTO history_of_order (id, "orderNumber", created, received, purchases, orders, "deliveryInfo", payments) VALUES ($1, $2, $3, $4, $5::jsonb, $6::jsonb, $7::jsonb, $8::jsonb)', [id, orderNumber, created, received, purchasesJson, ordersJson, deliveryInfoJson, paymentsJson]);
        return result.rows;
    }
    static async getHistoryOrders(): Promise<IHistoryOfOrder[]> {
        const result = await db.query('SELECT * FROM history_of_order');
        return result.rows;
    }
}