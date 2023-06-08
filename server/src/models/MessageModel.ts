import { Request } from "express";

const db = require('../db')

export class MessageModel {
    static async getMessageUser(req: Request): Promise<any[]> {
        const { id, contactid } = req.params;
        const result = await db.query('SELECT * FROM messages WHERE ("senderId" = $1 AND "receiverId" = $2) OR ("senderId" = $2 AND "receiverId" = $1)', [id, contactid]);
        return result.rows;
    }
    static async getMessageContact(req: Request): Promise<any[]> {
        const { id } = req.params;
        const result = await db.query('SELECT * FROM messages WHERE "receiverId" = $1', [id]);  
        return result.rows;
    }
    static async createMessage(req: Request): Promise<any> {
        const { text, date, senderId, receiverId, emoji } = req.body;
        const result = await db.query('INSERT INTO messages (text, date, "senderId", "receiverId", emoji) VALUES ($1, $2, $3, $4, $5) RETURNING *', [text, date, senderId, receiverId, emoji]);
        return result.rows
    }
    static async editMessage(req: Request) {
        const { id } = req.params;
        const { text } = req.body;
        const result = await db.query('UPDATE messages SET text = $1 WHERE id = $2 RETURNING *', [text, id]);
        return result.rows[0];
    }
    static async deleteMessage(req: Request) {
        const { id } = req.params;
        await db.query('DELETE FROM messages WHERE id = $1', [id]);
        return { message: 'Сообщение успешно удалено' };
    }

}