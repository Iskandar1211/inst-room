const db = require('../db')

export class ContactModel {
    static async getContacts(): Promise<any[]> {
        const result = await db.query('SELECT * FROM contacts')
        return result.rows;
    }
}