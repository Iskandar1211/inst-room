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
}