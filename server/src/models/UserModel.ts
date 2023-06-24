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
    static async сreateOrder(req: Request, res: Response): Promise<IOrder[]> {
        const { id, name, lastName, phone, email } = req.body;
        const query = 'INSERT INTO orders (id, name, "lastName", phone, email) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [id, name, lastName, phone, email];
        const result = await db.query(query, values);
        return result.rows;
    }
    static async getOrders(): Promise<IOrder[]> {
        const result = await db.query(`SELECT * FROM orders`)
        return result.rows;
    }
 
    static async createDeliveryInfo(req: Request, res: Response): Promise<IDelivery> {
        const { id, city, street, house, apartment, delivery, pickupAddress } = req.body;
        const query = 'INSERT INTO delivery_info (id, city, street, house, apartment, delivery, "pickupAddress" ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const values = [id, city, street, house, apartment, delivery, pickupAddress];
        const result = await db.query(query, values);
        return result.rows;
    }
    static async getDeliveryInfo(): Promise<IDelivery[]> {
        const result = await db.query('SELECT * FROM delivery_info');
        return result.rows;
    }

    static async createPayment(req: Request, res: Response): Promise<IPayment[]> {
        const { id, paymentUponReceipt, cash, bankСard, onlinePayment } = req.body;
        const query = 'INSERT INTO payments (id, "paymentUponReceipt", cash, "bankСard", "onlinePayment") VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [id, paymentUponReceipt, cash, bankСard, onlinePayment];
        const result = await db.query(query, values);
        return result.rows;
    }
    static async getPayments(): Promise<IPayment[]> {
        const result = await db.query('SELECT * FROM payments');
        return result.rows;
    }
    static async createProductFromCart(req: Request, res: Response): Promise<IProduct[]> {
        const products = req.body;
        const insertedProducts: IProduct[] = [];

        for (const product of products) {
            const { id, name, img, price, inStock, detailed, isNew, total, quantity, categories } = product;
            const result = await db.query('INSERT INTO products_from_сart (id, name, img, price, "inStock", detailed, "isNew", total, quantity, categories) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [id, name, img, price, inStock, detailed, isNew, total, quantity, categories]);
            insertedProducts.push(result.rows[0]);
        }
        return insertedProducts;
    }
    static async getProductsFromCard(): Promise<IProduct[]> {
        const result = await db.query('SELECT * FROM products_from_сart');
        return result.rows;
    }
}