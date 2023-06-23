const db = require('../db')

export class UserModel {
    static async getUsers(): Promise<any[]> {
        const result = await db.query(`SELECT * FROM users`)
        return result.rows;
    }
    static async createUser(req: any): Promise<any> {
        const { login, password, firstName, lastName, countMessage, status, phone, email, img, messege } = req.body;
        const user = await db.query(
            'INSERT INTO users (login, password, "firstName", "lastName", "countMessage", status, phone, email, img, messege) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [login, password, firstName, lastName, countMessage, status, phone, email, img, messege]);
        return user
    }
    static async login(login: string, password: string): Promise<any> {
        const result = await db.query('SELECT * FROM users WHERE login = $1 AND password = $2', [login, password]);
        return result
    }
    static async сreateOrder(req: any, res: any): Promise<any> {
        const { id, name, lastName, phone, email } = req.body;
        const query = 'INSERT INTO "order" (id, name, "lastName", phone, email) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [id, name, lastName, phone, email];
        const result = await pool.query(query, values);
        return result
    }
    static async getOrders(): Promise<any[]> {
        const result = await db.query(`SELECT * FROM orders`)
        return result.rows;
    }
    static async createDeliveryInfo(req: any, res: any): Promise<any> {
        const { id, address, city, postalCode } = req.body;
        const query = 'INSERT INTO delivery_info (id, address, city, "postalCode") VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [id, address, city, postalCode];
        const result = await pool.query(query, values);
        return result
    }
    static async getDeliveryInfo(): Promise<any> {
        const result = await pool.query('SELECT * FROM delivery_info');
        return result
    }

    static async createPayment(req: any, res: any): Promise<any> {
        const { id, amount, method } = req.body;
        const query = 'INSERT INTO payment (id, amount, method) VALUES ($1, $2, $3) RETURNING *';
        const values = [id, amount, method];
        const result = await pool.query(query, values);
        return result
    }
    static async getPayments(): Promise<any> {
        const result = await pool.query('SELECT * FROM payments');
        return result
    }
    static async createProductFromCart(req: any, res: any): Promise<any> {
        const { id, name, price } = req.body;
        const query = 'INSERT INTO product_from_cart (id, name, price) VALUES ($1, $2, $3) RETURNING *';
        const values = [id, name, price];
        const result = await pool.query(query, values);
        return result
    }
    static async getProductsFromCard(): Promise<any> {
        const result = await pool.query('SELECT * FROM products_from_сart');
        return result
    }
    static async createHistoryOfOrder(req: any, res: any): Promise<any> {
        const { id, orderNumber, created, received } = req.body;
        const query = 'INSERT INTO history-of-order (id, "orderNumber", created, received) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [id, orderNumber, created, received];
        const result = await pool.query(query, values);
        return result
    }
    static async getHistoryOfOrder(): Promise<any> {
        const result = await pool.query('SELECT * FROM history-of-order');
        return result
    }
}